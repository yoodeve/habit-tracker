import React from 'react';
import styled from 'styled-components';
import {habitObj} from '../DummyData';
import {useNavigate} from 'react-router-dom';
import {
  CheckSquareFilled,
  CheckSquareOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';

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
            <div className="week-flex-box">
              <div>{name}</div>
              <div className="week-done">
                <div>
                  {week.mon ? <CheckSquareFilled /> : <CheckSquareOutlined />}
                </div>
                <div>
                  {week.tue ? <CheckSquareFilled /> : <CheckSquareOutlined />}
                </div>
                <div>
                  {week.wed ? <CheckSquareFilled /> : <CheckSquareOutlined />}
                </div>
                <div>
                  {week.thu ? <CheckSquareFilled /> : <CheckSquareOutlined />}
                </div>
                <div>
                  {week.fri ? <CheckSquareFilled /> : <CheckSquareOutlined />}
                </div>
                <div>
                  {week.sat ? <CheckSquareFilled /> : <CheckSquareOutlined />}
                </div>
                <div>
                  {week.sun ? <CheckSquareFilled /> : <CheckSquareOutlined />}
                </div>
              </div>
            </div>
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
  margin: 30px;
  .name-box {
    font-size: 2rem;
    font-weight: 700;
    margin: 5px;
  }
  .question {
    font-size: 1.4rem;
    margin: 5px;
  }
  .date {
    margin: 5px;
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
  .week-flex-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .week-done {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    column-gap: 5px;
  }
`;
