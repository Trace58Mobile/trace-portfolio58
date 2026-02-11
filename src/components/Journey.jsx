import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  HiOutlineBriefcase,
  HiOutlineColorSwatch,
} from 'react-icons/hi'

gsap.registerPlugin(ScrollTrigger)

const milestones = [
  {
    period: 'June 2022 — February 2025',
    title: 'Mobile App Developer',
    company: 'DispatchTrack',
    description:
      'Developed and maintained iOS applications using SwiftUI and Objective-C. Focused on application architecture, multithreading, and delivering polished user experiences through agile workflows.',
    icon: <HiOutlineBriefcase size={24} />,
    skills: [
      'SwiftUI',
      'Objective-C',
      'iOS Development',
      'Application Architecture',
      'Multithreading',
      'Debugging',
      'Object-Oriented Programming',
      'Agile Development',
      'REST API',
      'Git',
      'UX',
      'UI Design',
      'Figma',
      'Mobile Application Development',
    ],
    accent: '#8b5cf6',
  },
  {
    period: 'October 2019 — May 2022',
    title: 'Mobile & UI Designer',
    company: 'Charter Communications',
    description:
      'Designed and built cross-platform mobile interfaces and prototypes. Bridged design and development with Figma wireframes, React Native frontends, and seamless API integrations.',
    icon: <HiOutlineColorSwatch size={24} />,
    skills: [
      'React Native',
      'Tailwind CSS',
      'Material UI',
      'iOS App',
      'Android App',
      'Figma',
      'Wireframing & Prototyping',
      'Frontend Development',
      'API Integration',
    ],
    accent: '#a78bfa',
  },
]

export default function Journey() {
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)
  const trackRef = useRef(null)
  const cardsRef = useRef([])
  const headerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean)
      const track = trackRef.current
      if (!track || cards.length === 0) return

      // Calculate the total horizontal scroll distance
      const totalScroll = track.scrollWidth - window.innerWidth

      // ── Header 3D entrance ──
      gsap.fromTo(
        headerRef.current,
        { rotateX: 30, y: 60, opacity: 0, transformPerspective: 800 },
        {
          rotateX: 0,
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // ── Horizontal scroll pinning ──
      const scrollTween = gsap.to(track, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: () => `+=${totalScroll + window.innerWidth * 0.5}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      // ── 3D card animations while scrolling ──
      cards.forEach((card, i) => {
        // Initial state — cards start rotated in 3D
        gsap.set(card, {
          rotateY: 25,
          rotateX: 8,
          scale: 0.85,
          opacity: 0,
          z: -200,
          transformPerspective: 1200,
          transformOrigin: 'center center',
        })

        // Each card reveals with a 3D flip as it enters view
        gsap.to(card, {
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          opacity: 1,
          z: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            containerAnimation: scrollTween,
            start: 'left 85%',
            end: 'left 40%',
            scrub: 1,
          },
        })

        // Add a subtle 3D tilt as card leaves
        gsap.to(card, {
          rotateY: -15,
          rotateX: -5,
          scale: 0.92,
          opacity: 0.6,
          z: -100,
          scrollTrigger: {
            trigger: card,
            containerAnimation: scrollTween,
            start: 'right 40%',
            end: 'right -10%',
            scrub: 1,
          },
        })

        // Glow line animates in
        const glowLine = card.querySelector('.glow-line')
        if (glowLine) {
          gsap.fromTo(
            glowLine,
            { scaleX: 0, transformOrigin: 'left center' },
            {
              scaleX: 1,
              duration: 0.6,
              scrollTrigger: {
                trigger: card,
                containerAnimation: scrollTween,
                start: 'left 60%',
                end: 'left 30%',
                scrub: 1,
              },
            }
          )
        }

        // Skill tags stagger in
        const tags = card.querySelectorAll('.skill-tag')
        if (tags.length) {
          gsap.fromTo(
            tags,
            { y: 20, opacity: 0, scale: 0.8 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              stagger: 0.03,
              scrollTrigger: {
                trigger: card,
                containerAnimation: scrollTween,
                start: 'left 55%',
                end: 'left 25%',
                scrub: 1,
              },
            }
          )
        }
      })

      // ── Floating particles ──
      gsap.utils.toArray('.journey-particle').forEach((p, i) => {
        gsap.to(p, {
          y: `random(-30, 30)`,
          x: `random(-20, 20)`,
          rotation: `random(-180, 180)`,
          duration: `random(3, 6)`,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.3,
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative bg-dark-light"
    >
      <div ref={triggerRef} className="relative overflow-hidden">
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="journey-particle absolute pointer-events-none"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${5 + Math.random() * 90}%`,
              width: `${3 + Math.random() * 6}px`,
              height: `${3 + Math.random() * 6}px`,
              borderRadius: '50%',
              background: `rgba(139, 92, 246, ${0.1 + Math.random() * 0.2})`,
            }}
          />
        ))}

        {/* Background accents */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Content wrapper with perspective */}
        <div className="min-h-screen flex flex-col justify-center" style={{ perspective: '1200px' }}>
          {/* Section Header */}
          <div ref={headerRef} className="text-center pt-24 pb-12 px-6">
            <span className="font-mono text-accent-light text-sm tracking-widest uppercase">
              // Employment History
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
              My{' '}
              <span className="bg-gradient-to-r from-accent-light to-accent-glow bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="mt-6 text-text-secondary text-lg max-w-2xl mx-auto">
              Real-world experience building products that millions of people
              rely on every day.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-text-muted text-xs font-mono">
              <span className="w-8 h-px bg-accent/30" />
              Scroll to explore
              <span className="w-8 h-px bg-accent/30" />
            </div>
          </div>

          {/* Horizontal Track */}
          <div
            ref={trackRef}
            className="flex items-center gap-10 px-[10vw] pb-24 pt-4 will-change-transform"
            style={{ width: 'max-content' }}
          >
            {milestones.map((milestone, index) => (
              <div
                key={milestone.company}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[550px] lg:w-[620px] will-change-transform"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative p-8 md:p-10 bg-dark-card border border-border rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-500">
                  {/* Top glow line */}
                  <div
                    className="glow-line absolute top-0 left-0 right-0 h-[3px]"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${milestone.accent}, transparent)`,
                    }}
                  />

                  {/* Corner glow */}
                  <div
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                    style={{ background: milestone.accent }}
                  />

                  {/* Period badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${milestone.accent}15`,
                        color: milestone.accent,
                      }}
                    >
                      {milestone.icon}
                    </div>
                    <div>
                      <span className="font-mono text-accent-light text-xs font-semibold tracking-wide block">
                        {milestone.period}
                      </span>
                      <span className="text-text-muted text-[11px] font-mono">
                        {milestone.skills.length} skills
                      </span>
                    </div>
                  </div>

                  {/* Title & Company */}
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 group-hover:text-accent-light transition-colors duration-300">
                    {milestone.title}
                  </h3>
                  <p className="text-accent-glow/80 text-sm font-semibold mb-4 tracking-wide">
                    @ {milestone.company}
                  </p>

                  {/* Description */}
                  <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8">
                    {milestone.description}
                  </p>

                  {/* Divider */}
                  <div className="w-12 h-px bg-accent/30 mb-6" />

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2">
                    {milestone.skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-tag px-3 py-1.5 text-[11px] font-mono text-accent-light/90 bg-accent/10 border border-accent/15 rounded-lg hover:bg-accent/20 hover:border-accent/30 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Bottom subtle reflection (3D feel) */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-card/80 to-transparent pointer-events-none" />
                </div>

                {/* 3D shadow underneath the card */}
                <div
                  className="absolute -bottom-3 left-4 right-4 h-8 rounded-2xl blur-xl opacity-30 -z-10 group-hover:opacity-50 transition-opacity duration-500"
                  style={{ background: milestone.accent }}
                />
              </div>
            ))}

            {/* End marker */}
            <div className="flex-shrink-0 w-[30vw] flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-accent/20 flex items-center justify-center text-accent-light">
                  <span className="text-2xl">→</span>
                </div>
                <p className="text-text-muted font-mono text-sm">
                  More to come...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
