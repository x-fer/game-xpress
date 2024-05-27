import { StepContainer } from '@/components'
import Image from 'next/image'

const Partners1 = () => {
  return (
    <StepContainer className="bg-white">
      <div className="flex h-full w-full flex-col p-6 sm:p-8 md:p-10 lg:p-12">
        <h2 className="text-5xl font-bold text-black md:text-6xl lg:text-7xl">Partneri</h2>
        <div className=" mb-10 grid  w-full flex-1 grid-cols-2 gap-8 px-4 sm:grid-cols-3 md:grid-cols-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <a
              href="https://www.fer.unizg.hr/"
              target="_blank"
              aria-label="Posjetite web stranicu Fakulteta elektrotehnike i računarstva."
              className="cursor-pointer hover:bg-blue "
            >
              <Image
                alt="FER Logo"
                className="aspect-[2/1] h-24 w-24 object-contain sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36"
                height="60"
                width="120"
                src="/static/images/partners/FER.png"
              />
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="https://www.algebra.hr/"
              target="_blank"
              aria-label="Posjetite web stranicu sveučilišta Algebra."
              className="cursor-pointer hover:bg-blue"
            >
              <Image
                alt="Algebra Logo"
                className="aspect-[2/1] h-24 w-24 object-contain sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36"
                height="60"
                width="120"
                src="/static/images/partners/algebra.png"
              />
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="https://www.liongamelion.com/"
              target="_blank"
              aria-label="Posjetite web stranicu Lion Game Lion."
              className="cursor-pointer hover:bg-blue"
            >
              <Image
                alt="Lion Game Lion Logo"
                className="aspect-[2/1] h-24 w-24 object-contain sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36"
                height="60"
                width="120"
                src="/static/images/partners/lion-game-lion.png"
              />
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="https://outfit7.com/"
              target="_blank"
              aria-label="Posjetite web stranicu Outift7."
              className="cursor-pointer hover:bg-blue"
            >
              <Image
                alt="Outfit7 Logo"
                className="aspect-[2/1] h-24 w-24 object-contain sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36"
                height="60"
                width="120"
                src="/static/images/partners/outfit7.png"
              />
            </a>
          </div>

          <div className="flex items-center justify-center">
            <a
              href="https://outfit7.com/"
              target="_blank"
              aria-label="Posjetite web stranicu Outift7."
              className="cursor-pointer hover:bg-blue"
            >
              <Image
                alt="Outfit7 Logo"
                className="aspect-[2/1] h-24 w-24 object-contain sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36"
                height="60"
                width="120"
                src="/static/images/partners/outfit7.png"
              />
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="https://outfit7.com/"
              target="_blank"
              aria-label="Posjetite web stranicu Outift7."
              className="cursor-pointer hover:bg-blue"
            >
              <Image
                alt="Outfit7 Logo"
                className="aspect-[2/1] h-24 w-24 object-contain sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36"
                height="60"
                width="120"
                src="/static/images/partners/outfit7.png"
              />
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="https://outfit7.com/"
              target="_blank"
              aria-label="Posjetite web stranicu Outift7."
              className="cursor-pointer hover:bg-blue"
            >
              <Image
                alt="Outfit7 Logo"
                className="aspect-[2/1] h-24 w-24 object-contain sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36"
                height="60"
                width="120"
                src="/static/images/partners/outfit7.png"
              />
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="https://outfit7.com/"
              target="_blank"
              aria-label="Posjetite web stranicu Outift7."
              className="cursor-pointer hover:bg-blue"
            >
              <Image
                alt="Outfit7 Logo"
                className="aspect-[2/1] h-24 w-24 object-contain sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36"
                height="60"
                width="120"
                src="/static/images/partners/outfit7.png"
              />
            </a>
          </div>
        </div>
      </div>
    </StepContainer>
  )
}

export default Partners1
