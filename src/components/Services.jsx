import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  HiOutlineDeviceMobile,
  HiOutlinePencil,
  HiOutlineCode,
  HiOutlineLightningBolt,
} from 'react-icons/hi'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: <HiOutlineDeviceMobile size={32} />,
    title: 'Mobile App Development',
    description:
      'Building high-performance native apps with Kotlin and Swift that deliver seamless user experiences across Android and iOS platforms.',
    tags: ['Android', 'iOS', 'Native'],
  },
  {
    icon: <HiOutlinePencil size={32} />,
    title: 'UI/UX Design',
    description:
      'Creating intuitive, beautiful interfaces in Figma with user-centered design principles. Every pixel is crafted with purpose.',
    tags: ['Figma', 'Prototyping', 'User Research'],
  },
  {
    icon: <HiOutlineCode size={32} />,
    title: 'Cross-Platform Solutions',
    description:
      'Developing efficient cross-platform applications that maintain native feel while maximizing code reuse and reducing time to market.',
    tags: ['KMP', 'Shared Logic', 'Efficiency'],
  },
  {
    icon: <HiOutlineLightningBolt size={32} />,
    title: 'Performance Optimization',
    description:
      'Ensuring apps run fast and smooth with optimized architecture, efficient memory usage, and responsive UI at 60fps.',
    tags: ['Speed', 'Architecture', 'Quality'],
  },
]

export default function Services() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger cards from left
      gsap.fromTo(
        cardsRef.current,
        { x: -80, opacity: 0, rotateY: -10 },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Hover tilt effect
      cardsRef.current.forEach((card) => {
        if (!card) return
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { y: -8, duration: 0.3, ease: 'power2.out' })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="section-reveal text-center mb-20">
          <span className="font-mono text-accent-light text-sm tracking-widest uppercase">
            // What I Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Crafting Digital{' '}
            <span className="bg-gradient-to-r from-accent-light to-accent-glow bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <p className="mt-6 text-text-secondary text-lg max-w-2xl mx-auto">
            From initial concept to polished product, I specialize in building
            mobile applications that stand out in both form and function.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative p-8 bg-dark-card border border-border rounded-2xl hover:border-accent/30 transition-all duration-500 hoverable overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-accent/10 text-accent-light mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-accent-light transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono text-accent-light bg-accent/10 rounded-full border border-accent/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
