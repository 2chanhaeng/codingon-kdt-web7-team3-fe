import { Room } from "@/types/chats";

export default function handleRooms(
  setRooms: React.Dispatch<React.SetStateAction<Map<string, Room>>>
) {
  return (rooms: Room[]) => {
    // 새로운 방이 추가되었을 때
    rooms.forEach((room) => {
      // 방의 메시지를 초기화
      room.messages = [];
      setRooms((rooms) => {
        // 기존의 방 목록에 새로운 방을 추가
        rooms.set(room.id, room);
        return new Map(rooms); // 새로운 Map을 반환해야 리렌더링이 됨
      });
    });
  };
}
