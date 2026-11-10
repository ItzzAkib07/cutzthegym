import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  Target, 
  Compass, 
  Award, 
  Sparkles, 
  Dumbbell, 
  Wind, 
  Heart, 
  Zap, 
  Users, 
  Activity, 
  Check, 
  Flame,
  Music,
  Smile
} from 'lucide-react';
import SEO from '../components/seo/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Reveal from '../components/animation/Reveal';
import TiltCard from '../components/animation/TiltCard';
import { siteConfig } from '../data/siteConfig';

export default function About() {
  return (
    <div className="pt-24 pb-20 bg-bg-primary">
      <SEO
        title="About CUTZ THE GYM — Founded by IFBB Pro Krishna Chauhan"
        description="Discover the complete story, philosophy, and 10,000 SQFT world-class facility of CUTZ THE GYM in Lohegaon, Pune led by IFBB Pro Krishna Chauhan."
      />

      {/* ========================================================================= */}
      {/* 1. CINEMATIC ABOUT HERO                                                   */}
      {/* ========================================================================= */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-bg-secondary border-b border-gold/25">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2000&auto=format&fit=crop"
            alt="CUTZ THE GYM Story & Interior"
            className="w-full h-full object-cover filter brightness-[0.24] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-bg-secondary" />
        </div>

        <Container className="relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-gold/10 border border-gold/30 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-eyebrow text-gold font-bold">
              ESTABLISHED IN LOHEGAON, PUNE
            </span>
          </div>

          <h1 className="text-display-xl text-white leading-tight">
            BUILT DIFFERENT. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-highlight via-gold to-white">
              TRAIN DIFFERENT.
            </span>
          </h1>

          <p className="mt-4 text-body-lg font-editorial italic text-gold max-w-2xl mx-auto">
            "More than a gym. A standard of greatness."
          </p>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2 & 3. INTRODUCTION & OUR BRAND STORY                                     */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-bg-primary">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <SectionHeading
                  align="left"
                  eyebrow="OUR BRAND STORY"
                  title="A SANCTUARY FOR SERIOUS TRANSFORMATION"
                  subtitle="Created to eliminate compromises in physical development."
                />
              </Reveal>

              <Reveal delay={0.15}>
                <p className="text-body-md text-silver/80 leading-relaxed">
                  CUTZ THE GYM was forged from a clear realization: Pune needed a genuine championship-level training arena where bodybuilding biomechanics, sports conditioning, and welcoming community wellness coexist without overcrowding or compromise.
                </p>
              </Reveal>

              <Reveal delay={0.25}>
                <p className="text-body-md text-silver/80 leading-relaxed">
                  Situated strategically in front of Golden Winds Society near D.Y. Patil College in Lohegaon, Pune, our sprawling 10,000 SQFT facility was architected from the floor up to provide athletes, students, and working professionals with industrial scale, pristine airflow, and world-class equipment.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.2}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gold/30 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
                    alt="CUTZ Equipment"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-black/80 backdrop-blur-md border border-gold/30">
                    <span className="text-eyebrow text-gold font-bold">THE ARCHITECTURE</span>
                    <p className="text-body-sm text-white font-semibold mt-0.5">10,000 SQFT of Uninterrupted Training Floor</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4 & 5. FOUNDER & LEADERSHIP: IFBB PRO KRISHNA CHAUHAN                     */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#0a0a0a] border-y border-white/5">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Founder Portrait */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-gold shadow-[0_0_40px_rgba(201,160,74,0.3)]">
                  <img
                    src={siteConfig.founder.image}
                    alt="IFBB Pro Krishna Chauhan"
                    className="w-full h-full object-cover object-top filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-3 py-1 rounded bg-gold-gradient text-black text-eyebrow font-extrabold uppercase">
                      FOUNDER & HEAD COACH
                    </span>
                    <h3 className="text-heading-xl text-white mt-2 leading-none">
                      KRISHNA CHAUHAN
                    </h3>
                    <p className="text-eyebrow text-gold font-bold mt-1">
                      IFBB PRO ATHLETE
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Founder Leadership Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal delay={0.15}>
                <SectionHeading
                  align="left"
                  eyebrow="BRAND LEADERSHIP"
                  title="GUIDED BY AN IFBB PRO CHAMPION"
                  subtitle="Where competitive experience directly shapes your daily training standard."
                />
              </Reveal>

              <Reveal delay={0.25}>
                <blockquote className="border-l-2 border-gold pl-4 text-body-lg text-silver/90 italic font-editorial leading-relaxed">
                  "{siteConfig.founder.quote}"
                </blockquote>
              </Reveal>

              <Reveal delay={0.35}>
                <p className="text-body-md text-silver/80 leading-relaxed">
                  {siteConfig.founder.bio} Under his mentorship, CUTZ THE GYM avoids gimmicks and fleeting workout trends. Every movement pattern, machine adjustment, and dietary blueprint follows time-tested principles of biomechanics, progressive tension, and hormonal recovery.
                </p>
              </Reveal>

              <Reveal delay={0.45}>
                <div className="pt-2">
                  <Button to="/trainers" variant="outline" size="md" icon={ArrowRight}>
                    LEARN MORE ABOUT OUR COACHING ROSTER
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6, 7 & 8. FITNESS PHILOSOPHY, MISSION & VISION                            */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-bg-secondary border-b border-white/5">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="CORE VALUES"
              title="OUR ETHOS, MISSION & VISION"
              subtitle="The foundational principles driving our members to physical excellence."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Philosophy */}
            <Reveal delay={0.1}>
              <TiltCard className="h-full">
                <div className="p-8 rounded-xl bg-bg-card border border-white/10 hover:border-gold/40 transition-all space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                      <Award className="w-6 h-6" />
                    </div>
                    <h3 className="text-heading-lg text-white">OUR PHILOSOPHY</h3>
                    <p className="text-body-sm text-silver/80 leading-relaxed">
                      "Precision Over Egos." We prioritize anatomical movement fidelity and safety over lifting improper loads with poor form. Physical transformation is an exact science that rewards disciplined patience.
                    </p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>

            {/* Mission */}
            <Reveal delay={0.2}>
              <TiltCard className="h-full">
                <div className="p-8 rounded-xl bg-bg-card border border-white/10 hover:border-gold/40 transition-all space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                      <Target className="w-6 h-6" />
                    </div>
                    <h3 className="text-heading-lg text-white">OUR MISSION</h3>
                    <p className="text-body-sm text-silver/80 leading-relaxed">
                      To empower members of all experience levels with structured workout architectures, customized nutritional fueling, and direct championship-grade mentorship in a clean, state-of-the-art facility.
                    </p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>

            {/* Vision */}
            <Reveal delay={0.3}>
              <TiltCard className="h-full">
                <div className="p-8 rounded-xl bg-bg-card border border-white/10 hover:border-gold/40 transition-all space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                      <Compass className="w-6 h-6" />
                    </div>
                    <h3 className="text-heading-lg text-white">OUR VISION</h3>
                    <p className="text-body-sm text-silver/80 leading-relaxed">
                      To stand as Pune’s preeminent bodybuilding and fitness authority, celebrated for cultivating physical fortitude, community camaraderie, and undeniable body transformations.
                    </p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 9, 10 & 11. WHY CHOOSE CUTZ, 10,000 SQFT ARENA & EQUIPMENT                */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-bg-primary">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="FACILITY EXCELLENCE"
              title="WHY ATHLETES CHOOSE CUTZ THE GYM"
              subtitle="10,000 SQFT engineered for uncompromised resistance curves."
              description="From heavy Olympic lifting cages to converging plate-loaded isolation machines, our equipment was chosen to maximize hypertrophy without unnecessary joint wear."
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Dumbbell,
                title: "10,000 SQFT Massive Expanse",
                desc: "Spacious training layout ensuring you never wait for squat cages, benches, or dumbbells during peak training hours."
              },
              {
                icon: Wind,
                title: "100% Full Air Conditioning",
                desc: "Continuous high-capacity climate control providing refreshing oxygenation and temperature stability throughout vigorous workouts."
              },
              {
                icon: Zap,
                title: "Biomechanical Resistance Machines",
                desc: "Plate-loaded machines designed with converging and diverging axes that follow natural human musculoskeletal angles."
              },
              {
                icon: Shield,
                title: "Spotless Sanitization & Showers",
                desc: "Hospital-grade cleaning protocols, sanitized floor wipes, personal lockers, and private fresh hot shower facilities."
              },
              {
                icon: Activity,
                title: "Custom Workout Blueprints",
                desc: "Every member receives structured workout guidance to target muscle growth, strength, or metabolic conditioning."
              },
              {
                icon: Heart,
                title: "Personalized Diet Architectures",
                desc: "Tailored macronutrient plans adapted to Indian culinary staples, vegetarian diets, and active lifestyles."
              }
            ].map((feature, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="p-6 sm:p-7 rounded-xl bg-bg-card border border-white/10 hover:border-gold/40 transition-all space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-heading-md text-white">
                    {feature.title}
                  </h4>
                  <p className="text-body-sm text-silver/80 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 12, 13, 14, 15, 16, 17. SPECIALIZED TRAINING DISCIPLINES                  */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-bg-secondary border-y border-white/5">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="TRAINING METHODOLOGIES"
              title="FOUR SPECIALIZED PHYSIQUE DISCIPLINES"
              subtitle="Structured programs engineered under IFBB Pro competitive standards."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Muscle Building",
                slug: "muscle-building",
                desc: "Hypertrophy periodization, mechanical tension, and isolation mastery to sculpt dense lean muscle.",
                tag: "Bodybuilding"
              },
              {
                title: "Fat Loss & Shred",
                slug: "fat-loss",
                desc: "High-yield metabolic resistance training and calorie management while preserving lean muscle mass.",
                tag: "Conditioning"
              },
              {
                title: "Strength & Power",
                slug: "strength-training",
                desc: "Linear overload across power racks, deadlift platforms, and competition Olympic bars.",
                tag: "Performance"
              },
              {
                title: "Body Recomposition",
                slug: "body-composition",
                desc: "Simultaneous fat reduction and muscular development through synchronized training and nutrition.",
                tag: "Physique Science"
              }
            ].map((disc, idx) => (
              <Reveal key={disc.slug} delay={idx * 0.1}>
                <Link
                  to={`/programs/${disc.slug}`}
                  className="p-6 rounded-xl bg-bg-card border border-white/10 hover:border-gold transition-all block space-y-3 group h-full flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-eyebrow text-gold font-bold">{disc.tag}</span>
                    <h4 className="text-heading-md text-white group-hover:text-gold transition-colors">
                      {disc.title}
                    </h4>
                    <p className="text-body-sm text-silver/70 leading-relaxed">
                      {disc.desc}
                    </p>
                  </div>
                  <div className="pt-2 text-btn text-gold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                    <span>EXPLORE PROTOCOL</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 18, 19 & 20. GROUP FITNESS: KIDS, DANCE, ZUMBA & YOGA                     */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-bg-primary">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="COMMUNITY STUDIO CLASSES"
              title="GROUP ENERGY & HOLISTIC WELLNESS"
              subtitle="Shock-absorbing sprung wood studio hosting classes for all ages."
              description="Beyond heavy weights, CUTZ THE GYM provides a vibrant group fitness ecosystem where music, rhythm, mindfulness, and youth athletics thrive."
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Smile,
                title: "Kids Activities",
                slug: "kids-activities",
                desc: "Agility obstacle drills, calisthenics, and motor skill development building physical confidence."
              },
              {
                icon: Music,
                title: "Dance Aerobics",
                slug: "dance",
                desc: "High-octane rhythmic cardiovascular dance workouts that burn calories without monotony."
              },
              {
                icon: Flame,
                title: "Zumba Fitness",
                slug: "zumba",
                desc: "Pulsating Latin beats and interval dance movements that melt stress and burn up to 600+ kcal."
              },
              {
                icon: Heart,
                title: "Yoga & Mindfulness",
                slug: "yoga",
                desc: "Traditional asanas, deep myofascial mobility, and pranayama restoring joint flexibility for lifters."
              }
            ].map((cls, idx) => (
              <Reveal key={cls.slug} delay={idx * 0.1}>
                <Link
                  to={`/programs/${cls.slug}`}
                  className="p-6 rounded-xl bg-bg-card border border-white/10 hover:border-gold transition-all block space-y-3 group h-full flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                      <cls.icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-heading-md text-white group-hover:text-gold transition-colors">
                      {cls.title}
                    </h4>
                    <p className="text-body-sm text-silver/70 leading-relaxed">
                      {cls.desc}
                    </p>
                  </div>
                  <div className="pt-2 text-btn text-gold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                    <span>VIEW CLASS DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 21 & 22. CLEAN, SAFE & AC ENVIRONMENT + FITNESS COMMUNITY                 */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-bg-secondary border-y border-white/5">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <SectionHeading
                  align="left"
                  eyebrow="COMMUNITY & SAFETY"
                  title="A MOTIVATING, CLEAN & SAFE ENVIRONMENT"
                  subtitle="Where athletes of all levels inspire one another every single day."
                />
              </Reveal>

              <Reveal delay={0.15}>
                <p className="text-body-md text-silver/80 leading-relaxed">
                  We take immense pride in fostering an inclusive, high-respect culture. Whether you are an experienced bodybuilder preparing for competition or stepping onto the gym floor for the first time, our members and coaching staff treat your effort with dignity and support.
                </p>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="space-y-3 pt-2">
                  {[
                    "Continuous hospital-standard equipment sanitization cycles",
                    "Spacious, uncrowded training floor with ample space between workout zones",
                    "Full air conditioning maintaining crisp, fresh airflow throughout the year",
                    "Secure digital locker rooms and private shower amenities"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-body-sm text-silver/90">{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.2}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gold/30 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop"
                    alt="CUTZ Community Training"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 23. GYM PHOTOGRAPHY SHOWCASE                                              */}
      {/* ========================================================================= */}
      <section className="py-20 bg-bg-primary">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="ARENA VISUALS"
              title="EXPERIENCE THE CUTZ ATMOSPHERE"
              subtitle="A preview of our equipment, free weight decks, and studio floor."
            />
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop"
            ].map((img, idx) => (
              <Reveal key={idx} delay={idx * 0.08}>
                <div className="rounded-xl overflow-hidden aspect-[4/3] border border-white/10 group">
                  <img
                    src={img}
                    alt="CUTZ The Gym Interior"
                    className="w-full h-full object-cover filter brightness-85 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button to="/gallery" variant="outline" size="md" icon={ArrowRight}>
              VIEW FULL IMAGE GALLERY
            </Button>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 24. MEMBERSHIP CONSULTATION CTA                                           */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#0a0a0a] border-t border-gold/25 text-center">
        <Container className="max-w-3xl">
          <span className="text-eyebrow text-gold font-bold">
            TAKE THE FIRST STEP
          </span>
          <h2 className="text-heading-xl text-white mt-2 leading-tight">
            COMMENCE YOUR TRANSFORMATION AT CUTZ THE GYM
          </h2>
          <p className="mt-4 text-body-md text-silver/80 max-w-xl mx-auto leading-relaxed">
            Visit our 10,000 SQFT training destination in Lohegaon, Pune or schedule a consultation with our coaching staff today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/memberships" size="lg" variant="primary" icon={ArrowRight}>
              EXPLORE MEMBERSHIP PLANS
            </Button>
            <Button to="/contact" size="lg" variant="outline">
              BOOK A GYM WALKTHROUGH
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
