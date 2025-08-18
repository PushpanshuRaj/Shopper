import React, { useContext } from "react";
import './ProductDisplay.css';
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../content/ShopContext";

const ProductDsiplay =(props)=> {

      const {product}=props;
      const {addToCart} = useContext(ShopContext);

      return(
            <div className="productdsiplay">
                  <div className="productdsiplay-left">
                        <div className="productdsiplay-img-list">
                              <img src={product.image} alt=''/>
                              <img src={product.image} alt=''/>
                              <img src={product.image} alt=''/>
                              <img src={product.image} alt=''/>
                        </div>
                        <div className="productdsiplay-img">
                              <img className="productdsiplay-main-img" src={product.image} alt=''/>
                        </div>
                  </div>
                  <div className="productdsiplay-right">
                        <h1>{product.name}</h1>
                        <div className="productdsiplay-right-stars">
                              <img src={star_icon} alt=""/>
                              <img src={star_icon} alt=""/>
                              <img src={star_icon} alt=""/>
                              <img src={star_icon} alt=""/>
                              <img src={star_dull_icon} alt=""/>
                              <p>(122)</p>
                        </div>
                        <div className="productdsiplay-right-prices">
                              <div className="productdsiplay-right-prices-old">${product.old_price}</div>
                              <div className="productdsiplay-right-prices-new">${product.new_price}</div>
                        </div>
                        <div className="productdsiplay-right-description">
                              description of the item
                        </div>
                        <div className="productdsiplay-right-size">
                              <h1>Select Size</h1>
                              <div className="productdsiplay-right-sizes">
                                    <div>S</div>
                                    <div>M</div>
                                    <div>L</div>
                                    <div>XL</div>
                                    <div>XXL</div>
                              </div>
                        </div>
                        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                        <p className="productdsiplay-right-category"><span>Category :</span>Women , T-Shirt , Crop Top</p>
                        <p className="productdsiplay-right-category"><span>Tags :</span>Modern , Latest</p>
                  </div>
            </div>
      )
}

export default ProductDsiplay;