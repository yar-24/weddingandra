import React from 'react'

import './ItemFitur.css'

const ItemFitur = ({icon, titles,subtitle}) => {
  return (
    <div className='col-lg-3 col-md-4 col-xs-6'>
        <div className='Icon-fitur flex__center'>
        <i href='#' style={{color:'#adc5b7', fontSize:43}}>{icon}</i>
        </div>
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{titles}</p>
        <p className="p__opensans" style={{ color: '#AAAAAA' }}>{subtitle}</p>
    </div>
  )
}

export default ItemFitur;

