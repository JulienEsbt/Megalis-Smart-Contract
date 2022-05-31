//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract megalisV1 {
    enum Statetype {
        OnGoing,
        Finish
    }

    address Publisher;

    struct Publication{
        string Publisher_siren;
        string Doc_url;
        uint256 Doc_timestamp;
        address Doc_hash;
        StateType State;
    }

    constructor() public {
        console.log("Le Smart Contract a bien été déployé.");
    }

    function publish(string publisher_siren, address doc_hash, string doc_url, uint526 doc_timestamp) {
        Publisher = msg.sender;
        Publisher_siren = publisher_siren;
        Doc_hash = doc_hash;
        Doc_url = doc_url;
        Doc_timestamp = doc_timestamp;
        State = Statetype.OnGoing;
    }

    function listPublications(string s) {

    }

    function listOnGoingPublications(string s) {

    }

    function listAllPublications() {

    }

}
