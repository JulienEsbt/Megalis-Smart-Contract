//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract megalisV1 {

    // Création d'un évènement, ce qui nous permettra d'appeler le contract dans le frontend.
    event NewPublication(address _publisher, string _siren, string _url, string _hash, uint256 _timestamp);

    // Création d'une structure pour la publication.
    struct Publication {
        address Publisher;
        string Publisher_siren;
        string Doc_url;
        string Doc_hash;
        uint256 Doc_timestamp;
    }

    // Création d'un mapping Siren-->Publication (Clé-->Valeur).
    mapping(string => Publication[]) pubmap;

    // Création d'un tableau qui va permettre de référencer les Sirens ayant déjà publié un document.
    string [] public tab_publisher;

    // Constructor du Smart Contract
    constructor() {
        console.log("Le Smart Contract a bien ete deploye. Il vous permettra de publier sur la blockchain un document (son URL et son Hash) et votre numero de collectivite (Siren) afin de certifier son horodatage.");
    }

    // Fonction qui permettra de savoir si un Siren à déjà été ajouter dans le tableau des Sirens.
    function existingInTab(string memory x) public view returns (bool){
        for (uint i = 0; i < tab_publisher.length; i++) {
            if (keccak256(abi.encodePacked((tab_publisher[i]))) == keccak256(abi.encodePacked((x)))) {
                return true;
            }
        }
        return false;
    }

    // Fonction qui permet de publier un doc
    function publish(string memory publisher_siren, string memory doc_url, string memory doc_hash) public {
        // Ajout d'un mapping avec le siren du publisher comme clé et un tableau avec les informations comme valeur.
        pubmap[publisher_siren].push(Publication(msg.sender, publisher_siren, doc_url, doc_hash, block.timestamp));

        // Ajoute le Siren dans le tableau s'il n'y est pas déjà
        if (existingInTab(publisher_siren) == false) {
            tab_publisher.push(publisher_siren);
        }

        // Permet d'ajouter la publication à l'évènement, pour pouvoir y accéder dans le front.
        emit NewPublication(msg.sender, publisher_siren, doc_url, doc_hash, block.timestamp);
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

}
