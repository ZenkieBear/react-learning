export function createConnection(serverUrl: string, roomId: string) {
  // A real implementation would actually connect to the server
  let connectedCallback: Function;
  let timeout: number;

  return {
    connect() {
      timeout = window.setTimeout(() => {
        if (connectedCallback) {
          connectedCallback();
        }
      }, 100);
    },
    on(event: 'connected', callback: Function) {
      if (connectedCallback) {
        throw Error('Cannot add the handler twice!');
      }
      if (event !== 'connected') {
        throw Error('Only "connected" event is supported.');
      }
      connectedCallback = callback;
    },
    disconnect() {
      clearTimeout(timeout);
    }
  }
}