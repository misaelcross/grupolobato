import React, { useState } from 'react';
import Hero from './components/Hero';
import { Navbar } from './components/Navbar';
import { LogoIcon } from './components/Icons';
import { ChevronLeft, ChevronRight, Instagram, Facebook, Youtube, ArrowUpRight } from 'lucide-react';
import { Venue8076 } from './components/Venue8076';
import { VenueFazenda } from './components/VenueFazenda';
import { VenueVilaCapao } from './components/VenueVilaCapao';
import { VenueRelicario } from './components/VenueRelicario';
import { Gallery } from './components/Gallery';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const Footer = () => (
    <footer className="bg-[#071c16] text-white pt-24 pb-12 w-full border-t border-white/5">
         <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-20">
               
               <div className="flex flex-col items-start pr-0 md:pr-12 mb-16 md:mb-0">
                  <div className="flex items-center space-x-4 mb-8">
                     <LogoIcon className="w-16 h-16 text-brand-gold" />
                     <div className="flex flex-col leading-none">
                        <span className="text-xs tracking-[0.3em] font-light text-white mb-1 ml-[1px]">GRUPO</span>
                        <span className="text-3xl tracking-[0.1em] font-serif text-brand-gold">LOBATO</span>
                     </div>
                  </div>
                  <p className="text-neutral-400 font-light text-sm leading-8 max-w-sm">
                    Transformamos dias importantes em momentos inesquecíveis. O cenário ideal para contar a sua história com excelência, sofisticação e tecnologia de ponta.
                  </p>
               </div>

               <div className="flex flex-col md:border-l md:border-r md:border-white/10 md:px-12 mb-12 md:mb-0">
                  <h3 className="font-serif text-3xl text-white mb-8">Páginas</h3>
                  <div className="flex flex-col w-full">
                    <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); window.scrollTo(0,0); }} className="py-4 border-b border-white/10 text-neutral-300 hover:text-brand-gold transition-colors font-light text-sm tracking-wide">
                        Home
                    </a>
                    <a href="#" className="py-4 border-b border-white/10 text-neutral-300 hover:text-brand-gold transition-colors font-light text-sm tracking-wide">
                        Grupo Lobato
                    </a>
                    <a href="#" className="py-4 border-b border-white/10 text-neutral-300 hover:text-brand-gold transition-colors font-light text-sm tracking-wide">
                        Espaços
                    </a>
                    <a href="#" className="py-4 border-b border-white/10 text-neutral-300 hover:text-brand-gold transition-colors font-light text-sm tracking-wide">
                        Especialistas
                    </a>
                    <a href="#" className="py-4 border-b border-white/10 text-neutral-300 hover:text-brand-gold transition-colors font-light text-sm tracking-wide">
                        Orçamento
                    </a>
                  </div>
               </div>

               <div className="flex flex-col md:pl-12">
                   <h3 className="font-serif text-3xl text-white mb-8">Social</h3>
                   <div className="flex flex-col w-full">
                    <a href="#" className="py-4 border-b border-white/10 text-neutral-300 hover:text-brand-gold transition-colors font-light text-sm tracking-wide flex items-center justify-between group">
                        Instagram
                        <Instagram className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a href="#" className="py-4 border-b border-white/10 text-neutral-300 hover:text-brand-gold transition-colors font-light text-sm tracking-wide flex items-center justify-between group">
                        Facebook
                        <Facebook className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a href="#" className="py-4 border-b border-white/10 text-neutral-300 hover:text-brand-gold transition-colors font-light text-sm tracking-wide flex items-center justify-between group">
                        Youtube
                        <Youtube className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a href="#" className="py-4 border-b border-white/10 text-neutral-300 hover:text-brand-gold transition-colors font-light text-sm tracking-wide flex items-center justify-between group">
                        LinkedIn
                        <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>
                   </div>
               </div>

            </div>

            <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-xs font-light text-neutral-500">
               <span>&copy; 2024 | Grupo Lobato | Todos os direitos reservados.</span>
               <div className="flex gap-8 mt-6 md:mt-0">
                   <a href="#" className="hover:text-white transition-colors">Termos e Condições</a>
                   <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
               </div>
            </div>
         </div>
      </footer>
  );

  if (currentPage === 'venue-8076') {
    return (
      <div className="bg-white min-h-screen font-sans selection:bg-brand-gold selection:text-white">
        <Venue8076 onNavigate={setCurrentPage} />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'venue-fazenda') {
    return (
      <div className="bg-white min-h-screen font-sans selection:bg-brand-gold selection:text-white">
        <VenueFazenda onNavigate={setCurrentPage} />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'venue-vilacapao') {
    return (
      <div className="bg-white min-h-screen font-sans selection:bg-brand-gold selection:text-white">
        <VenueVilaCapao onNavigate={setCurrentPage} />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'venue-relicario') {
    return (
      <div className="bg-white min-h-screen font-sans selection:bg-brand-gold selection:text-white">
        <VenueRelicario onNavigate={setCurrentPage} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-brand-gold selection:text-white">
      <Hero onNavigate={setCurrentPage} />
      
      <div className="w-full max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        
        <section className="flex flex-col items-center text-center max-w-5xl mx-auto mb-32">
          <h3 className="text-brand-gold font-serif italic text-2xl md:text-3xl mb-4">
            Sobre o Grupo Lobato
          </h3>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-neutral-900 mb-8 uppercase tracking-wide leading-tight">
            transformamos dias importantes em momentos inesquecíveis.
          </h2>
          <p className="text-neutral-500 text-sm md:text-[15px] leading-8 font-light max-w-3xl mx-auto mb-10">
            Inspirar celebrações, criar experiências únicas e fazer parte de histórias de sucesso, 
            conquistas e amor – é isso que nos move. Nosso propósito é tornar realidade sonhos e 
            comemorar marcos especiais, seja na vida pessoal ou na trajetória de uma empresa.
          </p>
          <button className="border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white bg-transparent text-xs font-bold px-10 py-3 rounded-sm uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-lg transform hover:-translate-y-0.5">
            agendar visita
          </button>
        </section>

        <section className="flex flex-col items-center w-full mb-32">
          <h3 className="text-brand-gold font-serif italic text-2xl md:text-3xl mb-4">
            Nossos Espaços
          </h3>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-neutral-900 mb-16 text-center uppercase tracking-wide leading-tight">
            encontre o lugar ideal para contar sua história.
          </h2>

          <div className="relative w-full group">
            <div className="w-full h-[400px] md:h-[600px] overflow-hidden rounded-sm relative z-10">
              <img 
                src="https://images.pexels.com/photos/169192/pexels-photo-169192.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Chez Lobato Lake Paradise" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <button className="hidden md:flex absolute -left-12 top-[300px] -translate-y-1/2 z-20 text-brand-gold hover:text-[#a68648] transition-colors hover:scale-110">
              <ChevronLeft className="w-10 h-10" strokeWidth={1.5} />
            </button>
            <button className="hidden md:flex absolute -right-12 top-[300px] -translate-y-1/2 z-20 text-brand-gold hover:text-[#a68648] transition-colors hover:scale-110">
              <ChevronRight className="w-10 h-10" strokeWidth={1.5} />
            </button>
            
            <div className="bg-[#faf9f6] w-full p-8 md:p-12 mt-0 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start gap-8 lg:gap-20">
                <div className="flex flex-col items-start space-y-8 flex-1">
                  <h4 className="text-2xl text-neutral-800 font-serif uppercase">
                    chez lobato lake paradise
                  </h4>
                  <button className="border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white bg-transparent text-xs font-bold px-10 py-3 rounded-sm uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-md">
                    saiba mais
                  </button>
                </div>
                <div className="flex-1">
                  <p className="text-neutral-500 text-sm leading-8 font-light">
                    Com um espaço dedicado dentro do Resort, nosso Chez Lobato Lake Paradise garante uma experiência incomparável em um amplo salão cercado por vidros, garantindo luz natural e integração à vista do lago.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center w-full mb-32">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h3 className="text-brand-gold font-serif italic text-2xl md:text-3xl mb-4">
              Eventos Sociais
            </h3>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-neutral-900 mb-8 uppercase tracking-wide leading-tight">
              um dia marcante se transformando em um momento único
            </h2>
            <p className="text-neutral-500 text-sm md:text-[15px] leading-8 font-light max-w-3xl mx-auto mb-10">
              Alguns momentos são feitos para serem celebrados ao máximo. Especialista em
              realizar sonhos, o Grupo Lobato prepara cada detalhe com excelência para transformar seu
              dia em uma recordação inesquecível para você e todos os seus convidados.
            </p>
            <button className="border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white bg-transparent text-xs font-bold px-10 py-3 rounded-sm uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              agendar visita
            </button>
          </div>

          <div className="w-full relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-start text-left group cursor-pointer">
                <div className="w-full h-[260px] overflow-hidden rounded-sm mb-6 relative">
                  <img src="https://images.pexels.com/photos/16395562/pexels-photo-16395562.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Aniversários" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <h4 className="text-xl text-neutral-900 font-serif uppercase mb-4">aniversários</h4>
                <p className="text-neutral-500 text-sm leading-7 font-light mb-8 flex-1">Transformar um dia especial em uma celebração inesquecível é o que nos move. Cada ciclo deve ser celebrado com as pessoas mais importantes.</p>
                <button className="border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white bg-transparent text-xs font-bold px-8 py-3 rounded-sm uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-md">Saiba Mais</button>
              </div>

              <div className="flex flex-col items-start text-left group cursor-pointer">
                <div className="w-full h-[260px] overflow-hidden rounded-sm mb-6 relative">
                  <img src="https://images.pexels.com/photos/17693639/pexels-photo-17693639.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Debutantes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <h4 className="text-xl text-neutral-900 font-serif uppercase mb-4">debutantes</h4>
                <p className="text-neutral-500 text-sm leading-7 font-light mb-8 flex-1">A festa de 15 anos é o momento de celebrar a nova fase da vida. Um dia dedicado à debutante, realizada com excelência.</p>
                <button className="border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white bg-transparent text-xs font-bold px-8 py-3 rounded-sm uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-md">Saiba Mais</button>
              </div>

              <div className="flex flex-col items-start text-left group cursor-pointer">
                <div className="w-full h-[260px] overflow-hidden rounded-sm mb-6 relative">
                  <img src="https://images.pexels.com/photos/3352398/pexels-photo-3352398.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Bodas" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <h4 className="text-xl text-neutral-900 font-serif uppercase mb-4">bodas</h4>
                <p className="text-neutral-500 text-sm leading-7 font-light mb-8 flex-1">A renovação do amor merece ser celebrada com carinho e atenção. Histórias de amor que se fortalecem com o tempo.</p>
                <button className="border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white bg-transparent text-xs font-bold px-8 py-3 rounded-sm uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-md">Saiba Mais</button>
              </div>
            </div>
          </div>
        </section>

        <Gallery />

        <section className="w-full mb-32">
          <div className="bg-[#0f3b2e] w-full py-20 px-6 md:px-20 text-center flex flex-col items-center shadow-sm rounded-sm">
            <h3 className="text-white text-xl md:text-2xl font-serif uppercase mb-6 tracking-wide">receba nossas novidades</h3>
            <p className="text-white/90 text-sm md:text-[15px] font-light mb-10 max-w-2xl leading-relaxed">Cadastre seu e-mail para garantir estar sempre por dentro das novidades e tendências.</p>
            <div className="flex flex-col md:flex-row gap-0 w-full max-w-2xl">
              <input type="email" className="flex-1 bg-transparent border border-white/50 text-white placeholder-white/50 px-4 py-3 focus:outline-none focus:border-white transition-colors rounded-none" />
              <button className="border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white bg-transparent text-sm font-medium px-10 py-3 uppercase tracking-wider transition-colors rounded-none mt-4 md:mt-0">cadastrar</button>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}

export default App;