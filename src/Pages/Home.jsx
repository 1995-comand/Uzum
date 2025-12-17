import React, { useState } from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Outlet context={{ searchQuery }} />
    </div>
  );
};

export default Home;