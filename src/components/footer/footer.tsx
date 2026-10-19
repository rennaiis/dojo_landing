import { footer } from '../../data'
import Button from '../button/Button'
import './footer.scss'

export default function Footer(){
    return(
        <section className='footer'>
            <div className='footer__bg'></div>
            <div className='footer__content'>
                <div className='footer__container'>
                    <h2 className='footer__title'>{footer.title}</h2>
                    <p className='footer__email'>{footer.email}</p>
                    <div className='footer__button'>
                        <Button {...footer.button}/>
                    </div>
                </div>
                <div className='footer__marks'>
                    <p className='footer__caption'>{footer.mark}</p>
                    <p className='footer__caption'>{footer.caption}</p>
                </div>
            </div>
        </section>
    )
}