import React , {createContext, useState} from 'react';
import dslr from '../assets/dslr.jpg';
import glasses from '../assets/glasses.jpg'
import headphone from '../assets/headphone.jpg'
import microphone from '../assets/microphone.jpg'
import mobile from '../assets/mobile.jpg'
import shirt from '../assets/shirt.jpg'
import shoes from '../assets/shoes.jpg'
import watch from '../assets/watch.jpg'
import perfume from '../assets/perfume.jpg'
import bracelet from '../assets/bracelet.jpg'
import ring from '../assets/ring.jpg'
import purse from '../assets/purse.jpg'
import clock from '../assets/clock.jpg'
import table from '../assets/table.jpg'
import sofa from '../assets/sofa.jpg'
import cup from '../assets/cup.jpg'
import dining  from '../assets/dining table.jpg'
import computer from '../assets/computer.jpg'
import bed from '../assets/bed.jpg'
import laptop from '../assets/laptop.jpg'



export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
      const [products] =  useState([
          {id: 1 , name: "Dslr" , price: 350 , image: dslr, status: "hot"},
          {id: 2 , name: "Shirt" , price: 50 , image: shirt, status: "new"},
          {id: 3 , name: "Shoes" , price: 80 , image: shoes, status: "hot"},
          {id: 4 , name: "Watch" , price: 30 , image: watch, status: "new"},
          {id: 5 , name: "Glasses" , price: 40 , image: glasses, status: "new"},
          {id: 6 , name: "Mobile" , price: 600 , image: mobile, status: "hot"},
          {id: 7 , name: "Head Phone" , price: 200 , image: headphone, status: "hot"},
          {id: 8 , name: "Micro Phone" , price: 45 , image: microphone, status: "new"},
          {id: 9 , name: "Perfume" , price: 25 , image: perfume, status: "hot"},
          {id: 10 , name: "Bracelet" , price: 15 , image: bracelet, status: "new"},
          {id: 11 , name: "Ring" , price: 45 , image: ring, status: "hot"},
          {id: 12 , name: "Purse" , price: 45 , image: purse, status: "new"},
          {id: 13 , name: "Cup" , price: 5 , image: cup, status: "new"},
          {id: 14 , name: "Sofa Set" , price: 800 , image: sofa, status: "new"},
          {id: 15 , name: "Table" , price: 250 , image: table, status: "hot"},
          {id: 16 , name: "Clock" , price: 100 , image: clock, status: "hot"},
          {id: 17 , name: "Dining Table" , price: 1500 , image: dining, status: "new"},
          {id: 18 , name: "Bed Set" , price: 950 , image: bed, status: "hot"},
          {id: 19 , name: "Computer" , price: 680 , image: computer, status: "hot"},
          {id: 20 , name: "Laptop" , price: 500 , image: laptop, status: "new"},


      ]);
    return(

        <ProductsContext.Provider value={{products: [...products]}}>
            {props.children}

        </ProductsContext.Provider>
    )

}

export default ProductsContextProvider;