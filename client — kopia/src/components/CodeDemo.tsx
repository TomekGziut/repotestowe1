export default function CodeDemo() {
  return (
    <section className="py-16 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Naucz się konfigurować serwer Express dla React
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Dowiedz się, jak prawidłowo skonfigurować serwer Express do hostowania aplikacji React z TypeScript. Poniżej przykładowy kod, którego nauczysz się w naszym kursie.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden p-1">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-900">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-slate-400 text-sm">app.js</div>
            </div>
            <pre className="p-4 text-sm md:text-base leading-relaxed font-mono text-blue-100 overflow-x-auto">
{`// Server configuration for hosting React app
const http = require('http');
const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
const buildPath = path.join(__dirname, 'build');
app.use(express.static(buildPath));

// Catch-all handler to serve the React app for any route
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Create an HTTP server and pass the Express app
const server = http.createServer(app);

// Start the server
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(\`Serwer działa na porcie \${port}\`);
});`}
            </pre>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                  <i className="fas fa-server text-blue-600 text-xl"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Konfiguracja serwera</h3>
                  <p className="text-slate-600">Nauczysz się konfigurować serwer Express, który będzie hostował Twoją aplikację React z TypeScript.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-100 rounded-full p-3">
                  <i className="fas fa-code-branch text-indigo-600 text-xl"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Obsługa tras</h3>
                  <p className="text-slate-600">Zrozumiesz, jak prawidłowo obsługiwać trasy w aplikacji React za pomocą serwera Express.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-100 rounded-full p-3">
                  <i className="fas fa-cloud-upload-alt text-green-600 text-xl"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Wdrażanie aplikacji</h3>
                  <p className="text-slate-600">Dowiesz się, jak wdrożyć aplikację na serwerze produkcyjnym, takimi jak server115683.nazwa.pl.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
