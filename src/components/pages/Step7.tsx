import { StepContainer } from '@/components'

const Step7 = () => {
  return (
    <StepContainer className="bg-purple">
      <div className="h-full w-full flex-col items-start p-6 sm:p-8 md:p-10 lg:p-12">
        <h2 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">Organizatori #2</h2>

        <p className="mt-10 text-lg text-white md:text-2xl lg:text-3xl">
          <a
            href="https://esports.fer.hr/"
            aria-label="Pročitajte više o studentskoj udruzi FER esports"
            className="font-extrabold underline hover:text-blue"
          >
            FER esports
          </a>{' '}
          je studentska udruga na Fakultetu elektrotehnike i računarstva, osnovana 2017. godine. Okupljamo ljubitelje i
          entuzijaste računalnih igara te sudjelujemo na esports natjecanjima diljem Hrvatske. Organiziramo FER esports
          Championship te sudjelujemo u organizaciji UniZG, UniHR, STEM Games i brojnih drugih esports natjecanja. Cilj
          nam je promovirati esport među studentima i mladima te potaknuti razvoj zdrave konkurencije u esportu.
        </p>
      </div>
    </StepContainer>
  )
}

export default Step7
