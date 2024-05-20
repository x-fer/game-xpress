'use client'

import { MotionValue, motion } from 'framer-motion'

const ButtonSignUp = ({ scale, display }: { scale: MotionValue<number>; display: MotionValue<string> }) => {
  return (
    <motion.a
      href="https://forms.gle/Waw3sNiDLNRh8rsH9"
      aria-label="Prijavite se na Game X.PRESS natjecanje!"
      className="fixed bottom-6 right-6 rounded-lg bg-white px-3 py-2 text-center text-5xl font-semibold text-black shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:bottom-6 md:right-6 md:px-7 md:py-6 md:text-6xl lg:bottom-8 lg:right-8 lg:text-7xl"
      style={{
        scale: scale,
        display: display,
      }}
    >
      Prijavi se!
    </motion.a>
  )
}

export default ButtonSignUp
