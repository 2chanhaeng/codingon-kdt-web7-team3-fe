import { Room } from "@/types/chats";

export default function handleJoin(
  setRooms: React.Dispatch<React.SetStateAction<Map<string, Room>>>
) {
  return (room: Room) => {
    setRooms((rooms) => {
      // 기존의 방 목록에 새로운 방을 추가
      rooms.set(room.id, room);
      return new Map(rooms);
    });
  };
}
