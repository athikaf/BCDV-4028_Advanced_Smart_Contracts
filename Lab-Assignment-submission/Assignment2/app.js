window.onload = async function () {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.enable();
      const accounts = await window.web3.eth.getAccounts();
      displayWalletAddress(accounts[0]);
      displayNFTs(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  } else {
    console.error("Metamask not installed");
  }
};

async function displayWalletAddress(walletAddress) {
  document.getElementById(
    "walletAddress"
  ).innerText = `Wallet Address: ${walletAddress}`;
}

async function displayNFTs(owner) {
  const contractAddress = "0xYourNFTContractAddress"; // Replace with your actual contract address
  const contract = new window.web3.eth.Contract(abi, contractAddress);

  const totalSupply = await contract.methods.totalSupply().call();

  let nftListHTML = "<h2>Your NFTs:</h2>";

  for (let i = 0; i < totalSupply; i++) {
    const tokenId = await contract.methods.tokenByIndex(i).call();
    const ownerOfToken = await contract.methods.ownerOf(tokenId).call();

    if (ownerOfToken.toLowerCase() === owner.toLowerCase()) {
      nftListHTML += `<p>NFT ${tokenId}</p>`;
    }
  }

  document.getElementById("nftList").innerHTML = nftListHTML;
}

async function mintNFT() {
  const ipfsUrl = document.getElementById("ipfsUrl").value;

  if (!ipfsUrl) {
    alert("Please enter an IPFS URL");
    return;
  }

  const contractAddress = "0xYourNFTContractAddress"; // Replace with your actual contract address
  const contract = new window.web3.eth.Contract(abi, contractAddress);

  const accounts = await window.web3.eth.getAccounts();
  const owner = accounts[0];

  // Assuming you have implemented the IPFS upload and retrieval logic
  const ipfsHash = await uploadToIPFS(ipfsUrl);

  // Assuming you have implemented the mint function in your contract
  await contract.methods.mint(owner, ipfsHash).send({ from: owner });

  // Update the displayed NFT list
  displayNFTs(owner);
}

// Replace this function with your actual IPFS upload logic
async function uploadToIPFS(ipfsUrl) {
  // Your IPFS upload logic here
  console.log(`Uploading to IPFS: ${ipfsUrl}`);
  return "ipfsHash"; // Replace with the actual IPFS hash
}
