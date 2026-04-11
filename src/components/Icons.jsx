import React from "react";

export function IconArrowUpRight({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M8 7H17V16" />
    </svg>
  );
}

export function IconMail({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="6" width="16" height="12" rx="1.5" />
      <path d="M4 8L12 13L20 8" />
    </svg>
  );
}

/** Telegram: вектор (без PNG — не тянет с собой сжатые каймы/полумесяцы по краю). */
export function IconTelegram({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#fff" />
      <g transform="translate(0 -1.15)">
        <path
          fill="currentColor"
          d="M17.472 14.382l-2.127 6.702c-.161.518-.635.642-1.028.267l-2.84-2.6-1.37 1.318c-.152.152-.28.28-.574.28l.204-2.9 5.38-4.86c.234-.208-.051-.324-.36-.116l-6.66 4.2-2.87-.896c-.622-.194-.635-.622.13-.92l11.22-4.325c.518-.194.972.116.8.85z"
        />
      </g>
    </svg>
  );
}

export function IconGithub({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function IconMonitor({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="11" rx="1.5" />
      <path d="M8 20H16" />
      <path d="M12 16V20" />
    </svg>
  );
}

export function IconSparkles({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3L13.7 7.3L18 9L13.7 10.7L12 15L10.3 10.7L6 9L10.3 7.3L12 3Z" />
      <path d="M5 16L5.8 18.2L8 19L5.8 19.8L5 22L4.2 19.8L2 19L4.2 18.2L5 16Z" />
    </svg>
  );
}

export function IconCode({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 8L4 12L8 16" />
      <path d="M16 8L20 12L16 16" />
      <path d="M14 4L10 20" />
    </svg>
  );
}

export function IconLayers({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3L21 8L12 13L3 8L12 3Z" />
      <path d="M3 12L12 17L21 12" />
      <path d="M3 16L12 21L21 16" />
    </svg>
  );
}

export function IconBlocks({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="4" width="6" height="6" />
      <rect x="14" y="4" width="6" height="6" />
      <rect x="4" y="14" width="6" height="6" />
      <rect x="14" y="14" width="6" height="6" />
    </svg>
  );
}

export function IconGlobe({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12H21" />
      <path d="M12 3C14.5 5.5 16 8.6 16 12C16 15.4 14.5 18.5 12 21" />
      <path d="M12 3C9.5 5.5 8 8.6 8 12C8 15.4 9.5 18.5 12 21" />
    </svg>
  );
}

export function IconMessage({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 11.5C21 16.2 16.7 20 11.5 20C10 20 8.6 19.7 7.3 19.1L3 20L4 16C3.4 14.7 3 13.2 3 11.5C3 6.8 7.3 3 12.5 3C17.7 3 21 6.8 21 11.5Z" />
    </svg>
  );
}

export function IconBriefcase({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="8" width="18" height="11" rx="1.5" />
      <path d="M9 8V6C9 4.9 9.9 4 11 4H13C14.1 4 15 4.9 15 6V8" />
      <path d="M3 12H21" />
    </svg>
  );
}
