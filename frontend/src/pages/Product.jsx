import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrum/Breadcrum";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import ProductDsiplay from "../components/ProductDisplay/ProductDisplay";
import RelatedProduct from "../components/RelatedProduct/RelatedProduct";
import { ShopContext } from "../content/ShopContext";

const Product =()=> {

      const {all_product}= useContext(ShopContext);
      const {productId}= useParams();
      const product= all_product.find((e)=>e.id===Number(productId));
      
      return(
            <div>
                  <Breadcrum product={product}/>
                  <ProductDsiplay product={product}/>
                  <DescriptionBox />
                  <RelatedProduct/>
            </div>
      )
}

export default Product;