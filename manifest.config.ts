import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest(async (env) => ({
  manifest_version: 3,
  name: 'Duster',
  version: '0.0.0',
  action: {
    default_popup: 'index.html',
  },
  permissions: ['activeTab', 'storage'],
}))