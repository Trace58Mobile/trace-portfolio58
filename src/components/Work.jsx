const experiences = [
  {
    company: "DispatchTrack",
    role: "Mobile App Developer",
    period: "June 2022 - February 2025",
    description: [
      "Developed and maintained native iOS applications using SwiftUI and Objective-C, delivering reliable mobile solutions for logistics and field operations. Designed and implemented application architecture that supported complex workflows while maintaining clean, object-oriented code and strong separation of concerns.",
      "Led performance optimization and debugging efforts across multithreaded features, ensuring smooth user experience under high load. Integrated REST APIs and collaborated with backend teams to define contracts and handle edge cases.",
      "Drove UI design decisions in alignment with iOS Human Interface Guidelines and user feedback, and worked with design assets from Figma through to implementation. Participated in agile ceremonies including sprint planning, reviews, and retrospectives, and used Git for version control and code review.",
    ],
  },
  {
    company: "Charter Communications",
    role: "Mobile & UI Designer",
    period: "October 2019 - May 2022",
    description: [
      "Built and shipped cross-platform mobile applications with React Native for iOS and Android, using Material UI and Tailwind-style patterns to deliver consistent, accessible interfaces. Owned the full frontend flow from wireframes and prototypes in Figma to production-ready code.",
      "Designed and implemented user flows and UI components that improved engagement and met brand guidelines. Integrated with backend services via REST and internal APIs, handling loading states, error handling, and offline considerations.",
      "Collaborated with product and design teams on wireframing and prototyping, and with engineers on API contracts and frontend architecture. Contributed to design systems and component libraries used across multiple apps.",
    ],
  },
  {
    company: "Esoes",
    role: "Designer (Internship)",
    period: "August 2017 - September 2019",
    description: [
      "Supported the design team on visual and interface design for web and mobile projects. Created wireframes, mockups, and design assets under senior designer guidance and contributed to client-facing deliverables.",
      "Gained hands-on experience with design tools and workflows, design principles, and collaboration with developers. Assisted in maintaining design consistency and preparing assets for handoff.",
      "Figma designes"
    ],
  },
];

export default function Work() {
  return (
    <section id="work" className="px-4 py-20 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold mb-8 text-text">Employment history</h2>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="flex flex-col gap-2 rounded-xl border border-border bg-surface/50 p-4 md:flex-row md:items-start md:justify-between shadow-sm hover:border-accent/30 transition-colors"
            >
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-text">{exp.role}</h3>
                <p className="text-sm text-muted">{exp.company}</p>
                <div className="mt-2 space-y-2 text-sm text-muted">
                  {exp.description.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
              <div className="text-xs text-muted shrink-0 md:text-right">
                {exp.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
