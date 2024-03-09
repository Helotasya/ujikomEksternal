import React from 'react'
import './style/banners.css'
import sponsor from '../components/SPONSOR/GoFood.png'
import sponsor1 from '../components/SPONSOR/GrabFood.png'
import burger from '../components/MENU/burger (7).jpg'
import manis from '../components/MENU/manis (1).jpg'
import { Link } from 'react-router-dom'
import gambar from '../components/DRINK/drinks (2).jpg'
import gambar1 from '../components/MENU/burger (10).jpg'
import gambar3 from '../components/MENU/manis (5).jpg'
import gambar4 from '../components/DRINK/drinks (3).jpg'
import gambar5 from '../components/MENU/burger (11).jpg'
import gambar6 from '../components/MENU/manis (5).jpg'
import gambar7 from '../components/DRINK/drinks (1).jpg'
import gambar8 from '../components/MENU/burger (8).jpg'
import banner from '../components/BANNERS/banner4.png'



const Banners = () => {
  return (
    <div className="main-banners">
      <div className='banner'>
        <img className="bnr" src={banner} alt="" />
        <div className="button-lazy">
          <Link to={"/jakarta"}>
        <button>The parviz's jakarta <span className='arrow'> {">"} </span></button>
        </Link>
      </div>
      </div>
      
      <div className="text">
        <h1>The best artisan hamburgers Café</h1>
        <br />
        <p>The Parviz's serves a tempting range of high-quality handmade American and Germany Hamburgers, french pastries, artisan bread, viennoiseries from its original country, including the best drink in Jakarta.</p>
        <br />
      </div>
      <div className="text-bnr2">
        <h1>The Parviz's</h1>
          <br />
          <span>Monsieur Spoon is a French Bakery-Cafe started by two Parisian cousins in 2012. Based in Bali’s most-visited spots, Monsieur Spoon serves a tempting range of high-quality handmade French pastries, cakes, artisan bread and savouries in a relaxed, friendly environment.​</span>
          <br />
          <div className="space"></div>
          <p>
          Our breads and pastries respect traditional French know-how and are made using selected sourced ingredients. We also serve seasonal fresh juices and house-blend coffee, and customers can enjoy free-wifi throughout our cafes.
          </p>
          <br />
          <p>The bakery is ideal for breakfast and lunch gatherings, and we strive to serve a healthy and delicious menu whatever the time of day. Monsieur Spoon’s signature pastry is the French all-butter croissant a best-seller in Bali.</p>
          
        
        <div className="button-about">
          <Link to={"/about"}>
          <button>learn more</button>
          </Link>
        </div>
      </div>
      <div className="break"> 
          <h1>Try our best selling menu here </h1>
      <div className="sponsor">
        <img src={sponsor} alt="/" />
      </div>
      <div className="sponsor1">
      <img src={sponsor1} alt="/" />
      </div>
      </div>
      <div className="grid-content">
        <div className="item-first">
          <img src={burger} alt="" />
        </div>
        <div className="item-text">
          <div className="text-1">
          <h1>Made by Passion</h1>
          <p>We don’t make things using boxed mixes. 99% of everything we do is prepared here, made here, and baked here.</p>
          </div>
        </div>
        <div className="item-texts item-box">
          <div className="texts-2">
          <h1>Made with Natural Food Ingredients</h1>
          <p>The quality of the ingredients that we use in our baking will directly affect the taste. At Monsieur Spoon we use only natural ingredients with no preservatives.</p>
          </div>
        </div>
        <div className="item-mns">
          <img src={manis} alt="" />
        </div>
      </div>
      <div className="grid-card">
        <img src={gambar} alt="" />
        <img src={gambar1} alt="" />
        <img src={gambar3} alt="" />
        <img src={gambar4} alt="" />
        <img src={gambar5} alt="" />
        <img src={gambar6} alt="" />
        <img src={gambar7} alt="" />
        <img src={gambar8} alt="" />
      </div>
    </div>

  )
}

export default Banners
