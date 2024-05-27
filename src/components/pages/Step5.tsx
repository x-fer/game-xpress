import { StepContainer } from '@/components'

const Step5 = () => {
  return (
    <StepContainer className="bg-gray">
      <div className="h-full w-full flex-col items-start p-6 sm:p-8 md:p-10 lg:p-12">
        <h2 className="text-5xl font-bold text-black md:text-6xl lg:text-7xl">Vrijeme održavanja</h2>
        <ul className="mt-6 text-xl text-white md:text-2xl lg:text-3xl">
          <li>Početak → Subota, 8.6.2024. u 10h</li>
          <li>Kraj → Nedjelja, 9.6.2024. u 10h</li>
        </ul>

        <h2 className="mt-6 text-5xl font-bold text-black md:text-6xl lg:text-7xl">Hrana i piće</h2>
        <ul className="mt-6 text-xl text-white md:text-2xl lg:text-3xl">
          <li>Mi častimo 🥳🥳🥳</li>
        </ul>

        <h2 className="mt-6 text-5xl font-bold text-black md:text-6xl lg:text-7xl">Lokacija</h2>
        <ul className="mt-6 text-xl text-white md:text-2xl lg:text-3xl">
          <li>Algebra</li>
        </ul>
      </div>
    </StepContainer>
  )
}

export default Step5
