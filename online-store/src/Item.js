import React from 'react'
import productImg from './images/product.jpeg'
import data from './itemData'

export default function Item(props){

    const [productDetail, setProductDetail] = React.useState({
        'checked' : false,
        'value': 0
    })

   
   function handleChange(event) {
        
        setProductDetail(productDetail => {
           
            return {
                ...productDetail,
                [event.target.name]: event.target.checked,
                'value' : event.target.value
            }
        })
    }
    console.log(productDetail.value)

    return(
        <div className="item">
            <div className="item--cointainer">
                <img src={productImg} alt="" />
                <h4>{props.name}</h4>
                <h5>${props.price}</h5>
                <input type="checkbox" checked={productDetail.checked } onChange={handleChange} value={props.price}  name='checked' />
            </div>
            <hr className="item--hr" />
        </div>
    )
}

