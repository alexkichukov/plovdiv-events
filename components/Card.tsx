import React from 'react'
import {
  Card as CardWrapper,
  CardImageWrapper,
  CardImage,
  CardContent,
  CardFavouriteButton,
  CardHeader,
  CardTitle,
  CardPrice,
  CardData,
  CardOwner
} from 'styles/components/Card'
import { FaBookmark, FaMapMarkerAlt, FaCalendarAlt, FaUserAlt } from 'react-icons/fa'
import Link from 'next/link'

interface CardProps {
  overlay: string
  image: string
  title: string
  price: string
  date: string
  location: string
  host: { user: string; url: string }
}

const Card = ({ overlay, image, title, price, date, location, host }: CardProps) => (
  <Link href='/'>
    <CardWrapper>
      <CardImageWrapper>
        <CardImage overlay={overlay} src={image} />
      </CardImageWrapper>
      <CardContent>
        <CardFavouriteButton>
          <FaBookmark />
        </CardFavouriteButton>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardPrice>{price}</CardPrice>
        </CardHeader>
        <CardData highlight>
          <FaCalendarAlt className='icon' />
          <span>{date}</span>
        </CardData>
        <CardData>
          <FaMapMarkerAlt className='icon' />
          <span>{location}</span>
        </CardData>
        <CardData>
          <FaUserAlt className='icon' />
          <span>
            by{' '}
            <Link href={host.url}>
              <CardOwner>{host.user}</CardOwner>
            </Link>
          </span>
        </CardData>
      </CardContent>
    </CardWrapper>
  </Link>
)

export default Card
