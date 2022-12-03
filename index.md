---
layout: default
title: Intro
nav_order: 1
---

# **ThunderHub - Lightning Node Manager**

![Test and Build](https://github.com/apotdevin/thunderhub/workflows/Test%20and%20Build/badge.svg?branch=master)

![Home Screenshot](/images/index_home.png)
[![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)](https://github.com/DAVFoundation/captain-n3m0/blob/master/LICENSE)

---

## Introduction

ThunderHub is an **open-source** LND node manager where you can manage and monitor your node on any device or browser. It allows you to take control of the lightning network with a simple and intuitive UX and the most up-to-date tech stack.

---

## Integrations

ThunderHub has been integrated into different services making it simpler for users to take advantage of it.

**BTCPay Server**
ThunderHub is currently integrated into BTCPay for easier deployment. If you already have a BTCPay server and want to add ThunderHub or even want to start a BTCPay server from zero, be sure to check out this [tutorial](https://apotdevin.com/blog/thunderhub-btcpay)

**Raspiblitz**
For Raspiblitz users you can also get ThunderHub running by following this [gist](https://gist.github.com/openoms/8ba963915c786ce01892f2c9fa2707bc)

**myNode**
MyNode is one of the easiest ways to run a dedicated, easy to use, Bitcoin Node and Lightning Wallet. Now with ThunderHub and more of the best open source software around, myNode makes it easy, safe and secure to use Bitcoin and Lightning. [Website](https://mynodebtc.com/)

**Voltage**
To use the Lightning Network at it's full capacity it's a must to have your own node but this can come with a cost and require more technical skills. Voltage removes all these burdens and let's you quickly and easily deploy production ready nodes. Now with ThunderHub integrated as well, you get an awesome UI to manage it all. [Website](https://voltage.cloud/)

**Umbrel**
Running a bitcoin and lightning node might seem like a difficult, programming intensive job to accomplish. With Umbrel everything is simplified and put behind an awesome and easy to use UI. Now with an App Store included, you can, with the click of a button, add the ThunderHub interface to take full control of your node. [Website](https://getumbrel.com/)

---

### Tech Stack

This repository consists of a **NestJS** server that handles both the backend **Graphql Server** and the frontend **React App**. ThunderHub connects to your Lightning Network node by using the gRPC ports.

- NestJS
- ReactJS
- Typescript
- Styled-Components
- Apollo
- Apollo-Server
- GraphQL
- Ln-Service

---

## Features

### Monitoring

- Overview of current and pending balance for the Lightning and Bitcoin wallets.
- URI strings for the node (Onion public uri also if available)
- Invoice and Payment graph.
- Liquidity report with total remote and local lightning balance.
- Forwarded payments graph and the routes used for these payments.
- Complete network info.
- View open/pending/closed channels and how balanced they are.
- View channel base and rate fees.
- View all transactions.
- View all forwarded payments.
- View all chain transactions.
- View all unspent UTXOS.

### Management

- LNURL integration: ln-pay and ln-withdraw are available. Ln-auth soon.
- Send and Receive Lightning payments.
- Send and Receive Bitcoin payments.
- Decode lightning payment requests.
- Open and close channels.
- Balance your channels through circular payments. ([Check out the Tutorial](https://apotdevin.com/blog/thunderhub-balancing))
- Update your all your channels fees or individual ones.
- Backup, verify and recover all your channels.
- Sign and verify messages.

### Visual

- Responsive UI for any device. Mobile, Tablet or Desktop.
- Light, Dark and Night mode.
- Check values in Bitcoin, Satoshis or Fiat.

### Accounts

- Connect to your node with **HEX/Base64 strings** or by passing the **file locations** of the macaroons and certificate.
- Manage however many nodes you want.
- Use a master password or individual passwords for each account.
- Passwords are hashed to avoid having them in cleartext form.

### Deployment

- Docker images for easier deployment
