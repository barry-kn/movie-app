import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Series from './pages/Series';
import Films from './pages/Films';
import New from './pages/New';
import List from './pages/List';
import Browse from './pages/Browse';

import Enter from './pages/Enter';
import LandingPage from './pages/LandingPage';
import { useState, useEffect } from "react"; // import the useState hook from React

function App() {
  const [selectedProfile, setSelectedProfile] = useState(
    JSON.parse(localStorage.getItem('selectedProfile'))
  );

  const setProfile = (profile) => {
    setSelectedProfile(profile);
    localStorage.setItem('selectedProfile', JSON.stringify(profile));
  };


  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // const handleThemeSwitch = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };


  return (
    <div className=" dark:bg-black  ">

   
      {!selectedProfile ? (
        <LandingPage setProfile={setProfile} />
      ) : (
        <>
          <BrowserRouter>
            <Navbar />
            
            <Routes className="pt-10">
              <Route path='/' element={<Home />}></Route>
              <Route path='/Enter' element={<Enter />}></Route>
              <Route path='/series' element={<Series />}></Route>
              <Route path='/Films' element={<Films />}></Route>
              <Route path='/new' element={<New />}></Route>
              <Route path='/list' element={<List />}></Route>
              <Route path='/browse' element={<Browse />}></Route>
            </Routes>
          </BrowserRouter>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
