const SHA256 = require("crypto-js/SHA256");

class CryptoBlock {
    constructor(index, timestamp, data, previoushash) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previoushash = previoushash;
    this.hash = this.computerhash();
    this.nonce = 0;
    }
computerhash() {
return SHA256(this.index + this.timestamp + this.data + JSON.stringify(this.data) + this.nonce).toString();
}

proofofWork(dificuldade) {
    while(this.hash.substring(0 , dificuldade) ==! Array(dificuldade + 1,).join("0")){
          this.nonce++;
          this.hash = this.computerhash()
    }
    }
}

class CryptoBlockChain {
    constructor() {
        this.Blockchain = [this.StartGenesisBlock()];
        this.dificuldade = 8;
    }

StartGenesisBlock(){
   return new CryptoBlock(0 , "10/05/2024", "Genesis Block", "0")
}

obtemlatestblock(){
    return this.Blockchain[this.Blockchain.length -1];
}

addBlock(newBlock){
     newBlock.previoushash = this.obtemlatestblock().hash;
     newBlock.proofofWork(this.dificuldade);
     this.Blockchain.push(newBlock);
}

checkchainvalality() {
     for(let i = 1; i < globalThis.Blockchain.length ; i++) {
        const currentblock = this.Blockchain[i];
        const previoublock = this.Blockchain[i - 1];

        if (currentblock.hash !== currentblock.calculatehash()) {
            return false;
        }

        if (currentblock.hash !== currentblock.previoushash()) {
            return false;
        }
     }
     return true;
}

}
let crypto = new CryptoBlockChain();
console.log('Mineirando novo bloco');
      crypto.addBlock(new CryptoBlock(1, "11/05/2024",
      {
      sender: "Joao",
      recipient:"Leonardo",
      quantity : 4
      })
    );
      crypto.addBlock(new CryptoBlock(1, "11/05/2024",
      {
      sender: "Joao",
      recipient:"miguel",
      quantity : 48
      })
    );
      crypto.addBlock(new CryptoBlock(1, "11/05/2024",
      {
      sender: "miguel",
      recipient:"Leandro",
      quantity : 499
      })
    );
      crypto.addBlock(new CryptoBlock(1, "11/05/2024",
      {
      sender: "Joao",
      recipient:"Leonardo",
      quantity : 490
      })
    )
    console.log(JSON.stringify(crypto, null, 10));