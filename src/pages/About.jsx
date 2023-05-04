import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container className='my-5'>
            <h2 className='text-success text-center'>About us</h2>
            <h5 className='text-center my-5'>Traditional & Modern Service <br />
Since <span className='text-success'>1970</span></h5>
        <div className='d-flex gap-4'>
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
        </Container>
    );
};

export default About;