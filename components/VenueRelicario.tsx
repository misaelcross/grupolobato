import React from 'react';
import { Navbar } from './Navbar';
import { Gallery } from './Gallery';
import { ChevronDown, MapPin, Coffee, Utensils, Heart, Instagram, Phone, Mail, Clock, Mountain, Home, Flame } from 'lucide-react';

interface VenueRelicarioProps {
  onNavigate?: (page: string) => void;
}

const AccomodationCard: React.FC<{ title: string; desc: string; image: string; type: 'Casarão' | 'Chalé' }> = ({ title, desc, image, type }) => (
  <div className="group relative flex flex-col bg-white border border-neutral-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700">
    <div className="h-80 overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
      <div className="absolute top-4 left-4 bg-brand-gold text-white text-[10px] font-bold tracking-widest uppercase py-1 px-3">
        {type}
      </div>
    </div>
    <div className="p-10 flex flex-col flex-1">
      <h4 className="text-2xl font-serif text-neutral-800 mb-4">{title}</h4>
      <p className="text-neutral-500 text-sm font-light leading-relaxed mb-8">{desc}</p>
      <button className="mt-auto w-full py-4 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white transition-all uppercase text-[10px] font-bold tracking-[0.2em]">
        Conheça as acomodações
      </button>
    </div>
  </div>
);

export const VenueRelicario: React.FC<VenueRelicarioProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#faf9f6] min-h-screen">
      {/* HERO SECTION */}
      <div className="relative w-full h-screen overflow-hidden bg-brand-dark">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=2400" 
            alt="Villa Relicário Ouro Preto" 
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        </div>
        <Navbar onNavigate={onNavigate} />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
           <h2 className="text-brand-gold font-serif italic text-2xl md:text-3xl mb-4 tracking-widest drop-shadow-md">Serra de Ouro Preto</h2>
           <h1 className="text-5xl md:text-9xl font-serif text-white uppercase tracking-[0.1em] drop-shadow-2xl leading-none">Villa Relicário</h1>
           <div className="w-24 h-px bg-brand-gold mt-12 opacity-80" />
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
           <ChevronDown className="text-white/60 w-10 h-10 animate-bounce cursor-pointer hover:text-brand-gold transition-colors" 
           onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})} />
        </div>
      </div>

      {/* SECTION: SOBRE */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1">
            <h3 className="text-brand-gold font-serif italic text-3xl mb-6">O Refúgio</h3>
            <h2 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-10 uppercase leading-none tracking-tight">Arquitetura rústica e essência mineira</h2>
            <div className="space-y-8 text-neutral-500 font-light leading-relaxed text-lg">
              <p>Localizada nos altos da Serra de Ouro Preto, a Vila Relicário é um refúgio para quem busca tranquilidade, privacidade e bons momentos.</p>
              <p>Com arquitetura rústica e estilo colonial, o hotel preserva a essência de Minas e oferece uma proposta única, com uma gastronomia que valoriza os sabores da região.</p>
              <p>A vista para as montanhas cria o cenário ideal para encontros a dois, celebrações intimistas ou dias de descanso longe do ritmo das cidades.</p>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
             <div className="aspect-[3/4] overflow-hidden rounded-sm translate-y-12">
                <img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover" />
             </div>
             <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img src="https://images.pexels.com/photos/2088210/pexels-photo-2088210.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* SECTION: BISTRÔ */}
      <section className="bg-brand-green py-24 md:py-40 px-6 text-white overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1">
             <h3 className="text-brand-gold font-serif italic text-3xl mb-6">Restaurante</h3>
             <h2 className="text-4xl md:text-7xl font-serif mb-10 uppercase leading-none tracking-tighter">Bistrô</h2>
             <p className="text-brand-gold text-xl font-serif italic mb-8">Sabores que traduzem Minas</p>
             <div className="space-y-6 text-white/70 font-light text-lg leading-relaxed mb-12">
               <p>Nossa gastronomia transita entre o <strong>buffet mineiro</strong> e pratos da culinária internacional. Ingredientes caseiros produzidos na região, como queijos, geleias e quitutes típicos.</p>
               <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                  <div className="flex items-start gap-4">
                     <Clock className="text-brand-gold mt-1 shrink-0" size={20} />
                     <div>
                        <span className="block text-xs uppercase tracking-widest text-white/40 mb-2">Horários</span>
                        <p className="text-sm">Seg a Qui: 08:00 - 16:00</p>
                        <p className="text-sm">Sex e Sáb: 08:00 - 22:00</p>
                        <p className="text-sm">Dom: 08:00 - 14:00</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <Utensils className="text-brand-gold mt-1 shrink-0" size={20} />
                     <div>
                        <span className="block text-xs uppercase tracking-widest text-white/40 mb-2">Refeições</span>
                        <p className="text-sm">Do café da manhã ao jantar</p>
                     </div>
                  </div>
               </div>
             </div>
             <button className="bg-brand-gold text-white px-12 py-5 uppercase text-xs font-bold tracking-[0.2em] hover:bg-[#a68648] transition-all">
                Faça sua reserva
             </button>
          </div>
          <div className="flex-1 relative">
             <div className="aspect-square bg-white p-2 rounded-full overflow-hidden shadow-2xl">
                <img src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover rounded-full" />
             </div>
             <div className="absolute -top-10 -right-10 bg-brand-gold w-32 h-32 rounded-full flex items-center justify-center border-4 border-brand-green">
                <Coffee size={40} className="text-white" />
             </div>
          </div>
        </div>
      </section>

      {/* SECTION: HOSPEDAGEM */}
      <section className="max-w-[1400px] mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <h3 className="text-brand-gold font-serif italic text-3xl mb-4">Hospedagem</h3>
          <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 uppercase tracking-wide">Uma estadia acolhedora</h2>
          <p className="text-neutral-500 font-light mt-6 leading-relaxed">Proporcionamos uma hospedagem completa com café, almoço e jantar. À noite, a fogueira cria um clima acolhedor para aproveitar a estadia com tranquilidade.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <AccomodationCard 
            type="Casarão"
            title="Apartamentos Casarão"
            desc="Localizados no casarão central com vista para as montanhas. Estilo colonial preservado com opções de quartos duplos ou triplos."
            image="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1200"
          />
          <AccomodationCard 
            type="Chalé"
            title="Chalés Exclusivos"
            desc="Para quem busca mais privacidade e tranquilidade. Opção ideal para casais ou famílias de até quatro pessoas, distribuídos em dois ambientes."
            image="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1200"
          />
        </div>
      </section>

      {/* SECTION: CASAMENTOS */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-4">
                <img src="https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-80 object-cover rounded-sm" />
                <img src="https://images.pexels.com/photos/580613/pexels-photo-580613.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-80 object-cover rounded-sm mt-10" />
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-brand-gold font-serif italic text-3xl mb-6">Casamentos</h3>
            <h2 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-10 uppercase leading-none">O cenário perfeito para o seu dia</h2>
            <div className="space-y-6 text-neutral-500 font-light leading-relaxed">
              <p>Destaque para a área do <strong>deck</strong>, onde a vista para as montanhas cria o ambiente ideal para cerimônias intimistas ao ar livre.</p>
              <div className="bg-neutral-50 p-6 border-l-2 border-brand-gold">
                 <h4 className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-3">Sala da Noiva</h4>
                 <p className="text-sm">Acomodação exclusiva preparada para o making of. Elegante, funcional e adequada para foto, vídeo e maquiagem.</p>
              </div>
              <p>O casal conta com uma <strong>suíte especial para a noite de núpcias</strong>, garantindo conforto e privacidade após a celebração.</p>
            </div>
            <button className="mt-10 border-b border-brand-gold text-brand-gold font-bold uppercase text-[10px] tracking-[0.3em] py-2 hover:text-neutral-900 hover:border-neutral-900 transition-all">
              Consultar disponibilidade
            </button>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <Gallery />

      {/* SECTION: LOCALIZAÇÃO & CONTATOS */}
      <section className="bg-neutral-900 text-white py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-24">
          <div>
             <h3 className="text-brand-gold font-serif italic text-3xl mb-12">Localização & Redes</h3>
             <div className="space-y-12">
                <div className="flex gap-6 items-start">
                   <MapPin className="text-brand-gold shrink-0 mt-1" size={24} />
                   <div>
                      <span className="block text-xs uppercase tracking-widest font-bold mb-3 text-white/30">Endereço</span>
                      <p className="text-xl font-light text-neutral-300">R. Av. das Andorinhas, 2525<br/>Morro São João, Ouro Preto - MG<br/>35400-000</p>
                   </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-8 border-t border-white/5">
                   <div className="flex gap-4 items-center">
                      <Instagram className="text-brand-gold" size={20} />
                      <a href="#" className="text-neutral-400 hover:text-white transition-colors">@villarelicario</a>
                   </div>
                   <div className="flex gap-4 items-center">
                      <Phone className="text-brand-gold" size={20} />
                      <span className="text-neutral-400">+55 31 3350-6270</span>
                   </div>
                   <div className="flex gap-4 items-center">
                      <Mail className="text-brand-gold" size={20} />
                      <span className="text-neutral-400 text-sm">recepcao@vilarelicario.com</span>
                   </div>
                </div>
             </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
             <div className="h-[300px] w-full bg-neutral-800 relative group overflow-hidden rounded-sm border border-white/5">
                <img src="https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover grayscale opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <button className="bg-brand-gold text-white px-8 py-4 uppercase text-[10px] font-bold tracking-[0.2em] shadow-2xl">Ver no Google Maps</button>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};