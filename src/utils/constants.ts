import { faBook, faHouse, faScrewdriverWrench, faVideo } from '@fortawesome/free-solid-svg-icons';

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
    title: 'Github',
    engine: 'https://github.com/search?q=',
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
      color: '#255DF9',
    },
  ],
  documentation: [
    {
      title: 'Language Server Protocol Documentation',
      description: 'Language Server Protocol Documentation',
      url: 'https://language-server-protocol-documentation.onrender.com/',
      color: '#000000',
    },
    {
      title: 'Make Documentation',
      description: 'Make Documentation',
      url: 'https://make-documentation.onrender.com/',
      color: '#000000',
    },
    {
      title: 'npm Documentation',
      description: 'npm Documentation',
      url: 'https://npm-documentation-1258203040.cos-website.ap-shanghai.myqcloud.com/',
      color: '#ce3134',
    },
    {
      title: 'Yarn Documentation',
      description: 'Yarn Documentation',
      url: 'https://yarn-documentation-1258203040.cos-website.ap-shanghai.myqcloud.com/',
      color: '#255DF9',
    },
    {
      title: 'Vite Documentation',
      description: 'Vite Documentation',
      url: 'https://vitejs.dev/guide/',
      color: '#255DF9',
    },
    {
      title: 'Arco Design React Documentation',
      description: 'Arco Design React Documentation',
      url: 'https://arco.design/react/docs/start',
      color: '#54C7A4',
    },
    {
      title: 'Font Awesome React Documentation',
      description: 'Font Awesome React Documentation',
      url: 'https://fontawesome.com/docs/web/use-with/react/',
      color: '#5581CE',
    },
    {
      title: 'React Documentation',
      description: 'React Documentation',
      url: 'https://reactjs.org/docs/getting-started.html',
      color: '#75D1F8',
    },
    {
      title: 'TypeScript Documentation',
      description: 'TypeScript Documentation',
      url: 'https://www.typescriptlang.org/docs/handbook/intro.html',
      color: '#3B6CBB',
    },
    {
      title: 'MDN Web Docs',
      description: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/',
      color: '#89ABFB',
    },
  ],
  tool: [
    {
      title: 'Mozilla Observatory',
      description:
        'The Mozilla Observatory is a project designed to help developers, system administrators, and security professionals configure their sites safely and securely.',
      url: 'https://observatory.mozilla.org/',
      color: '#313131',
    },
    {
      title: 'HTML Symbols',
      description:
        "This is NOT a comprehensive list of ALL Unicode characters, it's a list of HTML symbols with their numbers and names that are more relevant to developers, engineers and designers.",
      url: 'https://www.htmlsymbols.xyz/',
      color: '#1D3F93',
    },
    {
      title: 'Measure page quality',
      description:
        'Test your pages in a lab environment powered by PageSpeed Insights. Then get tips and recommendations to improve your user experience. For field performance, see the [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) tool.',
      url: 'https://web.dev/measure/',
    },
  ],
  video: [
    {
      title: 'TMDB',
      description: 'The Movie Database (TMDB) is a popular, user editable database for movies and TV shows.',
      url: 'https://www.themoviedb.org/',
      color: '#4CABD2',
    },
  ],
};

export const CATALOGUE = [
  {
    title: 'common',
    icon: faHouse,
  },
  {
    title: 'documentation',
    icon: faBook,
  },
  {
    title: 'tool',
    icon: faScrewdriverWrench,
  },
  {
    title: 'video',
    icon: faVideo,
  },
];
