import React from 'react';
import {Outlet} from 'react-router-dom';
import styled from 'styled-components';

const Template = () => {
  return (
    <ContentContainer>
      <Outlet />
      <FooterWrapper>
        <div className="copy-right">
          <div className="name">&copy; 한유정</div>
          <div className="p-number">janhold@naver.com</div>
        </div>
      </FooterWrapper>
    </ContentContainer>
  );
};

export default Template;

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  max-width: 767px;
  border: 1px solid #011111;
  box-sizing: border-box;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 767px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .copy-right {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    div {
      display: flex;
      justify-content: center;
      align-content: center;
    }
  }
`;
