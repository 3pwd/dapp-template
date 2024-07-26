'use client'

import { useAccount, useDisconnect } from 'wagmi'

function App() {
  const account = useAccount()
  const { disconnect } = useDisconnect()

  return (
    <>
      <div>
        <h2 className='underline text-lg'>Account</h2>

        <w3m-button />
        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === 'connected' && (
          <button type='button' onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>
    </>
  )
}

export default App
