import { ConfigProvider } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';
import enUS from '@arco-design/web-react/es/locale/en-US';
import zhCN from '@arco-design/web-react/es/locale/zh-CN';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useRoutes } from 'react-router-dom';

import '@/utils/i18n';
import useStorage from '@/utils/useStorage';
import routes from '~react-pages';

library.add(fas);

function App() {
  const [lang, setLang] = useStorage('arco-lang', 'en-US');

  function getLocale() {
    if (lang === 'zh-CN') {
      return zhCN;
    } else {
      return enUS;
    }
  }

  return (
    <ConfigProvider
      locale={getLocale()}
    >
      <Suspense fallback={<p>Loading...</p>}>
        {useRoutes(routes)}
      </Suspense>
    </ConfigProvider>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
}
