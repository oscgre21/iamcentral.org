"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Play,
  Calendar,
  Clock,
  User,
  ChevronLeft,
  ChevronRight,
  Home,
  Search,
  Filter,
  BookOpen,
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

// Datos de ejemplo de prédicas
const predicasData = [
  {
    id: 1,
    title: "El poder de la fe en tiempos difíciles",
    pastor: "Pastor Gregorio Cruz",
    date: "2024-12-15",
    duration: "45 min",
    category: "Fe",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Descubre cómo mantener tu fe firme cuando enfrentas las tormentas de la vida."
  },
  {
    id: 2,
    title: "La familia según el diseño de Dios",
    pastor: "Pastora Lucia Gálvez",
    date: "2024-12-08",
    duration: "52 min",
    category: "Familia",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Principios bíblicos para construir hogares fuertes y llenos del amor de Dios."
  },
  {
    id: 3,
    title: "Adoración que transforma",
    pastor: "Pastor Gregorio Cruz",
    date: "2024-12-01",
    duration: "38 min",
    category: "Adoración",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Aprende a entrar en la presencia de Dios a través de una adoración genuina."
  },
  {
    id: 4,
    title: "El llamado a servir",
    pastor: "Pastor Gregorio Cruz",
    date: "2024-11-24",
    duration: "41 min",
    category: "Servicio",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Cada creyente tiene un llamado especial. Descubre el tuyo y sirve con pasión."
  },
  {
    id: 5,
    title: "Orando con poder",
    pastor: "Pastora Lucia Gálvez",
    date: "2024-11-17",
    duration: "47 min",
    category: "Oración",
    image: "https://images.unsplash.com/photo-1445445290350-18a3b86e0b5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Claves para desarrollar una vida de oración efectiva y poderosa."
  },
  {
    id: 6,
    title: "Viviendo en el Espíritu",
    pastor: "Pastor Gregorio Cruz",
    date: "2024-11-10",
    duration: "55 min",
    category: "Espíritu Santo",
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "El Espíritu Santo quiere guiarte cada día. Aprende a caminar en su poder."
  },
  {
    id: 7,
    title: "La gracia que nos sostiene",
    pastor: "Pastora Lucia Gálvez",
    date: "2024-11-03",
    duration: "43 min",
    category: "Gracia",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "La gracia de Dios es suficiente para cada situación que enfrentamos."
  },
  {
    id: 8,
    title: "Edificando sobre la roca",
    pastor: "Pastor Gregorio Cruz",
    date: "2024-10-27",
    duration: "49 min",
    category: "Fundamentos",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Los fundamentos bíblicos que todo creyente necesita para una vida victoriosa."
  },
  {
    id: 9,
    title: "El gozo del Señor es nuestra fortaleza",
    pastor: "Pastora Lucia Gálvez",
    date: "2024-10-20",
    duration: "36 min",
    category: "Gozo",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Descubre cómo el gozo de Dios puede ser tu fuerza en medio de cualquier circunstancia."
  },
  {
    id: 10,
    title: "Discipulado: Creciendo juntos",
    pastor: "Pastor Gregorio Cruz",
    date: "2024-10-13",
    duration: "50 min",
    category: "Discipulado",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "La importancia de crecer en comunidad y discipular a otros en la fe."
  },
  {
    id: 11,
    title: "Sanidad interior",
    pastor: "Pastora Lucia Gálvez",
    date: "2024-10-06",
    duration: "58 min",
    category: "Sanidad",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Dios quiere sanar las heridas de tu corazón. Permite que su amor te restaure."
  },
  {
    id: 12,
    title: "Mayordomía fiel",
    pastor: "Pastor Gregorio Cruz",
    date: "2024-09-29",
    duration: "44 min",
    category: "Mayordomía",
    image: "https://images.unsplash.com/photo-1459257831348-f0cdd359235f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Administrando con sabiduría todo lo que Dios nos ha confiado."
  },
];

const ITEMS_PER_PAGE = 6;

// Componente de tarjeta de prédica
const PredicaCard = ({ predica }: { predica: typeof predicasData[0] }) => {
  const formattedDate = new Date(predica.date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Imagen */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={predica.image}
          alt={predica.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Categoría */}
        <div className="absolute top-4 left-4">
          <span className="bg-iglesia-naranja text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {predica.category}
          </span>
        </div>

        {/* Botón de play */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 bg-iglesia-verde-lima rounded-full flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Play size={28} className="text-white ml-1" fill="white" />
          </div>
        </div>

        {/* Duración */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/70 text-white text-xs px-2 py-1 rounded">
          <Clock size={12} />
          {predica.duration}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="font-bold text-lg text-iglesia-azul-marino mb-2 line-clamp-2 group-hover:text-iglesia-naranja transition-colors">
          {predica.title}
        </h3>

        <p className="text-iglesia-gris-medio text-sm mb-4 line-clamp-2">
          {predica.description}
        </p>

        <div className="flex items-center justify-between text-xs text-iglesia-gris-medio">
          <div className="flex items-center gap-1">
            <User size={14} className="text-iglesia-verde-lima" />
            <span>{predica.pastor}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} className="text-iglesia-naranja" />
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente de paginación
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-iglesia-gris-medio hover:bg-iglesia-azul-marino hover:text-white hover:border-iglesia-azul-marino disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        <ChevronLeft size={20} />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded-lg font-bold text-sm transition-all duration-200 ${
            currentPage === page
              ? 'bg-iglesia-azul-marino text-white shadow-lg'
              : 'bg-white border border-gray-200 text-iglesia-gris-medio hover:bg-iglesia-verde-lima hover:text-white hover:border-iglesia-verde-lima'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-iglesia-gris-medio hover:bg-iglesia-azul-marino hover:text-white hover:border-iglesia-azul-marino disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        <ChevronRight size={20} />
      </button>
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

export default function PredicasPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Obtener categorías únicas
  const categories = Array.from(new Set(predicasData.map(p => p.category)));

  // Filtrar prédicas
  const filteredPredicas = predicasData.filter(predica => {
    const matchesSearch = predica.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         predica.pastor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || predica.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Calcular paginación
  const totalPages = Math.ceil(filteredPredicas.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedPredicas = filteredPredicas.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset page when filters change
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50 text-iglesia-gris-oscuro">
      {/* Header */}
      <nav className="bg-white shadow-lg py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.svg"
                alt="Logo IAM Central"
                width={48}
                height={48}
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-base leading-none text-iglesia-azul-marino tracking-wide">
                  CASA DE RESTAURACIÓN
                </span>
                <span className="font-semibold text-[10px] leading-none text-iglesia-naranja tracking-widest mt-1">
                  Y AVIVAMIENTO
                </span>
              </div>
            </Link>

            {/* Botón volver */}
            <Link
              href="/"
              className="flex items-center gap-2 text-iglesia-gris-medio hover:text-iglesia-azul-marino font-medium transition-colors"
            >
              <Home size={20} />
              <span className="hidden sm:inline">Volver al Inicio</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-iglesia-azul-marino overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-iglesia-verde-lima/20 rounded-full filter blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-iglesia-naranja/20 rounded-full filter blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-iglesia-verde-lima font-bold uppercase tracking-widest text-xs bg-white/10 px-4 py-2 rounded-full mb-6">
              <BookOpen size={14} />
              Recursos Espirituales
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
              Nuestras Prédicas
            </h1>
            <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
              Accede a nuestra colección de mensajes y enseñanzas bíblicas. Alimenta tu espíritu con la Palabra de Dios.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Búsqueda */}
            <div className="relative w-full sm:w-96">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-iglesia-gris-medio" />
              <input
                type="text"
                placeholder="Buscar prédicas..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-iglesia-verde-lima focus:ring-2 focus:ring-iglesia-verde-lima/20 outline-none transition-all"
              />
            </div>

            {/* Filtro por categoría */}
            <div className="relative w-full sm:w-auto">
              <Filter size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-iglesia-gris-medio" />
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full sm:w-48 pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-iglesia-verde-lima focus:ring-2 focus:ring-iglesia-verde-lima/20 outline-none transition-all appearance-none bg-white cursor-pointer"
              >
                <option value="">Todas las categorías</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Prédicas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {paginatedPredicas.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPredicas.map((predica) => (
                  <PredicaCard key={predica.id} predica={predica} />
                ))}
              </div>

              {/* Info de resultados */}
              <div className="text-center mt-8 text-iglesia-gris-medio text-sm">
                Mostrando {startIndex + 1} - {Math.min(startIndex + ITEMS_PER_PAGE, filteredPredicas.length)} de {filteredPredicas.length} prédicas
              </div>

              {/* Paginación */}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={40} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-iglesia-gris-oscuro mb-2">No se encontraron prédicas</h3>
              <p className="text-iglesia-gris-medio">Intenta con otros términos de búsqueda o categoría</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-iglesia-gris-oscuro text-white pt-20 pb-10 border-t-8 border-iglesia-verde-lima">
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
                <li><Link href="/" className="hover:text-iglesia-verde-lima transition flex items-center gap-2 transform hover:translate-x-1 duration-200">› Inicio</Link></li>
                <li><Link href="/#nosotros" className="hover:text-iglesia-verde-lima transition flex items-center gap-2 transform hover:translate-x-1 duration-200">› Sobre Nosotros</Link></li>
                <li><Link href="/#pastores" className="hover:text-iglesia-verde-lima transition flex items-center gap-2 transform hover:translate-x-1 duration-200">› Nuestros Pastores</Link></li>
                <li><Link href="/#servicios" className="hover:text-iglesia-verde-lima transition flex items-center gap-2 transform hover:translate-x-1 duration-200">› Horarios</Link></li>
                <li><Link href="/predicas" className="hover:text-iglesia-verde-lima transition flex items-center gap-2 transform hover:translate-x-1 duration-200">› Prédicas</Link></li>
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
