import { Feature } from "@/lib/types";

export default function Features() {
  const features: Feature[] = [
    {
      id: 1,
      title: "Praktyczne projekty",
      description: "Ucz się poprzez budowanie prawdziwych aplikacji webowych od początku do końca, wykorzystując nowoczesne technologie.",
      icon: "fas fa-laptop-code"
    },
    {
      id: 2,
      title: "Doświadczeni mentorzy",
      description: "Nasi instruktorzy to profesjonaliści z wieloletnim doświadczeniem w branży IT, którzy dzielą się wiedzą praktyczną.",
      icon: "fas fa-chalkboard-teacher"
    },
    {
      id: 3,
      title: "Najnowsze technologie",
      description: "Uczymy najnowszych wersji TypeScript, React, Node.js i innych popularnych technologii wykorzystywanych w pracy.",
      icon: "fas fa-code-branch"
    },
    {
      id: 4,
      title: "Społeczność",
      description: "Dołącz do społeczności programistów, gdzie możesz zadawać pytania, uczestniczyć w dyskusjach i znaleźć partnerów do projektów.",
      icon: "fas fa-users"
    },
    {
      id: 5,
      title: "Certyfikaty ukończenia",
      description: "Po ukończeniu kursu otrzymasz certyfikat potwierdzający zdobyte umiejętności, który możesz dołączyć do swojego CV.",
      icon: "fas fa-certificate"
    },
    {
      id: 6,
      title: "Elastyczny harmonogram",
      description: "Ucz się we własnym tempie, dostosowując naukę do swojego harmonogramu - materiały są dostępne 24/7.",
      icon: "fas fa-clock"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Dlaczego warto uczyć się z nami?
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            TechniCodeCamp oferuje kompleksowe podejście do nauki programowania z naciskiem na praktykę i najnowsze technologie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-slate-50 p-6 rounded-lg">
              <div className="bg-primary rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <i className={`${feature.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
