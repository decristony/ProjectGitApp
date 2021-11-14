import styled from "styled-components";

export const Wrapper = styled.div`
margin: 16px;
display: flex;
align-items: center;
justify-content: center;
h1{
  font-weight: bold;
  font-size: 32px;
}


`
export const Container = styled.div`
color: #BFBFBF;
position: absolute;
top: 180px;
padding:  40px;
left: 0;
right: 0;
width:50%;
min-width: auto;
border-radius: 30px;
margin: auto;
box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #444, inset -5px -5px 10px #222;
&:hover{
box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #222, inset -5px -5px 10px #444;
font-size: 15px;
transition: 500ms;
color:#BFBFBF;
text-shadow: 0px 0px 10px #f07171;
 }
`