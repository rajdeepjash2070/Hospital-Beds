import React from 'react';
import TransactionList from './Components/TransactionList';
import User from './Components/User'
import { Route,Routes } from 'react-router';
import "./App.css";
import View from './Components/View';
import Home from "./Components/Home"
const App = () => {
  return <div>
 
<Routes>
  <Route path="/admin" element={<TransactionList />}/>
  <Route path="/user" element={<User/>}/>
  <Route path="/view" element={<View/>} />
  <Route path="/" element={<Home/>}/>
</Routes>
  </div>;
};

export default App;
