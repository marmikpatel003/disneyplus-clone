import React from "react";
import styled from "styled-components";

function Details() {
  return (
    <Container>
      <Background>
        <img
          src="https://assets3.thrillist.com/v1/image/2768799/792x446/scale;webp=auto;jpeg_quality=60;progressive.jpg"
          alt="bao"
        />
      </Background>

      <ImageTitle>
        <img
          src="https://img1.hotstarext.com/image/upload/f_auto,h_136/sources/r1/cms/prod/44/1400044-t-775d2ed1f98d"
          alt="bao logo"
        />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2018 - 7m - Family, Fantasy, Animation</SubTitle>
      <Description>
        A Chinese mom who's said when her grown son leaves gome gets another
        chance at mothermood when one of her dumplings springs to life. But she
        finds that nothing stays cute and small forever.
      </Description>
    </Container>
  );
}

export default Details;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  width: 20%;
  height: 50%;
  min-height: 50px;
  min-width: 100px;
  margin: 40px 0px 30px 0px;

  img {
    width: 100%;
    height+ 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  padding: 0px 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgb(0, 0, 0, 0.3);
  color: rgb(249, 249, 249);
  border: 1px solid rgb(249, 249, 249);

  &:hover {
    background: rgb(15, 15, 15, 0.5);
  }
`;

const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background: rgba(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;
`;
