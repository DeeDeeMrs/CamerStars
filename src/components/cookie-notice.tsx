"use client";

import { useSyncExternalStore } from "react";

const consentKey = "camerstars-cookie-choice";
const consentChangeEvent = "camerstars-cookie-choice-changed";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(consentChangeEvent, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(consentChangeEvent, callback);
  };
}

function getSnapshot() {
  return window.localStorage.getItem(consentKey) === null;
}

export function CookieNotice() {
  const visible = useSyncExternalStore(subscribe, getSnapshot, () => false);

  function choose(value: "accepted" | "rejected") {
    window.localStorage.setItem(consentKey, value);
    window.dispatchEvent(new Event(consentChangeEvent));
  }

  if (!visible) return null;

  return (
    <aside aria-label="Cookie preferences" className="cookie-notice">
      <div>
        <p className="cookie-title">Your privacy matters</p>
        <p className="cookie-copy">
          This site uses essential storage for basic functionality. Optional analytics are not
          enabled in this version.
        </p>
      </div>
      <div className="cookie-actions">
        <button className="button button-outline button-small" onClick={() => choose("rejected")} type="button">
          Reject optional
        </button>
        <button className="button button-primary button-small" onClick={() => choose("accepted")} type="button">
          Accept
        </button>
      </div>
    </aside>
  );
}
