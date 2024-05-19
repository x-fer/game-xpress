import { StepContainer } from '@/components'

const Step4 = () => {
  return (
    <StepContainer className="bg-green">
      <div className="h-full w-full flex-col items-start p-6 sm:p-8 md:p-10 lg:p-12">
        <h2 className="text-5xl font-bold text-purple md:text-6xl lg:text-7xl">Bodovanje</h2>
        <ul className="mt-6 text-xl text-white md:text-2xl lg:text-3xl">
          <li>40% → stručni žiri</li>
          <li>60% → peer review između natjecatelja</li>
        </ul>

        <h2 className="mt-10 text-5xl font-bold text-purple md:text-6xl lg:text-7xl">Kriteriji žirija</h2>
        <ul className="mt-6 text-xl text-white md:text-2xl lg:text-3xl">
          <li>Kreativnost - 20%</li>
          <li>Funkcionalnost - 30%</li>
          <li>Dizajn - 20%</li>
          <li>Ukupan dojam - 20%</li>
          <li>Prezentacija igrice - 10%</li>
        </ul>
      </div>
    </StepContainer>
  )
}

export default Step4
