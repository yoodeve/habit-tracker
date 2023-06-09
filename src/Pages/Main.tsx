import React from 'react';
import styled from 'styled-components';
import {habitObj} from '../DummyData';
import {useNavigate} from 'react-router-dom';
import {PlusCircleOutlined} from '@ant-design/icons';

const Main: React.FC = () => {
  const navigate = useNavigate();
  const toAddPage = () => {
    navigate('/add');
  };
  return (
    <>
      <MainContainer>
        <h1 className="name-box">유정님</h1>
        <div className="question">오늘도 습관 완료 하셨나요?</div>
        <div className="date">0월 0주간</div>
        <div className="test">
          {habitObj.map(({name, week}) => (
            <>
              <div>{name}</div>
              <div>{week.mon ? '함' : '안함'}</div>
              <div>{week.tue ? '함' : '안함'}</div>
              <div>{week.wed ? '함' : '안함'}</div>
              <div>{week.thu ? '함' : '안함'}</div>
              <div>{week.fri ? '함' : '안함'}</div>
              <div>{week.sat ? '함' : '안함'}</div>
              <div>{week.sun ? '함' : '안함'}</div>
            </>
          ))}
        </div>
        <div className="add-icon-area">
          <div className="add-list" onClick={toAddPage}>
            <PlusCircleOutlined />
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default Main;

const MainContainer = styled.div`
  color: #080211;
  .name-box {
    font-size: 2rem;
    font-weight: 700;
  }
  .question {
    font-size: 1.4rem;
  }
  .add-icon-area {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .add-list {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 20px;
    bottom: 20px;
    z-index: 2;
    font-size: 1.5rem;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #73bbc9;
    color: #fff;
    cursor: pointer;
  }
`;
