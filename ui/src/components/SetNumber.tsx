import { useState } from 'react'
import { useWriteCounterSetNumber } from '../generated'

export const SetNumber = () => {
  const [number, setNumber] = useState('')

  const { writeContract, isPending } = useWriteCounterSetNumber({
    mutation: {
      onSettled: () => {
        setNumber('')
      },
    },
  })

  return (
    <div>
      Set Number:
      <input
        disabled={isPending}
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
      <button
        className='btn btn-primary'
        disabled={isPending}
        onClick={() => writeContract({ args: [BigInt(number)] })}
        type='button'
      >
        Set
      </button>
    </div>
  )
}
