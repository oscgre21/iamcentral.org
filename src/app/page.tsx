"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Menu,
  X,
  MapPin,
  Clock,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  ChevronDown,
  BookOpen,
  Users,
  Globe,
  Heart
} from 'lucide-react';

// Componente Auxiliar para Tarjetas de Servicio
const ServiceCard = ({ title, subtitle, time, extra, icon, color, highlighted = false }: {
  title: string;
  subtitle: string;
  time: string;
  extra: string;
  icon: React.ReactNode;
  color: string;
  highlighted?: boolean;
}) => {
  const isGreen = color === 'green';

  return (
    <div className={`
      relative bg-white rounded-xl overflow-hidden transition-all duration-300 group
      ${highlighted ? 'shadow-2xl ring-2 ring-iglesia-naranja-dorado transform md:-translate-y-4 z-10' : 'shadow-lg hover:shadow-xl hover:-translate-y-2 border border-gray-100'}
    `}>
      <div className={`h-2 w-full ${isGreen ? 'bg-iglesia-verde-lima' : 'bg-iglesia-azul-marino'}`}></div>
      <div className="p-8 text-center">
        <div className={`
          w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 transition-all duration-300 transform group-hover:scale-110
          ${isGreen ? 'bg-green-100 text-iglesia-verde-lima group-hover:bg-iglesia-verde-lima group-hover:text-white' : 'bg-indigo-100 text-iglesia-azul-marino group-hover:bg-iglesia-azul-marino group-hover:text-white'}
        `}>
          {icon}
        </div>

        <h3 className="text-xl font-bold text-iglesia-gris-oscuro mb-1">{title}</h3>
        <p className="text-iglesia-gris-medio text-xs uppercase tracking-wider font-medium mb-6">{subtitle}</p>

        <div className="bg-gray-50 rounded-lg py-4 mb-4 group-hover:bg-gray-100 transition border border-gray-100">
          <p className="text-2xl font-black text-iglesia-gris-oscuro">{time}</p>
        </div>

        <p className="text-sm text-iglesia-gris-medio flex items-center justify-center gap-1">
          <Clock size={12} /> {extra}
        </p>
      </div>
    </div>
  );
};

// Componente Auxiliar para Botones Sociales
const SocialButton = ({ icon }: { icon: React.ReactNode }) => (
  <a
    href="#"
    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-iglesia-verde-lima hover:text-white transition-all duration-300 transform hover:rotate-12"
  >
    {icon}
  </a>
);

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efecto para cambiar la navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen font-sans bg-gray-50 text-iglesia-gris-oscuro">

      {/* --- BARRA DE NAVEGACIÓN --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm shadow-sm py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">

            {/* LOGO E IDENTIDAD */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Logo IAM Central"
                width={56}
                height={56}
                className="h-14 w-auto object-contain transition-transform hover:scale-105 filter drop-shadow-sm"
              />

              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-lg leading-none text-iglesia-azul-marino tracking-wide">
                  CASA DE RESTAURACIÓN
                </span>
                <span className="font-semibold text-[10px] sm:text-xs leading-none text-iglesia-naranja tracking-widest mt-1">
                  Y AVIVAMIENTO
                </span>
              </div>
            </div>

            {/* MENÚ ESCRITORIO */}
            <div className="hidden md:flex space-x-6 items-center">
              {['Inicio', 'Nosotros', 'Pastores', 'Servicios', 'Ministerios'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-iglesia-gris-medio hover:text-iglesia-azul-marino font-medium text-sm uppercase tracking-wider transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-iglesia-verde-lima transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a
                href="/predicas"
                className="text-iglesia-gris-medio hover:text-iglesia-azul-marino font-medium text-sm uppercase tracking-wider transition-colors relative group"
              >
                Prédicas
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-iglesia-verde-lima transition-all duration-300 group-hover:w-full"></span>
              </a>

              {/* Redes Sociales */}
              <div className="flex items-center gap-2 pl-2 border-l border-gray-200">
                <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-iglesia-gris-medio hover:bg-iglesia-azul-marino hover:text-white transition-all duration-300">
                  <Facebook size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-iglesia-gris-medio hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white transition-all duration-300">
                  <Instagram size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-iglesia-gris-medio hover:bg-red-600 hover:text-white transition-all duration-300">
                  <Youtube size={16} />
                </a>
              </div>

              <a
                href="#contacto"
                className="bg-iglesia-azul-marino text-white px-5 py-2.5 rounded shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 uppercase text-xs font-bold tracking-widest border border-iglesia-azul-marino hover:bg-iglesia-naranja hover:border-iglesia-naranja"
              >
                Contáctanos
              </a>
            </div>

            {/* BOTÓN MENÚ MÓVIL */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-iglesia-azul-marino p-2 focus:outline-none hover:bg-indigo-50 rounded-full transition"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* MENÚ MÓVIL DESPLEGABLE */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 transition-all duration-300 ease-in-out origin-top ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0 overflow-hidden'}`}>
          <div className="px-4 py-6 space-y-3 flex flex-col items-center">
            {['Inicio', 'Nosotros', 'Pastores', 'Servicios', 'Ministerios'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={toggleMenu}
                className="block px-4 py-2 text-lg font-medium text-iglesia-gris-medio hover:text-iglesia-azul-marino hover:bg-indigo-50 w-full text-center rounded-lg"
              >
                {item}
              </a>
            ))}
            <a
              href="/predicas"
              onClick={toggleMenu}
              className="block px-4 py-2 text-lg font-medium text-iglesia-gris-medio hover:text-iglesia-azul-marino hover:bg-indigo-50 w-full text-center rounded-lg"
            >
              Prédicas
            </a>
            <a
              href="#contacto"
              onClick={toggleMenu}
              className="block w-full max-w-xs mt-4 px-6 py-3 rounded text-base font-bold text-white bg-iglesia-azul-marino text-center shadow-lg"
            >
              CONTACTO
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION (Portada Principal) --- */}
      <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A237E]/90 via-[#1A237E]/80 to-[#1A237E]/60 z-10 mix-blend-multiply"></div>
          <Image
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Adoración en la iglesia"
            fill
            className="object-cover animate-slow-zoom"
            priority
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16 animate-fade-in-up">
          <div className="inline-block mb-6 px-6 py-2 border border-iglesia-verde-lima/50 rounded-full bg-[#1A237E]/40 backdrop-blur-md shadow-lg">
            <span className="text-iglesia-verde-claro text-xs sm:text-sm font-bold tracking-[0.2em] uppercase flex items-center gap-2 justify-center">
              <Globe size={14} className="text-iglesia-verde-lima" /> Bienvenidos a Casa
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl tracking-tight">
            SOMOS UNA IGLESIA PARA <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-iglesia-naranja-dorado via-iglesia-naranja to-iglesia-naranja-dorado filter drop-shadow-lg">
              TODA LA FAMILIA
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-indigo-100 mb-10 max-w-2xl mx-auto leading-relaxed font-light opacity-90">
            Iglesia Apostólica y Misionera Central: Predicando la verdad, amando a las personas y transformando nuestra comunidad con el poder del Espíritu Santo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#servicios"
              className="bg-iglesia-verde-lima hover:bg-iglesia-verde-claro text-white px-8 py-4 font-bold rounded shadow-lg hover:shadow-green-500/50 transition transform hover:-translate-y-1 uppercase tracking-wider text-sm w-full sm:w-auto text-center border border-iglesia-verde-lima"
            >
              Ver Horarios
            </a>
            <a
              href="#contacto"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded hover:bg-iglesia-naranja hover:border-iglesia-naranja transition transform hover:-translate-y-1 uppercase tracking-wider text-sm w-full sm:w-auto text-center shadow-lg"
            >
              Soy Nuevo Aquí
            </a>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-white/50 hover:text-white transition cursor-pointer">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* --- SECCIÓN SOBRE NOSOTROS --- */}
      <section id="nosotros" className="py-20 bg-white relative overflow-hidden">
        {/* Elemento decorativo */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-green-50 rounded-full filter blur-3xl opacity-50 translate-x-1/2"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-50 rounded-full filter blur-3xl opacity-50 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Imagen Compuesta */}
            <div className="relative order-2 md:order-1">
              <div className="absolute top-0 -left-4 w-full h-full bg-iglesia-azul-marino/5 rounded-2xl transform -rotate-2 z-0"></div>
              <div className="absolute bottom-0 -right-4 w-full h-full bg-iglesia-verde-lima/10 rounded-2xl transform rotate-2 z-0"></div>
              <div className="relative z-10 rounded-2xl shadow-2xl w-full h-[400px] sm:h-[500px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Comunidad"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Tarjeta flotante */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs hidden sm:block border-l-4 border-iglesia-verde-lima">
                <p className="font-bold text-iglesia-azul-marino text-lg">&ldquo;Id por todo el mundo y predicad el evangelio&rdquo;</p>
                <p className="text-iglesia-gris-medio text-sm mt-2 font-serif italic">- Marcos 16:15</p>
              </div>
            </div>

            {/* Contenido Texto */}
            <div className="order-1 md:order-2 space-y-8">
              <div className="inline-flex items-center gap-2 text-iglesia-verde-lima font-bold uppercase tracking-widest text-xs bg-green-50 px-3 py-1 rounded-full">
                Nuestra Identidad
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-iglesia-gris-oscuro leading-tight">
                Más que una iglesia, <br/>
                <span className="text-iglesia-azul-marino relative">
                  somos una familia.
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-iglesia-naranja-dorado opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none"/></svg>
                </span>
              </h2>
              <p className="text-iglesia-gris-medio text-lg leading-relaxed">
                En la <span className="font-bold text-iglesia-azul-marino">Iglesia Apostólica y Misionera Central</span>, creemos en el poder de Dios para restaurar vidas. Fundamentados en la palabra y guiados por el Espíritu Santo, trabajamos incansablemente para extender el Reino de Dios.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-iglesia-azul-marino group-hover:bg-iglesia-azul-marino group-hover:text-white transition-colors duration-300">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-iglesia-gris-oscuro">Doctrina Sólida</h4>
                    <p className="text-sm text-iglesia-gris-medio mt-1">Enseñanza bíblica fiel para el crecimiento espiritual.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-iglesia-verde-lima group-hover:bg-iglesia-verde-lima group-hover:text-white transition-colors duration-300">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-iglesia-gris-oscuro">Comunidad Viva</h4>
                    <p className="text-sm text-iglesia-gris-medio mt-1">Un lugar donde encontrarás amistad y apoyo genuino.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a href="#pastores" className="inline-flex items-center gap-2 text-iglesia-azul-marino font-bold hover:text-iglesia-naranja transition group border-b-2 border-transparent hover:border-iglesia-naranja">
                  Conoce a nuestros pastores
                  <span className="transform transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN NUESTROS PASTORES --- */}
      <section id="pastores" className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-iglesia-verde-lima/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-iglesia-azul-marino/5 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Columna de Texto */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-iglesia-naranja font-bold uppercase tracking-widest text-xs bg-orange-50 px-3 py-1 rounded-full">
                <Heart size={12} /> Liderazgo Espiritual
              </div>

              <h2 className="text-iglesia-azul-marino font-black text-3xl sm:text-4xl lg:text-5xl leading-tight">
                NUESTROS PASTORES
              </h2>

              <div className="w-24 h-1.5 bg-iglesia-verde-lima rounded-full"></div>

              <p className="text-iglesia-gris-medio text-lg leading-relaxed">
                Los pastores <span className="font-bold text-iglesia-azul-marino">Gregorio Cruz</span> y <span className="font-bold text-iglesia-azul-marino">Lucia Gálvez</span> son los fundadores de la Iglesia Apostólica y Misionera Central en Santo Domingo, República Dominicana.
              </p>

              <p className="text-iglesia-gris-medio text-lg leading-relaxed">
                Ellos fueron escogidos para ser portadores de una visión de Dios: establecer una iglesia que predique la sana doctrina, forme discípulos comprometidos y alcance a las familias con el amor de Cristo.
              </p>

              <p className="text-iglesia-gris-medio text-lg leading-relaxed">
                Con un corazón pastoral y una visión misionera, han dedicado su vida a predicar el evangelio y guiar a nuestra congregación con amor, sabiduría y dedicación.
              </p>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#nosotros"
                  className="inline-flex items-center justify-center gap-2 bg-iglesia-azul-marino text-white px-8 py-4 rounded font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider text-sm"
                >
                  <Globe size={18} />
                  Ver Visión
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 bg-iglesia-verde-lima text-white px-8 py-4 rounded font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider text-sm hover:bg-iglesia-verde-claro"
                >
                  <Users size={18} />
                  Contactar Pastores
                </a>
              </div>
            </div>

            {/* Columna de Imagen */}
            <div className="relative">
              {/* Fondo decorativo */}
              <div className="absolute top-4 -right-4 w-full h-full bg-iglesia-verde-lima/20 rounded-2xl transform rotate-2 z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-iglesia-azul-marino/10 rounded-2xl transform -rotate-2 z-0"></div>

              {/* Imagen principal de los pastores */}
              <div className="relative z-10 rounded-2xl shadow-2xl overflow-hidden">
                <div className="relative h-[450px] sm:h-[550px]">
                  <div className="absolute inset-0 bg-gradient-to-t from-iglesia-azul-marino/60 via-transparent to-transparent z-10"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Pastores Gregorio Cruz y Lucia Gálvez"
                    fill
                    className="object-cover"
                  />

                  {/* Etiqueta sobre la imagen */}
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-iglesia-verde-lima rounded-full flex items-center justify-center flex-shrink-0">
                          <Heart size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-iglesia-azul-marino text-lg">Gregorio Cruz y Lucia Gálvez</h3>
                          <p className="text-iglesia-naranja font-semibold text-sm uppercase tracking-wider">Pastores Generales</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Mensaje de los pastores */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 sm:p-10 max-w-4xl mx-auto border-l-4 border-iglesia-naranja">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-iglesia-naranja/10 rounded-full flex items-center justify-center">
                  <Heart size={28} className="text-iglesia-naranja" />
                </div>
              </div>
              <div>
                <p className="text-iglesia-gris-medio text-lg leading-relaxed italic">
                  &ldquo;Nuestra visión es ver vidas transformadas por el poder del Espíritu Santo. Queremos ser una iglesia que ama a Dios con todo el corazón, que sirve a la comunidad con excelencia y que predica el evangelio sin compromiso.&rdquo;
                </p>
                <p className="text-iglesia-naranja font-semibold mt-4">— Pastores Gregorio Cruz y Lucia Gálvez</p>
              </div>
            </div>
          </div>

          {/* Sección de información adicional */}
          <div className="mt-16 grid sm:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-iglesia-verde-lima">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen size={24} className="text-iglesia-verde-lima" />
              </div>
              <h4 className="font-bold text-iglesia-azul-marino text-lg mb-2">Predicación</h4>
              <p className="text-iglesia-gris-medio text-sm">Enseñanza bíblica fiel y práctica para el crecimiento espiritual de toda la familia.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-iglesia-azul-marino">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Users size={24} className="text-iglesia-azul-marino" />
              </div>
              <h4 className="font-bold text-iglesia-azul-marino text-lg mb-2">Consejería Pastoral</h4>
              <p className="text-iglesia-gris-medio text-sm">Acompañamiento y guía espiritual para matrimonios, familias e individuos.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-iglesia-naranja">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Heart size={24} className="text-iglesia-naranja" />
              </div>
              <h4 className="font-bold text-iglesia-azul-marino text-lg mb-2">Cuidado Familiar</h4>
              <p className="text-iglesia-gris-medio text-sm">Ministerio enfocado en fortalecer los hogares y restaurar relaciones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN DE SERVICIOS (TARJETAS) --- */}
      <section id="servicios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-iglesia-azul-marino font-black text-3xl sm:text-4xl mb-4">Nuestros Servicios</h2>
            <div className="w-24 h-1.5 bg-iglesia-verde-lima mx-auto rounded-full mb-6"></div>
            <p className="text-iglesia-gris-medio text-lg">
              No fuimos creados para caminar solos. Únete a nosotros en cualquiera de nuestras reuniones semanales para adorar, aprender y crecer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <ServiceCard
              title="Culto Dominical"
              subtitle="Celebración General"
              time="10:00 AM"
              extra="Escuela Dominical 9:00 AM"
              icon={<Users size={32} />}
              color="blue"
            />

            {/* Servicio 2 */}
            <ServiceCard
              title="Estudio Bíblico"
              subtitle="Miércoles de Enseñanza"
              time="7:30 PM"
              extra="Presencial y Online"
              icon={<BookOpen size={32} />}
              color="green"
              highlighted={true}
            />

            {/* Servicio 3 */}
            <ServiceCard
              title="Noche de Oración"
              subtitle="Viernes de Intercesión"
              time="8:00 PM"
              extra="Vigilias Mensuales"
              icon={<Globe size={32} />}
              color="blue"
            />
          </div>
        </div>
      </section>

      {/* --- BANNER DE LLAMADA A LA ACCIÓN --- */}
      <section className="py-20 bg-iglesia-azul-marino relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        {/* Círculos decorativos */}
        <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 w-96 h-96 border-4 border-white/10 rounded-full"></div>
        <div className="absolute bottom-0 left-0 transform -translate-x-1/3 translate-y-1/3 w-96 h-96 border-4 border-white/10 rounded-full"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">¿Necesitas Oración?</h2>
          <p className="text-indigo-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
            Nuestro equipo de intercesión está listo para orar por ti. No importa por lo que estés pasando, creemos que Dios tiene una respuesta para tu vida hoy.
          </p>
          <a href="#contacto" className="inline-block bg-iglesia-verde-lima text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-iglesia-naranja-dorado transition-all duration-300 transform hover:-translate-y-1 uppercase tracking-wide">
            Envíanos tu Petición
          </a>
        </div>
      </section>

      {/* --- FOOTER / CONTACTO --- */}
      <footer id="contacto" className="bg-iglesia-gris-oscuro text-white pt-20 pb-10 border-t-8 border-iglesia-verde-lima">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            {/* Columna 1: Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/logo.svg"
                  alt="Logo Footer"
                  width={48}
                  height={48}
                  className="h-12 w-auto brightness-0 invert opacity-90"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-lg tracking-wide leading-none">CASA DE RESTAURACIÓN</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Y AVIVAMIENTO</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 border-l-2 border-iglesia-verde-lima pl-4">
                Una iglesia comprometida con la Gran Comisión. Amamos a Dios, amamos a las personas y servimos al mundo.
              </p>
              <div className="flex gap-4">
                <SocialButton icon={<Facebook size={18} />} />
                <SocialButton icon={<Instagram size={18} />} />
                <SocialButton icon={<Youtube size={18} />} />
              </div>
            </div>

            {/* Columna 2: Enlaces */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-iglesia-verde-lima rounded-full"></span>
                Menú Rápido
              </h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#inicio" className="hover:text-iglesia-verde-lima transition flex items-center gap-2 transform hover:translate-x-1 duration-200">› Inicio</a></li>
                <li><a href="#nosotros" className="hover:text-iglesia-verde-lima transition flex items-center gap-2 transform hover:translate-x-1 duration-200">› Sobre Nosotros</a></li>
                <li><a href="#pastores" className="hover:text-iglesia-verde-lima transition flex items-center gap-2 transform hover:translate-x-1 duration-200">› Nuestros Pastores</a></li>
                <li><a href="#servicios" className="hover:text-iglesia-verde-lima transition flex items-center gap-2 transform hover:translate-x-1 duration-200">› Horarios</a></li>
                <li><a href="#ministerios" className="hover:text-iglesia-verde-lima transition flex items-center gap-2 transform hover:translate-x-1 duration-200">› Ministerios</a></li>
                <li><a href="/predicas" className="hover:text-iglesia-verde-lima transition flex items-center gap-2 transform hover:translate-x-1 duration-200">› Prédicas</a></li>
              </ul>
            </div>

            {/* Columna 3: Contacto */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                 <span className="w-2 h-2 bg-iglesia-verde-lima rounded-full"></span>
                 Información de Contacto
              </h4>
              <div className="grid sm:grid-cols-2 gap-6">
                <ul className="space-y-5 text-gray-400 text-sm">
                  <li className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center flex-shrink-0 group-hover:bg-iglesia-verde-lima transition">
                      <MapPin size={16} className="text-iglesia-verde-lima group-hover:text-white" />
                    </div>
                    <span className="mt-1">Calle Respaldo 21 #201<br/>Villas Agrícolas, Santo Domingo, D.N.</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center flex-shrink-0 group-hover:bg-iglesia-verde-lima transition">
                      <Phone size={16} className="text-iglesia-verde-lima group-hover:text-white" />
                    </div>
                    <span>809-581-3396</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center flex-shrink-0 group-hover:bg-iglesia-verde-lima transition">
                      <Mail size={16} className="text-iglesia-verde-lima group-hover:text-white" />
                    </div>
                    <span>contacto@iamcentral.com</span>
                  </li>
                </ul>
                {/* Mapa placeholder */}
                <div className="h-32 bg-gray-700 rounded-lg flex items-center justify-center border border-gray-600 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-iglesia-azul-marino/20 group-hover:bg-iglesia-azul-marino/10 transition"></div>
                  <span className="text-gray-500 text-xs relative z-10 flex items-center gap-2">
                    <MapPin size={14}/> Ver Ubicación en Mapa
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} Iglesia Apostólica y Misionera Central. Todos los derechos reservados.
            </p>
            <p className="text-gray-600 text-[10px] uppercase tracking-widest">
              Pastores Generales: Gregorio Cruz Y Lucia Gálvez
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
