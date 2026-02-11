import { useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  SiKotlin,
  SiSwift,
  SiFigma,
  SiAndroidstudio,
  SiXcode,
  SiFirebase,
  SiGit,
  SiJetpackcompose,
  SiGradle,
  SiPostman,
  SiSqlite,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { name: 'Kotlin', icon: <SiKotlin size={28} />, level: 95, color: '#7F52FF' },
  { name: 'Java', icon: <FaJava size={28} />, level: 90, color: '#ED8B00' },
  { name: 'Swift', icon: <SiSwift size={28} />, level: 85, color: '#FA7343' },
  { name: 'Figma', icon: <SiFigma size={28} />, level: 92, color: '#F24E1E' },
  { name: 'Android Studio', icon: <SiAndroidstudio size={28} />, level: 95, color: '#3DDC84' },
  { name: 'Xcode', icon: <SiXcode size={28} />, level: 80, color: '#147EFB' },
  { name: 'Firebase', icon: <SiFirebase size={28} />, level: 88, color: '#FFCA28' },
  { name: 'Git', icon: <SiGit size={28} />, level: 90, color: '#F05032' },
  { name: 'Jetpack Compose', icon: <SiJetpackcompose size={28} />, level: 92, color: '#4285F4' },
  { name: 'Gradle', icon: <SiGradle size={28} />, level: 85, color: '#02303A' },
  { name: 'REST APIs', icon: <SiPostman size={28} />, level: 90, color: '#FF6C37' },
  { name: 'SQLite', icon: <SiSqlite size={28} />, level: 85, color: '#003B57' },
]

export default function Skills() {
  const sectionRef = useRef(null)
  const gridRef = useRef(null)
  const skillsRef = useRef([])
  const barsRef = useRef([])
  const headerRef = useRef(null)

  // 3D tilt effect on mouse move
  const handleMouseMove = useCallback((e, index) => {
    const card = skillsRef.current[index]
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -12
    const rotateY = ((x - centerX) / centerX) * 12

    gsap.to(card, {
      rotateX,
      rotateY,
      z: 30,
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out',
      transformPerspective: 800,
      transformOrigin: 'center center',
    })

    // Move the glow
    const glow = card.querySelector('.card-glow')
    if (glow) {
      gsap.to(glow, {
        x: x - centerX,
        y: y - centerY,
        opacity: 0.6,
        duration: 0.3,
      })
    }
  }, [])

  const handleMouseLeave = useCallback((index) => {
    const card = skillsRef.current[index]
    if (!card) return

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      z: 0,
      scale: 1,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)',
    })

    const glow = card.querySelector('.card-glow')
    if (glow) {
      gsap.to(glow, { opacity: 0, duration: 0.4 })
    }
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Header 3D drop-in ──
      gsap.fromTo(
        headerRef.current,
        {
          rotateX: 40,
          y: -80,
          opacity: 0,
          transformPerspective: 1000,
          transformOrigin: 'center bottom',
        },
        {
          rotateX: 0,
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // ── Grid 3D perspective entrance ──
      gsap.fromTo(
        gridRef.current,
        {
          rotateX: 20,
          rotateY: -5,
          transformPerspective: 1200,
          transformOrigin: 'center top',
        },
        {
          rotateX: 0,
          rotateY: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 75%',
            end: 'top 30%',
            scrub: 1,
          },
        }
      )

      // ── Individual cards 3D stagger ──
      skillsRef.current.forEach((card, i) => {
        if (!card) return

        // Calculate grid position for wave effect
        const col = i % 3
        const row = Math.floor(i / 3)
        const delay = (col + row) * 0.08

        gsap.fromTo(
          card,
          {
            rotateY: 45 * (col === 0 ? -1 : col === 2 ? 1 : 0),
            rotateX: 20,
            z: -300,
            opacity: 0,
            scale: 0.6,
            transformPerspective: 1000,
          },
          {
            rotateY: 0,
            rotateX: 0,
            z: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            delay,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      // ── Animate progress bars with 3D ──
      barsRef.current.forEach((bar, i) => {
        if (!bar) return
        gsap.fromTo(
          bar,
          { width: '0%', opacity: 0 },
          {
            width: `${skills[i].level}%`,
            opacity: 1,
            duration: 1.5,
            delay: i * 0.06 + 0.3,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 55%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      // ── Floating glow orbs ──
      gsap.utils.toArray('.skill-orb').forEach((orb, i) => {
        gsap.to(orb, {
          y: `random(-40, 40)`,
          x: `random(-30, 30)`,
          rotation: `random(-90, 90)`,
          duration: `random(4, 7)`,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.5,
        })
      })

      // ── Parallax on the whole grid ──
      gsap.to(gridRef.current, {
        y: -30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 px-6 bg-dark-light overflow-hidden"
    >
      {/* Floating orbs */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="skill-orb absolute pointer-events-none rounded-full blur-2xl"
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${5 + Math.random() * 90}%`,
            width: `${60 + Math.random() * 100}px`,
            height: `${60 + Math.random() * 100}px`,
            background: `radial-gradient(circle, ${skills[i % skills.length].color}10, transparent)`,
          }}
        />
      ))}

      {/* Background decorations */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-20">
          <span className="font-mono text-accent-light text-sm tracking-widest uppercase">
            // Tech Stack
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Skills &{' '}
            <span className="bg-gradient-to-r from-accent-light to-accent-glow bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mt-6 text-text-secondary text-lg max-w-2xl mx-auto">
            A curated toolkit built over years of crafting mobile experiences.
            Always learning, always evolving.
          </p>
        </div>

        {/* Skills Grid with 3D perspective container */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              ref={(el) => (skillsRef.current[index] = el)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="group relative p-5 bg-dark-card border border-border rounded-xl transition-colors duration-300 hoverable cursor-default overflow-hidden"
              style={{
                transformStyle: 'preserve-3d',
                willChange: 'transform',
              }}
            >
              {/* Mouse-following glow */}
              <div
                className="card-glow absolute w-32 h-32 rounded-full pointer-events-none opacity-0 -translate-x-1/2 -translate-y-1/2"
                style={{
                  background: `radial-gradient(circle, ${skill.color}30, transparent 70%)`,
                  top: '50%',
                  left: '50%',
                  filter: 'blur(20px)',
                }}
              />

              {/* Top edge glow */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)` }}
              />

              <div className="relative z-10 flex items-center gap-4 mb-4">
                {/* Icon with 3D pop */}
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 group-hover:shadow-lg"
                  style={{
                    backgroundColor: `${skill.color}15`,
                    color: skill.color,
                    transform: 'translateZ(20px)',
                    boxShadow: 'none',
                  }}
                >
                  {skill.icon}
                </div>

                {/* Name & Level */}
                <div className="flex-1" style={{ transform: 'translateZ(10px)' }}>
                  <h3 className="font-semibold text-text-primary group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <span className="text-xs font-mono text-text-muted">
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div
                className="relative h-2 bg-border/50 rounded-full overflow-hidden"
                style={{ transform: 'translateZ(5px)' }}
              >
                <div
                  ref={(el) => (barsRef.current[index] = el)}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                    width: '0%',
                    boxShadow: `0 0 12px ${skill.color}40`,
                  }}
                />
                {/* Shimmer effect on the bar */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, ${skill.color}30 50%, transparent 100%)`,
                    animation: 'shimmer 2s infinite',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline keyframe for shimmer */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  )
}
