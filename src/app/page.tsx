'use client'

import { ButtonSignUp } from '@/components'
import { Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8 } from '@/components/pages'
import { useScroll, useTransform } from 'framer-motion'
import { ElementRef, useRef } from 'react'

export default function Home() {
  const ref = useRef<ElementRef<'div'>>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  const displayStepCounter = useTransform(scrollYProgress, [0, 1], [1, 7])
  const display = useTransform(displayStepCounter, (value) => (value <= 2.5 ? 'none' : 'block'))

  return (
    <main ref={ref} className="mt-0 flex w-full flex-col items-center justify-between">
      <Step1 />
      <div className="mt-0 flex w-full flex-col items-center justify-between" ref={ref}>
        <Step2 />
        <Step3 />
        <Step4 />
        <Step5 />
        <Step6 />
        <Step7 />
        <Step8 />
      </div>
      <ButtonSignUp scale={scale} display={display} />
    </main>
  )
}
