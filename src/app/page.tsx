import { ButtonSignUp } from '@/components'
import { Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8 } from '@/components/pages'

export default function Home() {
  return (
    <main className="mt-0 flex w-full flex-col items-center justify-between">
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
      <Step6 />
      <Step7 />
      <Step8 />
      <ButtonSignUp />
    </main>
  )
}
