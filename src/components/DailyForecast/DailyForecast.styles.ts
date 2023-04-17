import styled from "styled-components";

export const Container = styled.div`
  margin: 1em 0;
  border-top: 1px solid #dedede;
  padding-top: 1em;
`;

export const TemperatureContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0;
  gap: 5px;
`;

export const TemperatureTitle = styled.span`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1;
`;

export const TemperatureImage = styled.img`
  border-radius: 50%;
`;

export const ShiftContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2em;

  p {
    margin: 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
