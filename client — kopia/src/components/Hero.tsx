import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Rozpocznij swoją przygodę z programowaniem
            </h1>
            <p className="mt-4 text-lg md:text-xl text-blue-100">
              Kursy, warsztaty i mentorzy, którzy pomogą Ci nauczyć się programowania od podstaw lub rozwinąć swoje umiejętności.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/kursy">
                <a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 focus:outline-none">
                  Przeglądaj kursy
                </a>
              </Link>
              <Link href="/darmowa-lekcja">
                <a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none">
                  Zacznij za darmo
                </a>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Programista przy pracy" 
              className="rounded-lg shadow-xl w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
