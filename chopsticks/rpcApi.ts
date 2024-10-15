import { ApiPromise, WsProvider } from "@polkadot/api";

const RPC_URI = "ws://localhost:8000";

export const newRpcApi = async () => {
  const provider = new WsProvider(RPC_URI);
  const client = await ApiPromise.create({ provider });

  return client;
}
