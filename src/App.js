import React from "react";
import Pizza from './Pizza';
import {Route, Link} from 'react-router-dom';
import Home from './Home';

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <Link to ='/'>Home</Link>
      <button><Link to ='/Pizza'>Order Pizza</Link></button>
      <Route exact path ='/' component = {Home}/>
      <Route exact path ='/Pizza' component = {Pizza}/>

    </>
  );
};
export default App;
