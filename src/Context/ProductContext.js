import React, { createContext, useState } from 'react'
import axios from 'axios';

export const Data = createContext();


const TourContext = ({children}) => {
    const [Apidata, setApidata] = useState(null);
       
    // get data
    const Getdata = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        const data = response.data;
        setApidata(data)
    };

  return (
    <>
    <Data.Provider value={{Apidata,setApidata,Getdata
      }}>
        {children}
    </Data.Provider>
    </>
  )
}

export default TourContext