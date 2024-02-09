import { newRpcApi } from "./rpcApi";
import { GenericExtrinsic } from '@polkadot/types';
import { signFakeWithApi } from '@acala-network/chopsticks-utils';

const CURATOR_ACCOUNT = "167dwA1UDmWSBRrFd9dXqXjdk1NRhqVjenT2FbHGDyy44GjS";

const main = async () => {
  const api = await newRpcApi();
  const txs = [
    api.tx.system.remark("stay safu"),
  ];

  const batchTx = api.tx.utility.batch(txs);

  await signFakeWithApi(api, batchTx, CURATOR_ACCOUNT);
  
  
  await batchTx.send();

  console.log("DONE BRO");
}

try {
  main();
} catch (e) {
  console.log(e);
  process.exit(1);
}
