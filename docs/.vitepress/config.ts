import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sairis",
  description: "Application Support",
  base: '/public-docs/',
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Get Started', link: '/sairis-overview' },
      { text: 'Assistant', link: '/sairis-overview' },
      { text: 'Admin Portal', link: '../public-docs' },
    ],

    sidebar: [
      {
        text: 'Resources',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Sairis', link: '/sairis-overview' }
        ]
      }
    ],


  }
})

