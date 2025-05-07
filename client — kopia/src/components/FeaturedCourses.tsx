import { Course } from "@/lib/types";
import { Link } from "wouter";

export default function FeaturedCourses() {
  const courses: Course[] = [
    {
      id: 1,
      title: "Podstawy TypeScript",
      description: "Naucz się TypeScript od podstaw i wykorzystaj statyczne typowanie w swoich projektach JavaScript.",
      level: "Podstawowy",
      levelClass: "bg-blue-100 text-blue-800",
      modules: 10,
      hours: 12,
      participants: 2345,
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      imageAlt: "Podstawy TypeScript"
    },
    {
      id: 2,
      title: "React z TypeScript",
      description: "Zbuduj aplikacje React wykorzystując TypeScript dla lepszej skalowalności i mniej błędów.",
      level: "Średniozaawansowany",
      levelClass: "bg-indigo-100 text-indigo-800",
      modules: 8,
      hours: 15,
      participants: 1876,
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      imageAlt: "React i TypeScript"
    },
    {
      id: 3,
      title: "Node.js i Express z TypeScript",
      description: "Twórz serwery API RESTful z Node.js, Express i TypeScript, z uwzględnieniem najlepszych praktyk.",
      level: "Zaawansowany",
      levelClass: "bg-green-100 text-green-800",
      modules: 12,
      hours: 18,
      participants: 1243,
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      imageAlt: "Node.js i Express"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Popularne kursy
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Wybierz spośród naszych najwyżej ocenianych kursów programowania, dostosowanych do różnych poziomów zaawansowania.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <img src={course.image} alt={course.imageAlt} className="w-full h-48 object-cover" />
              <div className="p-6 flex-grow">
                <div className="flex items-center mb-2">
                  <span className={`px-2 py-1 text-xs font-medium ${course.levelClass} rounded-full`}>{course.level}</span>
                  <span className="ml-2 text-xs text-slate-500">{course.modules} modułów</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{course.title}</h3>
                <p className="text-slate-600 mb-4">{course.description}</p>
                <div className="flex items-center text-sm text-slate-500">
                  <i className="fas fa-clock mr-1"></i> {course.hours} godzin
                  <span className="mx-2">•</span>
                  <i className="fas fa-user-graduate mr-1"></i> {course.participants} uczestników
                </div>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <Link href={`/kursy/${course.id}`}>
                  <a className="block w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md">
                    Zapisz się na kurs
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/kursy">
            <a className="inline-flex items-center px-6 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50">
              Zobacz wszystkie kursy <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
