import { StepContainer } from '@/components'
import dynamic from 'next/dynamic'
const Countdown = dynamic(() => import('@/components/countdown/Countdown'), { ssr: false })

const Step8 = () => {
  return (
    <>
      <StepContainer className="bg-pink">
        <div className="flex h-full w-full flex-col items-center justify-center gap-10 p-4 sm:p-6 md:p-8  lg:p-10">
          <div className="flex w-full flex-col items-center justify-center md:flex-row md:items-center md:justify-between">
            <h2 className="mb-8 text-center text-2xl font-extrabold  text-black md:mb-0 md:mr-10 lg:text-3xl xl:text-4xl">
              Prijave se zatvaraju 2.6.2024. u 23:59
            </h2>
            <Countdown />
          </div>
        </div>
      </StepContainer>
    </>
  )
}

export default Step8
