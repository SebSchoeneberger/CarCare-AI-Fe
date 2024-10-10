import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Features from './Pages/Features';
import Pricing from './Pages/Pricing';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path="features" element={<Features />} />
    <Route path="about" element={<About />} />
    <Route path="pricing" element={<Pricing />} />
    <Route path="contact" element={<Contact />} />
    <Route path="signup" element={<SignUp />} />
    <Route path="login" element={<Login />} />
  </Route>
));

const App = () => (<RouterProvider router={router} />);

export default App;
