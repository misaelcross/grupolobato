import React from 'react';
import { Navbar } from './Navbar';
import { Gallery } from './Gallery';
import { ChevronDown, MapPin, Coffee, Utensils, Heart, Trees, Home, Droplets, Flame, Waves } from 'lucide-react';

interface VenueFazendaProps {
  onNavigate?: (page: string) => void;
}

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="flex flex-col items-center text-center p-8 bg-white border border-neutral-100 rounded-sm hover:shadow-xl transition-all duration-500">
    <div className="text-brand-gold mb-6">{icon}</div>
    <h4 className="text-neutral-900 font-serif text-xl mb-4 italic">{title}</h4>
    <p className="text-neutral-500 text-sm font-light leading-relaxed">{text}</p>
  </div>
);

const AccomodationCard: React.FC<{ title: string; desc: string; features: string[]; image: string }> = ({ title, desc, features, image }) => (
  <div className="group flex flex-col bg-neutral-50 border border-neutral-200 overflow-hidden rounded-sm transition-all hover:shadow-2xl">
    <div className="h-64 overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
    </div>
    <div className="p-8 flex flex-col flex-1">
      <h4 className="text-2xl font-serif text-neutral-800 mb-4">{title}</h4>
      <p className="text-neutral-500 text-sm font-light leading-relaxed mb-6">{desc}</p>
      <ul className="space-y-2 mb-8 mt-auto">
        {features.map((f, i) => (
          <li key={i} className="flex items-center text-xs text-neutral-600 font-medium tracking-wide uppercase">
            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-3" />
            {f}
          </li>
        ))}
      </ul>
      <button className="w-full py-4 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white transition-all uppercase text-[10px] font-bold tracking-[0.2em]">
        Faça sua reserva
      </button>
    </div>
  </div>
);

export const VenueFazenda: React.FC<VenueFazendaProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <div className="relative w-full h-screen overflow-hidden bg-brand-dark">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&w=2400" 
            alt="Fazenda Boa Esperança" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40" />
        </div>
        <Navbar onNavigate={onNavigate} />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
           <h2 className="text-brand-gold font-serif italic text-2xl md:text-3xl mb-4 tracking-wide drop-shadow-lg">Bem-vindo à</h2>
           <h1 className="text-5xl md:text-8xl font-serif text-white uppercase tracking-widest drop-shadow-2xl">Fazenda Boa Esperança</h1>
           <div className="w-24 h-px bg-brand-gold mt-8" />
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
           <ChevronDown className="text-white w-8 h-8 animate-bounce" />
        </div>
      </div>

      {/* SECTION: SOBRE A FAZENDA */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="text-brand-gold font-serif italic text-3xl mb-6">Sobre a Fazenda</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-8 uppercase leading-tight">Um refúgio mineiro em meio à natureza</h2>
            <div className="space-y-6 text-neutral-500 font-light leading-relaxed">
              <p>Preservamos a essência mineira em cada detalhe, oferecendo acolhimento, tranquilidade e estrutura completa para quem deseja descansar ou celebrar.</p>
              <p>Nossas construções em estilo colonial, o enxoval de tear artesanal e os móveis na linha rústica mineira criam uma atmosfera autêntica e aconchegante.</p>
              <p>Com acesso simples pelas BRs 381 e 262, estamos a apenas 60 km de Belo Horizonte, próximos a Igarapé e Inhotim. Um destino que une tradição e conforto.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 h-[500px]">
            <img src="https://images.pexels.com/photos/164583/pexels-photo-164583.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover rounded-sm" />
            <img src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover rounded-sm mt-12" />
          </div>
        </div>
      </section>

      {/* SECTION: LAZER & EXPERIÊNCIAS */}
      <section className="bg-neutral-50 py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h3 className="text-brand-gold font-serif italic text-3xl mb-4">Lazer & Natureza</h3>
            <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 uppercase tracking-wide">Onde o tempo desacelera</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <InfoCard icon={<Trees size={40} strokeWidth={1}/>} title="Experiência ao ar livre" text="Caminhadas, trilhas pelo bosque e passeios a cavalo ao entardecer em um cenário amplo e verde." />
            <InfoCard icon={<Waves size={40} strokeWidth={1}/>} title="Relaxamento" text="Piscina, sauna, bar e pesca na lagoa completam a jornada de quem busca tranquilidade." />
            <InfoCard icon={<Droplets size={40} strokeWidth={1}/>} title="Diversão" text="Quadra de tênis e jogos de salão, ideais para encontros leves e descontraídos com amigos e família." />
          </div>
        </div>
      </section>

      {/* SECTION: ACOMODAÇÕES */}
      <section className="max-w-[1400px] mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-20">
          <h3 className="text-brand-gold font-serif italic text-3xl mb-4">Nossas Acomodações</h3>
          <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 uppercase tracking-wide">Perto da natureza, longe do comum</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <AccomodationCard 
            title="Vista para o Lago" 
            desc="Unindo conforto e natureza em perfeita harmonia com vista para águas tranquilas." 
            features={["Cama de casal confortável", "Frigobar", "TV", "Ambiente Sereno"]} 
            image="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <AccomodationCard 
            title="Bloco Floresta" 
            desc="Ideal para casais ou amigos, cercado pelo verde do bosque." 
            features={["Opções Duplo, Triplo ou Quadruplo", "Chuveiro Aquecido", "Estadia Revigorante"]} 
            image="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <AccomodationCard 
            title="Suíte Premium" 
            desc="Um refúgio exclusivo com lareira e hidromassagem para momentos inesquecíveis a dois." 
            features={["Suíte Ampla", "Antessala Aconchegante", "Varanda Privativa", "Lareira & Hidro"]} 
            image="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
        </div>
      </section>

      {/* SECTION: GASTRONOMIA */}
      <section className="bg-brand-green text-white py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <img src="https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-[600px] object-cover rounded-sm" />
             <div className="absolute -bottom-10 -right-10 bg-brand-gold p-10 hidden md:block">
                <Utensils size={60} className="text-white" />
             </div>
          </div>
          <div>
            <h3 className="text-brand-gold font-serif italic text-3xl mb-6">Gastronomia</h3>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 uppercase leading-tight">O resgate do sabor mineiro</h2>
            <div className="space-y-8 text-neutral-300 font-light leading-relaxed">
              <p>O dia começa com um café da manhã especial, preparado com receitas caseiras que resgatam a tradição mineira.</p>
              <div className="flex gap-6 items-start">
                 <Flame className="text-brand-gold shrink-0 mt-1" />
                 <p>No fogão a lenha, surgem as especialidades da casa: pratos típicos feitos com cuidado, que equilibram a cozinha regional com influências internacionais.</p>
              </div>
              <p className="text-brand-gold font-medium italic text-xl">Valorizando o sabor e o conforto à mesa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: CASAMENTOS & EVENTOS */}
      <section className="py-24 md:py-32 px-6 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto text-center">
          <h3 className="text-brand-gold font-serif italic text-3xl mb-6">Casamentos & Eventos</h3>
          <h2 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-12 uppercase tracking-wide">Cenários de fé e celebração</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 text-left items-stretch">
             <div className="bg-white p-12 border border-neutral-200">
                <div className="text-brand-gold mb-8"><Heart size={48} /></div>
                <h4 className="text-3xl font-serif text-neutral-800 mb-6">A Capela Nossa Senhora da Boa Esperança</h4>
                <p className="text-neutral-500 font-light leading-relaxed mb-8">
                   Inspirada no barroco mineiro, com fachada em pedra-sabão e altar exclusivo com entalhes dourados. O cenário perfeito para casamentos, bodas e batizados integrados à paisagem natural.
                </p>
                <button className="text-brand-gold font-bold uppercase text-xs tracking-widest flex items-center group">
                   Solicitar informações <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </button>
             </div>
             <div className="bg-brand-green p-12 text-white">
                <div className="text-brand-gold mb-8"><Home size={48} /></div>
                <h4 className="text-3xl font-serif mb-6 text-brand-gold">Encontros Especiais</h4>
                <p className="text-white/70 font-light leading-relaxed mb-8">
                   Ambientes para eventos sociais e corporativos: aniversários, confraternizações e reuniões familiares em locais que combinam estrutura, conforto e o toque rústico da natureza.
                </p>
                <button className="text-brand-gold font-bold uppercase text-xs tracking-widest flex items-center group">
                   Solicitar informações <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <Gallery />

      {/* LOCALIZAÇÃO & CONTATOS */}
      <section className="bg-neutral-900 text-white py-24 md:py-32 px-6">
         <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-20">
            <div>
               <h3 className="text-brand-gold font-serif italic text-3xl mb-12">Localização & Contatos</h3>
               <div className="space-y-10">
                  <div className="flex gap-6 items-start">
                     <MapPin className="text-brand-gold shrink-0 mt-1" />
                     <div>
                        <span className="block text-sm uppercase tracking-widest font-bold mb-2">Endereço</span>
                        <p className="text-neutral-400 font-light">Rodovia MG-A km 4,5, LMG-818 - zona Rural,<br/>Florestal - MG, 35690-000</p>
                     </div>
                  </div>
                  <div className="flex gap-6 items-start">
                     <Coffee className="text-brand-gold shrink-0 mt-1" />
                     <div>
                        <span className="block text-sm uppercase tracking-widest font-bold mb-2">Reservas</span>
                        <p className="text-neutral-400 font-light">+55 (31) 99000-6467</p>
                        <p className="text-neutral-400 font-light">reservasfbe@gmail.com</p>
                     </div>
                  </div>
               </div>
               <div className="mt-16">
                  <button className="bg-brand-gold text-white px-12 py-5 uppercase text-xs font-bold tracking-[0.2em] rounded-sm hover:bg-[#a68648] transition-all">
                     Como Chegar
                  </button>
               </div>
            </div>
            <div className="h-[400px] bg-neutral-800 rounded-sm grayscale">
               {/* Placeholder for Map */}
               <div className="w-full h-full flex items-center justify-center border border-white/10 text-neutral-500 font-light uppercase tracking-widest text-xs">
                  Mapa Interativo (API Google Maps)
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};