type GTagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';
export const ADS_TRACKING_ID = process.env.NEXT_PUBLIC_ADS_ID || '';

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    if (ADS_TRACKING_ID) {
      window.gtag('config', ADS_TRACKING_ID, {
        page_path: url,
      });
    }
    if (GA_TRACKING_ID) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
      });
    }
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific event for booking consultation
export const trackBookingClick = (location: string) => {
  event({
    action: 'click_booking',
    category: 'engagement',
    label: location, // e.g., 'navbar', 'hero_cta', 'footer'
  });
  
  // If user provides a specific Google Ads conversion label later, we can add it here:
  // window.gtag('event', 'conversion', {
  //   'send_to': 'AW-17924743763/YOUR_CONVERSION_LABEL',
  //   'event_callback': callback
  // });
};
