import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'

const Nav = () => {
    const [pop,Setpop] = useState(false);
    const tooglepop = () =>{
        Setpop(!pop)
    }
    return (
        <nav className='navbar'>
            <h1 className='
            nav_title'>Amigo <span className='nav_next'>Shopping</span></h1>
            <div className='nav_menu'>
                {/* hello  welcome to the website*/}
                <Link to='/'>Home</Link >
                <Link to='/Products'>Products</Link >
                <Link to='/Cart'>Cart</Link >
                <button className='Login' onClick={tooglepop}>Login</button>
                {
                    pop && (
                        <div className='popup'>
                            <div>
                            <h1 className='popup_button' onClick={tooglepop}>x</h1> 
                            <h1>This App is not fully setup 
                                <span style={{color:'green'}}> Click cancel to back </span>
                            </h1>
                            </div>
                        </div>
                    )
                }
            </div>
        </nav>
    )
}

export default Nav