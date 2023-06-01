import React from 'react'

import { planDetails } from '../data/data'
import icon from '../images/icon-music.svg'

const OrderCard = ({ name, price, duration}) => {
    return (
        <main className='order-card'>
            <div className='plan'>
                <img src={icon} alt="" className='music-icon' />
                <div className='plan-details'>
                    <h4 className='plan-title'>{name}</h4>
                    <p className='cost'>${price}/{duration}</p>
                </div>
            </div>
            <a href="/" className='change'>Change</a>
            
        </main>
    )
}

const SummaryCard = () => {
  return (
    <main className='card'>
        <header className='card-header'>
            <h1 className='header-title'>Order Summary</h1>
            <p className='header-subtext'>
                You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
            </p>
        </header>
        
        <OrderCard {...planDetails} />
        
        

        <footer className='card-footer'>
             <button className='submit'>Proceed to Payment</button> 
             <a href="/" className='cancel'>Cancel Order</a>
        </footer>      

        
    </main>
  )
}

export default SummaryCard