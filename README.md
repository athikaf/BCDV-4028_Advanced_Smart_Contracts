# BCDV-4028_Advanced_Smart_Contracts

<h2>LAB 1: Array Manipulation using SafeMath Library</h2>

<b>Step 1:</b> Deploying the library on Remix IDE
<img width="1440" alt="Screenshot 2023-09-24 at 10 21 48 PM" src="https://github.com/athikaf/BCDV-4028_Advanced_Smart_Contracts/assets/69520002/108492a7-49aa-479b-96a4-376cb90bc385">

<br />
<b>Step 2:</b> Deploying the smart contract by giving a user defined Data Array on Remix IDE 
<img width="1440" alt="Screenshot 2023-09-24 at 10 22 37 PM" src="https://github.com/athikaf/BCDV-4028_Advanced_Smart_Contracts/assets/69520002/4f04efa4-c4b7-4999-925a-c474f2d49031">

<br />
<b>Step 3:</b> Calling the getArray function to check our input
<img width="1440" alt="Screenshot 2023-09-24 at 10 23 33 PM" src="https://github.com/athikaf/BCDV-4028_Advanced_Smart_Contracts/assets/69520002/32b47d08-de0c-4b24-9fe8-c67b5a474338">

<br />
<b>Step 4:</b> Calling the sortArray function to sort our input
<img width="1440" alt="Screenshot 2023-09-24 at 10 24 58 PM" src="https://github.com/athikaf/BCDV-4028_Advanced_Smart_Contracts/assets/69520002/a0d0c3c9-1eb9-441e-beeb-41d3e8230917">

<br />
<b>Step 5:</b> Calling the removeDuplicatesFromArray function to remove the duplicates 
<img width="1440" alt="Screenshot 2023-09-24 at 10 25 16 PM" src="https://github.com/athikaf/BCDV-4028_Advanced_Smart_Contracts/assets/69520002/27257f58-c397-4398-852f-71e27d44010b">

<br />
<b>BONUS Step:</b> Fetching elements from the dataArray based on their indexes. 
<img width="1440" alt="Screenshot 2023-09-24 at 10 25 43 PM" src="https://github.com/athikaf/BCDV-4028_Advanced_Smart_Contracts/assets/69520002/2c12bae5-55ff-4132-88cc-56d636cc28e6">

<br /> <br /> 
<hr>
<h2>LAB 2: Delegate Call to update state variables</h2>

<b>Step 1:</b> Deploying the Receiver Contract on Remix IDE
<img width="1440" alt="Screenshot 2023-09-25 at 12 02 20 AM" src="https://github.com/athikaf/BCDV-4028_Advanced_Smart_Contracts/assets/69520002/7e3e38ca-c246-423c-8159-7763741b5d40">

<br />
<b>Step 2:</b> Deploying the Caller smart contract by giving the receiver contract address as the input
<img width="1440" alt="Screenshot 2023-09-25 at 12 02 45 AM" src="https://github.com/athikaf/BCDV-4028_Advanced_Smart_Contracts/assets/69520002/7ca2dd44-05a7-4276-bf5c-6e465e0a9833">

<br />
<b>Step 3:</b> Calling the stateVariable function to get the value of the variable on the Receiver contract.
<img width="1440" alt="Screenshot 2023-09-25 at 12 03 11 AM" src="https://github.com/athikaf/BCDV-4028_Advanced_Smart_Contracts/assets/69520002/d3a9b6ae-df3f-4f88-a8ab-0290308e8ba9">

<br />
<b>Step 4:</b> Updating the value of the stateVariable using the updateState on the Receiver contract.
<img width="1440" alt="Screenshot 2023-09-25 at 12 03 58 AM" src="https://github.com/athikaf/BCDV-4028_Advanced_Smart_Contracts/assets/69520002/114d7f16-f00d-4669-a004-18f876830839">

<br />
<b>Step 5:</b> Calling the receiver address function on the Caller Contract to verify the address of the receiver contract
<img width="1440" alt="Screenshot 2023-09-25 at 12 07 46 AM" src="https://github.com/athikaf/BCDV-4028_Advanced_Smart_Contracts/assets/69520002/856638cb-4261-4ebc-889f-e826ac891121">

<br />
<b>Step 6:</b> Calling the updateState function on the Caller Contract and checking the address of the receiver contract which has been updated because of the delegate call.
<img width="1440" alt="Screenshot 2023-09-25 at 12 10 15 AM" src="https://github.com/athikaf/BCDV-4028_Advanced_Smart_Contracts/assets/69520002/a2a0da4f-0b66-46d9-8d84-93c286793050">

<hr>
<h2>LAB 3: Lending Contract, Unit Tests and Simulation Test</h2>

<b>Image 1:</b> All three unit tests passed.
<img width="1440" alt="Screenshot 2023-09-30 at 10 29 29 PM" src="https://github.com/athikaf/BCDV-4028_Advanced_Smart_Contracts/assets/69520002/9e79954e-a48a-42c3-b21c-31b0c0e0b569">

<b>Image 2:</b> Simulation test passed.
<img width="1440" alt="Screenshot 2023-09-30 at 10 43 41 PM" src="https://github.com/athikaf/BCDV-4028_Advanced_Smart_Contracts/assets/69520002/3d1336ea-1f02-4b39-a69d-b6524d752e0e">



