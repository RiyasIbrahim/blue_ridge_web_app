import React from "react";
import styled from "styled-components";

import Slider from "./components/Slider";
import { projectList } from "./app/data";

const sliderSettings = {
  data: projectList,
  speed: 1200,
  easing: "expo",
  bgColor: "rgba(255, 255, 255, 0.05)",
  buttonHref: "https://www.google.com",
  buttonTarget: "_self",
  buttonText: "View project",
  showButton: true,
};

function App() {
  return (
    <Wrapper id="projects">
    <Slider sliderSettings={sliderSettings} />
  </Wrapper>
  );
}

const Wrapper = styled.section`
  width: auto;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
`;


export default App;
