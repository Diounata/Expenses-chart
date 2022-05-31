import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.125rem;

  width: 100vw;
  min-height: 100vh;
  padding: 1rem;

  @media (min-width: 600px) {
    width: 32.5rem;
  }
`;

export { Container };
