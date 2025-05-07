import { useState } from "react";
import { Link } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-primary font-bold text-xl">Techni<span className="text-secondary">Code</span>Camp</span>
            </div>
            <nav className="hidden sm:ml-10 sm:flex space-x-8">
              <Link href="/">
                <a className="text-slate-900 hover:text-primary px-3 py-2 text-sm font-medium">Strona główna</a>
              </Link>
              <Link href="/kursy">
                <a className="text-slate-600 hover:text-primary px-3 py-2 text-sm font-medium">Kursy</a>
              </Link>
              <Link href="/harmonogram">
                <a className="text-slate-600 hover:text-primary px-3 py-2 text-sm font-medium">Harmonogram</a>
              </Link>
              <Link href="/o-nas">
                <a className="text-slate-600 hover:text-primary px-3 py-2 text-sm font-medium">O nas</a>
              </Link>
              <Link href="/kontakt">
                <a className="text-slate-600 hover:text-primary px-3 py-2 text-sm font-medium">Kontakt</a>
              </Link>
            </nav>
          </div>
          <div className="hidden sm:flex items-center">
            <Link href="/logowanie">
              <a className="text-slate-600 hover:text-primary px-3 py-2 text-sm font-medium">Logowanie</a>
            </Link>
            <Link href="/rejestracja">
              <a className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Zarejestruj się
              </a>
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button 
              type="button" 
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-bars text-lg"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`sm:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/">
            <a className="text-slate-900 hover:text-primary block px-3 py-2 text-base font-medium">Strona główna</a>
          </Link>
          <Link href="/kursy">
            <a className="text-slate-600 hover:text-primary block px-3 py-2 text-base font-medium">Kursy</a>
          </Link>
          <Link href="/harmonogram">
            <a className="text-slate-600 hover:text-primary block px-3 py-2 text-base font-medium">Harmonogram</a>
          </Link>
          <Link href="/o-nas">
            <a className="text-slate-600 hover:text-primary block px-3 py-2 text-base font-medium">O nas</a>
          </Link>
          <Link href="/kontakt">
            <a className="text-slate-600 hover:text-primary block px-3 py-2 text-base font-medium">Kontakt</a>
          </Link>
          <div className="pt-4 pb-3 border-t border-slate-200">
            <Link href="/logowanie">
              <a className="text-slate-600 hover:text-primary block px-3 py-2 text-base font-medium">Logowanie</a>
            </Link>
            <Link href="/rejestracja">
              <a className="mt-2 block px-3 py-2 text-base font-medium text-white bg-primary hover:bg-blue-700 rounded-md">Zarejestruj się</a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
