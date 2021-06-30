import SliderImg1 from "../assets/images/sliderimg2.jpg";
import {
  SliderDiv,
  ImgExp,
  SliderInfo,
  SliderContent,
  ButtonList,
  SliderPages,
} from "./styles/slider.style";
import { AiFillSetting } from "react-icons/ai";
import { useState } from "react";

const Slider = () => {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <SliderDiv>
        <ImgExp>
          <img src={SliderImg1} alt="/" />
        </ImgExp>
        <ButtonList
          onClick={() => {
            setDisplay(true);
          }}
        >
          <span>See List</span>
          <i>
            <AiFillSetting />
          </i>
        </ButtonList>
        {display && (
          <SliderPages>
            <button
              onClick={() => {
                setDisplay(false);
              }}
            >
              gamortva
            </button>
          </SliderPages>
        )}
        <SliderInfo>
          <span>Only best auto services</span>
        </SliderInfo>
        <SliderContent>
          <h2>Only advanced Innovative solutions</h2>
          <h4>See Our Contact info</h4>
        </SliderContent>
      </SliderDiv>
    </>
  );
};

export default Slider;
