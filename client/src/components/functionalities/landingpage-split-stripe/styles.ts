import styled from 'styled-components';

export const theme = {
  colors: {
    leftBgColor: 'rgba(87, 84, 236, 0.7)',
    rightBgColor: 'rgba(43, 43, 43, 0.8)',
    leftBtnHoverColor: 'rgba(87, 84, 236, 1)',
    rightBtnHoverColor: 'rgba(28, 122, 28, 1)',
  },
  dimensions: {
    hoverWidth: '75%',
    otherWidth: '25%',
  },
  animationSpeed: '1000ms'
};


export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
   margin-top: 20rem;

  .payment-box {
    position: absolute;
    width: 30rem;
    height: 38rem;
    color: #fff;
    background: #2a2a2a;
    padding: 20px;
    text-align: center;
  }

  .header-text {
    color: #5469d4;
  }

  .sub-text {
    margin-top: 1rem;
    font-size: .8rem;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .stripe-card-text{
      color: gray;
    }

    span {
      color: gray;
    }
  }

  
.title {
  font-size: 2rem;
  color: #fff;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translateX(-50%) translateY(-50%);
  white-space: nowrap;
}

  .btn-buy {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    color: #fff;
    border: #fff solid 0.2rem;
    text-decoration: none;
    border-radius: 5px;
    transition: background 0.5s;
    pointer-events: auto;
    cursor: pointer;
  }

  .split.left .btn-buy:hover {
    background: ${theme.colors.leftBtnHoverColor};
    border: 0.2rem solid ${theme.colors.leftBtnHoverColor};
  }

  .split.right .btn-buy:hover {
    background: ${theme.colors.rightBtnHoverColor};
    border: 0.2rem solid ${theme.colors.rightBtnHoverColor};
  }


  .split {
    position: absolute;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: ${theme.animationSpeed};
  }

  .split.left {
    left: 0;
    background: #5e5e5e;
    background: url('https://images.unsplash.com/photo-1617864064479-f203fc7897c0?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .split.left::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${theme.colors.leftBgColor};
  }
  
  .split.right {
    right: 0;
    background: #333;
    background: url('https://images.unsplash.com/photo-1621259181233-aa03cf592ea7?q=80&w=3037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .split.right::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${theme.colors.rightBgColor};
  }

  .plit.right,
  .split.left,
  .split.right::before,
  .split.left::before {
    transition: ${theme.animationSpeed};
  }

  .console-info {
    flex-direction: column;
    margin: 0 auto;
    width: 20rem;
    overflow: hidden;
   
    img {
      object-fit: cover;
      width: 100%;
      height: 15rem;
    }

     div {
       margin-top: 1rem;
       p {
         color: #5469d4;
       }

     }
  }

  @media (max-width: 768px) {
    .title {
      font-size: 1.5rem;
    }
    .btn-buy {
      font-size: 1.5rem;
    }
  }

`;