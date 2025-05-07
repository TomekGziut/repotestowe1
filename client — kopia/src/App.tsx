import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import { Helmet } from "react-helmet";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="*">
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
          <div className="w-full max-w-md mx-4 p-6 bg-white rounded-lg shadow-md">
            <div className="flex mb-4 gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Strona, której szukasz, nie istnieje.
            </p>
            <a href="/" className="mt-4 inline-block text-blue-600 hover:underline">
              Powrót do strony głównej
            </a>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <>
      <Helmet>
        <title>TechniCodeCamp - Kursy programowania</title>
        <meta name="description" content="Kursy, warsztaty i mentorzy, którzy pomogą Ci nauczyć się programowania od podstaw lub rozwinąć swoje umiejętności." />
        <meta property="og:title" content="TechniCodeCamp - Kursy programowania" />
        <meta property="og:description" content="Kursy, warsztaty i mentorzy, którzy pomogą Ci nauczyć się programowania od podstaw lub rozwinąć swoje umiejętności." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://technicodecamp.pl" />
        <link rel="canonical" href="https://technicodecamp.pl" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Helmet>
      <Router />
    </>
  );
}

export default App;
