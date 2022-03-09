import { Server } from 'socket.io';

function handleSocketIo_(io: Server) {
  io.on('connect', socket => {
    console.log('Hi');
    console.log(socket);
  });
}

export class handleSocketIo {
  public static io: Server;

  public static SetIo(io_: Server) {
    handleSocketIo.io = io_;
    handleSocketIo_(io_);
  }
  public static getIo(): Server {
    return handleSocketIo.io;
  }
}
