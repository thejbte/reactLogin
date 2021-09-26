import React from 'react'
import '../styles/login.css'

function Login() {

    function handleLogin(e) {
        e.preventDefault();  // deshabilita hacer el action del form
        console.log('You clicked submit.');
        var email = document.forms['form']['email'];  // get from name form , name email
        var password = document.forms['form']['password'];  // get from name form , name password

        var emailOnError = document.getElementById('emailOnError'); /* get content from div for after hiden or no */
        var passwOnError = document.getElementById('passwordOnError');
        email.addEventListener('textInput', email_Verify_fcn);  // cuando escriba esta funciono escuchara lo que escriba
        password.addEventListener('textInput', passwd_Verify_fcn);

        //opcion uno
        console.log(email.value);
        console.log(password.value);
      //  alert("User: "+ email.value +'\nPassword: ' + password.value);

      //otra opción
        console.log(e.target.email.value) ;
        console.log(e.target.password.value) ;

        if (e.target.email.value.length < 9) {
            email.style.border = "2px solid red"; //cambia el estilo del borde cuando hay error o .class:focus
            emailOnError.style.display = "block"; // estilo block-level comienza en nueva linea y toma el ancho habilitad
            email.focus();
            return false;
        }
        if (e.target.password.value.length < 6) {
            password.style.border = "2px solid red";
            passwOnError.style.display = "block"; // estilo block-level comienza en nueva linea y toma el ancho habilitad
            password.focus();
            return false;
        }

        function email_Verify_fcn(){

            if(e.target.email.value.length >= 8){
                e.target.email.style.border = "1px solid silver";
                emailOnError.style.display = "none";// no muestra el div de error
                return true;
            }
        }
        
        function passwd_Verify_fcn(){
            if(e.target.password.value.length >= 4){
                e.target.password.style.border = "1px solid silver";
                passwOnError.style.display = "none";// no muestra el div de error
                return true;
            };
        }
        alert("User: "+ email.value +'\nPassword: ' + password.value);
      }

    return (
        <div className = "container">
        <form className="login-form" action="home.html" method="POST" name="form" onSubmit={handleLogin}>
            <h1 class="label">LogIn</h1>
            <input autocomplete="off" type="text" name="email" placeholder="youremail@email.com" className="input"/>
            <br/>
            <div id="emailOnError">Please enter your email</div>

            <input type="password" name="password" placeholder="password"/>
            <div id="passwordOnError">Please enter your password</div><br/>
            <button type="submit" class="btn btn-primary">Login</button>
        
        
        </form>

        </div>
    )
}

export default Login
