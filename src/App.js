import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Greeting from './components/Greting';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  </>
);

export default App;
