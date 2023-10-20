/// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  test: {
    include: ["./app/**/*.test.{ts,tsx}"],
    environment: "jsdom",
    setupFiles: ["./tests/setup/setup-test-env.ts"],
    coverage: {
      include: ["app/**/*.{ts,tsx}"],
      all: true,
    },
    passWithNoTests: true,
  },
});
