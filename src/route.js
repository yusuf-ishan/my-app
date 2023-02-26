import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './Home';
import Cars from './Cars';
import App from './App';

const Main = () => {
  return (
    <Routes>
      <Route exact path='/' element={App}></Route>
      <Route path='/Home' component={Home} />
      <Route exact path='/Cars' element={Cars}></Route>
    </Routes>
  )
};
export default Main