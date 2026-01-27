'use client';

import { InlineWidget } from "react-calendly";

interface BookingSectionProps {
  url?: string;
  title?: string;
  subtitle?: string;
}

export default function BookingSection({ 
  url = "https://calendly.com/your-calendly-link", // Replace with actual default or prop
  title = "Ready to Automate?",
  subtitle = "Book a free consultation with our experts to discuss your specific needs."
}: BookingSectionProps) {
  return (
    <section className="py-16 px-6 bg-gray-50" id="booking">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-xl text-gray-600">{subtitle}</p>
      </div>
      <div className="w-full h-[700px]">
        <InlineWidget 
          url={url} 
          styles={{ height: '100%', width: '100%' }}
        />
      </div>
    </section>
  );
}
