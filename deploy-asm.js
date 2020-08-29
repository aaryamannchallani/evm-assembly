const ethers = require('ethers')
const { toChecksumAddress } = require('web3-utils')
const fs = require('fs')
const {abi,bytecode} = require('./asm.json')
const signer = (new ethers.providers.JsonRpcProvider()).getSigner(toChecksumAddress('0xe2100c128b8acd5b276ece7044e53290db849d44'))
const asmFactory = new ethers.ContractFactory(abi,bytecode,signer)
asmFactory.deploy().then((c)=>{
    console.log(`Deployed at ${c.deployTransaction.creates}`)
})
