'use client'
import { useReadCounterNumber } from '../generated'

export const Count = () => {
  const { data: counter } = useReadCounterNumber()
  return <div>Count: {counter?.toString()}</div>
}
