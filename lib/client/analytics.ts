type AnalyticsPayload = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (command: string, eventName: string, params?: AnalyticsPayload) => void;
  }
}

export function trackEvent(eventName: string, params: AnalyticsPayload = {}): void {
  if (typeof window === "undefined") return;

  window.dataLayer?.push({
    event: eventName,
    ...params,
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}
