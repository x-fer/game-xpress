import { Countdown, StepContainer } from '@/components'

const Step8 = () => {
  return (
    <>
      <StepContainer className="bg-pink">
        <div className="flex h-full w-full flex-col items-center justify-center gap-10 p-4 sm:p-6 md:p-8  lg:p-10">
          <div className="flex w-full flex-col items-center justify-center md:flex-row md:items-center md:justify-between">
            <h1 className="text-gray mb-8 text-center text-2xl  font-extrabold md:mb-0 md:mr-10 lg:text-3xl xl:text-4xl">
              Prijave se zatvaraju 2.6.2024. u 24:00
            </h1>
            <Countdown />
          </div>
          <a
            href=""
            className="bg-gray rounded-md px-3.5 py-2.5 text-6xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:px-7 md:py-6 md:text-7xl lg:text-8xl"
          >
            PRIJAVI SE!!!
          </a>
        </div>
      </StepContainer>
    </>
  )
}

export default Step8
