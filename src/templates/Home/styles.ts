import styled from 'styled-components'

export const Wrapper = styled.div``

export const Container = styled.main`
  max-width: 90rem; // 1440;
  width: 100%;
  margin: 4rem auto;
  padding: 1.25rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
