import React from 'react'
import Item from './Item.js'
import data from './itemData'

export default function Shopping(){


    const reviewdatas = data.data.map((data) => {
        return <Item name={data.name} price={data.price} img={data.img}   />;
      });
      function onChange(event){
          const {name , value}  = event.target

      }

    

    return(
        <div className="shopping">
            <div className="shopping--cointainer">
                <div className="shopping-head">
                    <h3 className='shopping-catogory'>Category</h3>
                </div>
                <ul className='shopping--list'>
                   <li className="shopping-list-item"><a href="#product1" className="shopping-link">Category 1</a></li>
                   <li className="shopping-list-item"><a href="#product2" className="shopping-link">Category 2</a></li>
                   <li className="shopping-list-item"><a href="#product3" className="shopping-link">Category 3</a></li>
                   <li className="shopping-list-item"><a href="#product4" className="shopping-link">Category 4</a></li>
                   <li className="shopping-list-item"><a href="#product5" className="shopping-link">Category 5</a></li>
                   <li className="shopping-list-item"><a href="#product6" className="shopping-link">Category 6</a></li>
                </ul>
            </div>
            <div className="shopping--cointainer">
            <div className="shopping-head">
                    <h3 className='shopping-catogory'>Items</h3>
                    </div>
                    <div className="shopping--product-item">
                    <div className="shopping--product-heading">
                        <h5 id='product1'>Product 1</h5>
                    </div>
                        {reviewdatas}
                        <div className="shopping--product-heading">
                        <h5 id='product2'>Product 2</h5>
                    </div>
                    {reviewdatas}
                        <div className="shopping--product-heading">
                        <h5 id='product3'>Product 3</h5>
                    </div>
                    {reviewdatas}
                        <div className="shopping--product-heading">
                        <h5 id='product4'>Product 4</h5>
                    </div>
                    {reviewdatas}
                        <div className="shopping--product-heading">
                        <h5 id='product5'>Product 5</h5>
                    </div>
                    {reviewdatas}
                        <div className="shopping--product-heading">
                        <h5 id='product6'>Product 6</h5>
                    </div>
                    {reviewdatas}

                </div>
                
                
            </div>
            <div className="shopping--cointainer">
            <div className="shopping-head">
                    <h3 className='shopping-catogory'>Shoping Cart</h3>
                </div>
            </div>
        </div>
    )
}