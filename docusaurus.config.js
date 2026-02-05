// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nightlight wiki',
  tagline: 'Choose from the topics below or contact us with more specific questions!',
  favicon: 'img/nightlight-logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  plugins: ["@cmfcmf/docusaurus-search-local"],

  // Set the production url of your site here
  url: 'https://wiki.nightlightapp.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Nightlight-Wiki/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NightlightOfficial', // Usually your GitHub org/user name.
  projectName: 'Nightlight-Wiki', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
          editUrl:
            'https://github.com/NightlightOfficial/Nightlight-Wiki/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/NightlightOfficial/Nightlight-Wiki/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
    
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: false,
        defaultMode: 'dark',
        disableSwitch: true,
      },
      navbar: {
        title: 'Nightlight Wiki',
        logo: {
          alt: 'NightLight Logo',
          src: 'img/nightlight-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'basicsSidebar',
            position: 'left',
            label: 'Basics',
          },
          {
            type: 'docSidebar',
            sidebarId: 'guidesSidebar',
            position: 'left',
            label: 'Guides',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wiki',
            items: [
              {
                label: 'Text formatting',
                to: '/docs/basics/text-formatting',
              },
              {
                label: 'Blocking',
                to: '/docs/basics/blocking',
              },
              {
                label: 'Managing privacy',
                to: '/docs/basics/managing-privacy',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Nightlight',
                href: 'https://nightlightapp.net/u/nightlight',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/UbQpRYRMkg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/NightlightOfficial/Nightlight-Wiki',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NightLight. Built by a kitty.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
