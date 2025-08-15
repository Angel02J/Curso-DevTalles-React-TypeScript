import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { FirtsStepsApp } from './FirstStepsApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirtsStepsApp/>
  </StrictMode>,
);