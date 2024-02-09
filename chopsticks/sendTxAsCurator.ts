import { newRpcApi } from "./rpcApi";
import { GenericExtrinsic } from '@polkadot/types';
import { signFakeWithApi } from '@acala-network/chopsticks-utils';

const CURATOR_ACCOUNT = "167dwA1UDmWSBRrFd9dXqXjdk1NRhqVjenT2FbHGDyy44GjS";

const main = async () => {
  const api = await newRpcApi();
  const tx = await api.tx("0xfd048400b8be96d986897797d117987e4368640ffdf32bc967ba7467d012136c22dca33c01c224daf6e4f662bdddbfb6dcd7fb9bab881f2012c36657c305e991dde6c29a200fe9a17b5a691df48c7336de7480ecd7ec3a94ab813d16ed35984647662f838fe503b0001a001c260458c508005839fa7a9242c404eaf4128cc218e3ca90ebb90c542994a19c3adcdd0bab4257260158490900e23cf83af2b043696cefcbe2ffe680eba45ccf26d6d9a354d742bafd45aaf2e707009c6930dd26025849092604584909005a5f7eb7050fb96d8d7895d9afce428a064ce66e3b094805bcad9a8e68cb99342601584d0900e23cf83af2b043696cefcbe2ffe680eba45ccf26d6d9a354d742bafd45aaf2e70b005839fe37012602584d092604584d09000b32d525afd736430b3b4315dc65f3f2bf1c304a32e3f9e06faf4fc87a46cabb");
  

  await signFakeWithApi(api, tx, CURATOR_ACCOUNT);
  await tx.send();

  console.log("DONE BRO");
}

try {
  main();
} catch (e) {
  console.log(e);
  process.exit(1);
}
