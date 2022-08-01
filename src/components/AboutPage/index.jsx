import React from 'react'
import { AlwaysPan, Bowcolor, Bowcolorimg, Bowimg, Bows, Collor, Colorimg, Dirtycon, Edition, EditionMidle, Glass, Glasscolorimg, Glassimg, Leftimg, Maincontainer, Pan, Pancolorimg, Panimg, Plate, Plateimg, Platescolorimg, Product, Rightimg, Text, Titlecon } from './style'
import collor from '../../assests/img/collor.png'
import product from '../../assests/img/tova.png'
import bowimg  from '../../assests/img/bowimg.png'
import glassimg from '../../assests/img/glassimg.png'
import plateimg from '../../assests/img/plateimg.png'
import panimg from '../../assests/img/pan.png'
import colorimg from '../../assests/img/bowcolor.png'
import glasscolorimg from '../../assests/img/glasscolorimg.png'
import platescolorimg from '../../assests/img/platescolorimg.png'
import pancolorimg from '../../assests/img/pancolorimg.png'
import leftimg from '../../assests/img/Leftimg.png'
import rightimg from '../../assests/img/rightimg.png'



const AboutPage = () => {
  return (
    <Maincontainer>
        <AlwaysPan>
            <Text><h1>Designed for Everything and Always</h1></Text>
             <Collor src={collor}/>
             <p>Lorem ipsum dolor sit amet.</p>
             <Product src={product} />
        </AlwaysPan>
        <Edition>
          <h1>From curated essentials to <br /> limited-run editions.</h1>
           <p>We make products inspired by traditions  and we're <br /> 
           starting with one you might be familiar with: Dinner.</p>
          <EditionMidle>
           <Bows>
               <Bowimg src={bowimg}/>
               <h1>Side Bowls</h1>
               <h2>SET OF 4 -$45</h2>
               <p>Hand-painted porcelain <br />
                stackable bowls, designed for <br />
                plating, eating, and scooping.</p>
                <Colorimg src={colorimg}/>
           </Bows>
           <Glass>
            <Glassimg src={glassimg} />
            <h1>Drinking Glasses</h1>
            <h2>SET OF 4 -$50</h2>
            <p>Hand-made and stackable. <br />
             Made from recycled glass <br />
             and natural sand. Naturally <br />
             colored, without dyes.</p>
             <Glasscolorimg src={glasscolorimg} />
           </Glass>
           <Plate>
            <Plateimg src={plateimg} />
            <h1>Main Plates</h1>
            <h2>SET OF 4 -$50</h2>
            <p>Hand-painted porcelain <br />
             plates, stackable and <br />
             designed for big appetites.</p>
             <Platescolorimg src={platescolorimg}/>
           </Plate>
           <Pan>
            <Panimg src={panimg} />
            <h1>Always Pan</h1>
            <h2>145$</h2>
            <p>Thoughtfully designed to be <br />
             the perfect size and shape to <br />
              do the work of eight pieces of <br />
               traditional cookware.</p>
               <Pancolorimg src={pancolorimg} />
           </Pan>
           </EditionMidle>
        </Edition>
        <Dirtycon>
          <Leftimg src={leftimg} />
          <Titlecon>
            <p>#DirtyDishes</p>
            <h1>A full sink is a sign of a great night.<br />
             You wash, we'll dry.</h1>
             <button>Follow Along</button>

          </Titlecon>
          <Rightimg src={rightimg}/>
        </Dirtycon>
        
    </Maincontainer>
  )
}

export default AboutPage