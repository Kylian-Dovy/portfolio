import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import silkscreen from "/home/kylian-dovy/Documents/portfolio/src/assets/fonts/slkscr.ttf";
import { Font } from "@react-pdf/renderer";
import App from './App.tsx';

Font.register({
  family: "Silkscreen",
  src: silkscreen,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
