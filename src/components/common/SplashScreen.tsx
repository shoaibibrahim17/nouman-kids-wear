"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const SESSION_KEY = "nouman_splash_seen";
const MAX_DURATION_MS = 2200; // branding, not a loader — never block longer.

export function SplashScreen() {
  const [show, setShow] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Only ever runs in the browser.
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      // sessionStorage may be unavailable (private mode) — fail open (no splash).
      alreadySeen = true;
    }

    if (reduceMotion || alreadySeen) {
      return;
    }

    // Intentional: splash visibility depends on browser-only sessionStorage /
    // matchMedia, which can only be read after mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShow(true);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }

    // Safety cap so a stalled/long video never holds the page.
    timerRef.current = setTimeout(() => setShow(false), MAX_DURATION_MS);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // Lock scroll while the splash is on screen.
  useEffect(() => {
    if (!show) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [show]);

  const dismiss = () => setShow(false);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#fbf6ef]"
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-[min(72vw,320px)] overflow-hidden rounded-2xl"
            style={{ aspectRatio: "4 / 5" }}
          >
            <video
              className="h-full w-full object-cover"
              src="/brand/nouman-logo-splash.mp4"
              autoPlay
              muted
              playsInline
              // Branding clip is not a control surface.
              controls={false}
              onEnded={dismiss}
              onError={dismiss}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
