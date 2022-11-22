export declare const enum Endpoint {
    ALL_LIGHTS_ARE_ON = 0,
    BOARD_LIGHTS_ARE_ON = 1,
    FRONT_LIGHTS_ARE_ON = 2,
    BACK_LIGHTS_ARE_ON = 3,
    DESKTOP_IS_ON = 4,
    PROJECTOR_IS_ON = 5,
    FIRST_CURTAIN_IS_OPEN = 6,
    SECOND_CURTAIN_IS_OPEN = 7,
    TEMPERATURE = 8
}
export type Signal = "CHANGE" | "GET";
export type IncomingMessage = {
    endpoint: Endpoint;
    payload: boolean;
};
export type OutgoingMessage = {
    endpoint: Endpoint;
    payload?: boolean;
};
