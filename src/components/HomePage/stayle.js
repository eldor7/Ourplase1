import styled from "styled-components";
import Rectangle from '../../assests/img/Rectangle.png'

export const Container = styled.div`
`

export const Wrapper = styled.div`
background: #F0EEDD;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
width: 100%;

`
Wrapper.Main = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`

export const Tatle = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 20px;
text-align: center;
letter-spacing: 0.5px;
text-transform: uppercase;
color: #670A18;
`

export const Logo = styled.img`
`

export const MenuCon = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
p{
   margin-right: 15px;
   margin-left: 50px;
   cursor: pointer;
}
button{
   border-radius: 50%;
   background: #C87B5E;
   border: none;
   color: #fff;
   margin-right: 15px;
   margin-left: 50px;
   cursor: pointer;
}
`


export const Skillet = styled.div`
background-image: url(${Rectangle});
background-size: cover;
display: flex;
align-items: center;
height: 605px;
`
export const Leftcon = styled.div`
display: grid;
flex: 1;
padding-left: 390px;
p{
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 16px;
   text-transform: uppercase;
   color: #35312E;
}
h1{
   text-align: left;
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 400;
   font-size: 50px;
   line-height: 72px;
   letter-spacing: 1px;
   color: #35312E;
}
button{
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 700;
   font-size: 12px;
   line-height: 20px;
   text-align: center;
   text-transform: uppercase;
   color: #FFFFFF;
   background: #D37657;
   border-radius: 2px;
   height: 60px;
   width: 280px;
   cursor: pointer;
   border: none;
}
`

export const Rightcon = styled.div`
flex: 1;
`

export const Brend = styled.div`
display: grid;
height: 212px;
align-items: center;
text-align: center;
background: #F5F1E9;

h1{

}

`

export const Brendimg = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
text-align: center;
width: 80%;
padding-left: 10%;

`

export const Brend1 = styled.img`
`

export const Brend2 = styled.img`
`
export const Brend3 = styled.img`
`
export const Brend4 = styled.img`
`

export const Welcomecon = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 340px;
width: 80%;
margin-left: 8%;
h1{
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 700;
   font-size: 41px;
   line-height: 46px;
   text-align: center;
   letter-spacing: 1.25px;
   color: #35312E;
}
p{
   text-align: left;
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 26px;
   color: #4F463F;
}
`