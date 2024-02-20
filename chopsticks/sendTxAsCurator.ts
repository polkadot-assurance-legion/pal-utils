import { newRpcApi } from "./rpcApi";
import { GenericExtrinsic } from '@polkadot/types';
import { signFakeWithApi } from '@acala-network/chopsticks-utils';

const CURATOR_ACCOUNT = "167dwA1UDmWSBRrFd9dXqXjdk1NRhqVjenT2FbHGDyy44GjS";

const main = async () => {
  const api = await newRpcApi();
  const hexEncodedCall = "0xc5058400b8be96d986897797d117987e4368640ffdf32bc967ba7467d012136c22dca33c018020e0c633573cef254cc6421454015e023806ebf78032d24691022e31cae340e09620a498f1ec0bdf4b2caeda2a09233392fe2a2fc86e9fd5ef3e0211dae68a8502cc001a0024260158e90900e23cf83af2b043696cefcbe2ffe680eba45ccf26d6d9a354d742bafd45aaf2e70700d0ed902e260258e909260458e909000b32d525afd736430b3b4315dc65f3f2bf1c304a32e3f9e06faf4fc87a46cabb260158150b00e23cf83af2b043696cefcbe2ffe680eba45ccf26d6d9a354d742bafd45aaf2e70b008ca16add02260258150b260458150b00cec9484c231e2d686bc8932300191a43fa515f95c02ceebda09ad8d8f5fc5305260158190b00e23cf83af2b043696cefcbe2ffe680eba45ccf26d6d9a354d742bafd45aaf2e70b00a0b8304603260258190b260458190b00d486ddcf54dde307865fcad6bc39c9968c056bdcb6da971f98ff5686eba2e970";
  const tx = await api.tx(hexEncodedCall);

  await signFakeWithApi(api, tx, CURATOR_ACCOUNT);
  await tx.send();

  console.log("DONE");
}

try {
  main();
} catch (e) {
  console.log(e);
  process.exit(1);
}
