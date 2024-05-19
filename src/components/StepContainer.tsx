import React, { PropsWithChildren } from 'react'
import { cn } from '@lib/utils'

const StepContainer = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={cn('min-w-screen sticky top-0 flex h-screen  min-h-screen w-screen', className)}>{children}</div>
  )
}

export default StepContainer
