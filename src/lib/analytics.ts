type AnalyticsEvent =
  | "cta_click"
  | "project_filter"
  | "project_view"
  | "form_submit";

export const track = (event: AnalyticsEvent, payload?: Record<string, unknown>) => {
  // Placeholder analytics hook: swap for your provider (GA, Vercel, Plausible...)
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.info("[analytics]", event, payload ?? {});
  }
};
