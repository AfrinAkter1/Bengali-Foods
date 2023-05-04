import React, { useContext, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthProvider, { AuthContext } from './Provider/AuthProvider';


const Login = () => {
    const {signinPassword , signIngoogle, gitHubSignIn} = useContext(AuthContext)
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const location = useLocation();
    console.log('loging page location',location)
    const from = location.state?.from?.pathname || '/'
    const handleSignIn = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signinPassword(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset();
           
            navigate(from , {replace: true})
        })
        .catch(error =>{
            console.log(error.message)
            setError(error.message)
        })


        
        console.log(email,password)
    }

    const handleSignInGoogle = () =>{
        signIngoogle()
        .then(result => {
            console.log(result.user)
            
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    const handleSignInGithub = () =>{
        gitHubSignIn()
        .then(result => {
            console.log(result.user)
           
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <Container className=' my-5'>
            <h3 className='text-success text-center'>Please Login !!!</h3>
            <div className='text-center'>
            <form onSubmit={handleSignIn} className='my-4'>
                <h6 className='mb-2 ' style={{marginRight:"100px"}}> Your Email : </h6>
                <input type="email" className='p-2' placeholder='Enter your email' name='email' />
                <h6 className='my-2' style={{marginRight:"100px"}}>Your Password: </h6>
                <input type="password" className='p-2'  placeholder='Enter your password' name='password' />
                <br />
                <Button className='mt-3' type='submit' variant='success'>Login</Button>
                <p className='text-danger'>{error}</p>
            </form>
            <div className='d-flex  justify-content-center'>
            <hr className=" mx-3 border-dark border-3 w-25 opacity-50"/>
            <p>or</p>
            <hr className=" mx-3 border-dark border-3 w-25 opacity-50"/>
            </div>
            <button className='border-0'  onClick={handleSignInGoogle} >
            <img style={{height:"50px"}} src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png" alt="" />
            </button>
             <br />
            <button onClick={handleSignInGithub} className='border-0'>
            <img style={{height:"60px" , width:"210px"}} src="https://user-images.githubusercontent.com/9599/61177475-2ddce800-a58b-11e9-9bf6-aa4794a99f2a.png" alt="" />
            </button>
            <p>You have no account? <Link to='/resister'>Register</Link></p>
            </div>
        </Container>
    );
};

export default Login;