## Megalis Project - V1 du Smart Contract

### _I. Pour commencer voici les fonctionnalités que possède le SmartContract :_

##### Version 1 :
- Fonction avec signature : 
```
fonction publier (siren, url_doc, hash_doc)
-> Ajoute une publication avec les infos données en paramètre au smart contract et la publie donc dans la blockchain,
   avec ainsi l'horodatage offert par le block dans lequel cette publication (transaction) est posté.
```

- Fonction sans signature : 
```
fonction listerSirens ()
-> Retourne un tableau contenant tous les Sirens ayant publier quelque chose dans notre smart contract.

fonction listerPublication(siren)
-> Retourne un tableau contenant toutes les publications d'un Siren entré en paramètre
```

##### Version 2 :
Dans la version deux, nous avons les mêmes fonctionnalités mais avec la suppression du hash du document publié, puisque celui-ci est dans l'Url du document, et que cela prends de la place (et donc a un coût) lors de la publication.

#
### _II. Voici comment l'installer, le déployer, interagir avec, ou le modifier :_
##### a. Installer :
1. Le cloner sur votre machine depuis le Git
2. Installer les modules nécessaires (hardhat, ethers, dotenv, ...) via la commande : ```npm install```

##### b. Modifier : 
Une fois le smart contract modifier comme vous le souhaitez, vous pouvez le compiler via la commande ```npx hardhat compile```, afin de voir s'il contient des erreurs. Si vous modifiez le fichier ".sol", vous devez impérativement importer le nouveau fichier "../artifacts/contracts/smartContractName.sol/smartContractName.json" à votre frontend. Dans ce project back ce n'est pas nécessaire et fait automatiquement.

##### c. Déployer : 
1. Vérifier le fichier "deployV2.js" et "hardhat.config.js" qui sont normalement déjà prêt à l'emploi (à adapter en fonction du point suivant) ;
2. Créer un fichier ".env" (dotenv) dans lequel vous referencerez les constantes nécessaires (celle dont vous avez besoin dans hardhat.config.js).
Par exemple, vous aurez au moins besoin d'une clé privée et d'une clé API, vous aurez donc :

- Dans voter fichier ".env" :
```
PRIVATE_KEY = "xxx"
API_KEY = "xxx
```

- Dans votre fichier "hardha.config.js" :
```
const { PRIVATE_KEY, API_KEY } = process.env
```

Vous taperez donc la commande suivant et aurez comme résultat quelque chose comme ceci : 
```
cmd =       npx hardhat run scripts/deployV2.js --network networkNameThatYouChoose

result =    Deploying contracts with the account: 0x82de905E53cB57Cfd7c1e9B7552a175756d96EFd
            Contract address: 0x347a2ea7BC38A50B53a1197f4195a39d0692a893
```
L'adresse de votre nouveau smart contract sera ainsi : "0x347a2ea7BC38A50B53a1197f4195a39d0692a893", vous pourrez donc aller vérifier dans un "blockchain explorer" la création de ce contrat (Lien plus loin).

##### d. Interagir : 
1. Vous aurez besoin de 3 paramètres, que sont la clé privée, l'adresse du contrat et la clé API, il vous faudra donc les mettre à jour en fonction de votre fichier ".env". 
2. Dans la fonction main, vous pouvez modifier le code afin d'appeler les fonctions du fichier ".sol" que vous voulez utiliser pour interagir avec le contrat.

#
### _III. Liens importants :_
##### a. Docs :
Ethers.js : https://docs.ethers.io/v5/  
Web3.js : https://web3js.readthedocs.io/en/v1.7.3/index.html#   
Ethereum : https://ethereum.org/en/developers/docs/     
Hardhat : https://hardhat.org/getting-started   
Metamask : https://docs.metamask.io/guide/  
WalletConnect : https://docs.walletconnect.com/     
JavaScript : https://devdocs.io/javascript/     

##### b. Explorer : 
Ethereum (Mainnet) : https://etherscan.io/    
Ropsten (Ethereum Testnet) : https://ropsten.etherscan.io/    
Goerli (Ethereum Testnet) : https://goerli.etherscan.io/  
Rinkeby (Ethereum Testnet) : https://rinkeby.etherscan.io/    
Kovan (Ethereum Testnet) : https://kovan.etherscan.io/    
Gnosis (Mainnet - XDai Chain) : https://blockscout.com/xdai/mainnet/  
Polygon (Mainnet - Matic) : https://polygonscan.com/     
Mumbai (Polygon Testnet) : https://mumbai.polygonscan.com/

##### c. Providers : 
Alchemy : https://dashboard.alchemyapi.io/  
Blast : https://blastapi.io/dashboard   
Infura : https://infura.io/dashboard    
GetBlock : https://account.getblock.io/     
Moralis : https://docs.moralis.io/introduction/readme   

##### d. Autres : 
ChainList : https://chainlist.org/  
Chainlink faucet : https://faucets.chain.link/  
Metamask faucet : https://faucet.metamask.io/   



### **_ESTERBET Julien - SIB._**