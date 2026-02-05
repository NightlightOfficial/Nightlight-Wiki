// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  basicsSidebar: [
    {
      type: 'category',
      className: 'sidebar-header-getting-started',
      label: 'GETTING STARTED',
      collapsible: false,
      items: [
        'basics/leveling',
        'basics/ncps',
        'basics/badges',
        'basics/leaderboards'
      ],
    },
    {
      type: 'category',
      label: 'ADVANCED',
      collapsible: false,
      items: ['basics/text-formatting'],
    },
    {
      type: 'category',
      label: 'ITEMS & CREATORS',
      collapsible: false,
      items: [
        'basics/items',
        'basics/marketplace',
        'basics/creator-hub'
      ],
    },
    {
      type: 'category',
      label: 'PRIVACY & SECURITY',
      collapsible: false,
      items: [
        'basics/managing-privacy',
        'basics/blocking',
        'basics/verification'
      ],
    },
    {
      type: 'category',
      label: 'CONNECTIONS',
      collapsible: false,
      items: [
        'basics/connections'
      ],
    },
  ],
  guidesSidebar: [
      'guides/guides',
    {
      type: 'category',
      label: 'MAKING ITEMS',
      collapsible: false,
      items: [
        'guides/guidelines',
        'guides/profile-decorations',
        'guides/profile-music',
        'guides/themes',
        'guides/titles'
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
