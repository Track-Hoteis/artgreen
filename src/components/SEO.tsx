import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

const SITE_NAME = 'Art Green Teresópolis';
const BASE_URL = 'https://www.artgreenpousada.com.br';
const DEFAULT_IMAGE = 'https://lirp.cdn-website.com/8406003a/dms3rep/multi/opt/4F3A8835-1920w.JPG';

export function SEO({ title, description, image, url, type = 'website' }: SEOProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const fullUrl = url ? `${BASE_URL}${url}` : BASE_URL;
  const ogImage = image || DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
}
