import styled from 'styled-components'

export const Wrapper = styled.div`
margin-top: 30px;
display: flex;

align-items:flex-start;
color: #BFBFBF;
padding:20px;
box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #444, inset -5px -5px 10px #222;

`
export const WrapperInfoUser = styled.div`

h1{font-size: 32px;
  font-weight: bold;
  margin-left: 20px;
  display: flex;
  gap: 8px;
  text-align: center;}

  h3{font-size: 18px;
  font-weight: bold;
 }
 h4{font-size: 16px;
  font-weight: bold;
 }

`



export const ContainerUser = styled.div`

display: flex;
justify-content: space-between;


align-items: flex-start;
height: auto;
margin-left: 8px;

a{
  color:#f07171;
}


`


export const WrapperStatusCount = styled.div`
margin-top: 120px;
display: flex;
gap: 10px;
margin-left: 20px;
align-items: center;
div{
  text-align: center;
}
`
export const WrapperUserGeneric = styled.div`
margin-left: 20px;
display: flex;
gap: 8px;
text-align: center;
margin-top: 10px;
a{
  font-size: 18px;
  color:#f07171;
  font-weight: bold;
}

`
export const WrapperImg = styled.img`

align-items: center;
width        : 250px;
border-radius: 30px;
box-shadow:0rem 0rem 1rem #BFBFBF, inset 0rem 0rem 1rem #BFBFBF;
border: 8px solid;
padding      : .8rem;
`
export const ImgBox = styled.img`

 border-radius: 50%;
  max-width    : 250px;
  display      : block;
  border-radius: 30px;
  padding      : .8rem;
`
