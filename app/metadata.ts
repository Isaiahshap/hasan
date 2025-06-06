import { Metadata } from 'next';
import { SITE_METADATA } from '../lib/constants';

export const generateMetadata = (): Metadata => {
  return {
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    keywords: [
      'Hasan Piker',
      'HasanAbi',
      'Twitch',
      'Political Commentary',
      'Leftist',
      'Progressive',
      'Turkish-American',
      'Content Creator',
      'Political Streamer',
      'Social Commentary'
    ],
    authors: [{ name: 'Yeshaya' }],
    creator: 'Yeshaya',
    publisher: 'Yeshaya',
    metadataBase: new URL(SITE_METADATA.url),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: SITE_METADATA.url,
      title: SITE_METADATA.title,
      description: SITE_METADATA.description,
      siteName: 'Hasan Piker',
      images: [
        {
          url: SITE_METADATA.image,
          width: 1200,
          height: 630,
          alt: 'Hasan Piker - Political Commentator & Twitch Streamer',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: SITE_METADATA.twitterHandle,
      creator: SITE_METADATA.twitterHandle,
      title: SITE_METADATA.title,
      description: SITE_METADATA.description,
      images: [SITE_METADATA.image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
    category: 'Entertainment',
  };
}; 