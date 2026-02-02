import Script from 'next/script';
import { ADS_TRACKING_ID, GA_TRACKING_ID } from '@/lib/analytics';

export function GoogleTagManager() {
  if (!ADS_TRACKING_ID && !GA_TRACKING_ID) {
    return null;
  }

  return (
    <>
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            ${ADS_TRACKING_ID ? `gtag('config', '${ADS_TRACKING_ID}');` : ''}
            ${GA_TRACKING_ID ? `gtag('config', '${GA_TRACKING_ID}');` : ''}
          `,
        }}
      />
      
      {ADS_TRACKING_ID && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${ADS_TRACKING_ID}`}
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
