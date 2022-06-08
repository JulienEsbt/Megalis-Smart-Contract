//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract megalisV1 {

    // Permet d'avoir deux états : "en cours" et "finit", pour la publication.
    enum StateType {
        OnGoing,
        Finish
    }

    // Création d'un évènement, ce qui nous permettra notamment de l'appeler ensuite dans notre frontend.
    event NewPublication(address _publisher, string indexed _siren, string _url, bytes32 indexed _hash, uint256 indexed _timestamp, StateType _state);

    // Création d'un struct pour la publication.
    struct Publication {
        address Publisher;
        string Publisher_siren;
        string Doc_url;
        bytes32 Doc_hash;
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

    // Déclarartion d'un array de struct.
    Publication[] publications;

    string PublicationID;

    constructor() payable {
        console.log("Le Smart Contract a bien ete deploye. Il vous permettra de publier sur la blockchain un document (son URL et son Hash) avec son horodatage et un numero d'identification propore a votre collectivite.");
    }

    function publish(string memory publisher_siren, string memory doc_url, bytes32 doc_hash) public {
        // L'ID de la publication est le numéro de hash du document.
        PublicationID = string(abi.encodePacked("", doc_hash)) ;

        // Permet de stocker la publication dans l'array
        publications.push(Publication(msg.sender, publisher_siren, doc_url, doc_hash, block.timestamp, StateType.OnGoing));
        //Publication memory PublicationID = Publication(msg.sender, publisher_siren, doc_url, doc_hash, doc_timestamp, StateType.OnGoing);

        // Permet d'ajouter la publication à l'évènement créé au dessus.
        emit NewPublication(msg.sender, publisher_siren, doc_url, doc_hash, block.timestamp, StateType.OnGoing);

        // console.log("L'adresse %s, de numero siren %s, a publie le document dont l'url est %s et le hash %s a %s", msg.sender, publisher_siren, doc_url, doc_hash, doc_timestamp);
    }

    function listPublications(string memory publisher_siren) public {
        // A faire dans le front pas dans le smart contract
    }

    function listOnGoingPublications(string memory publisher_siren) public {
        // A faire dans le front pas dans le smart contract
    }

    function listAllPublications() public {
        // A faire dans le front pas dans le smart contract
    }

    function deleteEvent (bytes32 Doc_Hash) public {
        //TODO
        // Simplement mettre le StateType sur finish et plus en OnGoing, mais je ne sais pas encore si c'est faisable de modifier un event
    }

}
