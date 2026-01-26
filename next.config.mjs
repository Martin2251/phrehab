/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent clickjacking attacks
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          // Prevent MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // Enable XSS protection
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          // Enforce HTTPS
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          // Control referrer information
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          // Add Permissions Policy for Calendly
          {
            key: 'Permissions-Policy',
            value: 'payment=*, microphone=*, camera=*'
          },
          // Content Security Policy (allows Calendly and local images)
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; " +
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://assets.calendly.com; " +
              "style-src 'self' 'unsafe-inline' https://assets.calendly.com; " +
              "img-src 'self' data: https: blob:; " +
              "font-src 'self' https:; " +
              "connect-src 'self' https://calendly.com https://*.calendly.com; " +
              "frame-src https://calendly.com https://www.google.com https://maps.google.com;"
          }
        ]
      }
    ]
  }
};

export default nextConfig;