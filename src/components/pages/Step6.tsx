import { StepContainer } from '@/components'

const Step6 = () => {
  return (
    <StepContainer className="flex-1 bg-turquoise pb-14">
      <div className="h-full w-full flex-col items-start p-6 sm:p-8 md:p-10 lg:p-12">
        <h2 className="text-5xl font-bold text-purple md:text-6xl lg:text-7xl">Organizatori #1</h2>
        <p className="mt-8 text-lg text-gray md:text-2xl lg:text-3xl">
          <a
            href="https://xfer.hr/"
            aria-label="Pročitajte više o studentskoj udruzi X.FER"
            className="font-extrabold underline hover:text-red"
          >
            X.FER
          </a>{' '}
          je studentska udruga na Fakultetu elektrotehnike i računarstva posvećena natjecateljskom programiranju.
          Polaznici uče primjenjivati algoritme za rješavanje složenih problema i optimizirati programska rješenja. Osim
          vještine, organiziramo i natjecanja, uključujući{' '}
          <a
            href="https://algotrade.xfer.hr/"
            aria-label="Pročitajte više o Algotrade natjecanju"
            className="text-bold underline hover:text-red"
          >
            AlgoTrade
          </a>
          ,{' '}
          <a
            href="https://snap.xfer.hr/"
            aria-label="Pročitajte više o Snap natjecanju"
            className="text-bold underline hover:text-red"
          >
            Snap
          </a>{' '}
          i{' '}
          <a
            href="https://dosasce.xfer.hr/"
            aria-label="Pročitajte više o Došašće++ natjecanju"
            className="text-bold underline hover:text-red"
          >
            Došašće++
          </a>{' '}
          . Članovi su bivši natjecatelji i olimpijci, a udruga trenutno ima oko 20 aktivnih i preko 50 počasnih
          članova. Naša misija je omogućiti polaznicima strukturirano obrazovanje iz algoritama i pripremiti ih za
          poslovne intervjue u IT sektoru.
        </p>
      </div>
    </StepContainer>
  )
}

export default Step6
