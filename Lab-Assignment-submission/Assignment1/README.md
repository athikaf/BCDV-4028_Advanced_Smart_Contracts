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

<br /> <br /> 
<hr>
<h2>LAB 3: Lending Contract, Unit Tests and Simulation Test</h2>

<b>Image 1:</b> All three unit tests passed.
<img width="1440" alt="Screenshot 2023-09-30 at 10 29 29 PM" src="https://github.com/athikaf/BCDV-4028_Advanced_Smart_Contracts/assets/69520002/9e79954e-a48a-42c3-b21c-31b0c0e0b569">

<b>Image 2:</b> Simulation test passed.
<img width="1440" alt="Screenshot 2023-09-30 at 10 43 41 PM" src="https://github.com/athikaf/BCDV-4028_Advanced_Smart_Contracts/assets/69520002/3d1336ea-1f02-4b39-a69d-b6524d752e0e">


<br /> <br /> 
<hr>
<h2>LAB 5: Generating random number using ChainLink VRF</h2>

<b>Step 1:</b> Deploying the contract with the correct subscription ID.
<img width="1440" alt="Screenshot 2023-10-01 at 10 01 02 PM" src="https://github.com/athikaf/BCDV-4028_Advanced_Smart_Contracts/assets/69520002/b081bb7c-bfd3-4093-9581-948fe2a513ef">

<b>Step 2:</b> Adding the address of the deployed contract into the trusted consumer list.
<img width="1440" alt="Screenshot 2023-10-01 at 10 09 58 PM" src="https://github.com/athikaf/BCDV-4028_Advanced_Smart_Contracts/assets/69520002/25e5a7af-7c45-477e-9ed2-14376eaa564c">

<b>Step 3:</b> Check the Last Request ID, and copy it.
<img width="1440" alt="Screenshot 2023-10-01 at 10 12 11 PM" src="https://github.com/athikaf/BCDV-4028_Advanced_Smart_Contracts/assets/69520002/43e7323d-e28e-4ba3-8c9a-9c54500d6478">

<b>Step 4:</b> Paste the requestID in the getRequestState tab and getRequestState. You will see a `bool: fulfilled true` indicating the fulfilled request. You will also see the 2 random numbers generated.
<img width="1440" alt="Screenshot 2023-10-01 at 10 12 36 PM" src="https://github.com/athikaf/BCDV-4028_Advanced_Smart_Contracts/assets/69520002/ba37a590-6250-4022-999e-c2c00f9f2e08">

<b>Step 5:</b> Request again for random numbers. Check history to note the pending transaction.
<img width="1440" alt="Screenshot 2023-10-01 at 10 16 21 PM" src="https://github.com/athikaf/BCDV-4028_Advanced_Smart_Contracts/assets/69520002/fecebe7e-6b91-40e9-b589-9215a36671f3">

<b>Step 6:</b> Repeat the process and see the output again!
<img width="1440" alt="Screenshot 2023-10-01 at 10 17 22 PM" src="https://github.com/athikaf/BCDV-4028_Advanced_Smart_Contracts/assets/69520002/abd9ea11-8128-4f1e-8164-d7db2260778c">
