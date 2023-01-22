export interface Friend {
  id: number,
  avatar: string,
  name: string,
  online: boolean,
  lastOnline: string,
  tag: string,
  lastMessage: string,
  lastDate: string,
  newMessagesCount: number
}

export interface Message {
  id: number,
  text: string,
  time: string,
  self: boolean
}
