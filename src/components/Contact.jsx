import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HiOutlineMail, HiOutlinePaperAirplane } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const contactInfo = [
  {
    icon: <HiOutlineMail size={22} />,
    label: 'Email',
    value: 'tracenobles58@gmail.com',
    href: 'mailto:tracenobles58@gmail.com',
  },
  {
    icon: <FaGithub size={22} />,
    label: 'GitHub',
    value: 'Trace58Mobile',
    href: 'https://github.com/Trace58Mobile',
  },
]

export default function Contact() {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const infoRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        infoRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        formRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const btn = e.target.querySelector('button[type="submit"]')
    gsap.to(btn, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        gsap.to(btn, { scale: 1, duration: 0.2 })
      },
    })
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="section-reveal text-center mb-20">
          <span className="font-mono text-accent-light text-sm tracking-widest uppercase">
            // Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Let's Build{' '}
            <span className="bg-gradient-to-r from-accent-light to-accent-glow bg-clip-text text-transparent">
              Something Great
            </span>
          </h2>
          <p className="mt-6 text-text-secondary text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's turn your ideas into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info - Email & GitHub only */}
          <div ref={infoRef} className="lg:col-span-2 space-y-4">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target={info.label === 'GitHub' ? '_blank' : undefined}
                rel={info.label === 'GitHub' ? 'noreferrer' : undefined}
                className="flex items-center gap-4 p-4 bg-dark-card border border-border rounded-xl hover:border-accent/30 transition-all duration-300 group hoverable"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent-light group-hover:bg-accent/20 transition-colors duration-300">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-text-muted font-mono uppercase tracking-wider">
                    {info.label}
                  </p>
                  <p className="text-text-primary font-medium group-hover:text-accent-light transition-colors duration-300">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-text-muted font-mono mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3.5 bg-dark-card border border-border rounded-xl text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-accent-light focus:ring-1 focus:ring-accent-light/20 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-text-muted font-mono mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3.5 bg-dark-card border border-border rounded-xl text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-accent-light focus:ring-1 focus:ring-accent-light/20 transition-all duration-300"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-text-muted font-mono mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Collaboration"
                className="w-full px-4 py-3.5 bg-dark-card border border-border rounded-xl text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-accent-light focus:ring-1 focus:ring-accent-light/20 transition-all duration-300"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-text-muted font-mono mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full px-4 py-3.5 bg-dark-card border border-border rounded-xl text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-accent-light focus:ring-1 focus:ring-accent-light/20 transition-all duration-300 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hoverable"
            >
              <HiOutlinePaperAirplane size={18} className="rotate-45" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
