import Image from 'next/image'
import * as S from './styles'

import menu from 'data/menu'

const Menu = () => (
  <S.Wrapper>
    <S.Container>
      <S.Flex>
        <Image
          alt="Rick and Mort Logo"
          src="/img/menu/logo.png"
          width="45"
          height="45"
        />

        <S.List>
          {menu.map(({ title, link }, index) => (
            <S.ListItem key={index}>
              <a href={link} target="_blank" rel="noreferrer">
                {title}
              </a>
            </S.ListItem>
          ))}
        </S.List>
      </S.Flex>
    </S.Container>
  </S.Wrapper>
)

export default Menu
