import styled from "styled-components";

export const SliderDiv = styled.div`
  position: relative;
  height: 600px;
  overflow: hidden;
`;

export const ImgExp = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  & img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }
`;

export const SliderInfo = styled.div`
  position: absolute;
  top: 0px;
  margin: 30px 50px;
  & span {
    display: block;
    font-family: "Baloo2";
    color: #fff;
    padding-left: 20px;
    &:after {
      content: "";
      position: absolute;
      top: 8px;
      left: 0;
      width: 7px;
      height: 7px;
      background-color: #fff;
      border-radius: 50%;
    }
  }
`;

export const SliderContent = styled.div`
  position: absolute;
  bottom: 10px;
  margin: 30px 50px;
  & h2 {
    font-size: 39px;
    font-family: "Baloo2";
    font-weight: bold;
    color: #fff;
    border-bottom: 1px solid#b8b8b8;
    margin-bottom: 10px;
  }
  & h4 {
    font-size: 15px;
    font-family: "Baloo2";
    font-weight: normal;
    color: #b8b8b8;
    margin: 0px;
    padding: 0px;
  }
`;

export const ButtonList = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
  right: -95px;
  margin-top: 85px;
  transform-origin: 0 0;
  transform: rotate(270deg);
  background-color: red;
  font-size: 14px;
  font-family: "Baloo2";
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  & i {
    display: flex;
    justify-content: center;
    float: right;
    padding: 15px;
    padding-right: 11px;
    font-size: 20px;
    text-align: center;
    border-bottom: 1px solid#fff;
  }
  & span {
    padding: 0px 20px 0 20px;
  }
`;

export const SliderPages = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  background-color: red;
  animation: BtnSl 0.1s alternate;
`;
