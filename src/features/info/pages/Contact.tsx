import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ArrowRight, 
  ExternalLink, 
  Calendar,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  Video
} from "lucide-react";
import { 
  CONTACT_HERO, 
  CONTACT_METHODS, 
  CONTACT_LOCATION, 
  CONTACT_HOURS, 
  SOCIAL_LINKS,
  CONTACT_CTA 
} from "../data/contact.data";

const Contact = () => {
  
  // Helpers simples para acciones
  const handleAction = (type: string, value: string) => {
    if (type === 'whatsapp') {
      window.open(`https://wa.me/${value.replace(/\D/g, "")}`, "_blank", "noopener,noreferrer");
      return;
    }

    if (type === 'phone') {
      window.open(`tel:${value.replace(/\D/g, "")}`, "_self");
      return;
    }

    if (type === 'email') {
      window.open(`mailto:${value}`, "_self");
    }
  };

  // Generador de URL de mapa OpenStreetMap
  const osmMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${
    CONTACT_LOCATION.coords.lng - 0.008
  },${CONTACT_LOCATION.coords.lat - 0.008},${CONTACT_LOCATION.coords.lng + 0.008},${
    CONTACT_LOCATION.coords.lat + 0.008
  }&layer=mapnik&marker=${CONTACT_LOCATION.coords.lat},${CONTACT_LOCATION.coords.lng}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-28 pb-20 md:pb-32 overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-100/30 to-transparent rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200/50 text-blue-600 text-sm font-semibold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            {CONTACT_HERO.label}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
            Conectemos <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mt-2">tu próxima aventura</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            {CONTACT_HERO.description}
          </p>
        </div>
      </section>

      <main className="relative -mt-8 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          
          {/* --- CONTACT CARDS --- */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {CONTACT_METHODS.map((method) => (
              <div
                key={method.id}
                onClick={() => handleAction(method.actionType, method.value)}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 cursor-pointer overflow-hidden border border-slate-200/50 hover:border-transparent transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${method.gradient} transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className={`w-20 h-20 rounded-2xl ${method.bg} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-all duration-500`}>
                    {method.icon === 'MessageCircle' && <MessageCircle className={`w-10 h-10 ${method.iconColor}`} />}
                    {method.icon === 'Phone' && <Phone className={`w-10 h-10 ${method.iconColor}`} />}
                    {method.icon === 'Mail' && <Mail className={`w-10 h-10 ${method.iconColor}`} />}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white mb-2 transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-6 group-hover:text-white/90 transition-colors duration-300">
                    {method.description}
                  </p>
                  <p className="font-mono text-slate-700 group-hover:text-white text-sm mb-6 transition-colors duration-300">
                    {method.value}
                  </p>

                  <div className={`${method.btnColor} text-white py-3 px-6 rounded-xl font-bold text-sm transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center gap-2`}>
                    Contactar
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --- MAIN CONTENT GRID (BENTO) --- */}
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            
            {/* COLUMNA IZQUIERDA: Mapa */}
            <div className="lg:col-span-2 flex flex-col h-full">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl overflow-hidden relative group flex-1 min-h-[500px] h-full">
                {/* Header Flotante */}
                <div className="absolute top-6 left-6 z-20 pointer-events-none max-w-[90%]">
                  <div className="flex items-center gap-4 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl pointer-events-auto">
                    <div className="p-3 bg-blue-50 rounded-xl shrink-0 border border-blue-100">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-slate-900 font-bold text-base leading-tight">Nuestra Ubicación</h3>
                      <p className="text-slate-600 text-sm mt-0.5 font-medium leading-snug break-words">
                        {CONTACT_LOCATION.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Iframe */}
                <iframe
                  src={osmMapUrl}
                  className="w-full h-full grayscale-0 transition-all duration-700"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Mapa de Ubicación"
                />

                {/* Botón Google Maps */}
                <a
                  href={CONTACT_LOCATION.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-6 right-6 bg-white hover:bg-slate-50 text-slate-900 py-3 px-5 rounded-xl shadow-xl transition-all duration-300 flex items-center gap-3 text-sm font-bold border border-white/20 hover:scale-105 group/btn z-30"
                >
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                  Abrir en Google Maps
                </a>
              </div>
            </div>

            {/* COLUMNA DERECHA: Horarios y Redes */}
            <div className="space-y-6 flex flex-col">
              {/* Horarios */}
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 shadow-xl border border-slate-100 flex-1">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xl">Horario de Atención</h3>
                    <p className="text-slate-500 text-sm">Te esperamos</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {CONTACT_HOURS.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 rounded-xl bg-white hover:bg-blue-50 transition-all duration-300 border border-slate-100 hover:border-blue-200">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-700 font-semibold">{item.dia}</span>
                      </div>
                      <span className={`px-3 py-1.5 rounded-lg font-bold text-sm ${
                        item.horario.toLowerCase().includes("cerrado")
                          ? "bg-slate-100 text-slate-500"
                          : "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-sm"
                      }`}>
                        {item.horario}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Redes Sociales */}
              {SOCIAL_LINKS.length > 0 && (
                <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 shadow-xl border border-slate-100">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl shadow-lg">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-xl">Síguenos</h3>
                      <p className="text-slate-500 text-sm">Únete a la comunidad</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {SOCIAL_LINKS.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden p-4 rounded-2xl bg-white hover:bg-slate-50 transition-all duration-500 border border-slate-100 hover:border-transparent hover:shadow-lg"
                      >
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${social.gradient} transition-opacity duration-500`}></div>
                        <div className="relative z-10 flex flex-col items-center justify-center">
                          <div className="mb-3 transform group-hover:scale-110 transition-transform duration-500">
                             {social.icon === 'Facebook' && <Facebook className="w-8 h-8 text-slate-700 group-hover:text-white transition-colors duration-300" />}
                             {social.icon === 'Instagram' && <Instagram className="w-8 h-8 text-slate-700 group-hover:text-white transition-colors duration-300" />}
                             {social.icon === 'Youtube' && <Youtube className="w-8 h-8 text-slate-700 group-hover:text-white transition-colors duration-300" />}
                             {social.icon === 'Video' && <Video className="w-8 h-8 text-slate-700 group-hover:text-white transition-colors duration-300" />}
                          </div>
                          <span className="text-xs font-bold text-slate-700 group-hover:text-white transition-colors duration-300">
                            {social.name}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* --- BOTTOM CTA --- */}
          <div className="mt-20 pt-12 border-t border-slate-100">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center justify-between">
              
              <div className="max-w-2xl space-y-5">
                <h2 className="text-3xl font-bold font-serif leading-tight text-slate-900">
                  {CONTACT_CTA.title}
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  {CONTACT_CTA.description}
                </p>
                <ul className="flex flex-wrap gap-3">
                  {CONTACT_CTA.badges.map((badge, i) => (
                     <li key={i} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 text-slate-700 text-xs font-medium border border-slate-100">
                        <span className={`w-1.5 h-1.5 rounded-full ${badge.color}`}></span>
                        {badge.text}
                     </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0">
                <button
                  type="button"
                  onClick={() => handleAction('whatsapp', CONTACT_METHODS[0].value)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chatear por WhatsApp
                </button>
                <button
                  onClick={() => handleAction('phone', CONTACT_METHODS[1].value)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-700 font-medium border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 group"
                >
                  <Phone className="w-5 h-5 text-slate-400 group-hover:text-slate-600" />
                  Llamar ahora
                </button>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Contact;