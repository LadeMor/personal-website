"use client";

import { useEffect } from "react";

export function FlamioSDK() {
  useEffect(() => {
    const projectKey = process.env.NEXT_PUBLIC_FLAMIO_SDK_KEY;

    if (!projectKey) {
      console.warn("NEXT_PUBLIC_FLAMIO_SDK_KEY is not configured");
      return;
    }

    let cancelled = false;
    let stopSDK: (() => void) | undefined;

    void import("@flamioai/web-sdk").then(({ Flamio }) => {
      if (cancelled) {
        return;
      }

      Flamio.init({
        projectKey,
        endpoint: "https://api.flamio.org/api",
        consent: "granted",
        debug: process.env.NODE_ENV === "development",
      });

      stopSDK = () => Flamio.stop();
    });

    return () => {
      cancelled = true;
      stopSDK?.();
    };
  }, []);

  return null;
}