"use client";

import { useEffect, useState } from "react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-[#2D1B0F] p-4 shadow-2xl sm:p-5 md:p-6">
      <div className="mx-auto w-full max-w-lg px-1 sm:px-0">
        {!showPreferences ? (
          <>
            <h2 className="font-(family-name:--font-poppins) text-lg font-semibold text-white">
              Cookie Consent
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-300">
              We use cookies to enhance your experience, analyze traffic, and
              personalize advertising.
            </p>
            <p className="mt-1 text-sm text-gray-400">
              By clicking &ldquo;Accept All,&rdquo; you consent to our use of
              cookies. You can manage your preferences at any time.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="rounded-full bg-white py-3 text-sm font-semibold text-[#2D1B0F]"
              >
                Preferences
              </button>
              <button
                type="button"
                onClick={reject}
                className="rounded-full bg-[#ECE9D8] py-3 text-sm font-semibold text-[#2D1B0F]"
              >
                Reject
              </button>
              <button
                type="button"
                onClick={accept}
                className="rounded-full bg-[#ECE9D8] py-3 text-sm font-semibold text-[#2D1B0F]"
              >
                Accept All
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="font-(family-name:--font-poppins) text-lg font-semibold text-white">
              Cookie Preferences
            </h2>
            <p className="mt-2 text-sm font-(family-name:--font-roboto) text-gray-300">
              Manage your cookie preferences below:
            </p>
            <div className="mt-4 space-y-3 text-sm text-gray-300">
              <div>
                <p className="font-semibold text-white">Essential</p>
                <p className="text-xs text-gray-400">
                  Essential cookies enable basic functions and are necessary for
                  the proper function of the website.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">Statistics</p>
                <p className="text-xs text-gray-400">
                  Statistics cookies collect information anonymously.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={accept}
              className="mt-4 w-full rounded-full bg-[#ECE9D8] py-3 text-sm font-semibold text-[#2D1B0F]"
            >
              Save Preferences
            </button>
          </>
        )}
      </div>
    </div>
  );
}
