import styled, { css } from 'styled-components';

export const Section = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
  background-color: azure;
`;

export const CardRow = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 32%);
  justify-content: space-between;
  -ms-wrap-flow: auto;
`;

export const CardWilder = styled.div`
  border-radius: 30px;
  margin: 10px;
  padding: 15px;
  gap: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  ${({ isDeletable }) =>
    isDeletable &&
    css`
      &:hover {
        animation: shake 0.7s;
        animation-iteration-count: infinite;
        @keyframes shake {
          0% {
            transform: translate(1px, 1px) rotate(0deg);
          }
          10% {
            transform: translate(-1px, -2px) rotate(-1deg);
          }
          20% {
            transform: translate(-3px, 0px) rotate(1deg);
          }
          30% {
            transform: translate(3px, 2px) rotate(0deg);
          }
          40% {
            transform: translate(1px, -1px) rotate(1deg);
          }
          50% {
            transform: translate(-1px, 2px) rotate(-1deg);
          }
          60% {
            transform: translate(-3px, 1px) rotate(0deg);
          }
          70% {
            transform: translate(3px, 1px) rotate(-1deg);
          }
          80% {
            transform: translate(-1px, -1px) rotate(1deg);
          }
          90% {
            transform: translate(1px, 2px) rotate(0deg);
          }
          100% {
            transform: translate(1px, -2px) rotate(-1deg);
          }
        }
      }
    `};
`;

export const Image = styled.img`
  width: 210px;
  border-radius: 30px;
`;

export const IconDelete = styled.img`
  width: 30px;
  border-radius: 30px;
  position: absolute;
  flex-direction: row-reverse;
  margin-left: 180px;
  margin-bottom: 30px;

  &:hover {
    cursor: pointer;
    width: 35px;
  }
`;
export const SkillElement = styled.div`
  display: flex;

  padding: 5px;
  margin: 5px;
  border-radius: 30px;
  //background-color: aqua;
  width: auto;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const SkillContainer = styled.div`
  display: flex;
`;

export const Badge = styled.span`
  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;

  background-color: ${({ votes }) =>
    votes > 9 ? 'rgba(0, 100, 0, 0.3)' : 'rgba(0, 0, 0, 0.3)'};

  color: #fff;
  /* Rounded border */
  border-radius: 9999px;
  height: 20px;
  width: 20px;
`;
export const Spacer = styled.div`
  padding: 50px;
`;

//// CSS navbar

export const Header = styled.header`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 6rem;
  background-color: hsl(280, 5%, 13%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
`;

export const List = styled.div`
  font-size: 1rem;
  margin: 0 1rem;
  a {
    color: hsl(265, 19%, 88%);
    &:hover,
    &:active {
      color: hsl(265, 7%, 70%);
    }
  }
`;

export const Button = styled.button`
  font: inherit;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #c291e2;
    color: #38015c;
  }
`;

export const Container = styled.div`
  list-style: none;
  display: flex;
  align-items: baseline;
  margin: 0;
  padding: 0;
  @media (min-width: 768px) {
    gap: 0.5rem;
  }
`;

export const FormWilder = styled.div`
  background-color: grey;
  border-radius: 25px;
  padding-bottom: 20px;
  padding-right: 20px;
  padding-left: 20px;
`;
