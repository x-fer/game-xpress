import { StepContainer } from '@/components'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

const Step6 = () => {
  return (
    <StepContainer className="flex-1 bg-turquoise pb-14">
      <div className="h-full w-full flex-col items-start p-6 sm:p-8 md:p-10 lg:p-12">
        <h2 className="text-5xl font-bold text-purple md:text-6xl lg:text-7xl">Organizatori #1</h2>
        <p className="mt-6 text-lg text-purple md:text-2xl lg:text-3xl">
          <a
            href="https://xfer.hr/"
            target="_blank"
            aria-label="Pročitajte više o studentskoj udruzi X.FER"
            className="font-extrabold underline hover:text-red"
          >
            X.FER
          </a>{' '}
          je studentska udruga na Fakultetu elektrotehnike i računarstva posvećena vještini natjecateljskog
          programiranja. Još od 2009. polaznici uče primjenjivati algoritme za rješavanje složenih optimizacijskih
          problema. Osim vještine, organiziramo i natjecanja, uključujući{' '}
          <a
            href="https://algotrade.xfer.hr/"
            target="_blank"
            aria-label="Pročitajte više o Algotrade natjecanju"
            className="text-bold underline hover:text-red"
          >
            AlgoTrade
          </a>
          ,{' '}
          <a
            href="https://snap.xfer.hr/"
            target="_blank"
            aria-label="Pročitajte više o Snap natjecanju"
            className="text-bold underline hover:text-red"
          >
            Snap
          </a>{' '}
          i{' '}
          <a
            href="https://dosasce.xfer.hr/"
            target="_blank"
            aria-label="Pročitajte više o Došašće++ natjecanju"
            className="text-bold underline hover:text-red"
          >
            Došašće++
          </a>
          . Članovi udruge su bivši natjecatelji i olimpijci, a udruga trenutno ima oko 20 aktivnih i preko 50 počasnih
          članova.
        </p>
        <div className="mt-4 flex flex-row text-purple  md:flex-col md:gap-3">
          <a
            href="https://www.facebook.com/xferhr"
            target="_blank"
            aria-label="Posjetite X.FER Facebook stranicu"
            className="flex w-fit items-end gap-2 text-xl underline hover:text-red md:text-2xl lg:text-3xl "
          >
            <Facebook size={40} /> <p className="hidden  md:block"> Facebook</p>
          </a>
          <a
            href="https://www.instagram.com/xfer_hr"
            target="_blank"
            aria-label="Posjetite X.FER Instagram stranicu"
            className="ml-1 flex w-fit items-end gap-2 text-xl underline hover:text-red md:ml-0 md:text-2xl lg:text-3xl"
          >
            <Instagram size={40} /> <p className="hidden md:block"> Instagram</p>
          </a>
          <a
            href="https://www.linkedin.com/company/xferhr"
            target="_blank"
            aria-label="Posjetite X.FER LinkedIn stranicu"
            className="ml-2 flex w-fit  items-end gap-2 text-xl underline hover:text-red md:ml-0 md:text-2xl lg:text-3xl"
          >
            <Linkedin size={40} /> <p className="hidden md:block"> LinkedIn</p>
          </a>
        </div>
      </div>
    </StepContainer>
  )
}

export default Step6
