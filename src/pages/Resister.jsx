import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Resister = () => {
    return (
        <Container className=' my-5'>
            <h3 className='text-success text-center'>Please Register !!!</h3>
            <div className='text-center'>
                <form className='my-4'>
                    <h6 className='mb-2 ' style={{ marginRight: "100px" }}> Your Name : </h6>
                    <input type="email" className='p-2' placeholder='Enter your name' name='name' />
                    <h6 className='mb-2 ' style={{ marginRight: "100px" }}> Your Email : </h6>
                    <input type="email" className='p-2' placeholder='Enter your email' name='email' />
                    <h6 className='my-2' style={{ marginRight: "100px" }}>Your Password: </h6>
                    <input type="password" className='p-2' placeholder='Enter  password' name='password' />
                    <h6 className='my-2' style={{ marginRight: "100px" }}>Your photo url: </h6>
                    <input type="text" className='p-2' placeholder='Photo url' name='Photo' />

                </form>
                <p>You have Already account? <Link to='/login'>Login</Link></p>
            </div>
        </Container>
    );
};

export default Resister;