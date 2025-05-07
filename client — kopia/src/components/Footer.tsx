import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="text-xl font-bold">Techni<span className="text-blue-400">Code</span>Camp</div>
            <p className="text-slate-300 text-sm">
              Nowoczesne kursy programowania dostosowane do potrzeb branży IT. Ucz się pisania skalowalnych, bezpiecznych aplikacji z wykorzystaniem TypeScript.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Kursy</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/kursy/typescript-podstawy">
                  <a className="text-slate-300 hover:text-white text-sm">TypeScript od podstaw</a>
                </Link>
              </li>
              <li>
                <Link href="/kursy/react-typescript">
                  <a className="text-slate-300 hover:text-white text-sm">React z TypeScript</a>
                </Link>
              </li>
              <li>
                <Link href="/kursy/nodejs-express-typescript">
                  <a className="text-slate-300 hover:text-white text-sm">Node.js z Express i TypeScript</a>
                </Link>
              </li>
              <li>
                <Link href="/kursy/fullstack-typescript">
                  <a className="text-slate-300 hover:text-white text-sm">Fullstack TypeScript</a>
                </Link>
              </li>
              <li>
                <Link href="/kursy/zaawansowane-wzorce-typescript">
                  <a className="text-slate-300 hover:text-white text-sm">Zaawansowane wzorce w TypeScript</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Informacje</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/o-nas">
                  <a className="text-slate-300 hover:text-white text-sm">O nas</a>
                </Link>
              </li>
              <li>
                <Link href="/cennik">
                  <a className="text-slate-300 hover:text-white text-sm">Cennik</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="text-slate-300 hover:text-white text-sm">Blog techniczny</a>
                </Link>
              </li>
              <li>
                <Link href="/kariera">
                  <a className="text-slate-300 hover:text-white text-sm">Kariera</a>
                </Link>
              </li>
              <li>
                <Link href="/kontakt">
                  <a className="text-slate-300 hover:text-white text-sm">Kontakt</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Wsparcie</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq">
                  <a className="text-slate-300 hover:text-white text-sm">FAQ</a>
                </Link>
              </li>
              <li>
                <Link href="/dokumentacja">
                  <a className="text-slate-300 hover:text-white text-sm">Dokumentacja</a>
                </Link>
              </li>
              <li>
                <Link href="/forum">
                  <a className="text-slate-300 hover:text-white text-sm">Forum społeczności</a>
                </Link>
              </li>
              <li>
                <Link href="/wsparcie">
                  <a className="text-slate-300 hover:text-white text-sm">Zgłoś problem</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} TechniCodeCamp. Wszelkie prawa zastrzeżone.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/polityka-prywatnosci">
              <a className="text-slate-400 hover:text-white text-sm">Polityka prywatności</a>
            </Link>
            <Link href="/warunki">
              <a className="text-slate-400 hover:text-white text-sm">Warunki korzystania</a>
            </Link>
            <Link href="/cookies">
              <a className="text-slate-400 hover:text-white text-sm">Ustawienia plików cookie</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
