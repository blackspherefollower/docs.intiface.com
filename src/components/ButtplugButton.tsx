import React, { useState } from "react";
import { ButtplugClient, ButtplugClientDevice, ButtplugBrowserWebsocketClientConnector } from 'buttplug';

let client = new ButtplugClient("Intiface Central Quickstart Test");

async function connectClient(updateStatus: any, updateDevices: any): Promise<void> {
  if (client.connected) {
    return;
  }
  client = new ButtplugClient("Intiface Central Quickstart Test");
  const connector = new ButtplugBrowserWebsocketClientConnector("ws://127.0.0.1:12345/buttplug");
  try {
    await client.connect(connector);
    updateStatus("Connected to Intiface Central.");
    client.addListener("deviceadded", () => updateDevices(client.devices));
    client.addListener("deviceremoved", () => updateDevices(client.devices));
    client.addListener("disconnect", () => updateStatus("Disconnected"));
    updateDevices(client.devices);
  } catch (e) {
    updateStatus(`Cannot connect to Intiface Central. Make sure the Engine is running.`);
  }
}

async function disconnectClient(updateStatus: any) {
  if (!client.connected) {
    return;
  }
  try {
    client.removeAllListeners();
    await client.disconnect();
    updateStatus("Disconnected");
  } catch (e) {
    updateStatus(`Error disconnecting from Intiface Central.`);
  }
}

export const ButtplugComponent = () => {
  const [status, updateStatus] = useState("Disconnected");
  const [devices, updateDevices] = useState([]);
  return <div id="intiface-quickstart-app" style={{ border: "solid 1px #888", borderRadius: "5px", padding: "10px" }}>
    <h2>Intiface Central Test App</h2>
    <div><b>Status:</b> {status}</div>
    { !client.connected && <button onClick={() => connectClient(updateStatus, updateDevices)}>Connect</button> }    
    { client.connected && <button onClick={() => disconnectClient(updateStatus)}>Disconnect</button> }
    { client.connected && <button onClick={async () => await client.startScanning() }>Start Scanning</button> }
    <ul>
    { client.connected &&
        devices.map(device =>
          <li key={device.index}>{ device.name }
          { device.vibrateAttributes.length > 0 &&
            <button onClick={async () => {
              device.vibrate(1.0);
              setTimeout(() => device.stop(), 1000);
            }}>Vibrate</button> }
          { device.rotateAttributes.length > 0 &&
            <button onClick={async () => {
              device.rotate(1.0, true);
              setTimeout(() => device.stop(), 1000);
            }}>Rotate</button> }
          { device.linearAttributes.length > 0 &&
            <button onClick={async () => {
              device.linear(0.8, 1500);
              setTimeout(() => device.linear(0.2, 1500), 1500);
            }}>Stroke</button> }
          </li>
        )
      }
    </ul>
  </div>; 
  };