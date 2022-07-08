//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract megalisV3 {

    // Création d'un évènement, ce qui nous permettra d'appeler le contract dans le frontend.
    event NewPublication(string _siren, string _url, uint256 _timestamp);

    // Création d'une structure pour la publication.
    struct Publication {
        string Doc_url;
        uint256 Doc_timestamp;
    }

    // Création d'un mapping Siren-->Publication (Clé-->Valeur).
    mapping(string => Publication[]) pubmap;

    // Création d'un tableau qui va permettre de référencer les Sirens ayant déjà publié un document.
    string [] public tab_publisher;

    // Constructor du Smart Contract
    constructor() {
        console.log("Le Smart Contract a bien ete deploye. Il vous permettra de publier sur la blockchain un document (son URL) et votre numero de collectivite (Siren) afin de certifier son horodatage.");
    }

    // Fonction qui permettra de savoir si un Siren à déjà été ajouter dans le tableau des Sirens.
    function sirenInTab(string memory s) public view returns (bool){
        for (uint i = 0; i < tab_publisher.length; i++) {
            if (keccak256(abi.encodePacked(tab_publisher[i])) == keccak256(abi.encodePacked(s))) {
                return true;
            }
        }
        return false;
    }

    // Fonction qui permet de publier un doc
    function publish(string memory publisher_siren, string memory doc_url) public {
        // Ajout d'un mapping avec le siren du publisher comme clé et un tableau avec les informations comme valeur.
        pubmap[publisher_siren].push(Publication(doc_url, block.timestamp));

        // Ajoute le Siren dans le tableau s'il n'y est pas déjà
        if (sirenInTab(publisher_siren) == false) {
            tab_publisher.push(publisher_siren);
        }

        // Permet d'ajouter la publication à l'évènement, pour pouvoir y accéder dans le front.
        emit NewPublication(publisher_siren, doc_url, block.timestamp);
    }

    // Permet d'avoir toutes les publications d'un certain Siren.
    function getSirenPublications(string memory publisher_siren) public view returns (Publication[] memory) {
        require(sirenInTab(publisher_siren), "Il n y a pas de publication sous ce numero de Siren.");
        return pubmap[publisher_siren];
    }

    // Permet de return le tableau de tous les sirens ayant déjà publié.
    function getAllSirens() public view returns (string[] memory){
        require(tab_publisher.length > 0, "Il n y a eu aucune publication.");
        return tab_publisher;
    }

    /*
    function getTimestamp(Publication memory x) public view returns (uint256) {
        require(sirenInTab(pub.Publisher_siren), "Il n y a pas de publication sous ce numero de Siren.");
        require(pubInTab(x), "Cette publication n est pas presente pour ce numero de Siren.");
        return Publication.Doc_timestamp;
    }
    */

    function deletePublication(string memory siren, string memory url) public payable{
        require(sirenInTab(siren), "Il n y a pas de publication sous ce numero de Siren.");
        require(pubInTab(siren, url)<115792089237316195423570985008687907853269984665640564039457584007913129639935, "Cette publication n est pas presente pour ce numero de Siren.");
        delete(pubmap[siren][pubInTab(siren, url)]);
    }


    // Fonction qui permettra de savoir si une publication à déjà été ajouter dans ses publications.
    function pubInTab(string memory siren, string memory url) public view returns (uint256){
        for (uint i = 0; i < pubmap[siren].length; i++) {
            if (keccak256(abi.encodePacked(pubmap[siren][i].Doc_url)) == keccak256(abi.encodePacked(url))) {
                return i;
            }
        }
        return 115792089237316195423570985008687907853269984665640564039457584007913129639935;
    }


}