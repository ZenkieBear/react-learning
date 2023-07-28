type ChatRoomProps = {
  roomId: string
}
type UseChatRoomProps = {
  serverUrl: string,
  roomId: string,
  onReceiveMessage: (msg: string) => void
}
type CreateConnectionProps = Omit<UseChatRoomProps, 'onReceiveMessage'>;