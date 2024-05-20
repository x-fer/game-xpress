import { StepContainer } from '@/components'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

const Step7 = () => {
  return (
    <StepContainer className="bg-purple">
      <div className="h-full w-full flex-col items-start p-6 sm:p-8 md:p-10 lg:p-12">
        <h2 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">Organizatori #2</h2>

        <p className="mt-8 text-lg text-white md:text-2xl lg:text-3xl">
          <a
            href="https://esports.fer.hr/"
            target="_blank"
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
        <div className="mt-6 flex flex-row text-white md:flex-col md:gap-3">
          <a
            href="https://www.facebook.com/FEResports/"
            target="_blank"
            aria-label="Posjetite FER esports Facebook stranicu"
            className="flex items-end gap-2 text-xl underline hover:text-blue md:text-2xl lg:text-3xl"
          >
            <Facebook size={40} /> <p className="hidden md:block"> Facebook</p>
          </a>
          <a
            href="https://www.instagram.com/fer_esports"
            target="_blank"
            aria-label="Posjetite FER esports Instagram stranicu"
            className="ml-1 flex items-end gap-2 text-xl underline hover:text-blue md:ml-0 md:text-2xl  lg:text-3xl "
          >
            <Instagram size={40} /> <p className="hidden md:block"> Instagram</p>
          </a>
          <a
            href="https://www.linkedin.com/company/fer-esports/about/"
            target="_blank"
            aria-label="Posjetite FER esports Linkedin stranicu"
            className="ml-2 flex items-end gap-2 text-xl underline hover:text-blue  md:ml-0  md:text-2xl lg:text-3xl"
          >
            <Linkedin size={40} /> <p className="hidden md:block"> Linkedin</p>
          </a>
        </div>
      </div>
    </StepContainer>
  )
}

export default Step7
