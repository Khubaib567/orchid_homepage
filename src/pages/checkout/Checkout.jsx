import React from 'react';
import './checkout.css'
import bank_img from './imgs/bank.jpg';
import jazz_cash from './imgs/Jazz-Cash.jpg';
import easy_paisa from "./imgs/Easy-pasia.jpg"

const Checkout = () => {
  return (
    <>
      <header>
        <br />
        <h2 style={{ textAlign: 'center' }}>
          THANK YOU FOR ENROLLMENT, PLEASE PROCEED WITH THE PAYMENT <br />
          TO CONFIRM YOUR BOOKING.
        </h2>
      </header>
      <section>
        <h1 style={{ textAlign: 'center' }}>STEP 01:</h1>
        <br />
        <h3 style={{ textAlign: 'center', fontWeight: 'normal' }}>
          Submit your payment on any of the following payment methods.
        </h3>
        <br />
        <div style={{paddingLeft:"30%"}}>
        <hr style={{width:'60%'}} />
        </div>
        <br />
        <div className="container">
          <div className="box">
            <img
              style={{ paddingLeft: '120px', width: '150px', height: '150px' }}
              src={bank_img}
              alt="BANK_IMAGE"
            />
            <h2 style={{ paddingLeft: '160px' }}>BANK</h2>
            <br />
            <p>
              <span style={{paddingLeft: '40px', color: 'black', fontWeight: 'bold' }}>ACCOUNT TITLE</span>: NAME OF ACCOUNT
            </p>
            <p>
              <span style={{paddingLeft: '40px', color: 'black', fontWeight: 'bold' }}>ACCOUNT NUMBER</span>: ACCOUNT NUMBERS
            </p>
            <p>
              <span style={{paddingLeft: '40px', color: 'black', fontWeight: 'bold' }}>BANK NAME</span>: NAME OF BANK
            </p>
          </div>
          <div className="box">
            <img
              style={{ paddingLeft: '120px', width: '150px', height: '150px' }}
              src={jazz_cash}
              alt="BANK_IMAGE"
            />
            <h2 style={{ paddingLeft: '130px' }}>JAZZCASH</h2>
            <br />
            <p>
              <span style={{paddingLeft: '40px', color: 'black', fontWeight: 'bold' }}>ACCOUNT TITLE</span>: NAME OF ACCOUNT
            </p>
            <p>
              <span style={{paddingLeft: '40px', color: 'black', fontWeight: 'bold' }}>ACCOUNT NUMBER</span>: ACCOUNT NUMBERS
            </p>
          </div>
          <div className="box">
            <img
              style={{ paddingLeft: '100px', width: '150px', height: '150px' }}
              src={easy_paisa}
              alt="BANK_IMAGE"
            />
            <h2 style={{ paddingLeft: '110px' }}>EASYPAISA</h2>
            <br />
            <p>
              <span style={{paddingLeft: '40px', color: 'black', fontWeight: 'bold' }}>ACCOUNT TITLE</span>: NAME OF ACCOUNT
            </p>
            <p>
              <span style={{paddingLeft: '40px', color: 'black', fontWeight: 'bold' }}>ACCOUNT NUMBER</span>: ACCOUNT NUMBERS
            </p>
          </div>
        </div>
      </section>
      <section>
        <h1 style={{ textAlign: 'center' }}>STEP 02:</h1>
        <br/>
        <h3 style={{ textAlign: 'center', fontWeight: 'normal' }}>
          Send a screenshot of your payment on our WhatsApp at +92 341 0215001 or{' '}
          <a href="https://api.whatsapp.com/send/?phone=923410215001&text&type=phone_number&app_absent=0">
            Click here
          </a>
          , your enrollment will be confirmed in 24 hours.
        </h3>
        <br />
        <div style={{paddingLeft:"30%"}}>
        <hr style={{width:'60%'}} />
        </div>
        <br />  
        <h1 style={{ textAlign: 'center' }}>Still have questions? Call us or WhatsApp at +92 304 0215001.</h1>
            
      </section>
    </>
  );
};

export default Checkout;