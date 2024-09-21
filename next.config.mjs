/** @type {import('next').NextConfig} */
const nextConfig = {
    async server(server) {
        // Attach Socket.io to the server
        initSocket(server);
    },
};

export default nextConfig;
