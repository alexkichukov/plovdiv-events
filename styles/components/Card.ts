import styled from 'styled-components'
import theme from 'styles/theme'

export const CardOwner = styled.a`
  color: white;
  font-weight: 500;
  transition: 100ms ease-out;

  &:hover {
    color: ${theme.graylight};
  }
`

interface CardDataProps {
  highlight?: boolean
}

export const CardData = styled.div<CardDataProps>`
  display: grid;
  grid-template-columns: 1.75rem auto;
  margin: 0.6rem 0;
  color: ${theme.graylight};
  ${(p) => p.highlight && `color: ${theme.purple};`}

  .icon {
    margin-right: 0.8rem;
  }
`

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0;
`

export const CardPrice = styled.div`
  margin: 1rem 0;
  color: #BBBBBB;
  justify-self: right;
`

export const CardHeader = styled.div`
  /* display: grid; */
  align-items: start;
  grid-template-columns: auto auto;
  grid-gap: 20px;
`

export const CardFavouriteButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: -25px;
  right: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 200px;
  background: #343434;
  color: white;
  transition: 150ms ease-out;

  &:hover {
    background: #414141;
  }
`

export const CardContent = styled.div`
  position: relative;
  padding: 1.5rem;
`

interface CardImageProps {
  src: string
}

export const CardImage = styled.div<CardImageProps>`
  background: url(${(props) => props.src});
  background-size: cover;
  height: 100px;
  border-radius: 12px 12px 0 0;
`

export const Card = styled.div`
  cursor: pointer;
  background: #272727;
  max-width: 320px;
  border-radius: 12px;
  transition: 150ms ease-out;

  &:hover {
    box-shadow: 0 0.5rem 0 0 #0000002d;
    transform: translateY(-2px);
  }
`
