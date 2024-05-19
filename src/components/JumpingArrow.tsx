'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const bounceTransition = {
  duration: 2,
  repeat: Infinity,
  repeatType: 'loop',
  ease: 'easeInOut',
  times: [0, 0.2, 0.5, 0.8, 1],
}

const bounceVariants = {
  start: { y: 0 },
  end: { y: [-30, 0, -15, 0, 0] },
}

const JumpingArrow = () => {
  return (
    <motion.div
      className="absolute bottom-0 flex w-full justify-center pb-4"
      variants={bounceVariants}
      initial="start"
      animate="end"
      //@ts-ignore
      transition={bounceTransition}
    >
      <ArrowDown size={80} color="white" />
    </motion.div>
  )
}

export default JumpingArrow
