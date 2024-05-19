import heroImageWebp from '/public/static/images/hero-image.webp'
import heroImagePNG from '/public/static/images/hero-image.png'
import { useState } from 'react'
import Image from 'next/image'

const HeroImage = () => {
  const [imgSrc, setImgSrc] = useState(heroImageWebp)

  return (
    <Image
      src={imgSrc}
      onError={() => {
        setImgSrc(heroImagePNG)
      }}
      alt="Game X.PRESS Hero Image"
      style={{ objectFit: 'contain' }}
      priority
    />
  )
}

export default HeroImage
