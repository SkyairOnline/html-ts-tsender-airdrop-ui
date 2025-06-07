"use client"

import {getDefaultConfig} from "@rainbow-me/rainbowkit";
import {anvil, zksync, mainnet} from "wagmi/chains";

export default getDefaultConfig({
  appName: "TSender",
  chains: [anvil, zksync, mainnet],
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "",
  ssr: false,
})