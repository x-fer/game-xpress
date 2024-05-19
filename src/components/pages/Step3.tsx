import { StepContainer } from '@/components'

const Step3 = () => {
  return (
    <StepContainer className="bg-red">
      <div className="h-full w-full flex-col items-start p-6 sm:p-8 md:p-10 lg:p-12">
        <h2 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">Pravila</h2>
        <ul className="mt-6 rounded-lg bg-white p-4 text-xl md:text-2xl lg:text-3xl">
          <li>🫂 Veličina ekipe → 3 osobe</li>
          <li>🔟 Broj ekipa → ograničen na 10 ekipa (Prijavi se što prije)</li>
          <br />
          <li>🏰 Žanr → proizvoljan (Adventure, Puzzle, Simulation, FPS, MOBA...)</li>
          <li>👾 Stil → što god vas veseli (Pixel Art, 2D, 3D...)</li>
          <br />
          <li>⚙️ Tehnologija → bilo koja (Unity, UE5, Godot, PyGame...)</li>
          <li>🤫 Tema → ista za sve i obavezna, ali tajna do početka natjecanja </li>
        </ul>
      </div>
    </StepContainer>
  )
}
export default Step3
