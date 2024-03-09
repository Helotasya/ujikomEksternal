import React from 'react'
import '../components/style/footer.css'
import logofoot from '../components/assets1/resto.png'

const Footer = () => {
  return (
    <div className="parent">
        <div className='contain-foot'>
        <img src={logofoot} alt="" />
        <div className="text-co-foot">
        Monsieur Spoon is a French Bakery-Cafe started by two Parisian cousins in 2012. Based in Bali’s most-visited spots, Monsieur Spoon serves a tempting range of high-quality handmade French pastries, cakes, artisan bread and savouries in a relaxed, friendly environment.​
        </div>
    </div>
    <div className="foot-bottom">
        <p>2024© Champ Resto Indonesia. All rights reserved.</p>
    </div>
    </div>
  )
}

export default Footer
