import { Dispatch, SetStateAction } from "react";
import { Room } from "..";

export type Rooms = Map<string, Room>;

export interface RoomsStateType {
  rooms: Rooms;
  setRooms: Dispatch<SetStateAction<Rooms>>;
}
