// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ← 静的出力を有効にする設定
  images: {
    unoptimized: true, // next/imageを使う場合に必須（最適化処理を無効化）
  },
};

module.exports = nextConfig;
