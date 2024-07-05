import React from "react";
import { Helmet } from "react-helmet";

import {
  greeting,
  seo,
  socialMediaLinks,
  experience,
  contactPageData,
  certifications,
  competitiveSites,
} from "../../portfolio.js";

function SeoHeader() {
  let sameAs = [];
  socialMediaLinks
    .filter(
      (media) =>
        !(media.link.startsWith("tel") || media.link.startsWith("mailto"))
    )
    .forEach((media) => {
      sameAs.push(media.link);
    });

  let mail = socialMediaLinks
    .find((media) => media.link.startsWith("mailto"))
    .link.substring("mailto:".length);
  let job = experience.sections
    ?.find((section) => section.work)
    ?.experiences?.at(0);

  let credentials = [];
  certifications.certifications.forEach((certification) => {
    credentials.push({
      "@context": "https://schema.org",
      "@type": "EducationalOccupationalCredential",
      url: certification.certificate_link,
      name: certification.title,
      description: certification.subtitle,
    });
  });
  const data = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: greeting.title,
    url: seo?.og?.url,
    email: mail,
    telephone: contactPageData.phoneSection?.subtitle,
    sameAs: sameAs,
    jobTitle: job.title,
    worksFor: {
      "@type": "Organization",
      name: job.company,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: contactPageData.addressSection?.locality,
      addressRegion: contactPageData.addressSection?.region,
      addressCountry: contactPageData.addressSection?.country,
      postalCode: contactPageData.addressSection?.postalCode,
      streetAddress: contactPageData.addressSection?.streetAddress,
    },
    hasCredential: credentials,
  };
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />

      <meta property="og:type" content={seo?.og?.type} />
      <meta property="og:title" content={seo?.og?.title} />
      <meta property="og:description" content={seo?.og?.description} />
      <meta
        property="og:image"
        content={seo?.og?.image}
      />
      <meta property="og:url" content={seo?.og?.url} />
      <meta property="og:site_name" content={seo?.og?.site_name} />

      <meta name="twitter:card" content={seo?.twitter?.cardType} />
      <meta name="twitter:title" content={seo?.twitter?.title} />
      <meta name="twitter:description" content={seo?.twitter?.description} />
      <meta
        name="twitter:image"
        content={seo?.og?.image}
      />
      <meta name="twitter:url" content={seo?.twitter?.url} />
      <meta name="twitter:site" content={seo?.twitter?.site} />

      <link rel="canonical" href={seo?.og?.url} />
      <link rel="author" href={greeting.title} />
      {/*// Linking Social Profiles --*/}

      {socialMediaLinks.map((media) => {
        return <link rel="me" href={media.link} />;
      })}
      {competitiveSites.competitiveSites.map((media) => {
        return <link rel="me" href={media.profileLink} />;
      })}

      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export default SeoHeader;
