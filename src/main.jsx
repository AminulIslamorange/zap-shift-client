import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import 'aos/dist/aos.css';
import Aos from 'aos';
import AuthProvider from './context/AuthContext/AuthProvider.jsx';
Aos.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='max-w-7xl mx-auto font-urbanist'>
     <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
   </div>
  </StrictMode>,
)
