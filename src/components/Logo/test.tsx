import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import Logo from '.'

describe('<Logo />', () => {
  it('should render correctly', () => {
    render(<Logo />)

    expect(
      screen.getByRole('img', {
        name: /main logo/i
      })
    ).toBeInTheDocument()
  })

  it('should render a medium size by default', () => {
    render(<Logo />)

    expect(
      screen.getByRole('img', {
        name: /main logo/i
      })
    ).toHaveStyle({
      'max-width': '37.5rem',
      'max-height': '12.5rem'
    })
  })

  it('should render a small size when mobile version', () => {
    render(<Logo />)

    const logo = screen.getByRole('img', {
      name: /main logo/i
    })

    expect(logo).toHaveStyleRule('max-width', '19.375rem', {
      media: '(max-width: 630px)'
    })

    expect(logo).toHaveStyleRule('max-height', '6.5rem', {
      media: '(max-width: 630px)'
    })
  })
})
