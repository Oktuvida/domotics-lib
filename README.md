# Domotics Lib

Library that provides communication between [domotics-app](https://github.com/Oktuvida/domotics-app) and [domotics-server](https://github.com/Oktuvida/domotics-server)

## Usage

```ts
import { Client } from "@domotics-app/lib";

const URI = "ws://localhost:3000";
const client = new Client(URI, {
  connectListener: () => {
    console.log("Hi, mom!");
  },
});

client.on("CHANGE", (message) => {
  console.log(message);
});
```
