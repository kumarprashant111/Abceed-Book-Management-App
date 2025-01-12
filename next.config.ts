import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'd3grtcc7imzgqe.cloudfront.net', // Your previously added domain
      's3-ap-northeast-1.amazonaws.com', // Add this domain for S3 images
    ],
  },
  reactStrictMode: true, // Optional: enable strict mode
};

export default nextConfig;
