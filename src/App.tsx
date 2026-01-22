
import AppRoutes from './routes/AppRoute.tsx'
import { BrowserRouter } from "react-router-dom";
import './App.css'


function App() {

  return (
    <>
      <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </>
  )
}

export default App
