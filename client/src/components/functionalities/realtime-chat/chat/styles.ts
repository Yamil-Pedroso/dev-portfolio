import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50vh;
`;

export const MessagesContainer = styled.div`
  flex: 1;
  overflow: hidden;
  border: 1px solid #ccc;
  overflow-y: scroll;
`;

export const MyMessage = styled.div`
  display: flex;
  width: 60rem;
  margin-bottom: 20px;
  padding: 20px;
  position: relative;

  ul {
    list-style: none;
    position: absolute;
    margin-top: .5rem;
    
    li:nth-child(even) {
      display: flex;
      color: #fff;
      margin: 20px 20px 20px 20px;
      padding: 10px;
      background-color: #1a1d24;
      box-shadow: 0 0 5px 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      margin-left:2rem;

      span {
        margin-right: 5px;
      }
    }

    li:nth-child(odd) {
      display: flex;
      color: #fff;
      margin: 20px 20px 20px 20px;
      padding: 10px 70px 10px 10px;
      background-color: #f04c4d;
      box-shadow: 0 0 5px 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;

      span {
        margin-right: 5px;
      }
    }
  }
`;