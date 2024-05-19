import { cn } from '@/lib'

const DateTimeDisplay = ({ value, type, isDanger }: { value: number; type: string; isDanger: boolean }) => {
  return (
    <div className={cn('align-center  flex w-fit flex-col font-semibold', isDanger ? 'text-red' : 'text-gray')}>
      <p className="text-center">{value}</p>
      <span className="text-center">{type}</span>
    </div>
  )
}

export default DateTimeDisplay
