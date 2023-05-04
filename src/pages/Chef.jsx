import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaRegThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Chef = () => {
    const [chefs, setChefs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div >
            <h4 className='text-center mb-4 text-success'>All Chef</h4>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    chefs.map(chef => <div
                        key={chef.id}
                    >
                        <div>
                            <div className='col'>
                                <div className='card p-4'>
                                    <LazyLoadImage
                                        style={{ height: "150px" ,width:"300px"}}
                                        className='mb-3'
                                        effect="blur"
                                        src={chef.picture} />
                                    {/* <img className='mb-3' style={{height:"150px"}} src={chef.picture} alt="" /> */}
                                    name: {chef.name} <br />
                                    Years of exprience: {chef.years_of_experience} <br />
                                    Numbers of recepies : {chef.num_recipes} <br />
                                    <hr />
                                    <p><small><FaRegThumbsUp></FaRegThumbsUp> {chef.likes}</small></p>
                                    <Button variant="success"><Link to={`/view/${chef.id}`}
                                        className='text-decoration-none text-white'>View recepi</Link></Button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Chef;