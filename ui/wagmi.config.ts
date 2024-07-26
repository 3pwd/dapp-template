import { defineConfig } from '@wagmi/cli'
import { actions, foundry, react } from '@wagmi/cli/plugins'
import { join } from 'node:path'
import * as chains from 'wagmi/chains'

export default defineConfig({
  out: 'src/generated.ts',
  plugins: [
    actions(),
    foundry({
      deployments: {
        Counter: {
          [chains.foundry.id]: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
          [chains.sepolia.id]: '0xec6664DF322AF867b32F734478e2e14197318A78',
        },
      },
      project: join(__dirname, '..', 'contracts'),
    }),
    react(),
  ],
})
