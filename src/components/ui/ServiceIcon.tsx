import type { ServiceId } from "@/content/services";

export function ServiceIcon({ service }: { service: ServiceId }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {service === "web" && (
        <>
          <rect x="3" y="4" width="22" height="19" rx="3" />
          <path d="M3 10h22M7 7h.01M10 7h.01m1 7-3 3 3 3m6-6 3 3-3 3" />
        </>
      )}
      {service === "mobile" && (
        <>
          <rect x="7" y="2" width="14" height="24" rx="4" />
          <path d="M12 6h4m-3 16h2M11 12h6m-6 4h4" />
        </>
      )}
      {service === "saas" && (
        <>
          <path d="m14 3 11 6-11 6L3 9l11-6Zm-11 11 11 6 11-6M3 19l11 6 11-6" />
        </>
      )}
      {service === "automation" && (
        <>
          <path d="m14 3 2.8 8.2L25 14l-8.2 2.8L14 25l-2.8-8.2L3 14l8.2-2.8L14 3Z" />
          <path d="M23 3v4m-2-2h4M4 22v4m-2-2h4" />
        </>
      )}
      {service === "integrations" && (
        <>
          <rect x="2" y="3" width="8" height="8" rx="2" />
          <rect x="18" y="17" width="8" height="8" rx="2" />
          <path d="M10 7h8a4 4 0 0 1 4 4v6M6 11v6a4 4 0 0 0 4 4h8m1-7 3 3 3-3M3 14l3-3 3 3" />
        </>
      )}
    </svg>
  );
}
