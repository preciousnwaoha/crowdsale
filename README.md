# Crowdsale

### Token ICO Web App

### Table of Contents

- [Description](#description)
- [Visuals](#visuals)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Roadmap](#roadmap)
- [Project Status](#project-status)
- [Credits](#credits)
- [License](#license)

### **Description**

This projects allows users to buy a new token from the site with another token (eth). The PIN Coin Token is the one used in this project and users can buy it using Eth directly from the website. PIN is just a random Token name supposed to mean Planetary Invasion Network

### **Visuals**

No visuals available for now

### **Technologies**

| Frontend | Blockchain Providers |
| --- | --- |
| React.js | Hardhat |
| Material UI | Ethers |
| Ethers.js | Alchemy |
| Typescript |  |

### **Installation** (Launch)

You need to have Node.js you can install it [here](https://hardhat.org/tutorial/setting-up-the-environment.html), [add Metamask to your browser](https://www.google.com/amp/s/www.geeksforgeeks.org/how-to-install-and-use-metamask-on-google-chrome/amp/).

In your terminal:

```bash
npm install
```

Compile Smart Contracts and Deploy:

```bash
npx hardhat compile
```

Set up Alchemy Node: More info here

create a .env file and fill this in:

```bash
ALCHEMY_GOERLI_URL=https://eth-goerli.g.alchemy.com/v2/something-something_
GOERLI_PRIVATE_KEY=your-metamask-wallet-account-PRIVATE-KEY
ETHERSCAN_KEY=
SOME_OTHER_VARIABLE=
```

see how to get your Metamask account  private key from [here](https://www.google.com/url?sa=t&source=web&rct=j&url=https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key%23:~:text%3DOn%2520the%2520account%2520page%252C%2520click,click%2520%25E2%2580%259CConfirm%25E2%2580%259D%2520to%2520proceed.&ved=2ahUKEwjGvPrtx678AhV8UqQEHdCDBx8QFnoECAoQBQ&usg=AOvVaw06lvKYe22yfhl9ta5F_D9L).

Deploy the contracts on a network:

```bash
npx hardhat run scripts/deploy.ts --network goerli
```

All well, start the app:

```bash
cd client
npm start
```

All done.

### Features (Scope of functionalities)

- View Total Supply of the PIN Token
- Buy PIN Token with Eth
- View your PIN Balance

### ****Usage****

Ooops, sorry the site is not yet up.

### Documentation

Security guidelines How to harden any installation to avoid any cybersecurity issue.

1. Do not use mainet on this site (**You will loose your tokens**)

### **Roadmap**

This project was started to practice my smart contract development skills and hence would not serious - “I think”.

Never the less, here’s the project phases : 

1. Smart Contracts Writing and Testing (Ethers)
2. Deployment of Contracts to Testnet (Goerli)
3. Frontend Skeleton Build & Interaction With Contract on Frontend
4. Frontend Design
5. Deploy Contracts on Polygon Mainnet (MATIC)

### **Contributing**

I am open to contributions please feel free to reach out or make pull requests.

### **Project status**

We are in Phase 3: Frontend Skeleton Build & Interaction With Contract on Frontend

Is it still In development: Yes

### Credits

I got huge help with the contracts and testing from this [Blockman Codes Video](https://youtu.be/Ry80XWdV3nw) 

Contributors:

| Name | Role | Github |
| --- | --- | --- |
| Precious Nwaoha | Its Every Part for Now | preciousnwaoha |
|  |  |  |

### **License**

MIT
