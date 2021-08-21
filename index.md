---
layout: default
title: Intro
nav_order: 1
---

# **ThunderHub - Lightning Node Manager**

![Test and Build](https://github.com/apotdevin/thunderhub/workflows/Test%20and%20Build/badge.svg?branch=master)

![Home Screenshot](/images/index_home.png)
[![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)](https://github.com/DAVFoundation/captain-n3m0/blob/master/LICENSE)

## Table Of Contents

- [Introduction](#introduction)
- [Integrations](#integrations)
- [Features](#features)
- [Installation](#installation)
- [Updating](#updating)
- [Development](#development)
- [Docker deployment](#docker)

---

## Introduction

ThunderHub is an **open-source** LND node manager where you can manage and monitor your node on any device or browser. It allows you to take control of the lightning network with a simple and intuitive UX and the most up-to-date tech stack.

---

### Integrations

**BTCPay Server**
ThunderHub is currently integrated into BTCPay for easier deployment. If you already have a BTCPay server and want to add ThunderHub or even want to start a BTCPay server from zero, be sure to check out this [tutorial](https://apotdevin.com/blog/thunderhub-btcpay)

**Raspiblitz**
For Raspiblitz users you can also get ThunderHub running by following this [gist](https://gist.github.com/openoms/8ba963915c786ce01892f2c9fa2707bc)

---

### Tech Stack

This repository consists of a **NextJS** server that handles both the backend **Graphql Server** and the frontend **React App**. ThunderHub connects to your Lightning Network node by using the gRPC ports.

- NextJS
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
