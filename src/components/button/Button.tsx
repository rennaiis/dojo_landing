import type { ButtonProps } from '../propsTypes';
import './button.scss';

export default function Button(buttonProps: ButtonProps){
    const {text, icon, href} = buttonProps
    return(
        <a className="button" href={href}>
            <span className="button__text">{text}</span>
            <img className="button__icon" src={icon}/>
        </a>
    )
}