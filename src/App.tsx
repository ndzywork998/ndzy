import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from './components/theme-provider';
import { DEFAULT_THEME, I18N_DEFAULT_NS, THEME } from './const';
import router from './router';
import { RouterProvider } from 'react-router-dom';
import i18n from './utils/i18n';

function App() {
  return (
    <I18nextProvider i18n={i18n} defaultNS={I18N_DEFAULT_NS}>
      <ThemeProvider defaultTheme={DEFAULT_THEME} storageKey={THEME}>
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
