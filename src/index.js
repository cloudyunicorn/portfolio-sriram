import * as ReactDOMClient from 'react-dom/client';
import App from './App'
import { ThemeProvider } from './contexts/theme'
import './index.css'

const container = document.getElementById('app');

const root = ReactDOMClient.createRoot(container);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
