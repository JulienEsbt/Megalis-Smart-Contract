## Megalis Project - V1 du Smart Contract

### Pour commencer voici  les fonctionnalitées que possède le SmartContract :

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
Dans la version deux, nous avons les mêmes foncitonnalités mais avec la suppression du hash du document publié, puisque celui-ci est dans l'Url du document, et que cela prends de la place (et donc a un coût) lors de la publication.

### Voici comment l'intaller, le déployer, intéragir avec, ou le modifier :
##### Installer :
1. Le cloner
2. Installer les modules nécessaires (hardhat, ethers, dotenv, ...) via la commande : ```npm install```

##### Modifier : 
Une fois le smart contract modifier comme vous le souhaitez, vous pouvez le compiler via la commande ```npx hardhat compile```, afin de voir si il contient des erreurs.

##### Déployer : 
1. Vérifier le fichier "deployV2.js" et "hardhat.config.js" qui sont normalement déjà prêt à l'emploi
2. Créer un fichier ".env" (dotenv) dans lequel vous referencerez les constantes nécessaires (celle dont vous avez besoin dans hardhat.config.js).
Par exemple, vous aurez forcément besoin d'une clé privée et d'une clé API, vous aurez donc :

- Dans voter fichier ".env" :
```
PRIVATE_KEY = "xxx"
API_KEY = "xxx
```

- Dans votre fichier "hardha.config.js" :
```
const { PRIVATE_KEY, API_KEY } = process.env
```

Vous aurez comme résultat quelque chose comme ceci : 
```
Deploying contracts with the account: 0x82de905E53cB57Cfd7c1e9B7552a175756d96EFd
Contract address: 0x347a2ea7BC38A50B53a1197f4195a39d0692a893
```

Et le contrat de votre nouveau smart contract sera ainsi : "0x347a2ea7BC38A50B53a1197f4195a39d0692a893".






ESTERBET Julien - SIB.