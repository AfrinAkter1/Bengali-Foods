import React from 'react';
import { Container } from 'react-bootstrap';
import './about.css'
const About = () => {
    return (
        <Container className='my-5 img-fluid'>
            <h2 className='text-danger text-center'><i>About us</i></h2>
            <div className=' back '>
            <h5 className='text-center my-5 text-white pt-5'>Traditional & Modern Service <br />
Since 1970</h5>
        <div className='d-md-flex gap-4 text-white' style={{padding:"40px"}}>
            <div>
                <p>
                Cras aliquet dolor sit amet, consectetur adipiscing elit. Placerat pellent esque blandit sodales arcu. Auctor gravida vel et tempus. Malesuada erat dolor magna luctus congue leo tellus mattis. Volutpat neque, erat nis donec sed urna aliquet.
                </p>
                <p>Maecenas mattis facilisi erat odio at. Quisque nullam nunc tincidunt ante. etiam eget augue velit ultricies amet.</p>
            </div>
            <div>
                <p>Aenean pellentesque laoreet neque, vitae aliquet nibh iaculis at pellent esque blandit sodales arcu. Auctor gravida vel et tempus. Malesuada erat dolor magna luctus congue leo tellus mattis. Volutpat neque, erat nis donec sed urna aliquet. </p>
                <p>Integer hendrerit facilisi erat odio at. Quisque nullam nunc tincidunt ante. etiam eget augue velit ultricies amet.

</p>
            </div>
        </div>
        </div>
        </Container>
    );
};

export default About;