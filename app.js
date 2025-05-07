import http from 'http';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// ES module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create Express app
const app = express();

// Serve static files from the React app build directory
const buildPath = path.join(__dirname, 'dist/public');
app.use(express.static(buildPath));

// Catch-all handler to serve the React app for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Create an HTTP server and pass the Express app
const server = http.createServer(app);

// Start the server
const port = process.env.PORT || 5000;
server.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
  console.log(`Domain: technicodecamp.pl`);
  console.log(`Server: server115683.nazwa.pl`);
});

export default server;
