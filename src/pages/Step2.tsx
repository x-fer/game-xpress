import { StepContainer } from '@/components'

const Step2 = () => {
  return (
    <StepContainer className="bg-yellow">
      <div className="flex h-full w-full items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
        <p className="text-2xl md:text-4xl lg:text-5xl">
          <strong className="text-purple">Game X.PRESS</strong> je studentsko natjecanje u izradi video igara poznatije
          kao{' '}
          <a href="https://en.wikipedia.org/wiki/Game_jam" className="underline">
            Game jam
          </a>
          . Traje 24h i održati će se uživo. Prijaviti se mogu svi studenti, neovisno kojem sveučilištu pripadaju.
        </p>
      </div>
    </StepContainer>
  )
}

export default Step2
