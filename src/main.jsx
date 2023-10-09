import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Aliancas from './paginas/aliancas/Aliancas.jsx'
import Aliancas2 from './paginas/aliancas/Aliancas2.jsx'
import Aneis from './paginas/Aneis/Aneis.jsx'
import Aneis2 from './paginas/Aneis/Aneis2.jsx'
import Aneis3 from './paginas/Aneis/Aneis3.jsx'
import Colares from './paginas/colares/Colares.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Brincos from './paginas/Brincos/Brincos.jsx'
import Carrinho from './paginas/Carinho/Carinho.jsx'
import Results from './paginas/results/results.jsx'





const router = createBrowserRouter([
    {
    path:"/",
    element: <App/>
    },
    
    {
      path:"/aliancas",
      element: <Aliancas/>
    },
    {
      path:"/aliancas2",
      element: <Aliancas2/>
    },
    {
      path:"/aneis",
      element:<Aneis/>
    },
    {
      path:"/aneis2",
      element:<Aneis2/>
    },
    {
      path:"/aneis3",
      element:<Aneis3/>
    },
    {
      path:"/colares",
      element:<Colares/>
    },
    {
      path:"/brincos",
      element:<Brincos/>
    },
    {
      path:"/carinho",
      element:<Carrinho/>
    },
    {
      
        path:"/results",
        element:<Results/>
      
    },
  


])
  


ReactDOM.createRoot(document.getElementById('root')).render(
  
      <React.StrictMode>
        
        <RouterProvider router={router}/>
  
    
     </React.StrictMode>,
 
  
)
