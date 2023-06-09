import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from '../Pages/Main';
import Template from '../Pages/Template';
import Add from '../Pages/Add';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Template />}>
          <Route path="/" element={<Main />} />
          <Route path="/add" element={<Add />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
