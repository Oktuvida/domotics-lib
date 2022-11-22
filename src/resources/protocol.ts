export const enum Endpoint {
  ALL_LIGHTS_ARE_ON,
  BOARD_LIGHTS_ARE_ON,
  FRONT_LIGHTS_ARE_ON,
  BACK_LIGHTS_ARE_ON,

  DESKTOP_IS_ON,
  PROJECTOR_IS_ON,

  FIRST_CURTAIN_IS_OPEN,
  SECOND_CURTAIN_IS_OPEN,

  TEMPERATURE,
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
