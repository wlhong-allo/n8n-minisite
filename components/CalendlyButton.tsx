'use client';

interface CalendlyButtonProps {
  url: string;
  text: string;
  className?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
}

export default function CalendlyButton({
  url,
  text,
  className = '',
  utmSource,
  utmMedium,
  utmCampaign,
  utmContent,
}: CalendlyButtonProps) {
  const handleClick = () => {
    // Build URL with UTM parameters if provided
    const urlWithParams = new URL(url);
    if (utmSource) urlWithParams.searchParams.set('utm_source', utmSource);
    if (utmMedium) urlWithParams.searchParams.set('utm_medium', utmMedium);
    if (utmCampaign) urlWithParams.searchParams.set('utm_campaign', utmCampaign);
    if (utmContent) urlWithParams.searchParams.set('utm_content', utmContent);

    // Open in new tab
    window.open(urlWithParams.toString(), '_blank', 'noopener,noreferrer');
  };

  const defaultClassName = 'bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 cursor-pointer';

  return (
    <button
      onClick={handleClick}
      className={className || defaultClassName}
    >
      {text}
    </button>
  );
}
