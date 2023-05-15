import React from 'react'
import { card } from '../assets';
import styles, {layout} from '../style';
import Button from './Button';


const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better Card deal, <br className='sm:block hidden'/> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[500px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis accusantium tenetur sequi quod nulla aut modi, ut molestias dolorum vel harum in incidunt neque voluptatem dolor accusamus repellendus, at odio!</p>
        <Button styles='mt-10'/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        <img src={card} alt='card' className='w-[100%] h-[100%]'/>
      </div>
    </section>
)


export default CardDeal