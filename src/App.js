import React from 'react';

import classes from './App.module.css';
import LoginPage from './LoginPage/LoginPage';


class App extends React.Component{

  // constructor(props){
  //   super(props);



  // }

  render(){
    return (
      <div className={classes.App}>
      <LoginPage/>
      </div>
    );
  }
  

}





export default App;
