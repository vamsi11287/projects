import React, { useContext, useState,createContext } from 'react'
const context = createContext();
const AppProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const alldata = (item) => {
        let a = [...cart.concat(item)]
        console.log("a", a);
        setCart(a)
    }
    return (
        <context.Provider value={{ alldata, cart, }} >
            {children}
        </context.Provider>)
}
export const Vamsi = () => {
    return useContext(context)
}
export { context, AppProvider }

