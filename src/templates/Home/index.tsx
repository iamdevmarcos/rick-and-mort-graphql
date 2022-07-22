import * as S from './styles'
import { motion } from 'framer-motion'

import Logo from 'components/Logo'
import Menu from 'components/Menu'
import Avatar from 'components/Avatar'

import { HomeProps } from 'types/home'

const parent = {
  show: {
    transition: {
      staggerChildren: 0.4
    }
  }
}

const stat = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

const HomeTemplate = ({ characters }: HomeProps) => (
  <S.Wrapper>
    <Menu />
    <Logo />

    <S.Container>
      <S.Grid variants={parent} initial="hidden" animate="show">
        {characters.map((item, index) => (
          <motion.div key={index} variants={stat} whileHover={{ scale: 1.1 }}>
            <Avatar {...item} />
          </motion.div>
        ))}
      </S.Grid>
    </S.Container>
  </S.Wrapper>
)

export default HomeTemplate
