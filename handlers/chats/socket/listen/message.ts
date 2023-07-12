import { Message, Room } from "@/types/chats";

export default function handleMessage(
  setRooms: React.Dispatch<React.SetStateAction<Map<string, Room>>>
) {
  return (message: Message) => {
    setRooms((rooms) => {
      // 방 번호 (roomId)에 해당하는 방을 찾음
      const room = rooms.get(message.roomId);
      if (!room) {
        console.log("no room", message.roomId);
        return rooms;
      }
      // 해당 방의 메시지 목록에 새로운 메시지를 추가
      room.messages.push(message);
      return new Map(rooms); // 새로운 Map을 반환해야 리렌더링이 됨
    });
  };
}
