import React from "react";
import { IconSparkles } from "./Icons.jsx";

export default function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl space-y-4">
      <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs uppercase tracking-[0.24em] text-black/60 backdrop-blur">
        <IconSparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">{title}</h2>
      <p className="max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">{text}</p>
    </div>
  );
}
