import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Resister = () => {
    const {createUser, update} = useContext(AuthContext)
     const [error, setError] = useState("");
  
    const handleResister = (event) =>{
        event.preventDefault()
        setError('')
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        if(password.length < 6){
            setError('Password have been at least six chars')
            

            return;
        }
        
        
        console.log(name, email,password,photo)
        createUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            toast('Registration successfull');
            update(loggedUser,name,photo)
            form.reset();
        })
        .catch(error => {
            console.log(error.message)
            // setError(error.message)
        })
    }
    return (
        <Container className=' my-5'>
            <h3 className='text-success text-center'>Please Register !!!</h3>
            <div className='text-center'>
                <Form className='my-4' onSubmit={handleResister}>
                  
                  <h6 className='mb-2 ' style={{ marginRight: "100px" }}> Your Name : </h6>
                    <input type="text" className='p-2' placeholder='Enter your name' name='name' required/>
                
                    <h6 className='mb-2 ' style={{ marginRight: "100px" }}> Your Email : </h6>
                    <input type="email" className='p-2' placeholder='Enter your email' name='email' required/>
                    <h6 className='my-2' style={{ marginRight: "100px" }}>Your Password: </h6>
                    <input type="password" className='p-2' placeholder='Enter  password' name='password' required />
                    <h6 className='my-2' style={{ marginRight: "100px" }}>Your photo url: </h6>
                    <input type="text" className='p-2' placeholder='Photo url' name='photo' required/>
                    <br />
                    <Button className='mt-3' type='submit' variant='success'>Register</Button>
                </Form>

                <p className='text-danger'>{error}</p>
                <p>You have Already account? <Link to='/login'>Login</Link></p>
            </div>
            <Toaster />

        </Container>
    );
};

export default Resister;