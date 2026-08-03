# Megalis Document Timestamping Contracts

> **Status: Academic / learning project (2022)** — historical Solidity
> prototype. The contracts have not been audited and must not be used in
> production.

Megalis explores how a public blockchain can timestamp references to documents
published by local authorities. A publication associates an organisation
identifier (SIREN), a document URL and the block timestamp. The first iteration
also stores a separate document hash.

This repository contains three successive versions of the idea rather than one
production-ready contract.

## Contract iterations

- **V1** stores the publisher address, SIREN, document URL, document hash and
  timestamp.
- **V2** removes duplicated information to reduce storage costs.
- **V3** further simplifies the stored publication and experiments with a
  deletion function.

Each version can:

- publish a document reference;
- list the SIRENs that have published at least once;
- return the publications associated with a SIREN;
- emit an event when a new publication is registered.

## Stack

- Solidity 0.8
- Hardhat
- ethers.js
- JavaScript deployment and interaction scripts

## Related interface

The companion React interface is available in
[Megalis-Frontend](https://github.com/JulienEsbt/Megalis-Frontend).

## Local exploration

```bash
git clone https://github.com/JulienEsbt/Megalis-Smart-Contract.git
cd Megalis-Smart-Contract
npm ci
npx hardhat compile
```

The checked-in network configuration targets historical testnets. Use a local
Hardhat network and review the configuration before running deployment or
interaction scripts. Never commit wallet private keys or provider credentials.

## Important limitations

- the code has no automated contract test suite;
- no external security review has been performed;
- a SIREN is a string supplied by the caller and does not prove identity;
- V3 does not restrict its deletion function to the original publisher;
- deleting an array entry in V3 leaves an empty slot rather than compacting the
  publication list;
- several configured Ethereum testnets have been retired;
- all data written to a public blockchain should be considered public.

These limitations are intentionally documented to preserve the project as an
example of an iterative learning process, not as a deployable public-service
system.

## License

No open-source license has been selected for this academic repository.
