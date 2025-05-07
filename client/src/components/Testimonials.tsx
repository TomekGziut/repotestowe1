import { Testimonial } from "@/lib/types";

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "Kurs React z TypeScript całkowicie zmienił moje podejście do tworzenia aplikacji. Teraz piszę bardziej bezpieczny kod z mniejszą liczbą błędów. Zdobyte umiejętności pomogły mi znaleźć pracę jako Front-end Developer.",
      rating: 5.0,
      author: {
        name: "Karolina Z.",
        position: "Front-end Developer",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
      }
    },
    {
      id: 2,
      content: "Fantastyczny kurs dla początkujących. Instruktor wyjaśnia koncepty w sposób jasny i zrozumiały. Dzięki projektom praktycznym naprawdę dobrze zrozumiałem, jak działa TypeScript z Node.js.",
      rating: 4.5,
      author: {
        name: "Tomasz K.",
        position: "Student informatyki",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
      }
    },
    {
      id: 3,
      content: "Jako osoba zmieniająca branżę, doceniam praktyczne podejście do nauki. Kurs Node.js z TypeScript dał mi solidne podstawy. W ciągu 6 miesięcy od ukończenia kursu dostałem pierwszą pracę jako programista.",
      rating: 5.0,
      author: {
        name: "Marek W.",
        position: "Back-end Developer",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
      }
    }
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }

    return stars;
  };

  return (
    <section className="py-16 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Co mówią nasi kursanci
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Przeczytaj opinie osób, które już skorzystały z naszych kursów i zbudowały swoje umiejętności programistyczne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {renderStars(testimonial.rating)}
                </div>
                <span className="ml-2 text-slate-600 text-sm">{testimonial.rating.toFixed(1)}</span>
              </div>
              <p className="text-slate-700 mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.author.avatar} 
                  alt={testimonial.author.name} 
                  className="w-10 h-10 rounded-full object-cover" 
                />
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-slate-900">{testimonial.author.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.author.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
