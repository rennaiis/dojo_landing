import Picture from '../Picture';
import type { CardProps } from '../propsTypes';
import './card.scss';


export default function Card(cardProps: CardProps){
    const {picture, name, tags, link} = cardProps
    return(
        <a href={link.href} className='card'>
            <div  className='card__picture'>
                <Picture {...picture}/>
            </div>
            <h3 className='card__title'>{name}</h3>
            <ul  className='card__tags'>
                {tags.map((tag, tagId)=>(
                    <li  className='card__tag' key={tagId}>{tag}</li>
                ))}
            </ul>
            <a className='card__link' href={link.href}>
                <span>{link.text}</span>
                <img className='card__link-icon' src={link.icon}/>
            </a>
        </a>        
    )
}