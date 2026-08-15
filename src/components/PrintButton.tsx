"use client";

import { Download } from "./icons";

export function PrintButton({ label = "Print / Save as PDF" }: { label?: string }) {
  return (
    <button className="btn-primary" onClick={() => window.print()}>
      <Download size={16} /> {label}
    </button>
  );
}
