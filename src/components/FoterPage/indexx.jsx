import React from 'react'
import { Company, Con, Containerr, Flagimg1, Flagimg2, Footercon, Footercond, Footleft, Footright, Leftcon, Raytimg, Rightcon, Shop, Social, Youcon } from './stylee'
import flagimg1 from '../../assests/img/flagimg1.png'
import flagimg2 from '../../assests/img/flagimg2.png'
import raytimg from '../../assests/img/raytimg.png'




const FoterPage = () => {
  return (
    <Containerr>
      <Footercon>
        <Footleft>
           <h1>Keep in touch</h1>
           <p>Be the first to know about new collections, special events, 
            and what’s going on at Our Place.</p>
           <input type="text" placeholder='Your email' />
           <button>SUBMIT</button>
        </Footleft>
        <Footright>
          <Con>
            <Shop>
              <h1>SHOP</h1>
              <p>Main Plates</p>
              <p>Side Bowls</p>
              <p>Drinking Glasses</p>
              <p>Family Dinner</p>
              <p>Bundle</p>
            </Shop>
            <Company>
              <h1>COMPANY</h1>
              <p>Mission</p>
              <p>FAQs</p>
              <p>Contact Us</p>
              <p>Returns</p>
              <p>Bulk Orders</p>
              <p>Careers</p>
            </Company>
            <Social>
              <h1>SOCIAL</h1>
              <p>Instagram</p>
              <p>Twitter</p>
            </Social>
            </Con>
            <Youcon>
              <h1>You're In</h1>
              <Flagimg1 src={flagimg1} />
              <Flagimg2 src={flagimg2} />
            </Youcon>
        </Footright>
      </Footercon>
      <Footercond>
           <Leftcon>
               <h1>Copyright 2021</h1>
           </Leftcon>
           <Rightcon>
               <h1>Copyright 2021</h1>
               <h1>Privacy</h1>
               <h1>Terms</h1>
               <h1>Returns</h1>
               <Raytimg src={raytimg} />
           </Rightcon>
      </Footercond>
    </Containerr>
  )
}

export default FoterPage