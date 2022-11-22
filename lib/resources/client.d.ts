import { IncomingMessage, OutgoingMessage, Signal } from "./protocol";
import { type Socket } from "socket.io-client";
export type ClientOptions = {
    connectListener?: () => unknown;
    disconnectListener?: () => unknown;
};
export declare class Client {
    #private;
    constructor(domain: string, options?: ClientOptions);
    on(signal: Signal, listener: (message: IncomingMessage) => unknown): Socket;
    emit(signal: Signal, message: OutgoingMessage): Socket;
}
