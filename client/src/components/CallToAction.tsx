import { Link } from "wouter";

export default function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
          Rozpocznij swoją przygodę z programowaniem już dziś
        </h2>
        <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
          Dołącz do tysięcy zadowolonych kursantów i rozwijaj swoje umiejętności programistyczne z TypeScript, React i Node.js.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/darmowa-lekcja">
            <a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 focus:outline-none">
              Zapisz się na darmową lekcję
            </a>
          </Link>
          <Link href="/kursy">
            <a className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-800 focus:outline-none">
              Przeglądaj kursy
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
