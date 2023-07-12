export interface Message {
  roomId: string;
  userId?: string;
  text: string;
}

export interface Room {
  id: string;
  roomname: string;
  messages: Message[];
}
