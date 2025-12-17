import React, { useState } from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Outlet context={{ searchQuery }} />
      <Footer/>
    </div>
  );
};

export default Home;