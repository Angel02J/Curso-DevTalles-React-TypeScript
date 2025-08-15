import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { FirtsStepsApp } from './FirstStepsApp';
import  MyAwesomeApp  from './MyAwesomeApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <FirtsStepsApp/> */}
    <MyAwesomeApp/>
  </StrictMode>,
);