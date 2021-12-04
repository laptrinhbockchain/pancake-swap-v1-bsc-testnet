# Pancake Swap V1 on BSC Testnet
This repo contains all source code of Pancake Swap V1. It has modified to run on Binance Smart Chain (BSC) Testnet.
<br />My original purpose is to use it to test my DApps that connect to Pancake Swap. Using the BSC Testnet environment has helped me a lot in reducing the cost and time of DApps development. I see thay it very useful for developers so I shared this version.

<p>If you want to use Pancake Swap v1 on BSC Testnet, please to the link: https://pancake.kiemtienonline360.com/
<br />If you want to implement your own Pancake Swap, please see detailed instructions below.

# Step by step to deploy Pancake Swap V1
<ul>
  <li><b>Step 1</b>: Deploy Pancake Factory Contract</li>
  <li><b>Step 2</b>: Deploy Pancake Router Contract</li>
  <li><b>Step 3</b>: Deploy Pancake Swap Interface</li>
</ul>
<p>Of these three steps, step 3 will take the longest time, step 2 need for a little attention. It takes time for me, but I will guide you how to deploy them in just 10 minutes.
<p>Before you start, you need to install <b>NodeJs</b> (Version 8 or later) and <b>GIT</b>. In addition, you must also have experience to deploy contracts on Remix. You also install Metamask extension on Chrome browser and added "BSC Testnet".

# Step 1: Deploy Pancake Factory Contract
You can use <b>Truffle</b> <b>Remix</b> to build and deploy the contract. But for simplicity you should use Remix.
<p>The steps are as follows:
<ul>
  <li>
    <b>1. Install required libraries</b>
    <br />Go to "pancake-swap-core-v1" folder and run npm install:
    <br />&nbsp;&nbsp;&nbsp;&nbsp; <code>cd pancake-swap-core-v1</code>
    <br />&nbsp;&nbsp;&nbsp;&nbsp; <code>npm install</code>
  </li>
  <li>
    <b>2. Join contract files to 1 file</b>
    <br />I created a small tool to help join the contract files into 1 file. Run below command to join:
    <br />&nbsp;&nbsp;&nbsp;&nbsp; <code>mkdir build</code>
    <br />&nbsp;&nbsp;&nbsp;&nbsp; <code>node tools/merge-contract.js</code>
    <br />You can see the file <b>PancakeFactory.sol.merge.txt</b> in build directory.
  </li>
  <li>
    <b>3. Deploy on Remix</b>
    <br /> - Go the Remix website: https://remix.ethereum.org
    <br /> - Create new contract file <b>PancakeFactory.sol</b> on Remix and then copy all content in PancakeFactory.sol.merge.txt to the PancakeFactory.sol file.
    <br /> - Click left menu item "<b>Solidity complier</b>", select "<b>0.5.16</b>" in COMPILER section. And then click "<b>Complile PancakeFactory.sol</b>", compile success and no error.
    <br /> - Click left menu item "<b>Deploy &amp; run transactions</b>", select "<b>Injected Web3</b>" in ENVIRONMENT section. This step request to connect an account in Metamask.
    <br />Select "<b>PancakeFactory - ...</b>" in CONTRACT item. Enter your any bsc wallet address in "<b>address_feeToSetter</b>" input. And then click "<b>Deploy</b>" button, and wait.
    <br /> - Once deployed, you will see the <b>contract address of PancakeFactory</b>. In the "Deployed Contracts" section, you will see the new deployed contract. Expand it and you will get <b>INIT_CODE_PAIR_HASH</b>. You need to store them, and they will be used in Step 2.
  </li>
</ul>
<p>For example with my deployed contract:
<ul>
  <li>PancakeFactory contract: <a href="https://testnet.bscscan.com/address/0xb7926c0430afb07aa7defde6da862ae0bde767bc">0xB7926C0430Afb07AA7DEfDE6DA862aE0Bde767bc</a></li>
  <li>INIT_CODE_PAIR_HASH: 0xecba335299a6693cb2ebc4782e74669b84290b6378ea3a3873c7231a8d7d1074</li>
</ul>
<p><b>Note</b>: Sometimes the https://remix.ethereum.org page has a problem to create new sol file, you can use the link http://remix.ethereum.org (Not HTTPS)

# Step 2: Deploy Pancake Router Contract
The steps are almost the same as Step 1, but with some notices.
<p>The steps are as follows:
<ul>
  <li>
    <b>1. Install required libraries</b>
    <br />Go to "pancake-swap-router-v1" folder and run npm install:
    <br />&nbsp;&nbsp;&nbsp;&nbsp; <code>cd pancake-swap-router-v1</code>
    <br />&nbsp;&nbsp;&nbsp;&nbsp; <code>npm install</code>
  </li>
  <li>
    <b>2. Slightly edited in the source of the contract</b>
    <br />Open the file "<b>contracts/libraries/PancakeLibrary.sol</b>", go to line 25 (In function <b>pairFor()</b>), change the hexa string to INIT_CODE_PAIR_HASH of PancakeFactory in Step 1. And then save the file.
  </li>
  <li>
    <b>3. Join contract files to 1 file</b>
    <br />I created a small tool to help join the contract files into 1 file. Run below command to join:
    <br />&nbsp;&nbsp;&nbsp;&nbsp; <code>mkdir build</code>
    <br />&nbsp;&nbsp;&nbsp;&nbsp; <code>node tools/merge-contract.js</code>
    <br />You can see the file <b>PancakeRouter01.sol.merge.txt</b> in build directory.
  </li>
  <li>
    <b>4. Deploy on Remix</b>
    <br /> - Go the Remix website: https://remix.ethereum.org
    <br /> - Create new contract file <b>PancakeRouter.sol</b> on Remix and then copy all content in PancakeRouter01.sol.merge.txt to the PancakeRouter.sol file.
    <br /> - Click left menu item "<b>Solidity complier</b>", select "<b>0.6.6</b>" in COMPILER section, check "<b>Enable optimization</b>" in COMPILER CONFIGURATION section. And then click "<b>Complile PancakeRouter.sol</b>", compile success and no error.
    <br /> - Click left menu item "<b>Deploy &amp; run transactions</b>", select "<b>Injected Web3</b>" in ENVIRONMENT section. This step request to connect an account in Metamask.
    <br />Select "<b>PancakeRouter01 - ...</b>" in CONTRACT item. Enter the PancakeFactory address (In Step 1) and WBNB address <a href="https://testnet.bscscan.com/address/0xae13d989dac2f0debff460ac112a837c89baa7cd">0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd</a> as two parameters when initializing PancakeRouter. And then click "<b>Deploy</b>" button, and wait.
    <br /> - Once deployed, you will see the <b>contract address of PancakeRouter</b>. You need to store this address, and it will be used in Step 3.
  </li>
</ul>
<p>For example with my deployed contract:
<ul>
  <li>PancakeRouter contract: <a href="https://testnet.bscscan.com/address/0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3">0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3</a></li>
</ul>
<p><b>Note</b>: You can use the above WBNB address or you can create a new WBNB contract yourself.

# Step 3: Deploy PancakeSwap Interface
This step is the most complicated because there are many modifications. 
<p>The steps are as follows:
<ul>
  <li>
    <b>1. Install required libraries</b>
    <br />Go to "pancake-swap-interface-v1" folder and run npm install:
    <br />&nbsp;&nbsp;&nbsp;&nbsp; <code>cd pancake-swap-interface-v1</code>
    <br />&nbsp;&nbsp;&nbsp;&nbsp; <code>npm install --global yarn</code>
    <br />&nbsp;&nbsp;&nbsp;&nbsp; <code>npm install</code>
    <br />And then copy <b>.env.development</b> to <b>.env</b>
  </li>
  <li>
    <b>2. Modify source code</b>
    <br />There are quite a few places to edit, I list them as below, not necessarily in order:
    <ul>
      <li>Go to the file "<b>src/constants/token/pancakeswap.json</b>" to add or edit the default supported tokens on Testnet. Tokens on BSC Testnet you can deploy yourself, token source code can refer to: <a href="https://testnet.bscscan.com/address/0x7ef95a0fee0dd31b22626fa2e10ee6a223f8a684">USDT</a>, <a href="https://testnet.bscscan.com/address/0x8babbb98678facc7342735486c851abd7a0d17ca">ETH</a>, <a href="https://testnet.bscscan.com/address/0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7">BUSD</a>, <a href="https://testnet.bscscan.com/address/0x8a9424745056Eb399FD19a0EC26A14316684e274">DAI</a>. Remember to add images for your new tokens in the "<b>public/images/coins</b>" folder with the token address in lowercase.</li>
      <li>Go to the file "<b>src/constants/index.ts</b>", update the value for <b>ROUTER_ADDRESS</b> which is the PancakeRouter address deployed in Step 2. In this file you also edit the default display tokens.</li>
      <li>I fixed <b>supportedChainIds</b> and <b>BscConnector</b> in file "<b>src/connectors/index.ts</b>" to support only BSC Testnet. You don't need to change this file unless you want to deploy on another network.</li>
      <li>Currently the menu I have commented on most of the menu items, if you want to change you can edit it in the file "<b>src/components/Menu/config.ts</b>".</li>
      <li>Open the 3 files "<b>node_modules/@pancakeswap-libs/sdk/dist/constants.d.ts</b>", "<b>node_modules/@pancakeswap-libs/sdk/dist/sdk.cjs.development.js</b>", "<b>node_modules/@pancakeswap-libs/sdk/dist/sdk.esm.js</b>" and "<b>node_modules/@pancakeswap-libs/sdk/dist/sdk.cjs.production.min.js</b>", update the values for two variables: FACTORY_ADDRESS and INIT_CODE_HASH.</li>
      <li>If the WBNB you use is not <b>0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd</b>, you should update the new WBNB address in the two files "<b>node_modules/@pancakeswap-libs/sdk/dist/sdk.cjs.development.js</b>" and "<b>node_modules/@pancakeswap-libs/sdk/dist/sdk.cjs.production.min.js</b>".</li>
    </ul>
  </li>
  <li>
    <b>3. Run test at local</b>
    <br />You run the following command to test locally:
    <br />&nbsp;&nbsp;&nbsp;&nbsp; <code>yarn start</code>
    <br />If you see the error "<b><i>Type 'MergedState' is not assignable to type...</i></b>" in the file "<b><i>src/state/index.ts</i></b>", please see the link https://github.com/kiemtienonline360/pancake-swap-v1-bsc-testnet/issues/1 to fix the error.
  </li>
  <li>
    <b>4. Deploy to Github or your host</b>
    <br />You open the file "<b>.env.production</b>" to edit the configuration, especially the <b>PUBLIC_URL</b> configuration. Then you type the following command to build:
    <br />&nbsp;&nbsp;&nbsp;&nbsp; <code>yarn build</code>
    <br />Then you put all the files in the build directory to github or host to run.
  </li>
 </ul>
 
 <p>You can find out more at https://kiemtienonline360.com/huong-dan-trien-khai-pancake-swap-v1-tren-moi-truong-binance-smart-chain-bsc-testnet/
