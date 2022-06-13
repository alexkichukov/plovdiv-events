import React from 'react'
import {
  Card as CardWrapper,
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

interface CardProps {}

const Card = ({}: CardProps) => (
  <Link href='/'>
    <CardWrapper>
      <CardImage src='./card1.png' />
      <CardContent>
        <CardFavouriteButton>
          <FaBookmark />
        </CardFavouriteButton>
        <CardHeader>
          <CardTitle>Example title of an event which will be held soon</CardTitle>
          <CardPrice>Starts at $5</CardPrice>
        </CardHeader>
        <CardData highlight>
          <FaCalendarAlt className='icon' />
          <span>Sat, Jun 18 2022</span>
        </CardData>
        <CardData>
          <FaMapMarkerAlt className='icon' />
          <span>Grand Hotel Millennium Sofia, 89B bulevard "Vitosha", 1463 Sofia</span>
        </CardData>
        <CardData>
          <FaUserAlt className='icon' />
          <span>
            by{' '}
            <Link href='/'>
              <CardOwner>Company</CardOwner>
            </Link>
          </span>
        </CardData>
      </CardContent>
    </CardWrapper>
  </Link>
)

export default Card
