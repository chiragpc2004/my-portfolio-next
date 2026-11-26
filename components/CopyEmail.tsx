"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };
  return (
    <button type="button" className="btn ghost" onClick={copy} aria-live="polite">
      {copied ? "Copied to clipboard" : `${email} · Copy`}
    </button>
  );
}
