import * as S from './styles'

import Logo from 'components/Logo'
import Menu from 'components/Menu'
import Avatar from 'components/Avatar'

import { HomeProps } from 'types/home'

const HomeTemplate = ({ characters }: HomeProps) => (
  <S.Wrapper>
    <Menu />
    <Logo />

    <S.Container>
      <S.Grid>
        {characters.map((item, index) => (
          <Avatar key={index} {...item} />
        ))}
      </S.Grid>
    </S.Container>
  </S.Wrapper>
)

export default HomeTemplate
