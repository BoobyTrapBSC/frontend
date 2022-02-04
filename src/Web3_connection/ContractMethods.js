import { getAccount, getContract,initInstance } from "./web3_methods";
import { ABI } from './../ABI/Rating';
import { TokenABI } from "../ABI/TokenABI";
import { envprod } from "./Envrionments";
import { getWeb3 } from "./web3";


export const getRATEContract = async() => {
    const betContract = getContract(ABI, envprod.React_App_Testnet);
    return betContract;
}

export const getTotoalProfile = async() =>{
    const contract = await getRATEContract();
    const TotalProfile = await contract.methods.profileCount().call();
    return TotalProfile;
}

export const addReview = async(id, rating)=> {
    console.log("Rating got", id , rating)
    const contract = await getRATEContract();
    const data = await contract.methods.addReview(id,rating).send({
        from: await getAccount(),
        value: envprod.React_App_Rating_Fee
    });
    return data;
}

export const getProfile = async(id) => {
    const contract = await getRATEContract();
    const data = await contract.methods.getProfile(id).call();
    return data;
}

export const TokenContract = async()=>{
    await initInstance();
    const contract = getContract(TokenABI,envprod.React_App_Token)
    return contract
}

export const getTokenBalance = async()=> {
    const contract = await TokenContract();
    const balance = await contract.methods.balanceOf(await getAccount()).call();
    return balance
}

export const BNBBalance = async()=>{
    const web3 = getWeb3();
    const bal = await web3.eth.getBalance(await getAccount());
    return bal;
}
export const symbol = async()=>{
    const contract = await TokenContract();
    const sym = await contract.methods.symbol().call();
    return sym;
}