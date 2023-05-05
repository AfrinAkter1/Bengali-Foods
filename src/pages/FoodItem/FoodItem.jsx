import React from 'react';

const FoodItem = () => {
    return (
        <div className='mb-5'>
            <h3 className='text-center mb-4'><i className='text-danger '>Our Delicious &</i> <br />

Famous Food Items</h3>
            <div className="card-group gap-5 ">
  <div className="card border border-0 Regular shadow">
    <img src="https://img.freepik.com/premium-photo/egg-bhurji-also-known-as-masala-anda-bhurji-is-scrambled-eggs-dish-which-is-popular-indian-str_466689-79973.jpg?w=1060" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Vuna khicuri</h5>
     <p><span className='fw-bold'>Ingredient :</span> Milk, lemon juice, sugar, water, and cardamom.</p>
     <p><span className='fw-bold'>Cooking Method :</span> Boil milk, curdle with lemon juice, strain, form into small balls, boil in sugar syrup with cardamom and water.</p>
      <p className="card-text"><small className="text-body-secondary"><span className='fw-bold'>Rating : </span> 4.9 out of 5</small></p>
    </div>
  </div>
  <div className="card border border-0 Regular shadow">
    <img src="https://img.freepik.com/free-photo/side-view-pilaf-with-stewed-beef-meat-plate_141793-5057.jpg?w=1060&t=st=1683298692~exp=1683299292~hmac=8c4082eca877c446eb961e69686d8e72bc0e7300af56497246f16095168e5897" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Biriyani</h5>
     <p><span className='fw-bold'>Ingredient :</span> Rice, Lentils, Onion, Ginger, Cumin, Turmeric, Salt, Water</p>
     <p><span className='fw-bold'>Cooking Method : </span> Cook all ingredients together in a pressure cooker until soft and mushy, then temper with fried onions and ghee.</p>
      <p className="card-text"><small className="text-body-secondary"><span className='fw-bold'>Rating :</span>  4.8 out of 5</small></p>
    </div>
  </div>
  <div className="card border border-0 Regular shadow">
    <img src="https://img.freepik.com/free-photo/sour-curry-with-snakehead-fish-spicy-garden-hot-pot-thai-food_1150-26407.jpg?size=626&ext=jpg&ga=GA1.1.977297310.1680196639&semt=ais" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Fish fry</h5>
     <p><span className='fw-bold'>Ingredient :</span> 500g telapiya , vegetable oil , to Glaze Flour , Dash Salt</p>
     <p><span className='fw-bold'>Cooking Method :</span> Wash the fish under the cold tap.Roll in the flour and deep fry in oil until crispy.Lay on kitchen towel to get rid of the excess oil and serve hot or cold with a slice of lemon.</p>
     
      <p className="card-text"><small className="text-body-secondary"><span className='fw-bold'>Rating :</span> 4.9 out of 5</small></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodItem;