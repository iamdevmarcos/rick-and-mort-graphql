import styled from 'styled-components'

export const Wrapper = styled.nav`
  background: white;
  height: 3.75rem;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: -2px 0px 8px 2px rgba(0, 0, 0, 0.1);
`

export const Container = styled.div`
  max-width: 90rem; // 1440;
  width: 100%;
  margin: 0 auto;
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  @media (max-width: 530px) {
    justify-content: center;
  }
`

export const List = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 530px) {
    display: none;
  }
`

export const ListItem = styled.li`
  font-family: 'Karla', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.313rem;

  a {
    color: #000;
    text-decoration: none;
  }

  &:hover {
    opacity: 0.6;
  }
`
