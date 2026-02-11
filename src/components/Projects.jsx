import { useState, useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HiOutlineExternalLink, HiOutlineCode } from 'react-icons/hi'

// Golden Volunteer Portal
import goldenIcon from '../assets/projects/golden/icon.webp'
import golden1 from '../assets/projects/golden/1.webp'
import golden2 from '../assets/projects/golden/2.webp'
import golden3 from '../assets/projects/golden/3.webp'
import golden4 from '../assets/projects/golden/4.webp'
import golden5 from '../assets/projects/golden/5.webp'
import golden6 from '../assets/projects/golden/6.webp'

// Cirqle
import cirqleIcon from '../assets/projects/cirqle/icon.webp'
import cirqle1 from '../assets/projects/cirqle/1.webp'
import cirqle2 from '../assets/projects/cirqle/2.webp'
import cirqle3 from '../assets/projects/cirqle/3.webp'

// OpenBazar
import openbazarIcon from '../assets/projects/openbazar/icon.webp'
import openbazar1 from '../assets/projects/openbazar/1.webp'
import openbazar2 from '../assets/projects/openbazar/2.webp'
import openbazar3 from '../assets/projects/openbazar/3.webp'

// TasteIt
import tasteitIcon from '../assets/projects/tasteit/icon.webp'
import tasteit1 from '../assets/projects/tasteit/1.webp'
import tasteit2 from '../assets/projects/tasteit/2.webp'
import tasteit3 from '../assets/projects/tasteit/3.webp'
import tasteit4 from '../assets/projects/tasteit/4.webp'
import tasteit5 from '../assets/projects/tasteit/5.webp'

// People.Club
import peopleclub1 from '../assets/projects/peopleclub/1.webp'
import peopleclub2 from '../assets/projects/peopleclub/2.webp'
import peopleclub3 from '../assets/projects/peopleclub/3.webp'
import peopleclub4 from '../assets/projects/peopleclub/4.webp'
import peopleclub5 from '../assets/projects/peopleclub/5.webp'
import peopleclub6 from '../assets/projects/peopleclub/6.webp'

// Triathlon Center
import triathlon1 from '../assets/projects/triathlon/1.webp'
import triathlon2 from '../assets/projects/triathlon/2.webp'
import triathlon3 from '../assets/projects/triathlon/3.webp'
import triathlon4 from '../assets/projects/triathlon/4.webp'
import triathlon5 from '../assets/projects/triathlon/5.webp'
import triathlon6 from '../assets/projects/triathlon/6.webp'

gsap.registerPlugin(ScrollTrigger)

const GITHUB_BASE = 'https://raw.githubusercontent.com/Trace58Mobile/Trace58Mobile/main/icons/'

const projects = [
  {
    title: 'Golden Volunteer Portal',
    image: goldenIcon,
    images: [golden1, golden2, golden3, golden4, golden5, golden6],
    summary: 'Volunteer management platform — iOS & Android.',
    description:
      'A comprehensive volunteer management app that connects volunteers with opportunities. Features include volunteer scheduling, event management, hour tracking, and communication tools. Built for non-profit organizations to streamline their volunteer programs.',
    features: [
      'Volunteer opportunity discovery and sign-up',
      'Hour tracking and reporting',
      'Event calendar and notifications',
      'Organization communication tools',
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/golden-volunteer-portal/id1059267723',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.mpebbles.goldenapp',
  },
  {
    title: 'Cirqle',
    image: cirqleIcon,
    images: [cirqle1, cirqle2, cirqle3],
    summary: 'Social networking app — Meet, Share, Connect.',
    description:
      'A modern social networking platform designed to help people meet, share experiences, and build meaningful connections. Features interest-based matching, group activities, and real-time messaging for building genuine relationships.',
    features: [
      'Interest-based user matching',
      'Group activities and events',
      'Real-time messaging and chat',
      'Profile customization and privacy controls',
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/cirqle-meet-share-connect/id1609728760',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.cirqlenetwork.CirqleNetwork',
  },
  {
    title: 'OpenBazar',
    image: openbazarIcon,
    images: [openbazar1, openbazar2, openbazar3],
    summary: 'E-commerce marketplace — Android.',
    description:
      'A decentralized marketplace app enabling peer-to-peer buying and selling. Users can browse products, manage listings, and conduct secure transactions. Built with a focus on user privacy and seamless commerce experience.',
    features: [
      'Product listing and management',
      'Secure payment processing',
      'Seller and buyer profiles',
      'Search and category filters',
    ],
    appStoreUrl: null,
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.openbazar.app',
  },
  {
    title: 'TasteIt',
    image: tasteitIcon,
    images: [tasteit1, tasteit2, tasteit3, tasteit4, tasteit5],
    summary: 'Food social network — Connecting Foodmates.',
    description:
      'A social platform for food enthusiasts to discover restaurants, share dining experiences, and connect with fellow foodies. Features include restaurant reviews, food photo sharing, and social dining events.',
    features: [
      'Restaurant discovery and reviews',
      'Food photo sharing and feeds',
      'Foodmate matching and meetups',
      'Personalized recommendations',
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/tasteit-connecting-foodmates/id6444895835',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=me.tasteit',
  },
  {
    title: 'Biganto360',
    image: `${GITHUB_BASE}sfm360.png`,
    images: [],
    summary: '3D virtual tours — Kotlin (MVI + MVVM).',
    description:
      'Immersive 3D tour application for exploring virtual spaces. Built with Kotlin using MVI and MVVM architecture. Users can navigate through interactive 360° environments with smooth transitions and high-quality rendering.',
    features: [
      'Interactive 360° virtual tours',
      'Smooth navigation and transitions',
      'High-quality image rendering',
      'Offline tour support',
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=ru.biganto.biganto360',
    appStoreUrl: null,
  },
  {
    title: 'People.Club',
    image: peopleclub1,
    images: [peopleclub1, peopleclub2, peopleclub3, peopleclub4, peopleclub5, peopleclub6],
    summary: 'Fitness club app — Swift & Kotlin (MVP).',
    description:
      'Comprehensive fitness club management app for iOS and Android. Members can explore classes, book sessions, track workouts, and manage their membership. Features seamless integration with club facilities.',
    features: [
      'Class schedules and booking',
      'Membership management',
      'Workout tracking',
      'Push notifications for updates',
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/people-club/id1538601319',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=club.people.fitness',
  },
  {
    title: 'Triathlon Center',
    image: triathlon1,
    images: [triathlon1, triathlon2, triathlon3, triathlon4, triathlon5, triathlon6],
    summary: 'Fitness club app — Swift & Kotlin (MVP).',
    description:
      'Triathlon and fitness club app for athletes. Schedule training sessions, join events, track performance metrics, and manage club membership. Designed for serious athletes and fitness enthusiasts.',
    features: [
      'Training session scheduling',
      'Event registration',
      'Performance tracking',
      'Club membership management',
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/triathlon-center/id1621256356',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.triathlon_center',
  },
  {
    title: 'State of Fitness',
    image: `${GITHUB_BASE}state-of-fitness.png`,
    images: [],
    summary: 'Fitness club app — Swift, Kotlin & Java (MVP).',
    description:
      'Fitness club app for members to discover classes, track progress, and engage with the community. Cross-platform native apps for iOS and Android with seamless user experience.',
    features: [
      'Class discovery and booking',
      'Progress tracking',
      'Community features',
      'Personalized recommendations',
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/state-of-fitness/id1585380539',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=ru.statefitness',
  },
]

function AppStoreIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function PlayStoreIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
    </svg>
  )
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-dark-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full p-2 text-text-muted hover:text-text-primary hover:bg-accent/10 transition-colors"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12 5.7 16.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.88a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89z" />
          </svg>
        </button>

        <div className="flex items-center gap-4 p-6 border-b border-border">
          <div className="shrink-0 w-20 h-20 rounded-2xl bg-dark flex items-center justify-center overflow-hidden">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} icon`}
                className="w-full h-full object-contain p-2"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextElementSibling?.classList.remove('hidden')
                }}
              />
            ) : null}
            <div className={`${project.image ? 'hidden' : 'flex'} w-full h-full items-center justify-center bg-accent/20`}>
              <span className="text-3xl font-bold text-accent-light">{project.title.charAt(0)}</span>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-text-primary mb-1">{project.title}</h3>
            <p className="text-sm text-accent-light font-medium">{project.summary}</p>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {project.images && project.images.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">Screenshots</h4>
              <div className="flex gap-2 overflow-x-auto pb-2 -mx-1">
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="shrink-0 w-28 h-56 object-cover rounded-lg border border-border"
                  />
                ))}
              </div>
            </div>
          )}

          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">About</h4>
            <p className="text-sm text-text-secondary leading-relaxed">{project.description}</p>
          </div>

          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">Key Features</h4>
              <ul className="grid gap-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <svg className="w-4 h-4 mt-0.5 text-accent-light shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">Download</h4>
            <div className="flex flex-wrap gap-3">
              {project.appStoreUrl && (
                <a
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-dark border border-border px-4 py-3 text-sm font-medium text-text-primary hover:bg-accent/10 hover:border-accent/50 transition-colors"
                >
                  <AppStoreIcon className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-[10px] text-text-muted uppercase">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
              )}
              {project.playStoreUrl && (
                <a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-dark border border-border px-4 py-3 text-sm font-medium text-text-primary hover:bg-accent/10 hover:border-accent/50 transition-colors"
                >
                  <PlayStoreIcon className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-[10px] text-text-muted uppercase">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              )}
            </div>
          </div>

          {(!project.images || project.images.length === 0) && (
            <p className="text-xs text-text-muted text-center pt-2">
              Click the store buttons above to view screenshots and more details
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  const openModal = useCallback((project) => {
    setSelectedProject(project)
  }, [])

  const closeModal = useCallback(() => {
    setSelectedProject(null)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        const xStart = i % 2 === 0 ? -100 : 100
        gsap.fromTo(
          card,
          { x: xStart, opacity: 0, rotateY: i % 2 === 0 ? -5 : 5 },
          {
            x: 0,
            opacity: 1,
            rotateY: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'top 30%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <section id="projects" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2" />

        <div className="max-w-7xl mx-auto">
          <div className="section-reveal text-center mb-12">
            <span className="font-mono text-accent-light text-sm tracking-widest uppercase">
              // Portfolio
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
              Featured{' '}
              <span className="bg-gradient-to-r from-accent-light to-accent-glow bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="mt-6 text-text-secondary text-lg max-w-2xl mx-auto">
              A selection of projects that showcase my passion for building
              beautiful, functional mobile applications.
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="https://github.com/Trace58Mobile"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-accent-light hover:text-accent-glow transition-colors font-medium hoverable"
              >
                <HiOutlineCode size={18} />
                View GitHub Profile
              </a>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-16">
            {projects.map((proj, index) => (
              <article
                key={proj.title}
                ref={(el) => (cardsRef.current[index] = el)}
                role="button"
                tabIndex={0}
                onClick={() => openModal(proj)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    openModal(proj)
                  }
                }}
                className="group rounded-xl border border-border bg-dark-card overflow-hidden transition-all hover:border-accent/40 hover:scale-[1.02] cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-dark hoverable"
              >
                <div className="p-5">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="shrink-0 w-14 h-14 rounded-xl bg-dark flex items-center justify-center overflow-hidden">
                      {proj.image ? (
                        <img
                          src={proj.image}
                          alt=""
                          className="w-full h-full object-contain p-1"
                          onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.nextElementSibling?.classList.remove('hidden')
                          }}
                        />
                      ) : null}
                      <div className={`${proj.image ? 'hidden' : 'flex'} w-full h-full items-center justify-center bg-accent/20`}>
                        <span className="text-xl font-bold text-accent-light">{proj.title.charAt(0)}</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-base text-text-primary group-hover:text-accent-light transition-colors truncate">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-text-muted mt-0.5">{proj.summary}</p>
                    </div>
                  </div>

                  <p className="text-sm text-text-secondary leading-relaxed line-clamp-2 mb-4">
                    {proj.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {proj.appStoreUrl && (
                        <span className="inline-flex items-center gap-1 text-xs text-text-muted">
                          <AppStoreIcon className="w-3.5 h-3.5" />
                          iOS
                        </span>
                      )}
                      {proj.playStoreUrl && (
                        <span className="inline-flex items-center gap-1 text-xs text-text-muted">
                          <PlayStoreIcon className="w-3.5 h-3.5" />
                          Android
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-accent-light opacity-0 group-hover:opacity-100 transition-opacity">
                      View details →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </>
  )
}
