import { motion } from 'framer-motion';
import { ChevronDown, Music, Video, Zap, Users, CheckCircle, ChevronRight, Play } from 'lucide-react';
import { useState } from 'react';
import WhatsAppButton from '@/components/WhatsAppButton';

/**
 * Design Philosophy: Dark Luxury Cinematográfico
 * - Paleta: Preto profundo (#0F0F0F) com roxo (#A855F7) e ciano (#06B6D4)
 * - Layout: Assimétrico com cortes diagonais
 * - Animações: Cinematográficas e fluidas
 * - Tipografia: Bebas Neue (display) + Poppins (body)
 */

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const whatsappNumber = '5511945905422';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663208789310/fTKpcu39zsGrLMFchKeAH2/hero-background-CMvDuZswMcTkPhqgHtHs4R.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        {/* Diagonal divider */}
        <div className="absolute inset-0 z-0 opacity-20">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 800">
            <line x1="0" y1="0" x2="1200" y2="800" stroke="url(#gradientLine)" strokeWidth="2" />
            <defs>
              <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 flex items-center min-h-screen">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className="mb-6 inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-sm font-mono text-[#06B6D4] tracking-widest">PRODUÇÃO MUSICAL PREMIUM</span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-7xl font-display font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Seu som merece uma <span className="bg-gradient-to-r from-[#A855F7] to-[#06B6D4] bg-clip-text text-transparent">identidade única</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Produção musical, beats exclusivos e videoclipes criados estrategicamente para artistas que querem se destacar.
            </motion.p>

            <motion.div
              className="mb-8 p-4 border-l-4 border-[#A855F7] bg-[#1A1A2E]/50 backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="text-sm text-[#06B6D4] font-mono">✦ Vagas limitadas para projetos personalizados</p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-[#A855F7] to-[#06B6D4] text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-[#A855F7]/50 transition-all duration-300 transform hover:scale-105 text-center"
              >
                QUERO PRODUZIR MEU SOM
              </a>
              <button className="px-8 py-4 border-2 border-[#06B6D4] text-[#06B6D4] font-bold rounded-lg hover:bg-[#06B6D4]/10 transition-all duration-300">
                CONHECER MAIS
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-[#A855F7]" />
        </motion.div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-[#1A1A2E] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#A855F7]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: '+50', label: 'Projetos Produzidos' },
              { number: '100%', label: 'Exclusivo' },
              { number: '24/7', label: 'Atendimento Personalizado' },
              { number: 'PREMIUM', label: 'Direção Criativa' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                variants={itemVariants}
              >
                <div className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-[#A855F7] to-[#06B6D4] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: 'MC Silva',
                role: 'Artista Independente',
                text: 'A Anzol transformou minha visão em realidade. Beats exclusivos e videoclipe cinematográfico que elevou minha marca.',
              },
              {
                name: 'DJ Lucas',
                role: 'Produtor Musical',
                text: 'Profissionalismo, criatividade e exclusividade. Exatamente o que eu procurava para meu projeto.',
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="p-8 bg-[#0F0F0F] border border-[#2D2D3D] rounded-lg hover:border-[#A855F7]/50 transition-colors"
                variants={itemVariants}
              >
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-[#06B6D4]">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#A855F7]/5 rounded-full blur-3xl translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Por que escolher a <span className="text-[#A855F7]">Anzol</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Cada detalhe é pensado para transformar sua visão artística em realidade
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Music,
                title: 'Identidade Artística Estratégica',
                description: 'Cada projeto é construído baseado na personalidade única do artista.',
              },
              {
                icon: Zap,
                title: 'Beats Exclusivos',
                description: 'Nada de beats genéricos. Tudo criado do zero para sua visão.',
              },
              {
                icon: Video,
                title: 'Produção Audiovisual',
                description: 'Videoclipes cinematográficos e profissionais que impressionam.',
              },
              {
                icon: Users,
                title: 'Processo Colaborativo',
                description: 'Você participa da construção criativa do início ao fim.',
              },
            ].map((diferencial, idx) => {
              const Icon = diferencial.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-8 bg-[#1A1A2E] border border-[#2D2D3D] rounded-lg hover:border-[#06B6D4]/50 transition-all duration-300 group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-4 inline-block p-3 bg-gradient-to-r from-[#A855F7]/20 to-[#06B6D4]/20 rounded-lg group-hover:from-[#A855F7]/40 group-hover:to-[#06B6D4]/40 transition-all">
                    <Icon className="w-6 h-6 text-[#A855F7]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{diferencial.title}</h3>
                  <p className="text-gray-400">{diferencial.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-20 bg-[#1A1A2E] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Nossos Serviços
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Produção Musical',
                items: ['Gravação', 'Mixagem', 'Masterização', 'Direção Musical'],
                icon: Music,
              },
              {
                title: 'Beats Exclusivos',
                items: ['Trap', 'Drill', 'Plug', 'R&B', 'Funk', 'Experimental'],
                icon: Zap,
              },
              {
                title: 'Videoclipes',
                items: ['Roteiro', 'Direção Criativa', 'Filmagem', 'Edição Cinematográfica', 'Color Grading'],
                icon: Video,
              },
            ].map((servico, idx) => {
              const Icon = servico.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-8 bg-[#0F0F0F] border border-[#2D2D3D] rounded-lg hover:border-[#A855F7]/50 transition-all duration-300 group"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-4 inline-block p-3 bg-gradient-to-r from-[#A855F7]/20 to-[#06B6D4]/20 rounded-lg group-hover:from-[#A855F7]/40 group-hover:to-[#06B6D4]/40 transition-all">
                    <Icon className="w-6 h-6 text-[#06B6D4]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6">{servico.title}</h3>
                  <ul className="space-y-3">
                    {servico.items.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                        <CheckCircle className="w-4 h-4 mr-3 text-[#06B6D4]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Portfólio Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A855F7]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Portfólio
            </h2>
            <p className="text-gray-400 text-lg">Conheça alguns dos nossos projetos</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663208789310/fTKpcu39zsGrLMFchKeAH2/beats-showcase-dSBhLZ2Q9Q8ZcacNopm2PT.webp',
                title: 'Beats Exclusivos',
                description: 'Produção de beats originais para diversos gêneros',
              },
              {
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663208789310/fTKpcu39zsGrLMFchKeAH2/videoclip-showcase-in4ueungDmexFrEDTYKfHV.webp',
                title: 'Videoclipes Cinematográficos',
                description: 'Produção audiovisual de alta qualidade',
              },
            ].map((projeto, idx) => (
              <motion.div
                key={idx}
                className="group relative overflow-hidden rounded-lg h-80 cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={projeto.image}
                  alt={projeto.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold mb-2">{projeto.title}</h3>
                  <p className="text-gray-300 mb-4">{projeto.description}</p>
                  <div className="flex items-center text-[#06B6D4] font-bold">
                    <Play className="w-4 h-4 mr-2" />
                    Ver Projeto
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Para Quem É Section */}
      <section className="py-20 bg-[#1A1A2E] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#A855F7]/10 rounded-full blur-3xl -translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Para Quem É
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A Anzol Company é para artistas que buscam exclusividade e qualidade premium
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              'Artistas Independentes',
              'Artistas Autorais',
              'Músicos que Querem Exclusividade',
              'Artistas que Querem Identidade Própria',
              'Artistas Cansados de Soar Genéricos',
              'Criadores de Conteúdo Musical',
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center p-6 bg-[#0F0F0F] border border-[#2D2D3D] rounded-lg hover:border-[#06B6D4]/50 transition-colors"
                variants={itemVariants}
              >
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#A855F7] to-[#06B6D4] mr-4" />
                <span className="text-lg">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Processo Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Nosso Processo
            </h2>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: '01', title: 'Conversa Criativa', description: 'Entendemos sua visão, estilo e objetivos' },
              { number: '02', title: 'Desenvolvimento da Identidade', description: 'Criamos a identidade sonora e visual única' },
              { number: '03', title: 'Produção Sonora/Visual', description: 'Executamos com excelência técnica e criativa' },
              { number: '04', title: 'Finalização Profissional', description: 'Entrega do projeto pronto para o mundo' },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                className="flex gap-8 mb-12 last:mb-0"
                variants={itemVariants}
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#A855F7] to-[#06B6D4] flex items-center justify-center font-display font-bold text-xl mb-4">
                    {step.number}
                  </div>
                  {idx < 3 && (
                    <div className="w-1 h-24 bg-gradient-to-b from-[#A855F7] to-[#06B6D4]" />
                  )}
                </div>
                <div className="pb-12">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#1A1A2E] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A855F7]/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Dúvidas Frequentes
            </h2>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                question: 'O beat é exclusivo?',
                answer: 'Sim! Todos os nossos beats são 100% exclusivos. Você será o único artista a usar aquele beat.',
              },
              {
                question: 'Vocês fazem parcelamento?',
                answer: 'Sim, oferecemos opções de parcelamento flexíveis. Converse conosco no WhatsApp para conhecer as opções.',
              },
              {
                question: 'Vocês atendem online?',
                answer: 'Sim! Atendemos artistas de qualquer lugar do Brasil e do mundo. Tudo é feito de forma remota e profissional.',
              },
              {
                question: 'O clipe já inclui edição?',
                answer: 'Sim! Incluímos edição cinematográfica, color grading e efeitos especiais profissionais.',
              },
              {
                question: 'Quanto tempo demora?',
                answer: 'Depende do projeto. Um beat pode sair em 3-5 dias. Um videoclipe completo leva 15-30 dias.',
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                className="border border-[#2D2D3D] rounded-lg overflow-hidden hover:border-[#A855F7]/50 transition-colors"
                variants={itemVariants}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between bg-[#0F0F0F] hover:bg-[#1A1A2E] transition-colors"
                >
                  <span className="font-bold text-lg text-left">{faq.question}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-[#A855F7] transition-transform ${expandedFaq === idx ? 'rotate-90' : ''}`}
                  />
                </button>
                {expandedFaq === idx && (
                  <motion.div
                    className="p-6 bg-[#1A1A2E] border-t border-[#2D2D3D] text-gray-300"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative min-h-96 flex items-center justify-center overflow-hidden py-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663208789310/fTKpcu39zsGrLMFchKeAH2/cta-final-background-KQp6etxyUtPvWecv4g2ZFL.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Seu próximo lançamento começa aqui
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Vamos construir uma identidade sonora e visual impossível de ignorar.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-6 bg-gradient-to-r from-[#A855F7] to-[#06B6D4] text-white font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-[#A855F7]/50 transition-all duration-300 transform hover:scale-105"
            >
              FALAR NO WHATSAPP
            </a>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
