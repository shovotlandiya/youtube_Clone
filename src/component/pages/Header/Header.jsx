import React from 'react'
import './Header.css'
import Camera from '../../../Assets/img/camera.svg'
import Prilojeniya from '../../../Assets/img/prilojeniya.svg'
import Kolokolnik from '../../../Assets/img/kolokolnik.svg'
import Userpic from '../../../Assets/img/Userpic.svg'
import { useNavigate } from 'react-router-dom'

function Header(){
    const navigate=useNavigate()



    return(

        <header className='header'>
            <div>
                <button className='navigate' onClick={()=>navigate(-1)}>Prev</button>
                <button className='navigate'  onClick={()=>navigate(1)}>Next</button>
            <input className='header__input' type="text" placeholder='Search' />
            </div>
            <div className='header__images'>
                <img src={Camera} alt="" />
                <img src={Prilojeniya} alt="" />
                <img src={Kolokolnik} alt="" />
                <img src={Userpic} alt="" />
            </div>
         
        </header>
    )
}
export default Header;