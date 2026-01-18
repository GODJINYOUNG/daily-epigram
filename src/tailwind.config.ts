import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // 이 줄이 있으면 (auth), (main) 모두 다 읽습니다.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
