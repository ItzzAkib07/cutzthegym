import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../data/siteConfig';

export default function SEO({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  schema
}) {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.seo.defaultTitle;
  const pageDescription = description || siteConfig.seo.defaultDescription;
  const canonicalUrl = canonical || siteConfig.seo.siteUrl;
  const image = ogImage || siteConfig.seo.ogImage;

  // Organization & LocalBusiness / ExerciseGym Schema
  const defaultGymSchema = {
    '@context': 'https://schema.org',
    '@type': 'ExerciseGym',
    name: siteConfig.name,
    alternateName: siteConfig.brandIdentity,
    description: siteConfig.seo.defaultDescription,
    url: siteConfig.seo.siteUrl,
    logo: `${siteConfig.seo.siteUrl}/logo.svg`,
    image: `${siteConfig.seo.siteUrl}/logo.svg`,
    telephone: siteConfig.contact.formattedPrimaryPhone,
    founder: {
      '@type': 'Person',
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.title
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${siteConfig.location.addressLine1}, ${siteConfig.location.addressLine2}`,
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      postalCode: siteConfig.location.pincode,
      addressCountry: siteConfig.location.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '18.6009893',
      longitude: '73.9172477'
    },
    sameAs: [
      siteConfig.contact.instagram
    ]
  };

  const finalSchema = schema || defaultGymSchema;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={siteConfig.seo.keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={image} />

      {/* Structured Data JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
}

