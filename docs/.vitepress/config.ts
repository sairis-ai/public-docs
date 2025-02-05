import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: " ",
  description: "Application Support",
  base: '/public-docs/',
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  themeConfig: {
    logo: 'https://public.dev.sairis.ai/images/f6eb7bac-3a9c-4db2-aa32-39cfadbc1e29/logo_light.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Get Started', link: '/sairis-overview' },
      { text: 'Assistant', link: '/sairis-overview' },
      { text: 'Admin Portal', link: '../public-docs' },
    ],

    sidebar: [
      {
        text: 'Assistant',
        items: [
          { text: 'Assistant Home', link: '/Assistant/assistant-home' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Sairis', link: '/sairis-overview' }
        ]
      },
      {
        text: 'Resources',
        items: [
          { text: 'YAYY', link: '/markdown-examples' },
          { text: 'BooYah', link: '/api-examples' },
          { text: 'Double CHeck', link: '/sairis-overview' }
        ]
      }
    ],


  }
})

