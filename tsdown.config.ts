import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/apple/index.ts',
    'src/apple/mobile.ts',
    'src/apple/tablet.ts',
    'src/google/index.ts',
    'src/google/mobile.ts'
  ],
  dts: true
})
