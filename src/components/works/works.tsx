import { works } from '../../data'
import Card from '../card/card'
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
                        <li key={index}>
                            <Card {...item}/>
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    )
}