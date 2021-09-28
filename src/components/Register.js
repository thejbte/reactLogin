import React, { Component } from 'react'
import '../styles/register.css'


function Register() {

    function handleSingup(e){
        alert(e.target.reg_email.value);
    }

    return (
<div>
                  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous" />
            <form action="/" onSubmit= {handleSingup} style={ {border: "1px solid #ccc" } } >
            <div class="reg-container">
            <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr/>
    
                    <label for="email"><b>Email</b></label>
                    <input class="reg-email" type="text" placeholder="Enter Email" name="reg_email" required/>
    
                    <label for="psw"><b>Password</b></label>
                    <input class= "reg-password" type="password" placeholder="Enter Password" name="reg_psw" required/>
    
                    <label for="psw-repeat"><b>Repeat Password</b></label>
                    <input class ="reg-password-rpt" type="password" placeholder="Repeat Password" name="reg_psw_repeat" required/>
                    
                    <label>
                    <input type="checkbox" checked="checked" name="remember" style={ {marginBottom: "15px"}}/> Remember me
                    </label>
                    
                    <p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>
    
                    <div class="clearfix">
                    <button type="button" class="btn btn-danger reg-btn-cancel">Cancel</button>
                    <button type="submit" class="btn btn-primary reg-btn-singup" >Sing Up</button>
                    </div>
             </div>
            </form>
        </div>
    )
}

export default Register
