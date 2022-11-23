import React from 'react'
import Button from 'react-bootstrap/Button';
import '../css/CartItem.css'


export default function CartItem(props) {
  
  
  const {
    id,
    img,
    author,
    title,
    price,
    qty,
    removeItemFromCart
  } = props 


  return (
    
    <li className="items">
        <div className="infoWrap"> 
          <div className="cartSection">
            <img alt="" src={img} className="itemImg" />
            <p className="itemNumber">Product ID: {id}</p>
            <h3>{title}</h3>
            <p> <input type="text" disabled className="qty" placeholder={qty}/> x ${price}</p>
            <p className="stockStatus"> In Stock</p>
          </div>  
          <div className="prodTotal cartSection">
            <p>${price * qty}</p>
          </div>
          <div className="cartSection removeWrap">
            <Button onClick={() => removeItemFromCart(id)}  className="remove-product">X</Button>
          </div>
        </div>
    </li>
    

  )
}



/*

<tr>
        <td>
            <img variant="top" src={img} width={100} height={100} />
            <p>Author: {author}</p>
            <p>Title: {title}</p>          
        </td>
        <td>{qty}</td>
        <td>${price}</td>
        <td><Button onClick={() => removeItemFromCart(id)}>X</Button></td>
</tr>


<li class="items odd">
          <div class="infoWrap"> 
            <div class="cartSection">
              <img alt="" class="itemImg" />
              <p class="itemNumber">#QUE-007544-002</p>
              <h3></h3>
              <p> <input type="text"  class="qty" placeholder="3"/> x $5.00</p>
              <p class="stockStatus"> In Stock</p>
            </div>  
            <div class="prodTotal cartSection">
              <p>$15.00</p>
            </div>
            <div class="cartSection removeWrap">
              <a href="#" class="remove">x</a>
            </div>
          </div>
</li>





*/

