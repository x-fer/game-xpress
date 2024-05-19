import { StepContainer } from '@/components'

const Step7 = () => {
  return (
    <StepContainer className="bg-purple">
      <div className="h-full w-full flex-col items-start p-6 sm:p-8 md:p-10 lg:p-12">
        <h2 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">Organizatori #2</h2>

        <p className="mt-10 text-lg text-white md:text-2xl lg:text-3xl">
          <a href="https://esports.fer.hr/" className="font-extrabold underline hover:text-blue">
            FER ESports
          </a>{' '}
          je studentska udruga na Fakultetu elektrotehnike i računarstva, osnovana 2017. godine. Okupljamo ljubitelje
          računalnih igara i sudjelujemo na esport događajima diljem Hrvatske. Organiziramo turnire, uključujući FER
          Esports Championship, te sudjelujemo na STEM Games. Naša sekcija ima preko stotinu igrača i volontera koji
          vode treninge i pripreme za natjecanja. Cilj nam je promovirati esport među studentima i mladima te potaknuti
          razvoj zdrave konkurencije u esportu.
        </p>
      </div>
    </StepContainer>
  )
}

export default Step7
