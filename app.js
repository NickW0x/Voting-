// Import the React library and other required libraries
import React from 'react';
import Web3 from 'web3';
import contractArtifact from './contract.json';

// Create a new Web3 instance
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

// Get the contract address from the artifact
const contractAddress = contractArtifact.networks['5777'].address;

// Create a new instance of the contract
const contract = new web3.eth.Contract(contractArtifact.abi, contractAddress);

// Create a React component
class App extends React.Component {
  state = {
    // Set initial state
    candidate1: {
      name: '',
      votes: 0
    },
    candidate2: {
      name: '',
      votes: 0
    },
    totalVotes: 0,
    myAddress: '',
    nftBalance: 0,
    // Flag to indicate whether MetaMask is connected
    isMetaMaskConnected: false
  }

  // Fetch initial data when the component is mounted
  async componentDidMount() {
    // Check if MetaMask is connected
    if (window.ethereum) {
      this.setState({ isMetaMaskConnected: true });
    }

    // Get the current Ethereum account
    const accounts = await web3.eth.getAccounts();
    const myAddress = accounts[0];
    this.setState({ myAddress });

    // Get the candidate names and vote counts
    const candidate1 = await contract.methods.candidates(0).call();
    const candidate2 = await contract.methods.candidates(1).call();
    this.setState({
      candidate1: {
        name: candidate1.name,
        votes: candidate1.votes.toNumber()
      },
      candidate2: {
        name: candidate2.name,
        votes: candidate2.votes.toNumber()
      }
    });

    // Get the total number of votes
    const totalVotes = await contract.methods.totalVotes().call();
    this.setState({ totalVotes: totalVotes.toNumber() });

    // Get the user's NFT balance
    const nftBalance = await contract.methods.balanceOf(myAddress).call();
    this.setState({ nftBalance: nftBalance.toNumber() });
  }

  // Function to connect to MetaMask
  async connectToMetaMask() {
    // Request access to the user's Ethereum account
    try {
      await window.ethereum.enable();

      // Get the current Ethereum account
      const accounts = await web3.eth.getAccounts();
      const myAddress = accounts[0];
      this.setState({ myAddress });

 
 <!-- Create a container element to hold the application -->
<div id="app">
  <!-- Display the names and vote counts of the candidates -->
  <h2>Candidate 1: {{candidate1.name}} ({{candidate1.votes}} votes)</h2>
  <h2>Candidate 2: {{candidate2.name}} ({{candidate2.votes}} votes)</h2>

  <!-- Display the total number of votes -->
  <p>Total votes: {{totalVotes}}</p>

  <!-- Display the user's address and NFT balance -->
  <p>Your address: {{myAddress}}</p>
  <p>Your NFT balance: {{nftBalance}}</p>

  <!-- Display a button to connect to MetaMask if it is not already connected -->
  <button v-if="!isMetaMaskConnected" @click="connectToMetaMask">
    Connect to MetaMask
  </button>

  <!-- Display buttons to vote for each candidate if MetaMask is connected -->
  <div v-if="isMetaMaskConnected">
    <button @click="handleVote(0)">Vote for Candidate 1</button>
    <button @click="handleVote(1)">Vote for Candidate 2</button>
  </div>
</div>


// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Import the contract artifact
import contractArtifact from './contract.json';

// Create a new instance of the contract
const contract = new web3.eth.Contract(contractArtifact.abi, contractAddress);

// Create a React component
class App extends React.Component {
  state = {
    // Set initial state
    candidate1: {
      name: '',
      votes: 0
    },
    candidate2: {
      name: '',
      votes: 0
    },
    totalVotes: 0,
    myAddress: '',
    nftBalance: 0,
    isMetaMaskConnected: false
  }

  // Fetch initial data when the component is mounted
  async componentDidMount() {
    // Check if MetaMask is connected
   

