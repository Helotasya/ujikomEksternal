import React from 'react'
import '../components/style/aboutus.css'
import foto from '../components/MENU/BurgerRoti3.jpg'
import foto1 from '../components/MENU/burger (23).jpg'
import foto2 from '../components/MENU/burger (21).jpg'
import foto3 from '../components/MENU/burger (22).jpg'
import gmbr from '../components/OUTLETS/viewOut (1).jpg'
import gmbr1 from '../components/OUTLETS/viewOut (2).jpg'
import gmbr2 from '../components/OUTLETS/viewOut (3).jpg'
import gmbr3 from '../components/OUTLETS/viewOut (4).jpg'
import gmbr4 from '../components/OUTLETS/viewOut (5).jpg'
import gmbr5 from '../components/OUTLETS/viewOut (6).jpg'
import gmbr6 from '../components/OUTLETS/viewOut (7).jpg'
import gmbr7 from '../components/OUTLETS/viewOut (8).jpg'
import gmbr8 from '../components/OUTLETS/viewOut (9).jpg'
import chef from '../components/OUTLETS/chef.jpg'

const AboutUs = () => {
  return (
    <div className='resto'>
      <div className="all-about">
        <h1>Hello, We are The Parviz's.
          Established 2012 – Jakarta.</h1>
        <h2>Since 2012, The Parviz's has been striving to find the best flour to make out finest Hamburgers, the Artisan Bucheron and the Baguette Tradition every night, ready for you to enjoy in the morning. Our wild yeast is an 8-year long secret, fermenting naturally somewhere in Jakarta. Started by two Parisian cousins in 2012.</h2>
        <h3>
          Based in Los Angeles most-visited spots, Monsieur Spoon serves a tempting range of high-quality handmade French pastries, cakes, artisan bread and savouries in a relaxed, friendly environment. The bakery is ideal for breakfast and lunch gatherings, and we strive to serve a healthy and delicious menu whatever the time of day.</h3>
      </div>
      <div className='garis'></div>
      <div className="our-resto">
        <h1>
          American Germany Hamburgers is part of our heritage and was introduced to us in our early years.</h1>
        <div className="img-bottom">
          <div className="item">
            <img src={foto} alt="" />
          </div>
          <div className="item">
            <img src={foto1} alt="" />
          </div>
          <div className="item">
            <img src={foto2} alt="" />
          </div>
          <div className="item">
            <img src={foto3} alt="" />
          </div>
        </div>
      </div>
      <div className='garis2'></div>
      <div className="outlet">
        <div className="text-outlet">
          <h2>Our Outlets</h2>
        </div>
        <div className="wrap-outlet">
          <div className="grid1 style-grid">
            <img src={gmbr} alt="" />
          </div>
          <div className="grid1 style-grid">
            <img src={gmbr1} alt="" />
          </div>
          <div className="grid1 style-grid">
            <img src={gmbr2} alt="" />
          </div>
          <div className="grid1 style-grid">
            <img src={gmbr3} alt="" />
          </div>
          <div className="grid1 style-grid">
            <img src={gmbr4} alt="" />
          </div>
          <div className="grid1 style-grid">
            <img src={gmbr5} alt="" />
          </div>
          <div className="grid1 style-grid">
            <img src={gmbr6} alt="" />
          </div>
          <div className="grid1 style-grid">
            <img src={gmbr7} alt="" />
          </div>
          <div className="grid1 style-grid">
            <img src={gmbr8} alt="" />
          </div>
        </div>
      </div>
      <div className='garis2'></div>
      <div className="bungkus">
      <div className="chef">
        <img src={chef} alt="" />
      </div>
      <div className="word">
        <h5>
        “Our Hamburgers and pastries respect traditional American, Germany, French know-how and are made using selected sourced ingredients. We also serve seasonal fresh juices and house-blend coffee, and customers can enjoy free-wifi throughout our cafes. The Parviz's signature Hamburgers is the American all-butter croissant a best-seller in Los Angeles.”
        </h5>
      </div>
      </div>
    </div>
  )
}

export default AboutUs
