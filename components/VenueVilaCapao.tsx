import React from 'react';
import { Navbar } from './Navbar';
import { Gallery } from './Gallery';
import { ChevronDown, MapPin, Camera, Church, Users, Trees, Heart, Calendar, Instagram, Facebook, Phone, Mail } from 'lucide-react';

interface VenueVilaCapaoProps {
  onNavigate?: (page: string) => void;
}

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="flex flex-col items-center text-center p-10 bg-white border border-neutral-100 rounded-sm hover:shadow-2xl transition-all duration-700 group">
    <div className="text-brand-gold mb-8 group-hover:scale-110 transition-transform duration-500">{icon}</div>
    <h4 className="text-neutral-900 font-serif text-2xl mb-5 uppercase tracking-wide">{title}</h4>
    <p className="text-neutral-500 text-[15px] font-light leading-relaxed">{text}</p>
  </div>
);

const SectionHeading: React.FC<{ subtitle: string; title: string; light?: boolean }> = ({ subtitle, title, light }) => (
  <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
    <h3 className="text-brand-gold font-serif italic text-2xl md:text-3xl mb-4">{subtitle}</h3>
    <h2 className={`text-3xl md:text-6xl font-serif uppercase tracking-tight leading-tight ${light ? 'text-white' : 'text-neutral-900'}`}>
      {title}
    </h2>
  </div>
);

export const VenueVilaCapao: React.FC<VenueVilaCapaoProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <div className="relative w-full h-screen overflow-hidden bg-brand-dark">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=2400" 
            alt="Villa Capão Sabará" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/50" />
        </div>
        <Navbar onNavigate={onNavigate} />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
           <h2 className="text-brand-gold font-serif italic text-2xl md:text-4xl mb-6 tracking-widest drop-shadow-md">Apenas 35 minutos de BH</h2>
           <h1 className="text-6xl md:text-9xl font-serif text-white uppercase tracking-[0.2em] drop-shadow-2xl">Villa Capão</h1>
           <div className="w-32 h-px bg-brand-gold mt-12 opacity-80" />
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
           <ChevronDown className="text-white/80 w-10 h-10 animate-bounce cursor-pointer hover:text-brand-gold transition-colors" 
           onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})} />
        </div>
      </div>

      {/* SECTION: SOBRE NÓS */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <div className="flex-1">
            <h3 className="text-brand-gold font-serif italic text-3xl mb-6">Sobre nós</h3>
            <h2 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-10 uppercase leading-none tracking-tighter">Um cenário encantador para celebrar</h2>
            <div className="space-y-8 text-neutral-500 font-light leading-[1.8] text-lg">
              <p>Localizado em Sabará, o Villa Capão é um espaço idealizado para eventos, casamentos e ensaios fotográficos. Cada detalhe foi pensado para quem busca um cenário inesquecível.</p>
              <p>O espaço reúne uma <strong>réplica da Igreja de Nossa Senhora do Ó</strong>, amplo salão de festas, cascatas, coretos, lagoas e um belo jardim, permitindo diferentes montagens e usos dos ambientes.</p>
              <p>A capela e as áreas externas criam o cenário ideal para cerimônias ao ar livre, enquanto a estrutura oferece conforto absoluto para convidados e equipes.</p>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1200" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-brand-gold p-12 hidden xl:block shadow-2xl">
                <Church size={64} className="text-white opacity-90" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: ESTRUTURA & CAPACIDADE */}
      <section className="bg-neutral-50 py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading subtitle="Versatilidade" title="Diferentes formatos de celebração" />
          <div className="grid md:grid-cols-3 gap-10">
            <FeatureCard 
              icon={<Users size={50} strokeWidth={1}/>} 
              title="Capacidade" 
              text="Recebemos eventos sociais, feiras e corporativos. Acomodamos até 180 pessoas sentadas na área interna e até 500 no pátio externo." 
            />
            <FeatureCard 
              icon={<Calendar size={50} strokeWidth={1}/>} 
              title="Flexibilidade" 
              text="O amplo pátio externo permite montagem de tendas, oferecendo liberdade total na organização do seu evento." 
            />
            <FeatureCard 
              icon={<Trees size={50} strokeWidth={1}/>} 
              title="Cenário Natural" 
              text="Jardins, cascatas e lagoas que se integram à arquitetura barroca, criando uma atmosfera de beleza e história." 
            />
          </div>
          <div className="mt-20 text-center">
            <button className="bg-brand-gold text-white px-14 py-5 uppercase text-xs font-bold tracking-[0.3em] rounded-sm hover:bg-[#a68648] transition-all shadow-xl">
               Consultar Disponibilidade
            </button>
          </div>
        </div>
      </section>

      {/* SECTION: CASAMENTOS */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
            <div className="flex-1">
              <h3 className="text-brand-gold font-serif italic text-3xl mb-6">Casamentos</h3>
              <h2 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-10 uppercase leading-tight tracking-tighter">O cenário perfeito para o seu grande dia</h2>
              <div className="space-y-8 text-neutral-500 font-light leading-relaxed text-lg">
                <p>Nossa capela, inspirada na Igreja de Nossa Senhora do Ó e na arquitetura barroca, integra-se à paisagem criando um ambiente especial para casamentos ao ar livre.</p>
                <div className="bg-brand-green/5 p-8 border-l-4 border-brand-gold">
                   <h4 className="text-brand-gold font-serif text-xl mb-3">Sala da Noiva e do Noivo</h4>
                   <p className="text-neutral-600 text-base">Disponibilizamos salas exclusivas para o making of, oferecendo privacidade e conforto para os noivos e equipes de produção.</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
               <div className="grid grid-cols-2 gap-4">
                  <img src="https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-80 object-cover rounded-sm" />
                  <img src="https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-80 object-cover rounded-sm mt-10" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: ENSAIOS FOTOGRÁFICOS */}
      <section className="bg-brand-green py-24 md:py-40 px-6 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <Camera size={600} strokeWidth={0.5} className="translate-x-1/2" />
        </div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <SectionHeading subtitle="Produções de Vídeo & Foto" title="Cenários que valorizam cada registro" light />
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 text-white/70 font-light text-xl leading-relaxed">
              <p>Abrimos nosso espaço para a realização de ensaios fotográficos e produções de vídeo de alto nível.</p>
              <p>A combinação entre áreas externas, arquitetura barroca e elementos naturais oferece infinitas possibilidades de enquadramento para pré-wedding, ensaios de gestantes e editoriais de moda.</p>
              <p className="text-brand-gold font-serif italic text-2xl">Um local preparado para receber produções com tranquilidade e liberdade criativa.</p>
              <button className="border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white transition-all px-12 py-5 uppercase text-xs font-bold tracking-[0.2em] mt-10">
                Solicitar Informações
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
               <div className="aspect-square bg-white/10 rounded-sm overflow-hidden border border-white/5">
                  <img src="https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?auto=compress&cs=tinysrgb&w=400" className="w-full h-full object-cover" />
               </div>
               <div className="aspect-square bg-white/10 rounded-sm overflow-hidden border border-white/5 mt-10">
                  <img src="https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=400" className="w-full h-full object-cover" />
               </div>
               <div className="aspect-square bg-white/10 rounded-sm overflow-hidden border border-white/5 -mt-10">
                  <img src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=400" className="w-full h-full object-cover" />
               </div>
               <div className="aspect-square bg-white/10 rounded-sm overflow-hidden border border-white/5">
                  <img src="https://images.pexels.com/photos/6405626/pexels-photo-6405626.jpeg?auto=compress&cs=tinysrgb&w=400" className="w-full h-full object-cover" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <Gallery />

      {/* SECTION: LOCALIZAÇÃO & CONTATOS */}
      <section className="bg-neutral-900 text-white py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
               <h3 className="text-brand-gold font-serif italic text-3xl mb-12">Localização & Redes</h3>
               <div className="space-y-12">
                  <div className="flex gap-6 items-start">
                     <MapPin className="text-brand-gold shrink-0 mt-1" size={32} />
                     <div>
                        <span className="block text-sm uppercase tracking-widest font-bold mb-3 text-white/50">Endereço</span>
                        <p className="text-xl font-light text-neutral-300">Praça Serra da Nevada, 780<br/>Sabará, MG, 34515-250</p>
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                     <div className="flex gap-6 items-start">
                        <Instagram className="text-brand-gold shrink-0 mt-1" size={24} />
                        <div>
                           <span className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-white/50">Instagram</span>
                           <a href="#" className="text-neutral-300 hover:text-brand-gold transition-colors">@villacapao</a>
                        </div>
                     </div>
                     <div className="flex gap-6 items-start">
                        <Facebook className="text-brand-gold shrink-0 mt-1" size={24} />
                        <div>
                           <span className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-white/50">Facebook</span>
                           <a href="#" className="text-neutral-300 hover:text-brand-gold transition-colors">fb.com/villacapao</a>
                        </div>
                     </div>
                     <div className="flex gap-6 items-start">
                        <Phone className="text-brand-gold shrink-0 mt-1" size={24} />
                        <div>
                           <span className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-white/50">Telefone</span>
                           <p className="text-neutral-300">+55 31 97260-6392</p>
                        </div>
                     </div>
                     <div className="flex gap-6 items-start">
                        <Mail className="text-brand-gold shrink-0 mt-1" size={24} />
                        <div>
                           <span className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-white/50">E-mail</span>
                           <p className="text-neutral-300 text-sm">comercialvillacapao@gmail.com</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="flex flex-col gap-8">
               <div className="h-[400px] w-full bg-neutral-800 rounded-sm overflow-hidden border border-white/5 relative group">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                  <img src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover grayscale opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                     <button className="bg-brand-gold text-white px-8 py-4 uppercase text-[10px] font-bold tracking-[0.2em]">Abrir no Google Maps</button>
                  </div>
               </div>
               <div className="bg-white/5 p-10 border border-white/5">
                  <h4 className="text-2xl font-serif text-brand-gold mb-6">Fale Conosco</h4>
                  <form className="space-y-4">
                     <input type="text" placeholder="Seu Nome" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-brand-gold transition-colors text-white placeholder-white/30" />
                     <input type="email" placeholder="E-mail" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-brand-gold transition-colors text-white placeholder-white/30" />
                     <textarea placeholder="Mensagem" rows={2} className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-brand-gold transition-colors text-white placeholder-white/30 resize-none" />
                     <button className="w-full bg-brand-gold text-white py-4 uppercase text-xs font-bold tracking-widest hover:bg-[#a68648] transition-colors mt-6">Enviar Mensagem</button>
                  </form>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};