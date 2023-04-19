import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Movies() {
  return (
    <>
      <Container>
        <h4>Recommended For You</h4>
        <Content>
          <Link to={"/detail"}>
            <Wrap>
              <img
                src="https://th.bing.com/th/id/OIP.ZiqeR3JHvSbptxibUkEBsQHaEK?pid=ImgDet&rs=1"
                alt="the simpsons"
              />
            </Wrap>
          </Link>
          <Link to={"/detail"}>
            <Wrap>
              <img
                src="https://th.bing.com/th/id/OIP.ZiqeR3JHvSbptxibUkEBsQHaEK?pid=ImgDet&rs=1"
                alt="the simpsons"
              />
            </Wrap>
          </Link>
          <Link to={"/detail"}>
            <Wrap>
              <img
                src="https://th.bing.com/th/id/OIP.ZiqeR3JHvSbptxibUkEBsQHaEK?pid=ImgDet&rs=1"
                alt="the simpsons"
              />
            </Wrap>
          </Link>
          <Link to={"/detail"}>
            <Wrap>
              <img
                src="https://th.bing.com/th/id/OIP.ZiqeR3JHvSbptxibUkEBsQHaEK?pid=ImgDet&rs=1"
                alt="the simpsons"
              />
            </Wrap>
          </Link>
        </Content>
      </Container>
      <Container>
        <h4>Trending</h4>
        <Content>
          <Link to={"/detail"}>
            <Wrap>
              <img
                src="https://i0.wp.com/thefutureoftheforce.com/wp-content/uploads/2020/01/img_6292.png?fit=1920%2C1080&ssl=1"
                alt="the simpsons"
              />
            </Wrap>
          </Link>
          <Link to={"/detail"}>
            <Wrap>
              <img
                src="https://i0.wp.com/thefutureoftheforce.com/wp-content/uploads/2020/01/img_6292.png?fit=1920%2C1080&ssl=1"
                alt="the simpsons"
              />
            </Wrap>
          </Link>
          <Link to={"/detail"}>
            <Wrap>
              <img
                src="https://i0.wp.com/thefutureoftheforce.com/wp-content/uploads/2020/01/img_6292.png?fit=1920%2C1080&ssl=1"
                alt="the simpsons"
              />
            </Wrap>
          </Link>
          <Link to={"/detail"}>
            <Wrap>
              <img
                src="https://i0.wp.com/thefutureoftheforce.com/wp-content/uploads/2020/01/img_6292.png?fit=1920%2C1080&ssl=1"
                alt="the simpsons"
              />
            </Wrap>
          </Link>
        </Content>
      </Container>
    </>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    transform: scale(0.95);
    border-color: rgba(249, 249, 249, 0.8);
    overflow: hidden;
  }
`;
