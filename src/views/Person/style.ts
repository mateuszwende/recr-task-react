import styled, { css } from 'styled-components';

export const Item = styled.div`
  flex: 0 0 100%;
  display: block;
  padding: 1rem;
  margin-bottom: 2rem;
  box-sizing: border-box;

  text-align: left;
  background: #fff;

  ${css`
    @media (min-width: 576px) {
      flex: 0 0 calc(50% - 2rem);
      margin: 0 1rem 2rem 1rem;
    }

    @media (min-width: 768px) {
      flex: 0 0 calc(33.333333% - 2rem);
    }
  `}
`;

export const Content = styled.div`
  width: 100%;
  padding: 0.5rem 0;
`;
