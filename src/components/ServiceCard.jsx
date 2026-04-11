import React from "react";

export default function ServiceCard({ title, text, icon }) {
  return (
    <div className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-[0_20px_70px_-48px_rgba(0,0,0,0.22)]">
      <div className="mb-5 inline-flex rounded-2xl bg-neutral-950 p-3 text-white">{icon}</div>
      <h3 className="text-xl font-semibold text-neutral-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-neutral-600 sm:text-base">{text}</p>
    </div>
  );
}
