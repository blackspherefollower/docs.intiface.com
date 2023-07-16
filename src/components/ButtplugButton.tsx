import React from "react";
import { ButtplugClient, ButtplugBrowserWebsocketClientConnector } from 'buttplug';

let client = new ButtplugClient("Intiface Central Quickstart Test");

async function connectClient(): Promise<void> {
  if (client.connected) {
    return;
  }
  client = new ButtplugClient("Intiface Central Quickstart Test");
  const connector = new ButtplugBrowserWebsocketClientConnector("ws://127.0.0.1:12345/buttplug");
  await client.connect(connector);  
}

async function disconnectClient() {
  if (!client.connected) {
    return;
  }
  await client.disconnect();
}

export const ButtplugComponent = () => (
  <span>
    <button onClick={() => connectClient()}>Connect</button>
    <button onClick={() => disconnectClient()}>Disconnect</button>
  </span>
);