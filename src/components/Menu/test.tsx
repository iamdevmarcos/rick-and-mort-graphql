import { render, screen } from '@testing-library/react'

import Menu from '.'

describe('<Menu />', () => {
  it('should render correctly', () => {
    render(<Menu />)

    const logo = screen.getByRole('img', {
      name: /rick and mort logo/i
    })

    const menuItem1 = screen.getByRole('link', {
      name: /about/i
    })
    const menuItem2 = screen.getByRole('link', {
      name: /source code/i
    })
    const menuItem3 = screen.getByRole('link', {
      name: /episodes/i
    })

    expect(logo).toBeInTheDocument()
    expect(menuItem1).toBeInTheDocument()
    expect(menuItem2).toBeInTheDocument()
    expect(menuItem3).toBeInTheDocument()
  })

  it('should render all links with correct href', () => {
    render(<Menu />)

    const menuItem1 = screen.getByRole('link', {
      name: /about/i
    })
    const menuItem2 = screen.getByRole('link', {
      name: /source code/i
    })
    const menuItem3 = screen.getByRole('link', {
      name: /episodes/i
    })

    expect(menuItem1.closest('a')).toHaveAttribute(
      'href',
      'https://en.wikipedia.org/wiki/Rick_and_Morty'
    )
    expect(menuItem2.closest('a')).toHaveAttribute(
      'href',
      'https://github.com/iamdevmarcos/rick-and-mort-graphql'
    )
    expect(menuItem3.closest('a')).toHaveAttribute(
      'href',
      'https://en.wikipedia.org/wiki/List_of_Rick_and_Morty_episodes'
    )
  })
})
