import React, { useState } from 'react';
import { Search, ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import TextReveal from '../components/animation/TextReveal';
import RevealOnScroll from '../components/animation/RevealOnScroll';
import { faqData, faqCategories } from '../data/faq';
import { siteConfig } from '../data/siteConfig';

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20 bg-bg-primary overflow-x-hidden">
      <SEO
        title="Frequently Asked Questions (FAQ) — CUTZ THE GYM Pune"
        description="Find answers to common questions about CUTZ THE GYM in Lohegaon: facilities, 10,000 SQFT area, membership options, personal coaching, and group activities."
      />

      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-bg-secondary border-b border-gold/20 overflow-hidden text-center">
        <Container>
          <span className="text-eyebrow text-gold font-bold inline-block mb-3">
            INFORMATION & ASSISTANCE
          </span>
          <h1 className="text-display-xl font-hero uppercase text-white tracking-tight">
            <TextReveal text="FREQUENTLY ASKED QUESTIONS" stagger={0.03} />
          </h1>
          <p className="mt-4 text-body-lg font-editorial italic text-gold max-w-2xl mx-auto">
            "Direct answers regarding our facilities, memberships, coaching, and location."
          </p>
        </Container>
      </section>

      {/* Search & Content */}
      <section className="py-16 sm:py-24">
        <Container className="max-w-4xl">
          {/* Search Box */}
          <div className="relative mb-8">
            <Search className="w-5 h-5 text-gold absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by topic, equipment, coaching, membership..."
              className="w-full pl-12 pr-4 py-4 bg-[#141414] border border-white/15 rounded-xl text-body-sm text-white placeholder-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-heading tracking-wider uppercase transition-all ${
                  selectedCategory === cat
                    ? 'bg-gold-gradient text-black font-bold shadow-gold-glow'
                    : 'bg-[#141414] border border-white/10 text-silver/80 hover:text-white hover:border-gold/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((item) => {
                const isOpen = !!openItems[item.id];
                return (
                  <div
                    key={item.id}
                    className="rounded-2xl bg-bg-card border border-white/10 overflow-hidden transition-colors hover:border-gold/30 shadow-lg"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between text-base sm:text-lg font-heading font-semibold uppercase text-white hover:text-gold transition-colors"
                    >
                      <span className="pr-4">{item.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 text-body-sm text-silver/80 border-t border-white/5 pt-4 leading-relaxed font-sans">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="p-10 rounded-2xl bg-bg-card border border-white/10 text-center space-y-3">
                <HelpCircle className="w-10 h-10 text-gold/40 mx-auto" />
                <p className="text-body-sm text-silver/70">
                  No matching questions found for "{searchTerm}".
                </p>
                <button
                  onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                  className="text-xs font-heading text-gold uppercase hover:underline font-bold"
                >
                  Clear search filters
                </button>
              </div>
            )}
          </div>

          {/* Still Need Answers Box */}
          <div className="mt-16 p-8 rounded-2xl bg-[#111111] border border-gold/30 text-center space-y-4 shadow-2xl">
            <h3 className="text-heading-md font-heading uppercase text-white font-bold">
              STILL HAVE QUESTIONS?
            </h3>
            <p className="text-body-sm text-silver/70 max-w-md mx-auto font-sans">
              Our front desk reception is ready to provide all floor schedules and consultation details.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button to="/contact" variant="primary" size="md">
                CONTACT FRONT DESK
              </Button>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-green-500/40 text-green-400 hover:bg-green-600 hover:text-white text-xs font-heading tracking-widest uppercase font-bold transition-all"
              >
                WHATSAPP DESK
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
