import styled from 'styled-components'

export const Container = styled.div`
  max-width: 90rem; // 1440;
  width: 100%;
  margin: 0 auto;
  padding: 1.25rem;

  text-align: center;
`

export const Wrapper = styled.img`
  width: 100%;
  max-width: 37.5rem;
  max-height: 12.5rem;

  margin-top: 2rem;

  @media (max-width: 630px) {
    max-width: 19.375rem;
    max-height: 6.5rem;
  }
`
