import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 21.875rem;

  border-radius: 0.625rem;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
`

export const Flex = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Image = styled.img`
  width: 100%;
  max-height: 16.25rem;

  object-fit: cover;

  border-radius: 0.625rem 0.625rem 0 0;
`

export const Info = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding-left: 2rem;
`

export const Name = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;

  margin-bottom: 0.25rem;
`

export const Species = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;

  color: rgba(0, 0, 0, 0.6);
`
