import socketio from 'socket.io-client';

export const socket = socketio(process.env.REACT_APP_API_URL, {
  autoConnect: false,
});

function subscribeNewDevs(subcribeFunction) {
  socket.on('new-dev', subcribeFunction);
}

function connect() {
  socket.io.opts.query = { browser: true };
  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export { connect, disconnect, subscribeNewDevs };
