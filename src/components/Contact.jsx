import React from 'react'
import '../components/style/contact.css'
import '../components/style/buttonBack.css'

const Contact = () => {
  return (
    <div className='info-contact'>
      <div className="call">
        <h3>
          <span>CONTACT US</span>
        </h3>
        <br/>
        <div className="lazy-body">
        <p>
        We also accept internal delivery service for you, just place your order D-1.
        <br/>
        For more inquiries, please contact us via WhatsApp at:
        <br/>
        BALI :
        <strong> +123456789</strong>
        <br/>
        We deliver everyday – Internal delivery service hour: 07.00 – 09.00 for all Bali’s outlet.
        <br/>
        JAKARTA :
        <strong> +098765543</strong>
        <br/>
        We deliver everyday – Delivery service hour: 07.00 – 17.00 for all Jakarta’s outlet.
      </p>
      <p className='yo'>
        <strong>
        Special Operational hours (During Covid-19):
        </strong>
      </p>
      <p>
        <strong>
        Petitenget
        </strong>
        <br />
        Dine In & Takeaway : 07.00 – 21.00
        <br />
        Deliveries (Grab Food & Go Food): 07:30 – 20.30
      </p>
      <p>
        <strong>
          Umalas
        </strong>
        <br />
        Dine In & Takeaway : 07:00 – 15.00
        <br />
        Deliveries (Grab Food & Go Food): 07:30 – 14:30
      </p>
      <p>
        <strong>
          Canggu
        </strong>
        <br />
        Dine In & Takeaway : 07.00 – 21.00
        <br />
        Deliveries (Grab Food & Go Food): 07:30 – 20.30
      </p>
        </div>
      </div>
      <div className="location">
        <div className="isi-loc">
        <h1><span>locations</span></h1>
        </div>
        <div className="isi-body">
          <p>
          We are also well known for the multi cultural atmosphere in our Canggu and Ubud shops. So make sure to come drop by!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
