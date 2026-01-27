import React from 'react';

interface OrganizationSchemaProps {
  type: 'Organization';
}

interface ServiceSchemaProps {
  type: 'Service';
  name: string;
  description: string;
  provider?: string;
}

interface ArticleSchemaProps {
  type: 'Article';
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}

interface FAQSchemaProps {
  type: 'FAQPage';
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

type StructuredDataProps =
  | OrganizationSchemaProps
  | ServiceSchemaProps
  | ArticleSchemaProps
  | FAQSchemaProps;

export default function StructuredData(props: StructuredDataProps) {
  let schema: object;

  switch (props.type) {
    case 'Organization':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Aitivate',
        description: 'Agentic AI Solutions for Hong Kong Business Workflows',
        url: 'https://aitivate.com',
        logo: 'https://aitivate.com/assets/aitivate_logo.png',
        sameAs: [
          'https://www.linkedin.com/company/aitivate',
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Hong Kong',
          addressCountry: 'HK',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          availableLanguage: ['English', 'Chinese'],
        },
      };
      break;

    case 'Service':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: props.name,
        description: props.description,
        provider: {
          '@type': 'Organization',
          name: props.provider || 'Aitivate',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Hong Kong',
        },
        serviceType: 'AI Automation',
      };
      break;

    case 'Article':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: props.headline,
        description: props.description,
        datePublished: props.datePublished,
        dateModified: props.dateModified || props.datePublished,
        author: {
          '@type': 'Organization',
          name: props.author || 'Aitivate',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Aitivate',
          logo: {
            '@type': 'ImageObject',
            url: 'https://aitivate.com/assets/aitivate_logo.png',
          },
        },
      };
      break;

    case 'FAQPage':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: props.questions.map((q) => ({
          '@type': 'Question',
          name: q.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: q.answer,
          },
        })),
      };
      break;

    default:
      return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
