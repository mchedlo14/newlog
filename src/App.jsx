import React from 'react'
import Layout from './components/Layout/Layout'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
const App = () => {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default App