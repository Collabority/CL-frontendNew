import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';

/** @BLOCK: Seo Optimization Component */
const Seo = ({ title, description, path, keywords, image }) => {
  const siteName = "Collabority";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const baseUrl = "https://collabority.in";
  const url = `${baseUrl}${path || ""}`;
  const ogImage = image || `${baseUrl}/og-image.jpg`;

  return (
    <Helmet>
      {/* --- STANDARD META --- */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || "Collabority, IT Services, Staffing, Ghaziabad, Tech Solutions"} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />

      {/* --- OPEN GRAPH / FACEBOOK --- */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* --- TWITTER --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@Collabority" />
    </Helmet>
  );
};

export default memo(Seo);