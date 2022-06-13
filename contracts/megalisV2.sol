//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract megalisV2 {

    // Permet d'avoir deux états : "en cours" et "finit", pour la publication.
    enum StateType {
        OnGoing,
        Finish
    }

    // Création d'un évènement, ce qui nous permettra notamment de l'appeler ensuite dans notre frontend.
    event NewPublication(address _publisher, string indexed _siren, string _url, string indexed _hash, uint256 indexed _timestamp, StateType _state);

    // Création d'un struct pour la publication.
    struct Publication {
        //address Publisher;
        string Publisher_siren;
        string Doc_url;
        string Doc_hash;
        uint256 Doc_timestamp;
        StateType State;
    }

    string PublicationID;

    mapping (address=> Publication[]) pubmap;
    address[] public tab_publisher;

    constructor() {
        /*
        // Création d'une publication, sans doute à retirer ensuite
        pubmap[msg.sender].push(Publication("InitSiren", "https://InitUrl.com", "InitHashDoc", block.timestamp, StateType.OnGoing));
        if(existingInTab(msg.sender) == false){
            tab_publisher.push(msg.sender) ;
        }
        emit NewPublication(msg.sender, "Siren1", "https://url1.com", "HashDuDoc1", block.timestamp, StateType.OnGoing);
        */

        console.log("Le Smart Contract a bien ete deploye. Il vous permettra de publier sur la blockchain un document (son URL et son Hash) avec son horodatage et un numero d'identification propore a votre collectivite.");
    }

    function existingInTab(address x) public view returns (bool){
        for (uint i = 0; i < tab_publisher.length; i++){
            if(tab_publisher[i] == x){
                return true;
            }
        }
        return false;
    }

    function publish(string memory publisher_siren, string memory doc_url, string memory doc_hash) public {
        // Ajout d'un mapping avec l'adresse du publisher comme clé et un tableau avec les informations comme valeur.
        pubmap[msg.sender].push(Publication(publisher_siren, doc_url, doc_hash, block.timestamp, StateType.OnGoing));
        if (existingInTab(msg.sender) == false){
            tab_publisher.push(msg.sender) ;
        }

        // Permet d'ajouter la publication à l'évènement créé au dessus.
        emit NewPublication(msg.sender, publisher_siren, doc_url, doc_hash, block.timestamp, StateType.OnGoing);
    }

    function getAllPublications() public view returns (Publication[] memory) {
        /*
        // V1
        Publication[] memory result;
        for (uint i = 0; i < tab_publisher.length-1; i++){
            //Trouver un moyen de push, ou en tout cas de pouvoir tout mettre dans result pour pouvoir tout print ensuite. Car pour l'instant ça ne met que le dernier élément.
            //result = pubmap[tab_publisher[i]];
            result = result.push(pubmap[tab_publisher[i]]);
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

        // V3
        Publication[] memory result;
        for (uint256 i = 0; i < tab_publisher.length; i++){
            for ( uint256 j = 0; j < pubmap[tab_publisher[i]].length; j++ ){
                result[i+j] = pubmap[tab_publisher[i]][1];
            }
        }
        return result;
    }

    function getSirenPublications(address publisher_address) public view returns (Publication[] memory) {
        return pubmap[publisher_address];
    }

    function getAllSirens() public view returns (address[] memory){
        return tab_publisher;
    }

    function listOnGoingPublications(string memory publisher_siren) public {
        // A faire dans le front pas dans le smart contract
    }

    function UpdateEvent (bytes32 Doc_Hash) public {
        // Simplement mettre le StateType sur finish et plus sur OnGoing, mais je ne sais pas encore si c'est faisable de modifier un event
    }
}
