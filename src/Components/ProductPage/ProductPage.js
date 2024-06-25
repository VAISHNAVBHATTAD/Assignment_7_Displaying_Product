import React from "react";
import ProductDetails from "../ProductDetails/ProductDetails";


const ProductPage =()=>{
    const product =[
        {Name : "BMW X7" , Price : "1.27Cr" , Description : '6/7 seater luxury & offered with both petrol and desiel engien.'},
        {Name : "MERCEDES-Benz GLS" , Price : "1.32Cr" , Description : '5/7 seater luxury & offered with petrol engien.'},
        {Name : "Mahindra Thar" , Price : "17.60Lakh" , Description : '4/5 seater & offered with petrol engien.'},
        {Name : "Tata Punch EV" , Price : "15.79Lakh" , Description : '5/6 seater & offered with electric quick charging capability.'},
    ]
    return(
        <div className = "product-page" >
            <h1> ProductPage </h1>
            <ProductDetails product = {product} />
        </div>
    );
};
export default ProductPage;