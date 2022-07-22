import * as S from './styles'

import { Character } from 'types/home'

const Avatar = ({ name, image, species }: Character) => (
  <S.Wrapper>
    <S.Flex>
      <S.Image alt={name} src={image} loading="lazy" sizes="cover" />
      <S.Info>
        <S.Name>{name}</S.Name>
        <S.Species>{species}</S.Species>
      </S.Info>
    </S.Flex>
  </S.Wrapper>
)

export default Avatar
