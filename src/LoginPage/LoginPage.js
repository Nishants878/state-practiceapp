import React from 'react';

import classes from './LoginPage.module.css';


class LoginPage extends React.Component{


    state = {
        username: "",
        password: "",
        email: "",
    }

    handleLoginSubmit =(e) =>{
        e.preventDefault();   

        
            
        

        this.setState({
            username: e.target.username.value,
            password: e.target.password.value,
            email:e.target.email.value ,
        })
        
       
    }
      

    render(){
        return(
            <div className={classes.MainConatainer}>
              <h1 className={classes.Title}>Sign In </h1>
              <form onSubmit={this.handleLoginSubmit}>
                <div className={classes.InputWrapper}>
              <input className={classes.Input} type="name" name="username" placeholder="Username"/>
              <input className={classes.Input}  type="email" name="email" placeholder="Email"/>
              <input className={classes.Input}  type="password" name="password" placeholder="Password"/>
              </div>

              <button  className={classes.SignInButton} type="submit">Login</button>
              </form>
            </div>
        )
    }




}
export default LoginPage;