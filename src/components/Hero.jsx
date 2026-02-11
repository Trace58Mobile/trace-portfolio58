import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { HiArrowDown } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

export default function Hero() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const descRef = useRef(null)
  const ctaRef = useRef(null)
  const socialsRef = useRef(null)
  const decorRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      tl.fromTo(
        decorRef.current,
        { scale: 0, opacity: 0, rotation: -180 },
        { scale: 1, opacity: 0.15, rotation: 0, duration: 1.5 }
      )
        .fromTo(
          subtitleRef.current,
          { y: 40, opacity: 0, clipPath: 'inset(100% 0 0 0)' },
          { y: 0, opacity: 1, clipPath: 'inset(0% 0 0 0)', duration: 0.8 },
          '-=1'
        )
        .fromTo(
          titleRef.current.children,
          { y: 120, opacity: 0, rotateX: -40 },
          { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.15 },
          '-=0.6'
        )
        .fromTo(
          descRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          ctaRef.current.children,
          { y: 30, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1 },
          '-=0.4'
        )
        .fromTo(
          socialsRef.current.children,
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
          '-=0.3'
        )

      // Floating animation for the decoration
      gsap.to(decorRef.current, {
        y: -20,
        rotation: 5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      // Parallax on scroll
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: 150,
        opacity: 0.3,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToServices = (e) => {
    e.preventDefault()
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(109,40,217,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(109,40,217,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Decorative blob */}
      <div
        ref={decorRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-to-br from-accent/20 via-purple-500/10 to-transparent blur-3xl pointer-events-none"
      />

      {/* Small floating orbs */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-accent-light rounded-full animate-pulse" />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-accent/50 rounded-full animate-pulse delay-700" />
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-accent-glow rounded-full animate-pulse delay-500" />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Subtitle */}
        <div ref={subtitleRef} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent-light text-sm font-mono font-medium">
            <span className="w-2 h-2 bg-accent-light rounded-full animate-pulse" />
            Mobile Application Developer & Designer
          </span>
        </div>

        {/* Title */}
        <div ref={titleRef} className="overflow-hidden">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
            Hi, I'm
          </h1>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mt-2">
            <span className="bg-gradient-to-r from-accent-light via-purple-400 to-accent-glow bg-clip-text text-transparent">
              Trace Nobles
            </span>
          </h1>
        </div>

        {/* Description */}
        <p
          ref={descRef}
          className="mt-8 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          I craft{' '}
          <span className="text-accent-light font-medium">
            pixel-perfect mobile experiences
          </span>{' '}
          that users love. From concept to deployment, I bring ideas to life
          with clean code and stunning design.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hoverable"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-4 border border-border hover:border-accent-light text-text-primary font-semibold rounded-full transition-all duration-300 hover:bg-accent/5 hoverable"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links - GitHub only */}
        <div ref={socialsRef} className="mt-12 flex items-center justify-center gap-5">
          <a
            href="https://github.com/Trace58Mobile"
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full border border-border text-text-secondary hover:text-accent-light hover:border-accent-light transition-all duration-300 hoverable"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-accent-light transition-colors duration-300 animate-bounce hoverable"
      >
        <span className="text-xs font-mono">Scroll</span>
        <HiArrowDown size={16} />
      </button>
    </section>
  )
}
