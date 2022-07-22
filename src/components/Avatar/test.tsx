import { render, screen } from '@testing-library/react'

import Avatar from '.'

describe('<Avatar />', () => {
  it('should render correctly', () => {
    const mock = {
      name: 'Evil Morty',
      image:
        'https://static.wikia.nocookie.net/antagonisten/images/f/f2/Evil-morty-portrait.png/revision/latest/top-crop/width/360/height/360?cb=20220320191914&path-prefix=de',
      species: 'human'
    }

    render(<Avatar {...mock} />)

    expect(
      screen.getByRole('img', {
        name: /evil morty/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /evil morty/i
      })
    ).toBeInTheDocument()

    expect(screen.getByText(/human/i)).toBeInTheDocument()
  })
})
