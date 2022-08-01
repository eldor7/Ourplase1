import React from 'react'
import {Brend, Brend1, Brend2, Brend3, Brend4, Brendimg, Container, Leftcon, Login, Logo, MenuCon,  Rightcon,  Skillet,  Tatle, Welcomecon, Wrapper } from './stayle'
import brend1 from '../../assests/img/brend1.png'
import brend2 from '../../assests/img/brend2.png'
import brend3 from '../../assests/img/brend3.png'
import brend4 from '../../assests/img/brend4.png'
import logo from '../../assests/img/logo.png'


const HomePage = () => {
  return (
    <Container>
        <Wrapper>
           <Tatle>SHIPPING AND RETURNS ARE ALWAYS FREE FROM OUR PLACE TO YOURS 🙂</Tatle>
        </Wrapper>
        <Wrapper.Main>
            <MenuCon>
                <p>SHOP</p>
                <p>ALWAYS PAN</p>
            </MenuCon>
            <Logo src={logo} />
            <MenuCon>
                <p>SHOP</p>
                <p>ALWAYS PAN</p>
                <button>0</button>
            </MenuCon>
        </Wrapper.Main>
        <Skillet>
          
            <Leftcon>
              <p>Meet The Always Pan</p>
              <h1>Your new <br /> <ins>skillet</ins></h1>
              <button>Shop the Always Pan</button>
            </Leftcon>
            <Rightcon></Rightcon>
        </Skillet>
        <Brend>
          <h1>"Doing the job of eight traditional cookware <br /> pieces"</h1>
          <Brendimg>
            <Brend1 src={brend1}/>
            <Brend2 src={brend2}/>
            <Brend3 src={brend3} />
            <Brend4 src={brend4} />
          </Brendimg>
        </Brend>
        <Welcomecon>
          <h1>Welcome to Our <br /> Place</h1>
          <p>At Our Place, we believe in the power of home-cooking to bring people together. Our <br />
           collections are new heirlooms from the cultures and places that make up the fabric of the <br /> 
           modern multi-ethnic kitchen. We design thoughtfully, source ethically, and produce <br />
          sustainably because what we make is connected to one another and the earth we share.</p>
        </Welcomecon>
    </Container>
  )
}

export default HomePage