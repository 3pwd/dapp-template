import { useWriteCounterIncrement } from '../generated'

export const Increment = () => {
  const { writeContract: increment } = useWriteCounterIncrement()
  // @ts-ignore
  return <button type='button' onClick={increment} className='btn btn-primary btn-lg btn-block'>Increment</button>
}
