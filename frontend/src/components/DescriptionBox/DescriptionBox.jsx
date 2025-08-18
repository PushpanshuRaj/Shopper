import React from "react";
import './DescriptionBox.css';

const DescriptionBox =()=> {
      return(
            <div className="descriptionbox">
                  <div className="descriptionbox-navigator">
                        <div className="descriptionbox-nav-box">Description</div>
                        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
                  </div>
                  <div className="descriptionbox-description">
                        <p>An e-commerce website is an online platform that enables businesses and individuals to buy and sell goods or services over the internet. It serves as a digital storefront where users can browse products, view detailed descriptions, add items to a shopping cart, and complete purchases through secure payment gateways. These websites are accessible 24/7, allowing customers to shop at their convenience from anywhere. </p>
                        <p>E-commerce websites typically feature user authentication, product listings, filtering options, shopping cart functionality, and a checkout process that includes delivery and payment details. Built using modern web technologies like HTML, CSS, JavaScript, and frameworks such as React.js for the frontend and Node.js or Django for the backend, they provide a seamless shopping experience. E-commerce platforms benefit businesses by reducing operational costs and reaching a broader customer base, while offering users the advantages of comfort, variety, and time-saving.</p>
                  </div>
            </div>
      )
}

export default DescriptionBox;