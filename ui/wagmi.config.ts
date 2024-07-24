import { defineConfig } from '@wagmi/cli'
import { foundry } from '@wagmi/cli/plugins'
import { join } from 'node:path'

export default defineConfig({
  out: 'src/generated.ts',
  plugins: [
    foundry({
      project: join(__dirname, '..', 'contracts'),
    }),
  ],
})
