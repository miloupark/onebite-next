import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // 페칭 발생할 때마다 로그 출력하도록 설정
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
