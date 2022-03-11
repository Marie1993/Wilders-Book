import styled from 'styled-components';

export const Container = styled.div`
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
`;

export const Image = styled.img`
  width: 210px;
  border-radius: 30px;
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
