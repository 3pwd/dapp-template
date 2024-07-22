import {
  createUseReadContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
  createUseWriteContract,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Counter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1A61839Eb5fC6eBBcAe01eD5E79062E598792Dac)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x78991BB1D194C1235fe285240af8489CFA552151)
 * -
 */
export const counterAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'increment',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'number',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'setNumber',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1A61839Eb5fC6eBBcAe01eD5E79062E598792Dac)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x78991BB1D194C1235fe285240af8489CFA552151)
 * -
 */
export const counterAddress = {
  1: '0x1A61839Eb5fC6eBBcAe01eD5E79062E598792Dac',
  5: '0x78991BB1D194C1235fe285240af8489CFA552151',
  31337: '0xbe18A1B61ceaF59aEB6A9bC81AB4FB87D56Ba167',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1A61839Eb5fC6eBBcAe01eD5E79062E598792Dac)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x78991BB1D194C1235fe285240af8489CFA552151)
 * -
 */
export const counterConfig = {
  address: counterAddress,
  abi: counterAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DSTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const dsTestAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link counterAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1A61839Eb5fC6eBBcAe01eD5E79062E598792Dac)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x78991BB1D194C1235fe285240af8489CFA552151)
 * -
 */
export const useReadCounter = /*#__PURE__*/ createUseReadContract({
  abi: counterAbi,
  address: counterAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"number"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1A61839Eb5fC6eBBcAe01eD5E79062E598792Dac)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x78991BB1D194C1235fe285240af8489CFA552151)
 * -
 */
export const useReadCounterNumber = /*#__PURE__*/ createUseReadContract({
  abi: counterAbi,
  address: counterAddress,
  functionName: 'number',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link counterAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1A61839Eb5fC6eBBcAe01eD5E79062E598792Dac)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x78991BB1D194C1235fe285240af8489CFA552151)
 * -
 */
export const useWriteCounter = /*#__PURE__*/ createUseWriteContract({
  abi: counterAbi,
  address: counterAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"increment"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1A61839Eb5fC6eBBcAe01eD5E79062E598792Dac)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x78991BB1D194C1235fe285240af8489CFA552151)
 * -
 */
export const useWriteCounterIncrement = /*#__PURE__*/ createUseWriteContract({
  abi: counterAbi,
  address: counterAddress,
  functionName: 'increment',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"setNumber"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1A61839Eb5fC6eBBcAe01eD5E79062E598792Dac)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x78991BB1D194C1235fe285240af8489CFA552151)
 * -
 */
export const useWriteCounterSetNumber = /*#__PURE__*/ createUseWriteContract({
  abi: counterAbi,
  address: counterAddress,
  functionName: 'setNumber',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link counterAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1A61839Eb5fC6eBBcAe01eD5E79062E598792Dac)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x78991BB1D194C1235fe285240af8489CFA552151)
 * -
 */
export const useSimulateCounter = /*#__PURE__*/ createUseSimulateContract({
  abi: counterAbi,
  address: counterAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"increment"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1A61839Eb5fC6eBBcAe01eD5E79062E598792Dac)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x78991BB1D194C1235fe285240af8489CFA552151)
 * -
 */
export const useSimulateCounterIncrement = /*#__PURE__*/ createUseSimulateContract({
  abi: counterAbi,
  address: counterAddress,
  functionName: 'increment',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"setNumber"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1A61839Eb5fC6eBBcAe01eD5E79062E598792Dac)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x78991BB1D194C1235fe285240af8489CFA552151)
 * -
 */
export const useSimulateCounterSetNumber = /*#__PURE__*/ createUseSimulateContract({
  abi: counterAbi,
  address: counterAddress,
  functionName: 'setNumber',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link counterAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1A61839Eb5fC6eBBcAe01eD5E79062E598792Dac)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x78991BB1D194C1235fe285240af8489CFA552151)
 * -
 */
export const useWatchCounterEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: counterAbi,
  address: counterAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link counterAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1A61839Eb5fC6eBBcAe01eD5E79062E598792Dac)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x78991BB1D194C1235fe285240af8489CFA552151)
 * -
 */
export const useWatchCounterTransferEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: counterAbi,
  address: counterAddress,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dsTestAbi}__
 */
export const useReadDsTest = /*#__PURE__*/ createUseReadContract({
  abi: dsTestAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dsTestAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadDsTestIsTest = /*#__PURE__*/ createUseReadContract({
  abi: dsTestAbi,
  functionName: 'IS_TEST',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dsTestAbi}__
 */
export const useWriteDsTest = /*#__PURE__*/ createUseWriteContract({
  abi: dsTestAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dsTestAbi}__ and `functionName` set to `"failed"`
 */
export const useWriteDsTestFailed = /*#__PURE__*/ createUseWriteContract({
  abi: dsTestAbi,
  functionName: 'failed',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dsTestAbi}__
 */
export const useSimulateDsTest = /*#__PURE__*/ createUseSimulateContract({
  abi: dsTestAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dsTestAbi}__ and `functionName` set to `"failed"`
 */
export const useSimulateDsTestFailed = /*#__PURE__*/ createUseSimulateContract({
  abi: dsTestAbi,
  functionName: 'failed',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__
 */
export const useWatchDsTestEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: dsTestAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log"`
 */
export const useWatchDsTestLogEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: dsTestAbi, eventName: 'log' },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchDsTestLogAddressEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: dsTestAbi,
  eventName: 'log_address',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchDsTestLogBytesEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: dsTestAbi,
  eventName: 'log_bytes',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchDsTestLogBytes32Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: dsTestAbi,
  eventName: 'log_bytes32',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchDsTestLogIntEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: dsTestAbi,
  eventName: 'log_int',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchDsTestLogNamedAddressEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: dsTestAbi,
  eventName: 'log_named_address',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchDsTestLogNamedBytesEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: dsTestAbi,
  eventName: 'log_named_bytes',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchDsTestLogNamedBytes32Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: dsTestAbi,
  eventName: 'log_named_bytes32',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchDsTestLogNamedDecimalIntEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: dsTestAbi,
  eventName: 'log_named_decimal_int',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchDsTestLogNamedDecimalUintEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: dsTestAbi,
  eventName: 'log_named_decimal_uint',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchDsTestLogNamedIntEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: dsTestAbi,
  eventName: 'log_named_int',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchDsTestLogNamedStringEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: dsTestAbi,
  eventName: 'log_named_string',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchDsTestLogNamedUintEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: dsTestAbi,
  eventName: 'log_named_uint',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchDsTestLogStringEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: dsTestAbi,
  eventName: 'log_string',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchDsTestLogUintEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: dsTestAbi,
  eventName: 'log_uint',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchDsTestLogsEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: dsTestAbi,
  eventName: 'logs',
})
