import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React, { useState } from 'react'
import styled from 'styled-components'
import '../components/Style.css';
import city from '../assets/city.png'
import fish from '../assets/huanlesong-color.jpg'
import dell from '../assets/Dell-XPS-9500-4.jpg'
// import logo from '../logo.svg';

const Arrow = styled.div`
  display: flex;
  position: absolute;
  width: 50px;
  height: 50px;
  margin: auto;
  top: 0;
  right: ${props => props.direction === "right" && "10px"};
  bottom: 0;
  left: ${props => props.direction === "left" && "10px"};
  background-color: #fff7f7;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transition: all 1.5s ease;
  transform: translateX(${props=> props.slideIndex * -100}vw);
`
// const Image = styled.div`
//   height: 80%;
// `

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (   
    <div className="slider-container">
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined style={{color: "#0f1827", fontSize: 40}}></ArrowLeftOutlined>
      </Arrow>

      {/* <div className="slider-wrapper" > */}
      <Wrapper slideIndex={slideIndex}>
      <div className="slide">
          <div className="img-container">
            <img src={city} alt="city" />
          </div>
        </div>

        <div className="slide">
          <div className="img-container">
            <img src={dell} alt="dell" />
          </div>
        </div>

        <div className="slide">
          <div className="img-container">
            <img src={fish} alt="dell" />
          </div>
        </div>
      </Wrapper>     
      {/* </div> */}

      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined style={{color: "#0f1827", fontSize: 40}}></ArrowRightOutlined>
      </Arrow>
        {/* <div className="arrow">
            <div className="arrow-left">
              <ArrowLeftOutlined style={{fontSize: 40}}></ArrowLeftOutlined>
            </div>
        </div>
        <div className="arrow">
            <div className="arrow-right">
              <ArrowRightOutlined style={{fontSize: 40}}></ArrowRightOutlined>
            </div>
        </div> */}
    </div>
  )
}

export default Slider