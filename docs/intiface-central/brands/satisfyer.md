# Satisfyer

## How do I connect my Satisfyer device to a desktop/laptop?

Satisfyer devices have increased security requirements which requires extra setup steps when connecting to host devices like desktops, laptops, and phones.

**Windows/Linux users** will need to use a [Cambridge Silicon Radio bluetooth dongle](/docs/intiface-central/hardware/bluetooth). Dongles with other radio brands (Broadcomm, Intel, RealTek, etc...) have been found to possibly connect but not communicate with Satisfyer devices.

_All Satisfyer devices must be paired with the operating system._ 

To begin, clear the current pairing from your Satisfyer Device:

- Hold the factory reset button designated in your devices manual for 10 seconds
  - This button varies from device to device, so you will need to check the manual for your specific
    device to know which button to hold.
  - After you have held the button for 10 seconds, you should feel 3 vibrations in a row. 
- Release the button
  - There should then be 5 quick pulses in a row.
- At this point, the device has been reset.

For more info on resetting devices, see the [Satisfyer FAQ](https://us.satisfyer.com/us/faq/): 

To pair the device:

- Go to the bluetooth settings of your operating system
  - If you're on Windows 11 (or possibly Windows 10) and the _Bluetooth devices discovery_ setting
    is available in Bluetooth settings, make sure it's set to _Advanced_
- Scan for devices
- The device should appear as either "SF [device name]" or possibly "Unknown Device".
  - After pairing, the device should always show as "SF [device name]".
  - If your device refuses to pair and you have not tried the reset steps above, it may be due to it
    being paired to another host, such as your mobile phone, or another desktop.

After a toy is paired with the operating system, using it with Intiface/Buttplug should be the same as any other toy (see the [Quickstart](/docs/intiface-central/quickstart) for more info). 

Satisfyer devices can only pair with one device at a time. If you want to use a Satisfyer toy with another host, you will need to redo these pairing steps, and the device will no longer work with the host you had it paired with before.