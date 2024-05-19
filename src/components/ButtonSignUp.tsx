'use client'

import { MotionValue, motion } from 'framer-motion'

const ButtonSignUp = ({ scale, display }: { scale: MotionValue<number>; display: MotionValue<string> }) => {
  return (
    <motion.a
      href=" "
      className="fixed bottom-4 right-4 rounded-md bg-white px-3.5 py-2.5 text-center text-6xl font-semibold text-black shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:bottom-6 md:right-6 md:px-7 md:py-6 md:text-7xl lg:bottom-8 lg:right-8 lg:text-8xl"
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
