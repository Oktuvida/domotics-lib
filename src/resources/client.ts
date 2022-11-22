import { IncomingMessage, OutgoingMessage, Signal } from "./protocol";

import ioClient, { type Socket } from "socket.io-client";

export type ClientOptions = {
  connectListener?: () => unknown;
  disconnectListener?: () => unknown;
};

export class Client {
  #io: Socket;
  constructor(uri: string, options?: ClientOptions) {
    this.#io = ioClient(uri);

    this.#io
      .on("connect", () => {
        options && options.connectListener && options.connectListener();
      })
      .on("disconnect", () => {
        options && options.disconnectListener && options.disconnectListener();
      });
  }

  on(signal: Signal, listener: (message: IncomingMessage) => unknown): Socket {
    return this.#io.on(signal, listener);
  }

  emit(signal: Signal, message: OutgoingMessage): Socket {
    return this.#io.emit(signal, message);
  }
}
