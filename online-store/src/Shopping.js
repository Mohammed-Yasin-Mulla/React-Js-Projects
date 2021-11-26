import React from "react";
import productImg from "./images/product.jpeg";
import data from "./itemData";

const obj = {
  totalValue: [],
};

export default function Shopping() {
  const [sum, SetSum] = React.useState(0);

  const reviewdatas = data.data.map((data) => {
    return (
      <div className="item">
        <div className="item--cointainer">
          <img src={productImg} alt="product image" />
          <h4>{data.name}</h4>
          <h5>${data.price}</h5>
          <input
            type="checkbox"
            value={data.price}
            name={data.name}
            onChange={handleChange}
          />
        </div>
        <hr className="item--hr" />
      </div>
    );
  });

  const displayPrice = obj.totalValue.map((data) => {
    return <li>{data}</li>;
  });
  console.log(displayPrice);

  function handleChange(event) {
    const { name, value, checked } = event.target;

    console.log(value);
    console.log(name);
    console.log(checked);
    if (checked === true) {
      obj.totalValue.push(`${name}-------${value}`);
      SetSum((prevValue) => {
        return prevValue + value;
      });
    } else if (checked === false) {
      for (let i = 0; i < obj.totalValue.length; i++) {
        if (obj.totalValue[i] === `${name}-------${value}`) {
          obj.totalValue.splice(i, 1);
          SetSum((prevValue) => {
            return prevValue - value;
          });
        }
      }
    }
  }
  console.log(obj.totalValue);
  console.log(sum);

  return (
    <div className="shopping">
      <div className="shopping--cointainer">
        <div className="shopping-head">
          <h3 className="shopping-catogory">Category</h3>
        </div>
        <ul className="shopping--list">
          <li className="shopping-list-item">
            <a href="#product1" className="shopping-link">
              Category 1
            </a>
          </li>
          <li className="shopping-list-item">
            <a href="#product2" className="shopping-link">
              Category 2
            </a>
          </li>
          <li className="shopping-list-item">
            <a href="#product3" className="shopping-link">
              Category 3
            </a>
          </li>
          <li className="shopping-list-item">
            <a href="#product4" className="shopping-link">
              Category 4
            </a>
          </li>
          <li className="shopping-list-item">
            <a href="#product5" className="shopping-link">
              Category 5
            </a>
          </li>
          <li className="shopping-list-item">
            <a href="#product6" className="shopping-link">
              Category 6
            </a>
          </li>
        </ul>
      </div>
      <div className="shopping--cointainer">
        <div className="shopping-head">
          <h3 className="shopping-catogory">Items</h3>
        </div>
        <div className="shopping--product-item">
          <div className="shopping--product-heading">
            <h5 id="product1">Product 1</h5>
          </div>
          {reviewdatas}
          <div className="shopping--product-heading">
            <h5 id="product2">Product 2</h5>
          </div>
          {reviewdatas}
          <div className="shopping--product-heading">
            <h5 id="product3">Product 3</h5>
          </div>
          {reviewdatas}
          <div className="shopping--product-heading">
            <h5 id="product4">Product 4</h5>
          </div>
          {reviewdatas}
          <div className="shopping--product-heading">
            <h5 id="product5">Product 5</h5>
          </div>
          {reviewdatas}
          <div className="shopping--product-heading">
            <h5 id="product6">Product 6</h5>
          </div>
          {reviewdatas}
        </div>
      </div>
      <div className="shopping--cointainer">
        <div className="shopping-head">
          <h3 className="shopping-catogory">Shoping Cart</h3>
        </div>
        <ul className="item--list">{displayPrice}</ul>
        <hr />
        <br />
      </div>
    </div>
  );
}
