import { intro } from '../../data'
import Picture from '../Picture'
import './intro.scss'

export default function Intro(){
    return(
        <section className='intro' id='intro'>
            <div className='intro__bg'></div>
            <div className='intro__content'>
                <ul className='intro__tags'>
                    {intro.tags.map((item, index)=>(
                        <li className='intro__tag' key={index}>{item}</li>
                    ))}
                </ul>
                <div className='intro__container'>
                    <div className='intro__titleContainer'>
                        {intro.title.map((item, index)=>(
                            <h1 className='intro__title' key={index}>{item}</h1>
                        ))}
                    </div>
                    <p className='intro__text'>{intro.text}</p>
                    <p className='intro__caption'>{intro.caption}</p>
                </div>
                <div className='intro__picture'>
                    <Picture {...intro.picture}/>
                </div>
            </div>

        </section>
    )
}