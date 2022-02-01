import Web3 from "web3";
import {envprod} from "./Envrionments"

const httpProvider = new Web3.providers.HttpProvider(
    envprod.REACT_APP_RPCURL_TESTNET,
  {
    timeout: 10000,
  }
);

const getWeb3 = () => {
  return new Web3(httpProvider);
};
export { getWeb3 };