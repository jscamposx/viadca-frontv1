import reviewsUser1Img from "../assets/images/reviews/reviews-user1.avif";
import reviewsUser2Img from "../assets/images/reviews/reviews-user2.avif";
import reviewsUser3Img from "../assets/images/reviews/reviews-user3.avif";
import reviewsUser4Img from "../assets/images/reviews/reviews-user4.avif";

export interface Review {
  id: number | string;
  name: string;
  location: string;
  quote: string;
  score: number;
  avatar: string;
  accentFrom?: string;
  accentTo?: string;
}

export const REVIEWS_UI = {
  eyebrow: "Testimonios",
  heading: "Lo que dicen nuestros clientes.",
  description: "Experiencias reales de viajeros que eligieron Viadca para planear sus vacaciones y viajes de trabajo.",
  recentLabel: "Historias recientes",
  ratingLabel: (score: number) => `Calificación ${score} de 5`,
};

export const REVIEWS_DATA: Review[] = [
  {
    id: 1,
    name: "Ana Victoria Huerta Alcantar",
    location: "Hace 3 semanas",
    avatar: reviewsUser4Img,
    quote: "Me ayudó mucho para planear y hacer realidad mi viaje a Las Vegas.",
    score: 5,
    accentFrom: "from-amber-500",
    accentTo: "to-orange-500"
  },
  {
    id: 2,
    name: "Jess",
    location: "Hace 4 semanas",
    avatar: reviewsUser2Img,
    quote: "El mejor de los servicios. Muy buen acomodo de los viajes, hoteles y atención al cliente excelentes. No hubo contratiempos y todas nuestras dudas fueron resueltas de la manera más amable. Muy recomendable! Muchas gracias! 🙏",
    score: 5,
    accentFrom: "from-blue-600",
    accentTo: "to-indigo-600"
  },
  {
    id: 3,
    name: "Eliezer Ortiz",
    location: "Hace 5 meses",
    avatar: reviewsUser1Img,
    quote: "Excelente atención y servicio. Me ayudaron a planear mi viaje a España, sin preocupación alguna. Felicidades. Mi siguiente viaje con Viadca.",
    score: 5,
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-500"
  },
  {
    id: 4,
    name: "Angelica De la Peña",
    location: "Hace 5 meses",
    avatar: reviewsUser3Img,
    quote: "Excelente servicio y promociones, definitivamente viajaré nuevamente con ustedes.",
    score: 5,
    accentFrom: "from-pink-500",
    accentTo: "to-rose-500"
  },
  {
    id: 5,
    name: "Karla Olivas",
    location: "Hace 6 meses",
    avatar: reviewsUser3Img,
    quote: "Excelente servicio!! Los recomiendo mucho!!!",
    score: 5,
    accentFrom: "from-fuchsia-500",
    accentTo: "to-purple-500"
  },
  {
    id: 6,
    name: "Camila Hernández",
    location: "Hace 7 meses",
    avatar: reviewsUser3Img,
    quote: "La atención y cuidado hacia sus clientes vale la pena! La mejor agencia de viajes de Dgo.",
    score: 5,
    accentFrom: "from-orange-500",
    accentTo: "to-amber-500"
  },
  {
    id: 7,
    name: "Claudia Castro",
    location: "Hace 7 meses",
    avatar: reviewsUser3Img,
    quote: "Muy interesante la experiencia... las sugerencias y darnos detalles nos permitió disfrutar aún más del viaje. Muy recomendable ✨️✨️✨️ 👌",
    score: 5,
    accentFrom: "from-indigo-500",
    accentTo: "to-violet-500"
  },
  {
    id: 8,
    name: "Brenda Soto",
    location: "Hace 7 meses",
    avatar: reviewsUser3Img,
    quote: "★★★★★",
    score: 5,
    accentFrom: "from-lime-500",
    accentTo: "to-green-500"
  },
  {
    id: 9,
    name: "Guillermo Nuñez",
    location: "Hace 7 meses",
    avatar: reviewsUser1Img,
    quote: "★★★★★",
    score: 5,
    accentFrom: "from-amber-600",
    accentTo: "to-yellow-500"
  },
  {
    id: 10,
    name: "Alicia Luna",
    location: "Hace 7 meses",
    avatar: reviewsUser3Img,
    quote: "Excelente servicio e información!! ✈️🛳️🏝️",
    score: 5,
    accentFrom: "from-cyan-500",
    accentTo: "to-teal-500"
  },
  {
    id: 11,
    name: "Angy",
    location: "Hace 7 meses",
    avatar: reviewsUser2Img,
    quote: "Excelente !!!",
    score: 5,
    accentFrom: "from-rose-500",
    accentTo: "to-pink-500"
  },
  {
    id: 12,
    name: "Sadrac A.",
    location: "Hace 7 meses",
    avatar: reviewsUser1Img,
    quote: "Excelente opción para planear y contratar tus viajes. La atención es personalizada y siempre están al tanto de que todo en el viaje salga perfecto. 100% recomendable.",
    score: 5,
    accentFrom: "from-blue-500",
    accentTo: "to-cyan-500"
  },
  {
    id: 13,
    name: "María Vázquez",
    location: "Hace 7 meses",
    avatar: reviewsUser3Img,
    quote: "Fue una experiencia maravillosa, todo estuvo genial: el hospedaje, los lugares que visitamos y en general todo excelente. Muchas gracias Viadca by Zafiro Tours.",
    score: 5,
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-500"
  },
  {
    id: 14,
    name: "Araceli Gurrola",
    location: "Hace 7 meses",
    avatar: reviewsUser3Img,
    quote: "Excelente servicio!!!",
    score: 5,
    accentFrom: "from-fuchsia-500",
    accentTo: "to-pink-500"
  },
  {
    id: 15,
    name: "Desenterrando Historia",
    location: "Hace 7 meses",
    avatar: reviewsUser2Img,
    quote: "★★★★★",
    score: 5,
    accentFrom: "from-indigo-500",
    accentTo: "to-blue-500"
  },
  {
    id: 16,
    name: "Velia Galvan",
    location: "Hace 7 meses",
    avatar: reviewsUser3Img,
    quote: "★★★★★",
    score: 5,
    accentFrom: "from-purple-500",
    accentTo: "to-fuchsia-500"
  },
  {
    id: 17,
    name: "Abraham Hernández",
    location: "Hace 7 meses",
    avatar: reviewsUser1Img,
    quote: "★★★★★",
    score: 5,
    accentFrom: "from-orange-500",
    accentTo: "to-amber-500"
  },
  {
    id: 18,
    name: "Aida Rios",
    location: "Hace 7 meses",
    avatar: reviewsUser3Img,
    quote: "Excelente atención y calidad.",
    score: 5,
    accentFrom: "from-pink-500",
    accentTo: "to-rose-500"
  },
  {
    id: 19,
    name: "Buli Nava",
    location: "Hace 7 meses",
    avatar: reviewsUser2Img,
    quote: "La mejor agencia. Súper confiable.",
    score: 5,
    accentFrom: "from-lime-500",
    accentTo: "to-green-500"
  },
  {
    id: 20,
    name: "Diego H",
    location: "Hace 7 meses",
    avatar: reviewsUser1Img,
    quote: "Viajé a Puerto Vallarta con mi novia con esta agencia y tuve una excelente atención y servicio.",
    score: 5,
    accentFrom: "from-amber-600",
    accentTo: "to-yellow-500"
  },
  {
    id: 21,
    name: "Natalia Ruiz",
    location: "Hace 7 meses",
    avatar: reviewsUser3Img,
    quote: "Excelente servicio! Muy profesional y te deja las mejores experiencias en destinos muy atractivos.",
    score: 5,
    accentFrom: "from-cyan-500",
    accentTo: "to-teal-500"
  },
  {
    id: 22,
    name: "Héctor Retana",
    location: "Hace 7 meses",
    avatar: reviewsUser1Img,
    quote: "¡Excelente servicio!",
    score: 5,
    accentFrom: "from-rose-500",
    accentTo: "to-pink-500"
  },
  {
    id: 23,
    name: "Erik Sanchez",
    location: "Hace 7 meses",
    avatar: reviewsUser1Img,
    quote: "Trato ameno y cordial, y sobre todo dan el servicio que uno anda buscando.",
    score: 5,
    accentFrom: "from-fuchsia-500",
    accentTo: "to-purple-500"
  },
  {
    id: 24,
    name: "Betzabé Villa",
    location: "Hace 7 meses",
    avatar: reviewsUser3Img,
    quote: "Muy amables, contestan rapidísimo y excelente servicio y muy buenos precios, súper recomendados!! 👌🏼",
    score: 5,
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-500"
  }
];