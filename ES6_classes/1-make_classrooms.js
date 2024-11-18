import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const room = [];
  room.push(new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)); // Agrego los 3 objetos con
  // su valor a room y luego lo retorno (el metodo push agrega al array)
  return room;
}
