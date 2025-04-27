"use client";

import { useEffect } from "react";

export default function GoogleAd() {
  useEffect(() => {
    try {
      //@ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdsbyGoogle error", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-5564117908306170"
      data-ad-slot="5986114373"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
