import { newRpcApi } from "./rpcApi";
import { GenericExtrinsic } from '@polkadot/types';
import { signFakeWithApi } from '@acala-network/chopsticks-utils';

const CURATOR_ACCOUNT = "167dwA1UDmWSBRrFd9dXqXjdk1NRhqVjenT2FbHGDyy44GjS";

const main = async () => {
  const api = await newRpcApi();
  const hexEncodedCall = "0xc5058400b8be96d986897797d117987e4368640ffdf32bc967ba7467d012136c22dca33c01dc6209185d86043b45e179f28b7b8956bef2ee3c8c0ceaa72954a7793ebc381df8f8a05a238052822f83873b2a3cc827054b26cd34c24a80a364947dcaed8d845502b90100001a0030260158dd2500e23cf83af2b043696cefcbe2ffe680eba45ccf26d6d9a354d742bafd45aaf2e700260258dd25260458dd2500e18a8183b4a5ec3d16b271fca08fbfbfc1cfba44daaeba59e8d8c8bfc3abd293260558dd25260158e12500e23cf83af2b043696cefcbe2ffe680eba45ccf26d6d9a354d742bafd45aaf2e700260258e125260458e125002e7db755ebcb8aedbf3418947d62f7a7ad2b273e46000160a010a32a0fcf0cc1260558e125260158ed2500e23cf83af2b043696cefcbe2ffe680eba45ccf26d6d9a354d742bafd45aaf2e700260258ed25260458ed2500be316bf208d18bc3e06c254b9d96d93d69ef9b0bde1f22316230fe56c90d0a03260558ed25";
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
