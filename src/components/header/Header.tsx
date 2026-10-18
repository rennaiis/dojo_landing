
import { useState } from 'react'
import { header } from '../../data'
import Button from '../button/Button'
import './header.scss'
export default function Header(){
    const [isOpen, setIsOpen] = useState(false)
    return(
        <header className='header'>
            <div className="header__bg"></div>
            <div className="header__content">
                <div className='header__container'>
                    <h3 className="header__wordmark">{header.companyName}</h3>
                    <div className='header__iconContainer'
                        onClick={()=>setIsOpen(!isOpen)}>
                        <img 
                            className='header__menu' 
                            src={isOpen? header.closeButton : header.menuButton}
                        />
                    </div>
                </div>
                <nav className={`header__links ${isOpen ? 'header__links_open': ''}`} >
                    {header.links.map((link, index)=>(
                        <a className="header__link" key={index} href={link.href}>
                            {link.text}
                        </a>
                    ))}
                </nav>
                <div className={`header__button ${isOpen ? 'header__button_open': ''}`}>
                    <Button {...header.button}/>
                </div>
                
            </div> 
        </header>
    )
}