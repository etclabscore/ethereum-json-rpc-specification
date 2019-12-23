# ethereum-json-rpc-specification

## Overview

This repository is the home of the Ethereum [OpenRPC](https://spec.open-rpc.org) document that describes the JSON-RPC interface to be implemented by client developers. It contains the tooling and scripts to automate producing artifacts for consuming the JSON-RPC API (docs, clients, etc).

## Introduction

Both Ethereum client developers and downstream dapp developers lack a formal Ethereum RPC specification. This proposal attempts to standardize such a specification in a way that's versionable, human-readable and machine-readable. It will improve the accuracy of documentation, API, and clients.

Ethereum clients can expose RPC endpoints with differing method signatures; this forces applications to work around method inconsistencies to maintain compatibility with various Ethereum RPC implementations.

Much of Ethereums effectiveness as an enterprise-grade application platform depends on its ability to provide a reliable and predictable developer experience.

## Specification

You can view the specification in documentation form [here](https://playground.open-rpc.org/?schemaUrl=https://raw.githubusercontent.com/etclabscore/ethereum-json-rpc-specification/master/openrpc.json&uiSchema[appBar][ui:input]=false) or the raw **OpenRPC Document** [here](openrpc.json).

## Clients

The clients are generated from the **OpenRPC Document** `openrpc.json` in this repository, and can be used as an alternative to web3.js or ethers.js but for various languages:

### Javascript/Typescript

```
npm install @etclabscore/ethereum-json-rpc --save
```

#### Usage:

![ethrpc_demo](https://user-images.githubusercontent.com/364566/71329877-49570200-24de-11ea-8fd6-eced0ecdaded.gif)


### Rust

Add this to your Cargo.toml:

```
[dependencies]
ethereum-json-rpc = "0.0.0-development"
```

## Documentation

[View the Documentation](https://playground.open-rpc.org/?uiSchema[appBar][ui:splitView]=false&schemaUrl=https://raw.githubusercontent.com/etclabscore/ethereum-json-rpc-specification/master/openrpc.json&uiSchema[appBar][ui:input]=false).

### Contributing

Proposals to make method changes should be [made as an issue](https://help.github.com/en/articles/creating-an-issue).

How to contribute, build and release are outlined in [CONTRIBUTING.md](CONTRIBUTING.md), [BUILDING.md](BUILDING.md) and [RELEASING.md](RELEASING.md) respectively. Commits in this repository follow the [CONVENTIONAL_COMMITS.md](CONVENTIONAL_COMMITS.md) specification.

## Resources
- https://eips.ethereum.org/EIPS/eip-1901
- [Ethereum JSON-RPC Specification walkthrough](https://www.youtube.com/watch?v=EQW_wMi4tZE0)
- @bitpshr - https://github.com/ethereum/EIPs/pull/1474
- https://github.com/ethereum/EIPs/issues/1442
- https://github.com/ethereum/EIPs/issues/217
- https://github.com/ethereum/EIPs/issues/136
- https://ethereum-magicians.org/t/eip-remote-procedure-call-specification/1537/20
- https://github.com/etclabscore/ECIPs/issues/16
- https://github.com/ethereum/EIPs/pull/1901
- https://github.com/ethereum/EIPs/issues/1902
