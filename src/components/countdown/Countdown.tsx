'use client'

import ExpiredNotice from './ExpiredNotice'
import ShowCounter from './ShowCounter'
import { useCountdown } from './useCountdown'

const END_DATE = '2024-06-03T00:00:00'

const Countdown = () => {
  const [days, hours, minutes, seconds] = useCountdown(new Date(END_DATE).getTime())

  return (
    <div className="flex w-full items-center justify-center gap-1 rounded-lg bg-white px-2 py-4 md:w-max md:flex-1 md:gap-2 md:px-4">
      {days + hours + minutes + seconds <= 0 ? (
        <ExpiredNotice />
      ) : (
        <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />
      )}
    </div>
  )
}

export default Countdown
