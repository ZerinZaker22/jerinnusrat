/** @type {import('next').NextConfig} */
const nextConfig = {
eslint: {
  ignoreDuringBuilds: true,
},
typescript: {
  ignoreBuildErrors: true,
},
images: {
  unoptimized: true,
  domains: ['i.postimg.cc', 'blob.v0.dev', 'www.ngan-nguyen.com', 'gracemmaa.com'],
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'i.postimg.cc',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'blob.v0.dev',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'www.ngan-nguyen.com',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'gracemmaa.com',
      port: '',
      pathname: '/**',
    }
  ],
},
experimental: {
  optimizePackageImports: ['lucide-react']
}
}

export default nextConfig
