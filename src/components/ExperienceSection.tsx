// src/components/ExperienceSection.tsx
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface RouteStop {
  id: string;
  year: string;
  title: string;
  company: string;
  companyLogo: string;
  companyInitials: string;
  client?: string;
  clientLogo?: string;
  clientInitials?: string;
  description: string;
}

const journey: RouteStop[] = [
  {
    id: '01',
    year: 'OCT 2025 - PRESENT',
    title: 'TEST AUTOMATION ENGINEER',
    company: 'PLANIT',
    companyLogo: '/logos/planit.png',
    companyInitials: 'P',
    client: '7-ELEVEN',
    clientLogo: '/logos/7eleven.svg',
    clientInitials: '7E',
    description: 'Dedicated consultant for 7-Eleven retail supply chain management (MDMS) and 7-Now digital ordering. Leading AI testing, API verification, and Playwright UI automation.',
  },
  {
    id: '02',
    year: 'FEB 2024 - AUG 2025',
    title: 'QA AUTOMATION ENGINEER',
    company: 'INVENTECH INFO SOLUTIONS',
    companyLogo: '/logos/inventech.png',
    companyInitials: 'IIS',
    client: 'BARCLAYS BANK',
    clientLogo: '/logos/barclays.webp',
    clientInitials: 'BB',
    description: 'Provided specialized QA consulting & test execution for Barclays mortgage domain. Wrote SBE features in Playwright & Cucumber BDD, and performed WCAG accessibility audits with NVDA.',
  },
  {
    id: '03',
    year: 'MAY 2023 - NOV 2023',
    title: 'QA ASSOCIATE (ON-SHORE DUBAI)',
    company: 'SYNECHRON',
    companyLogo: '/logos/synechron.png',
    companyInitials: 'S',
    client: 'EMIRATES NBD',
    clientLogo: '/logos/enbd.png',
    clientInitials: 'ENBD',
    description: 'Executed end-to-end QA testing for corporate banking CRM across frontline and back-office service requests, Oracle SQL, Siebel CRM, and Finacle platforms.',
  },
  {
    id: '04',
    year: 'APR 2022 - APR 2023',
    title: 'QA ASSOCIATE',
    company: 'SYNECHRON',
    companyLogo: '/logos/synechron.png',
    companyInitials: 'S',
    client: 'MORGAN STANLEY',
    clientLogo: '/logos/morganstanley.png',
    clientInitials: 'MS',
    description: 'Automated wealth management & alternative investment platform approval flows using Java 8, Selenium, FAST Framework, and MS SQL Server database scripting.',
  },
  {
    id: '05',
    year: 'SEP 2019 - SEP 2020',
    title: 'QA ENGINEER',
    company: 'QUEST GLOBAL',
    companyLogo: '/logos/questglobal.jpg',
    companyInitials: 'QG',
    client: 'VOXY',
    clientLogo: '/logos/voxy.jpg',
    clientInitials: 'V',
    description: 'Conducted functional, system, and regression test case design, defect lifecycle management, traceability matrix updates, and team knowledge sharing.',
  },
  {
    id: '06',
    year: '2012 - 2016',
    title: 'B.TECH IN MECHANICAL ENGINEERING',
    company: 'SANTIRAM ENGINEERING COLLEGE',
    companyLogo: '/logos/srec.jpg',
    companyInitials: 'SEC',
    description: 'Graduated with a Bachelor of Technology degree, laying a strong analytical, problem-solving, and engineering foundation.',
  },
];

/* Uniform logo badge with styled-initial fallback */
const LogoBadge: React.FC<{
  src: string;
  initials: string;
  alt: string;
  accentColor?: string;
}> = ({ src, initials, alt, accentColor = '#D4AF37' }) => {
  const [failed, setFailed] = useState(!src);

  return (
    <div
      className="relative flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
      style={{
        width: '38px',
        height: '38px',
        borderRadius: '8px',
        background: failed
          ? `linear-gradient(135deg, ${accentColor}22, ${accentColor}08)`
          : '#ffffff',
        border: `1px solid ${failed ? accentColor + '40' : 'rgba(255,255,255,0.15)'}`,
        boxShadow: `0 2px 8px rgba(0,0,0,0.25)`,
        overflow: 'hidden',
        padding: failed ? '0' : '3px',
      }}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: '3px',
          }}
          onError={() => setFailed(true)}
          loading="lazy"
        />
      ) : (
        <span
          className="text-[8px] font-bold tracking-wider select-none"
          style={{
            color: accentColor,
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          {initials}
        </span>
      )}
    </div>
  );
};

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-4 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#D4AF37]/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            04 / EXPERIENCE
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              EXPERIENCE &amp;
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              MILESTONES.
            </span>
          </h2>
        </motion.div>

        {/* Minimalist Route Map */}
        <div className="relative w-full">
          
          {/* Background Track */}
          <div className="absolute left-[19px] md:left-[140px] top-4 bottom-8 w-[1px] bg-[#8C6D4F]/20" />
          
          {/* Animated Gold Track */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-[140px] top-4 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#C99E5D] to-[#8C6D4F]/10 shadow-[0_0_10px_#D4AF37] origin-top"
          />

          <div className="space-y-12">
            {journey.map((stop, idx) => (
              <motion.div
                key={stop.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="relative flex flex-col md:flex-row items-start group"
              >
                {/* Desktop Year (Left side of track) */}
                <div className="hidden md:block w-[140px] shrink-0 pr-8 pt-0.5 text-right">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#8C6D4F] group-hover:text-[#D4AF37] transition-colors">
                    {stop.year}
                  </span>
                </div>

                {/* Route Node */}
                <div className="absolute left-[19px] md:left-[140px] top-1.5 -translate-x-1/2 flex items-center justify-center">
                  <div className="absolute w-6 h-6 rounded-full border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/40 group-hover:scale-150 transition-all duration-700 ease-out" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#120F0C] border border-[#8C6D4F] group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_12px_#D4AF37] transition-colors duration-300" />
                </div>

                {/* Content (Right side of track) */}
                <div className="ml-14 md:ml-12 pl-2">
                  {/* Mobile Year */}
                  <div className="md:hidden mb-1.5">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37]">
                      {stop.year}
                    </span>
                  </div>

                  <h3
                    className="text-3xl sm:text-4xl tracking-wide text-white group-hover:text-[#F7E7C4] transition-colors mb-1.5 leading-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {stop.title}
                  </h3>

                  {/* Company & Client Logos Row */}
                  <div className="flex flex-wrap items-center gap-3 mb-2.5">
                    {/* Company Badge */}
                    <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] backdrop-blur-sm">
                      <LogoBadge
                        src={stop.companyLogo}
                        initials={stop.companyInitials}
                        alt={stop.company}
                        accentColor="#D4AF37"
                      />
                      <span
                        className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#C9B99A]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {stop.company}
                      </span>
                    </div>

                    {/* Client Badge */}
                    {stop.client && stop.clientInitials && (
                      <>
                        <span className="text-[9px] text-[#8C6D4F] tracking-[0.2em] uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          ›
                        </span>
                        <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-[#D4AF37]/[0.06] border border-[#D4AF37]/[0.12] backdrop-blur-sm">
                          <LogoBadge
                            src={stop.clientLogo || ''}
                            initials={stop.clientInitials}
                            alt={stop.client}
                            accentColor="#C99E5D"
                          />
                          <span
                            className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#D4AF37]"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {stop.client}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                  
                  <p 
                    className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-[1.7] max-w-lg group-hover:text-[#D5CBC0] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stop.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;