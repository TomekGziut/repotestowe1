export interface Course {
  id: number;
  title: string;
  description: string;
  level: 'Podstawowy' | 'Średniozaawansowany' | 'Zaawansowany';
  levelClass: string;
  modules: number;
  hours: number;
  participants: number;
  image: string;
  imageAlt: string;
}

export interface Testimonial {
  id: number;
  content: string;
  rating: number;
  author: {
    name: string;
    position: string;
    avatar: string;
  }
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}
