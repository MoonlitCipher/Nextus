import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_104036_bd6924f6-3c8e-417e-8465-6d03c8c2e9e6.mp4";
const POSTER_SRC =
  "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/82e7eb75-c65f-490a-99b5-f3d1cad54200.webp";

// Primary nav — all real routes of the app
const NAV = [
  { label: "Book", to: "/customer/book" },
  { label: "Fares", to: "/customer/fare" },
  { label: "Track", to: "/customer/track" },
  { label: "Orders", to: "/customer/orders" },
  { label: "Profile", to: "/customer/profile" },
];

function Arrow() {
  return (
    <svg className="lp-arw" viewBox="0 0 12 10" fill="none" aria-hidden="true">
      <path
        d="M0.8 5h10M7.1 1.4 10.9 5l-3.8 3.6"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Landing() {
  const rootRef = useRef(null);
  const burgerRef = useRef(null);
  const menuRef = useRef(null);
  const videoA = useRef(null);
  const videoB = useRef(null);
  const [open, setOpen] = useState(false);

  /* The hero is a locked full-viewport scene; lock scroll only while mounted */
  useLayoutEffect(() => {
    const html = document.documentElement;
    html.classList.add("lp-lock");
    return () => html.classList.remove("lp-lock");
  }, []);

  /* A) ENTRANCE — arms before first paint, runs once, then detaches */
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let started = false;
    let cancelled = false;
    let bootT;
    let safeT;

    root.classList.add("lp-anim");

    const clean = () => {
      clearTimeout(safeT);
      root.removeEventListener("animationend", onEnd, true);
      root.classList.remove("lp-anim", "lp-go");
    };
    const onEnd = (e) => {
      // the secondary CTA is last on the timeline
      if (e.animationName === "lpPillIn" && e.target.classList.contains("lp-ghost")) clean();
    };
    const start = () => {
      if (started || cancelled) return;
      started = true;
      clearTimeout(bootT);
      root.addEventListener("animationend", onEnd, true);
      safeT = setTimeout(clean, 2600);
      root.classList.add("lp-go");
    };

    bootT = setTimeout(start, 900); // ceiling
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(start, start);
    else start();

    return () => {
      cancelled = true;
      clearTimeout(bootT);
      clean();
    };
  }, []);

  /* B) BURGER / MENU dismissal */
  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (menuRef.current?.contains(e.target) || burgerRef.current?.contains(e.target)) return;
      setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        burgerRef.current?.focus();
      }
    };
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  /* C) BACKGROUND VIDEO — cross-fade two copies at the loop point */
  useEffect(() => {
    const A = videoA.current;
    const B = videoB.current;
    if (!A || !B) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      A.removeAttribute("autoplay");
      A.pause();
      B.pause();
      try {
        A.currentTime = 0;
      } catch {
        /* hold whichever frame is showing */
      }
      return;
    }

    const FADE = 0.9;
    let cur = A;
    let nxt = B;
    let swapping = false;
    let timer;

    const play = (v) => {
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    };
    play(A);

    const tick = () => {
      if (swapping || !cur.duration) return;
      if (cur.duration - cur.currentTime > FADE) return;
      swapping = true;
      const out = cur;
      nxt.currentTime = 0;
      play(nxt);
      nxt.classList.add("is-active");
      out.classList.remove("is-active");
      cur = nxt;
      nxt = out;
      timer = setTimeout(() => {
        out.pause();
        out.currentTime = 0;
        swapping = false;
      }, FADE * 1000 + 100);
    };

    A.addEventListener("timeupdate", tick);
    B.addEventListener("timeupdate", tick);
    return () => {
      clearTimeout(timer);
      A.removeEventListener("timeupdate", tick);
      B.removeEventListener("timeupdate", tick);
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <main className="lp" ref={rootRef}>
      <div
        className="lp-bg"
        role="img"
        aria-label="Stylised globe of Earth rendered as a yellow and red dot matrix against a starfield, slowly rotating"
      >
        <video
          ref={videoA}
          className="lp-video is-active"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          aria-hidden="true"
          poster={POSTER_SRC}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
        <video
          ref={videoB}
          className="lp-video"
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          aria-hidden="true"
          poster={POSTER_SRC}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      </div>

      <header className="lp-nav">
        <Link className="lp-logo" to="/">
          Nextus
        </Link>

        <nav className="lp-links" aria-label="Primary">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="lp-actions">
          <Link className="lp-btn lp-login" to="/customer/login">
            Login
          </Link>
          <Link className="lp-btn lp-navstart" to="/customer/register">
            Get Started
            <Arrow />
          </Link>
        </div>

        <button
          ref={burgerRef}
          className="lp-burger"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="lp-menu"
          onClick={(e) => {
            e.stopPropagation();
            setOpen((o) => !o);
          }}
        >
          <span />
        </button>
      </header>

      <nav className={"lp-menu" + (open ? " open" : "")} id="lp-menu" aria-label="Mobile" ref={menuRef}>
        {NAV.map((n) => (
          <Link key={n.to} to={n.to} onClick={close}>
            {n.label}
          </Link>
        ))}
        <div className="lp-divider" />
        <Link to="/customer/login" onClick={close}>
          Login
        </Link>
        <Link className="lp-mstart" to="/customer/register" onClick={close}>
          Get Started
          <Arrow />
        </Link>
      </nav>

      <div className="lp-inner">
        <h1 className="lp-h1">
          <span className="lp-ln">
            <span className="lp-lni">Send parcels</span>
          </span>
          <span className="lp-ln">
            <span className="lp-lni">anywhere</span>
          </span>
        </h1>
        <p className="lp-sub">
          Book a pickup, get an instant fare estimate and pay securely,
          <br />
          track every parcel live from doorstep to destination,
          <br />
          and manage all your orders in one place.
        </p>
        <div className="lp-ctas">
          <Link className="lp-btn lp-btn-lg lp-primary" to="/customer/register">
            Get Started
            <Arrow />
          </Link>
          <Link className="lp-btn lp-btn-lg lp-ghost" to="/customer/track">
            Track Parcel
            <Arrow />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Landing;
