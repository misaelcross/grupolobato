import React from 'react';
import { VenueHero } from './VenueHero';
import { Maximize, Car, MapPin, Check, Users } from 'lucide-react';
import { Gallery } from './Gallery';

interface Venue8076Props {
  onNavigate?: (page: string) => void;
}

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="flex flex-col items-center text-center p-6 border border-neutral-100 bg-neutral-50 rounded-sm hover:shadow-lg transition-shadow duration-300">
    <div className="w-[60px] h-[60px] bg-[#f5f0eb] flex items-center justify-center shrink-0 rounded-full mb-6 text-brand-gold">
      {icon}
    </div>
    <h4 className="text-neutral-900 uppercase tracking-widest font-serif text-lg mb-3">
      {title}
    </h4>
    <p className="text-neutral-500 font-light text-sm leading-6">
      {text}
    </p>
  </div>
);

const SpecItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div className="flex flex-col border-l-2 border-brand-gold pl-4">
        <span className="text-xs uppercase tracking-widest text-neutral-400 mb-1">{label}</span>
        <span className="text-lg md:text-xl font-serif text-neutral-800">{value}</span>
    </div>
);

export const Venue8076: React.FC<Venue8076Props> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen">
      <VenueHero onNavigate={onNavigate} />
      
      {/* SECTION 1: SOBRE O CONTEMPORÂNEO */}
      <section className="w-full max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-brand-gold font-serif italic text-2xl md:text-3xl mb-6">
            Sobre o Contemporâneo
          </h2>
          <p className="text-neutral-500 text-sm md:text-[16px] leading-8 font-light mb-8">
            O Contemporâneo Hall nasce com um propósito claro: ser o cenário ideal para eventos que exigem estrutura moderna, versátil e impactante.
          </p>
          <p className="text-neutral-500 text-sm md:text-[16px] leading-8 font-light">
            Localizado em Nova Lima, o espaço foi concebido com arquitetura contemporânea, preparado para receber convenções, congressos, lançamentos de marca, encontros corporativos e eventos sociais, sempre com alto padrão, fluidez e eficiência operacional.
          </p>
        </div>

        {/* ICONS GRID (Highlights) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <FeatureItem 
                icon={<Maximize strokeWidth={1} className="w-8 h-8" />} 
                title="Flexibilidade" 
                text="Espaço versátil, adaptável ao porte, ao estilo e às necessidades de cada evento."
            />
            <FeatureItem 
                icon={<Car strokeWidth={1} className="w-8 h-8" />} 
                title="Mobilidade" 
                text="Estacionamento próprio, com capacidade para até 400 veículos."
            />
            <FeatureItem 
                icon={<MapPin strokeWidth={1} className="w-8 h-8" />} 
                title="Localização" 
                text="Localização estratégica, com acesso facilitado e longe das aglomerações."
            />
        </div>
      </section>

      {/* SECTION 2: ESTRUTURA */}
      <section className="w-full bg-[#faf9f6] py-24 md:py-32 px-6">
         <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 mb-8 uppercase tracking-wide leading-tight">
                        uma estrutura que se adapta ao seu evento
                    </h2>
                    <div className="space-y-6 text-neutral-500 text-sm md:text-[15px] leading-8 font-light">
                        <p>
                            Cada detalhe do Contemporâneo Hall reflete uma visão moderna de eventos. Ambientes amplos e versáteis permitem diferentes formatos e montagens, atendendo com conforto, estética e fluidez tanto eventos empresariais quanto celebrações sociais.
                        </p>
                        <p>
                            O espaço conta com dois pavimentos independentes, oferecendo flexibilidade para eventos simultâneos, setorização estratégica ou experiências integradas.
                        </p>
                    </div>
                </div>

                <div className="flex-1 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 mb-12">
                        <SpecItem label="Pavimento Superior" value="1.500 m²" />
                        <SpecItem label="Pavimento Inferior" value="1.200 m²" />
                        <SpecItem label="Capacidade Total" value="Até 3.000 pessoas" />
                        <SpecItem label="Eventos" value="Grandes e Intimistas" />
                    </div>

                    <div className="bg-white p-8 shadow-sm rounded-sm border border-neutral-100">
                        <h4 className="text-brand-gold font-serif text-xl mb-6 italic">Diferenciais Estruturais</h4>
                        <ul className="space-y-4">
                            {[
                                "Dois pavimentos independentes",
                                "Pé-direito de 5,2 m no pavimento Ouro Preto",
                                "Pé-direito de 4,2 m no pavimento Tiradentes",
                                "Banheiros amplos, com diversas cabines",
                                "3 camarins",
                                "Sala de treinamento com 150 m²",
                                "Estacionamento para até 400 veículos",
                                "2 cozinhas amplas",
                                "2 chapelarias"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-neutral-600 font-light text-sm">
                                    <Check className="w-4 h-4 text-brand-gold mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* SECTION 3: GALERIA (Using the fixed Component) */}
      <Gallery />

      {/* SECTION 4: LOCALIZAÇÃO & CONTATO */}
      <section className="w-full bg-[#071c16] text-white py-24 md:py-32 px-6">
          <div className="max-w-[1200px] mx-auto">
             <div className="flex flex-col lg:flex-row gap-16">
                 <div className="flex-1">
                     <h3 className="text-brand-gold font-serif text-3xl mb-8 uppercase tracking-wide">
                        Localização & Contato
                     </h3>
                     
                     <div className="flex flex-col space-y-8">
                         <div className="flex items-start gap-4">
                             <MapPin className="w-6 h-6 text-brand-gold mt-1" />
                             <div className="flex flex-col">
                                 <span className="text-sm font-bold uppercase tracking-wider mb-2">Endereço</span>
                                 <p className="text-neutral-300 font-light leading-relaxed">
                                     Av. Toronto, 200<br/>
                                     Jardim Canadá, Nova Lima - MG<br/>
                                     34007-658
                                 </p>
                             </div>
                         </div>

                         <div className="flex items-start gap-4">
                             <Users className="w-6 h-6 text-brand-gold mt-1" />
                             <div className="flex flex-col">
                                 <span className="text-sm font-bold uppercase tracking-wider mb-2">Redes Sociais</span>
                                 <a href="#" className="text-neutral-300 font-light hover:text-brand-gold transition-colors">
                                     @contemporaneohall
                                 </a>
                             </div>
                         </div>

                         <div className="pt-8">
                            <button className="border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white bg-transparent text-sm font-bold px-10 py-4 rounded-sm uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-lg w-full md:w-auto">
                                conhecer o espaço
                            </button>
                         </div>
                     </div>
                 </div>

                 <div className="flex-1 bg-white/5 p-8 md:p-12 rounded-sm border border-white/10">
                     <h4 className="text-white font-serif text-xl mb-6">Fale Conosco</h4>
                     <form className="flex flex-col gap-4">
                        <input type="text" placeholder="Nome Completo" className="bg-transparent border-b border-white/30 text-white placeholder-white/50 py-3 focus:outline-none focus:border-brand-gold transition-colors" />
                        <input type="email" placeholder="E-mail" className="bg-transparent border-b border-white/30 text-white placeholder-white/50 py-3 focus:outline-none focus:border-brand-gold transition-colors" />
                        <input type="tel" placeholder="Telefone" className="bg-transparent border-b border-white/30 text-white placeholder-white/50 py-3 focus:outline-none focus:border-brand-gold transition-colors" />
                        <textarea rows={3} placeholder="Mensagem" className="bg-transparent border-b border-white/30 text-white placeholder-white/50 py-3 focus:outline-none focus:border-brand-gold transition-colors resize-none"></textarea>
                        <button type="button" className="bg-brand-gold text-white font-bold text-xs uppercase tracking-widest py-4 px-8 mt-4 hover:bg-[#a68648] transition-colors rounded-sm">
                            Enviar Mensagem
                        </button>
                     </form>
                 </div>
             </div>
          </div>
      </section>
    </div>
  );
};