export const DEFAULT_ENGINE = 'https://www.bing.com/search?q=';
export const TITLE = 'Home Nav';

export const SEARCH = [
  {
    title: 'Bing CN',
    engine: DEFAULT_ENGINE,
  },
  {
    title: 'Sogou',
    engine: 'https://www.sogou.com/web?query=',
  },
  {
    title: 'npm',
    engine: 'https://www.npmjs.com/search?q=',
  },
];

export const WEBSITE = {
  common: [
    {
      title: '知乎',
      description: '知乎，中文互联网高质量的问答社区和创作者聚集的原创内容平台。',
      url: 'https://www.zhihu.com/',
    },
  ],
  documentation: [
    {
      title: 'Language Server Protocol Documentation',
      description: 'Language Server Protocol Documentation',
      url: 'https://language-server-protocol-documentation.onrender.com/',
    },
    {
      title: 'Make Documentation',
      description: 'Language Server Protocol Documentation',
      url: 'https://make-documentation.onrender.com/',
    },
    {
      title: 'Yarn Documentation',
      description: 'Language Server Protocol Documentation',
      url: 'https://yarn-documentation.onrender.com/',
    },
    {
      title: 'Vite Documentation',
      description: 'Language Server Protocol Documentation',
      url: 'https://vitejs.dev/guide/',
    },
    {
      title: 'Arco Design React Documentation',
      description: 'Arco Design React Documentation',
      url: 'https://arco.design/react/docs/start',
    },
    {
      title: 'Font Awesome React Documentation',
      description: 'Font Awesome React Documentation',
      url: 'https://fontawesome.com/docs/web/use-with/react/',
    },
    {
      title: 'React Documentation',
      description: 'React Documentation',
      url: 'https://reactjs.org/docs/getting-started.html',
    },
    {
      title: 'TypeScript Documentation',
      description: 'TypeScript Documentation',
      url: 'https://www.typescriptlang.org/docs/handbook/intro.html',
    },
    {
      title: 'MDN Web Docs',
      description: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/',
    },
  ],
  tool: [
    {
      title: 'Mozilla Observatory',
      description:
        'The Mozilla Observatory is a project designed to help developers, system administrators, and security professionals configure their sites safely and securely.',
      url: 'https://observatory.mozilla.org/',
    },
  ],
  video: [
    {
      title: 'TMDB',
      description: 'The Movie Database (TMDB) is a popular, user editable database for movies and TV shows.',
      url: 'https://www.themoviedb.org/',
    },
  ],
};

export const catalogue = [
  'common',
  'documentation',
  'tool',
  'video',
];

export const test = {
  catalogue: [
    {
      title: 'common',
      icon: 'faHouse',
    },
    {
      title: 'documentation',
      icon: 'faBook',
    },
    {
      title: 'tool',
      icon: 'faScrewdriverWrench',
    },
    {
      title: 'video',
      icon: 'faVideo',
    },
  ],
};
