
import { header } from '../../data'
import Button from '../button/Button'
import './header.scss'
export default function Header(){
    

    return(
        <header className="header">
            <div className="header__bg"></div>
            <div className="header__content">
                <h3 className="header__wordmark">{header.companyName}</h3>
                <nav className="header__links">
                    {header.links.map((link, index)=>(
                        <a className="header__link" key={index} href={link.href}>
                            {link.text}
                        </a>
                    ))}
                </nav>
                <Button {...header.button}/>
            </div> 
        </header>
    )
}