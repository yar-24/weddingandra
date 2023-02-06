import React from 'react'

import { ItemFitur, SubHeading } from '../../components'
import data from '../../constants/data'


import './Fitur.css'

const Fitur = () => {
  return (
    <div className='app__fitur app__wrapper-fitur flex__center section__padding' id='fitur'>
        <div className='app__fitur-tittle'>
            <h1 className='headtext__cormorant'>Fitur Tersedia</h1>
            <SubHeading title='Fitur-fitur yang digunakan dalam undangan online' />
        </div>
        <div className='app__fitur-rows'> 
                {data.fiturs.map((fitur, index) => (
                    <ItemFitur key={fitur.titles + index} icon={fitur.icon} titles={fitur.titles} subtitle={fitur.subtitle} />
                ))}
        </div>
    </div>
  )
}

export default Fitur