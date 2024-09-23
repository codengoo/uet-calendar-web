import { Server } from 'socket.io';

let io;

export const initSocket = (server) => {
    if (!global.io) {
        global.io = new Server(server);
        global.io.on('connection', (socket) => {
            console.log(`Client connected: ${socket.id}`);

            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
    }
    return global.io;
};

export const getSocket = () => {
    if (!global.io) {
        throw new Error('Socket.io not initialized');
    }
    return global.io;
};
