# ethereum-json-rpc-specification

## Introduction

Both Ethereum client developers and downstream dapp developers lack a formal Ethereum RPC specification. This proposal attempts to standardize such a specification in a way that's versionable, human-readable and machine-readable. It will improve the accuracy of documentation, API, and clients.

Ethereum clients can expose RPC endpoints with differing method signatures; this forces applications to work around method inconsistencies to maintain compatibility with various Ethereum RPC implementations.

Much of Ethereums effectiveness as an enterprise-grade application platform depends on its ability to provide a reliable and predictable developer experience.

## Specification

You can view the specification in documentation form [here](https://playground.open-rpc.org/?uiSchema[appBar][ui:splitView]=false&schemaUrl=https://raw.githubusercontent.com/etclabscore/ethereum-json-rpc-specification/master/openrpc.json&uiSchema[appBar][ui:logoUrl]=https://avatars1.githubusercontent.com/u/45863699?s=200&v=4) or the raw **OpenRPC Document** [here](openrpc.json).

### Contributing

Proposals to make method changes should be [made as an issue](https://help.github.com/en/articles/creating-an-issue).

How to contribute, build and release are outlined in [CONTRIBUTING.md](CONTRIBUTING.md), [BUILDING.md](BUILDING.md) and [RELEASING.md](RELEASING.md) respectively. Commits in this repository follow the [CONVENTIONAL_COMMITS.md](CONVENTIONAL_COMMITS.md) specification.

## Resources

- @bitpshr - https://github.com/ethereum/EIPs/pull/1474
- https://github.com/ethereum/EIPs/issues/1442
- https://github.com/ethereum/EIPs/issues/217
- https://github.com/ethereum/EIPs/issues/136
- https://ethereum-magicians.org/t/eip-remote-procedure-call-specification/1537/20
- https://github.com/etclabscore/ECIPs/issues/16
- https://github.com/ethereum/EIPs/pull/1901
- https://github.com/ethereum/EIPs/issues/1902
