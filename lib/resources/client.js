"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const socket_io_client_1 = __importDefault(require("socket.io-client"));
class Client {
    #io;
    constructor(uri, options) {
        this.#io = (0, socket_io_client_1.default)(uri);
        this.#io
            .on("connect", () => {
            options && options.connectListener && options.connectListener();
        })
            .on("disconnect", () => {
            options && options.disconnectListener && options.disconnectListener();
        });
    }
    on(signal, listener) {
        return this.#io.on(signal, listener);
    }
    emit(signal, message) {
        return this.#io.emit(signal, message);
    }
}
exports.Client = Client;
