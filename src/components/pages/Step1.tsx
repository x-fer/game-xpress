import { HeroImage, JumpingArrow, StepContainer } from '@/components'

const Step1 = () => {
  return (
    <>
      <StepContainer className="bg-blue">
        <div className="relative flex h-full w-full flex-col items-start justify-center gap-8 p-4 sm:p-6 md:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <h1 className="ml-4 text-left text-7xl font-extrabold text-white lg:text-right lg:text-8xl xl:text-9xl">
            Game X.PRESS
          </h1>
          <div className=" w-full lg:w-[70%]">
            <HeroImage />
          </div>
        </div>
        <JumpingArrow />
      </StepContainer>
    </>
  )
}

export default Step1
