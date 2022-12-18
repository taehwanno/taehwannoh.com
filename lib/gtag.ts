export const MEASUREMENT_ID = 'G-37SF1PGR91';

/**
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs/pages
 */
export const pageview = (url: string) => {
  window.gtag('config', MEASUREMENT_ID, {
    page_path: url,
  });
};

/**
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs/events
 */
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value: number;
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
