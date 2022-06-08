import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import "./styles/app.css";
import abi from "./artifacts/contracts/megalisV1.json";

const App = () => {
    const [currentAccount, setCurrentAccount] = useState();
    const [msg, setMsg] = useState('Aucun message.');
    /*
     * All state property to store all waves
     */
    const [allWaves, setAllWaves] = useState([]);
    const contractAddress = "0x6BDcDeB28e56cfbcBF5ae0c098Bb7eee5a497357";

    let handleInputChange = (e) => {
        console.log("handleInputChange")
        setMsg(e.target.value)
    };

    /**
     * Create a variable here that references the abi content!
     */
    const contractABI = abi.abi;

    const checkIfWalletIsConnected = async () => {
        try {
            const { ethereum } = window;

            if (!ethereum) {
                console.log("Make sure you have metamask!");
                return;
            } else {
                console.log("We have the ethereum object", ethereum);
            }

            const accounts = await ethereum.request({ method: "eth_accounts" });

            if (accounts.length !== 0) {
                const account = accounts[0];
                console.log("Found an authorized account:", account);
                setCurrentAccount(account);
            } else {
                console.log("No authorized account found")
            }
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * Implement your connectWallet method here
     */
    const connectWallet = async () => {
        try {
            const { ethereum } = window;

            if (!ethereum) {
                alert("Get MetaMask!");
                return;
            }

            const accounts = await ethereum.request({ method: "eth_requestAccounts" });

            console.log("Connected", accounts[0]);
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error)
        }
    }

}