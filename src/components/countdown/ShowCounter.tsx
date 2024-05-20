import DateTimeDisplay from './DateTimeDisplay'

const ShowCounter = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number
  hours: number
  minutes: number
  seconds: number
}) => {
  return (
    <>
      <span className="mr-3 w-fit text-xl font-semibold text-black md:mr-6 md:text-2xl lg:text-3xl">Do kraja:</span>
      <DateTimeDisplay value={days} type={'Dan'} isDanger={days <= 3} />
      <p>:</p>
      <DateTimeDisplay value={hours} type={'Sat'} isDanger={days <= 3} />
      <p>:</p>
      <DateTimeDisplay value={minutes} type={'Minuta'} isDanger={days <= 3} />
      <p>:</p>
      <DateTimeDisplay value={seconds} type={'Sekunda'} isDanger={days <= 3} />
    </>
  )
}

export default ShowCounter
