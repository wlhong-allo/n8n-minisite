'use client';

import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { ADS_TRACKING_ID, GA_TRACKING_ID, pageview } from '@/lib/analytics';

function AnalyticsLogic() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      pageview(url);
    }
  }, [pathname, searchParams]);

  return null;
}

export function Analytics() {
  if (!ADS_TRACKING_ID && !GA_TRACKING_ID) {
    return null;
  }

  return (
    <>
      <Suspense fallback={null}>
        <AnalyticsLogic />
      </Suspense>

      {/* Initialize gtag function - must run before config */}
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

      {/* Load external library */}
      {ADS_TRACKING_ID && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${ADS_TRACKING_ID}`}
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
