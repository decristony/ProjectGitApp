import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 20px;
    margin: 0;
    padding: 0;
    background-color: #333;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;

     


@keyframes hoverShake {
  0% {transform: skew(0deg,0deg);}
  25% {transform: skew(5deg, 5deg);}
  75% {transform: skew(-5deg, -5deg);}
  100% {transform: skew(0deg,0deg);}
}

`

export const Searchcontainer = styled.div`
    margin-top: 20px;
    background: #fff;
    
    height: 30px;
    border-radius: 20px;
    padding: 30px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.8s;
    color: #222;
    margin: 10px;
    background: #333;
    position: absolute;
    box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #444, inset -5px -5px 10px #222;

    &:hover{
  box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #222, inset -5px -5px 10px #444;
	font-size: 15px;
	transition: 500ms;
  color:#BFBFBF;
	text-shadow: 0px 0px 10px #f07171;
}
  i {
    position: relative;
    left: -4px;
    color: #BFBFBF;
    padding: 5
    
  }
  i:hover{
    color:#f07171;
  }

    input{
    background: transparent;
    border: none;
    outline:none;
    width:5px;
    padding: 5px;
    font-weight: 500;
    font-size: 20px;
    transition: 0.8s;
    }
   
   &:hover > .search-input{
    width: 350px;
  }

 `
