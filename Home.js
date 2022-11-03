import React from 'react'
import './Home.css'
import Product from './Product'
/*import { Carousel } from 'bootstrap'*/

export default function Home() {
   
  return (
    <div className='home'>
      <img className='home-image' src="https://accountsandkeys.com/wp-content/uploads/2020/05/free-Amazon-Prime-Video-cover.jpg"/>    
     <div className='home-row'>
     <Product 
       id="12536627"
       title="WildHorn Brown Leather Men's Leather Wallet(WH2052 Crackle)"
       price={199.50}
       rating={3}
       image="https://m.media-amazon.com/images/I/31F3wWUXapL._AC_UF226,226_FMjpg_.jpg"
     />
      <Product 
       id="12536627"
       title="Apple iPhone 13 Pro (512GB) - Graphite"
       price={112900.00}
       rating={5}
       image="https://m.media-amazon.com/images/I/311QJu8o9pL._SY445_SX342_QL70_FMwebp_.jpg"
     />



     </div>
     <div className='home-row'>
     
     <Product 
       id="12536627"
       title="#1
       American Tourister 51 cms Black Casual Backpack (AMT Fizz SCH Bag 03)(33cms x 22cms x 51cms)
       American Tourister 51 cms Black Casual Backpack (AMT Fizz SCH Bag 03)(33cms x 22cms x 51cms)"
       price={798.96}
       rating={4}
       image="https://images-eu.ssl-images-amazon.com/images/I/91FvDEE9sCL._AC_UL450_SR450,320_.jpg"
     />
      <Product 
       id="12536627"
       title="NIVEA Men Face Wash, Dark Spot Reduction, for Clean & Clear Skin with 10x Vitamin C Effect, 100 g"
       price={299.00}
       rating={5}
       image="https://m.media-amazon.com/images/I/41XEwZKWamL._AC_UF226,226_FMjpg_.jpg"
     />
       <Product 
       id="12536627"
       title="Adidas mens running shoes"
       price={1099.00}
       rating={3}
       image="https://m.media-amazon.com/images/I/41+IyBH6eOL._AC_UF226,226_FMjpg_.jpg"
     />

     

     </div>
     <div className='home-row'>
     <Product 
       id="12536627"
       title="Samsung 138 cm (55 inches) Crystal 4K Neo Series Ultra HD Smart LED TV UA55AUE65AKXXL (Black)"
       price={44,978.96}
       rating={5}
       image="https://m.media-amazon.com/images/I/71RhIMc2TBL._AC_UL320_.jpg"
     />
     

     </div>
    
    
    </div>
    

  )

}


