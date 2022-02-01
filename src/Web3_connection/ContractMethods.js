import { getAccount, getContract } from "./web3_methods";
import { ABI } from './../ABI/Rating';
import { envprod } from "./Envrionments";


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
    const contract = await getRATEContract();
    const data = await contract.methods.addReview(id,rating).send({
        from: await getAccount()
    });
    return data;
}

export const getProfile = async(id) => {
    const contract = await getRATEContract();
    const data = await contract.methods.getProfile(id).call();
    return data;
}