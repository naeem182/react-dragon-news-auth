import React from 'react'
import { Outlet } from 'react-router-dom'


const Mainlayoout = () => {
    return (
        <div className=' container mx-auto '>

            <Outlet></Outlet>

        </div>
    )
}

export default Mainlayoout
