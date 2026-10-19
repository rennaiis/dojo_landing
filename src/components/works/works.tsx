import { works } from '../../data'
import Picture from '../Picture'
import './works.scss'

export default function Works(){
    return(
        <section className='works'>
            <div className='works__bg'></div>
            <div className='works__content'>
                <div className='works__header'>
                    <h2 className='works__title'>{works.title}</h2>
                    <p className='works__caption'>{works.caption}</p>
                </div>
                <ul className='works__projects'>
                    {works.projects.map((item, index)=>(
                        <li className='works__project' key={index}>
                            <div  className='works__picture'>
                                <Picture {...item.picture}/>
                            </div>
                            <h3 className='works__card-title'>{item.name}</h3>
                            <ul  className='works__tags'>
                                {item.tags.map((tag, tagId)=>(
                                    <li  className='works__tag' key={tagId}>{tag}</li>
                                ))}
                            </ul>
                            <a className='works__link' href={item.link.href}>
                                <span>{item.link.text}</span>
                                <img className='works__link-icon' src={item.link.icon}/>
                            </a>
                        </li>
                    ))}

                </ul>

            </div>

        </section>
    )
}