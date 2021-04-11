import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LightIcon } from '@assets/sun.svg';
import { ReactComponent as DarkIcon } from '@assets/moon.svg';

import {
  CreateBtn,
  JoinBtn,
  Ends,
  Header,
  LeftMenu,
  LogoImg,
  LogoTitle,
  Main,
  MainContent,
  MainImg,
  MainTitle,
  RightMenu,
  HomeWrap,
  LoginSpan,
} from './styles';

const Home = () => {
  return (
    <HomeWrap>
      <Header>
        <LeftMenu>
          <Link to="/">
            <LogoImg src="../../assets/codelog.png" />
          </Link>
          <LogoTitle>CodeHouse</LogoTitle>
        </LeftMenu>
        <RightMenu>
          <Link to="/login" role="button">
            <LoginSpan>LOGIN</LoginSpan>
          </Link>

          <button>
            <DarkIcon />
          </button>
        </RightMenu>
      </Header>
      <Main>
        <MainTitle>다양한 개발자들과 소통해보세요!</MainTitle>
        <MainContent>
          코더하우스에서 다양한 개발자들과 소통하고 프로젝트도 Try 해보세요.
          <br /> 즐거운 개발스택을 쌓아보아요!
        </MainContent>
        <MainImg src="../../assets/mainImg.jpeg" />
        <Ends>
          <CreateBtn>Create Room</CreateBtn>
          <JoinBtn>Join Room</JoinBtn>
        </Ends>
      </Main>
    </HomeWrap>
  );
};

export default Home;