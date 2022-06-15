//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract megalisV1 {

    // Création de deux états pour une publication : "en cours" et "finit".
    enum StateType {
        OnGoing,
        Finish
    }

    // Création d'un évènement, ce qui nous permettra d'appeler le contract dans le frontend.
    event NewPublication(address _publisher, string indexed _siren, string _url, string indexed _hash, uint256 indexed _timestamp, StateType _state);

    // Création d'une structure pour la publication.
    struct Publication {
        address Publisher;
        string Publisher_siren;
        string Doc_url;
        string Doc_hash;
        uint256 Doc_timestamp;
        StateType State;
        /* Pour Doc_hash, on pourrait utiliser la fonction keccak256() (ou sha256()) pour créer directement le hash du
        pdf après l'avoir input, mais je ne sais pour le moment techniquement pas comment le faire, à voir si on fait ça
        avec juste un scanner classique dans lequel l'utilisateur entre simplement le titre du doc, copie colle tout le
        document (si c'est un fichier txt par exemple), ou même importe le pdf. Pour le moment nous allons faire comme
        si nous avions directement le hash du document. Je pense qu'il serait possible de créer un autre smart contract
        ou un autre programme qui nous permettrait d'import le document et d'utiliser une fonction de hachage pour avoir
        le hash directement. */
    }

    // Création d'un mapping Siren-->Publication (Clé-->Valeur).
    mapping (string => Publication[]) pubmap;

    // Création d'un tableau qui va permettre de référencer les Sirens ayant déjà publié un document.
    string [] public tab_publisher;

    // Constructor du Smart Contract
    constructor() {
        console.log("Le Smart Contract a bien ete deploye. Il vous permettra de publier sur la blockchain un document (son URL et son Hash) avec son horodatage et un numero d'identification propore a votre collectivite.");
    }

    // Fonction qui permettra de savoir si un Siren à déjà été ajouter dans le tableau des Sirens.
    function existingInTab(string memory x) public view returns (bool){
        for (uint i = 0; i < tab_publisher.length; i++){
            if(keccak256(abi.encodePacked((tab_publisher[i]))) == keccak256(abi.encodePacked((x)))){
                return true;
            }
        }
        return false;
    }

    // Fonction qui permet de publier un doc
    function publish(string memory publisher_siren, string memory doc_url, string memory doc_hash) public {
        // Ajout d'un mapping avec le siren du publisher comme clé et un tableau avec les informations comme valeur.
        pubmap[publisher_siren].push(Publication(msg.sender, publisher_siren, doc_url, doc_hash, block.timestamp, StateType.OnGoing));

        // Ajoute le Siren dans le tableau s'il n'y est pas déjà
        if (existingInTab(publisher_siren) == false){
            tab_publisher.push(publisher_siren) ;
        }

        // Permet d'ajouter la publication à l'évènement, pour pouvoir y accéder dans le front.
        emit NewPublication(msg.sender, publisher_siren, doc_url, doc_hash, block.timestamp, StateType.OnGoing);
    }

    // TODO Permet de voir toutes les publications de tous les Sirens, mais ne fonctionne pas et je bug dessus.
    function getAllPublications() public view returns (Publication[] memory) {
        require(tab_publisher.length > 0, "Il n y a aucune publication.");
        /*
        // V1
        Publication[] memory result = new Publication[];
        for ( uint256 i = 0; i < tab_publisher.length; i++ ) {
            result.push(pubmap[tab_publisher[i]]);
        }
        return result;

        // V2
        Publication[] memory result;
        uint256 cpt = 0;
        for (uint256 i = 0; i < tab_publisher.length; i++){
            if (i==0){
                result = pubmap[tab_publisher[i]];
                cpt += result.length-1;
            } else {
                Publication[] memory index = pubmap[tab_publisher[i]];
                for ( uint256 j = 0; j < index.length; j++){
                    result[j + cpt] = index[j];
                }
            }
        }
        return result;
        */

        // V3 : Ne fonctionne pas non plus...
        Publication[] memory result;
        for (uint256 i = 0; i < tab_publisher.length; i++){
            for ( uint256 j = 0; j < pubmap[tab_publisher[i]].length; j++ ){
                result[i+j] = pubmap[tab_publisher[i]][j];
            }
        }
        return result;
    }

    // Permet d'avoir toutes les publications d'un certain Siren.
    function getSirenPublications(string memory publisher_siren) public view returns (Publication[] memory) {
        require(existingInTab(publisher_siren), "Il n y a pas de publication sous ce numero de Siren.");
        return pubmap[publisher_siren];
    }

    // Permet de return le tableau de tous les sirens ayant déjà publié.
    function getAllSirens() public view returns (string[] memory){
        require(tab_publisher.length > 0, "Il n y a eu aucune publication.");
        return tab_publisher;
    }

    // Pour avoir toutes les publications encore en cours (moins de deux mois).
    function listOnGoingPublications(string memory publisher_siren) public {

    }

    // Pour modifier l'etat de la publication en "finish" au bout de deux mois.
    function UpdateEvent (bytes32 Doc_Hash) public {
        //Je ne sais pas encore si c'est possible de modifier un event, je pense même que non.
    }

}
