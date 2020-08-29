const ethers = require('ethers')
const { toChecksumAddress } = require('web3-utils')
const provider = new ethers.providers.JsonRpcProvider()
const signer = provider.getSigner(toChecksumAddress('0xaaa5b19c3c0d18bc6623ace555fbc842884b4864'))
const {
    bytecode,
    abi
} = require('./sampleContract.json')
const cFactory = new ethers.ContractFactory(abi,bytecode,signer)
cFactory.deploy().then((b)=>{
    console.log(b.deployTransaction.creates)
})
