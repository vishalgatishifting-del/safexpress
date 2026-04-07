
import AppRoutes from './routes/AppRoute.tsx'
import { BrowserRouter } from "react-router-dom";
import './App.css'
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    const preHero = document.getElementById("pre-hero");
    if (preHero) {
      preHero.remove();
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </>
  )
}

export default App
