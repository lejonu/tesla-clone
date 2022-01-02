import styled from "styled-components"
import Fade from "react-reveal"

const Section = ({
  title,
  description,
  rightBtnText,
  leftBtnText,
  backgroundImg
}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>

          <DownArrow src="/images/down-arrow.svg" />
        </Fade>{" "}
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  // background: orange;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  // background-image: url("/images/model-s.jpg");
  display: flex;
  flex-direction: column; // Change main direction to bottom
  justify-content: space-between; // Align vertically
  align-items: center; // Align horizontally
  background-image: ${props => `url("/images/${props.bgImage}")`};
  @media (max-width: 768px) {
    background-image: url("/images/model-s-small.jpg");
    // background-size: 600px;
  }
`
const ItemText = styled.div`
  padding-top: 15vh;
  text-align; center;
`
const Buttons = styled.div``

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`
