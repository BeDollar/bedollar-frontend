import { Configuration } from './basis-cash/config';
import { BankInfo } from './basis-cash';

const configurations: { [env: string]: Configuration } = {
  development: {
    chainId: 256,
    etherscanUrl: 'https://scan-testnet.hecochain.com',
    defaultProvider: 'https://http-testnet.hecochain.com',
    deployments: require('./basis-cash/deployments/deployments.heco_testnet.json'),
    externalTokens: {
      DAI: ['0x60d64Ef311a4F0E288120543A14e7f90E76304c6', 18],
      yCRV: ['0x7293956cCA15FDdCC797E51e046A6dc48b777BdA', 18],
      SUSD: ['0xfB3c59ccdBaa59f5611637498FA177F4E8910a47', 18],
      USDC: ['0xd459Dad367788893c17c09e17cFBF0bf25c62833', 6],
      USDT: ['0x04F535663110A392A6504839BEeD34E019FdB4E0', 6],
      'BAC_DAI-UNI-LPv2': ['0x21FD1A4965A4Ce9bcC0645fBD086f6e3a1b22663', 18],
      'BAS_DAI-UNI-LPv2': ['0xBb5592A8923621591b3b64d1C035949667EA09F7', 18],
    },
    baseLaunchDate: new Date('2020-11-26T00:00:00Z'), // TODO
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'), // TODO
    boardroomLaunchesAt: new Date('2020-12-11T00:00:00Z'), // TODO
    refreshInterval: 10000,
    gasLimitMultiplier: 1.1,
  },
};

export const bankDefinitions: { [contractName: string]: BankInfo } = {
  BACDAIPool: {
    name: 'Earn BAC by DAI',
    contract: 'BACDAIPool',
    depositTokenName: 'DAI',
    earnTokenName: 'BAC',
    finished: true,
    sort: 3,
  },
  BACUSDCPool: {
    name: 'Earn BAC by USDC',
    contract: 'BACUSDCPool',
    depositTokenName: 'USDC',
    earnTokenName: 'BAC',
    finished: true,
    sort: 4,
  },
  BACSUSDPool: {
    name: 'Earn BAC by sUSD',
    contract: 'BACSUSDPool',
    depositTokenName: 'SUSD',
    earnTokenName: 'BAC',
    finished: true,
    sort: 5,
  },
  BACUSDTPool: {
    name: 'Earn BAC by USDT',
    contract: 'BACUSDTPool',
    depositTokenName: 'USDT',
    earnTokenName: 'BAC',
    finished: true,
    sort: 6,
  },
  BACyCRVPool: {
    name: 'Earn BAC by yCRV',
    contract: 'BACyCRVPool',
    depositTokenName: 'yCRV',
    earnTokenName: 'BAC',
    finished: true,
    sort: 7,
  },
  DAIBACLPTokenSharePool: {
    name: 'Earn BAS by BAC-DAI-LP',
    contract: 'DAIBACLPTokenSharePool',
    depositTokenName: 'BAC_DAI-UNI-LPv2',
    earnTokenName: 'BAS',
    finished: false,
    sort: 1,
  },
  DAIBASLPTokenSharePool: {
    name: 'Earn BAS by BAS-DAI-LP',
    contract: 'DAIBASLPTokenSharePool',
    depositTokenName: 'BAS_DAI-UNI-LPv2',
    earnTokenName: 'BAS',
    finished: false,
    sort: 2,
  },
};

export default configurations[process.env.NODE_ENV || "development"];
