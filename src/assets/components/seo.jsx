import React from "react";
import Helmet from "react-helmet";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

const Seo = () => {
  const {
    title,
    description,
    image,
    siteUrl,
    twitterUsername,
    author,
    keywords,
  } = useSiteMetadata();

  const seo = {
    title,
    description,
    image: `${image}`,
    url: `${siteUrl}`,
    twitterUsername,
    author,
    keywords,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <html lang="es" dir="ltr" />
    </Helmet>
  );
};

export default Seo;
