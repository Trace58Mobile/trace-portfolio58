const experiences = [
  {
    company: "TechForward Solutions",
    role: "Senior Mobile Application Developer",
    period: "March 2024 - Present",
    description: [
      "Lead mobile developer responsible for architecting and building cross-platform applications using React Native and Flutter, serving 500K+ active users across iOS and Android platforms.",
      "Implemented CI/CD pipelines with Fastlane and GitHub Actions, reducing deployment time by 60%. Integrated analytics, crash reporting (Firebase Crashlytics), and A/B testing frameworks to drive data-informed product decisions.",
      "Collaborated with backend teams to design RESTful APIs and GraphQL schemas, ensuring optimal app performance and offline-first capabilities. Mentored junior developers and conducted code reviews.",
    ],
  },
  {
    company: "AppVenture Labs",
    role: "Mobile Developer",
    period: "April 2022 - February 2024",
    description: [
      "Developed and maintained native iOS applications using Swift and SwiftUI, and Android applications using Kotlin and Jetpack Compose. Successfully launched 8 applications to the App Store and Google Play Store.",
      "Built features including push notifications, in-app purchases, biometric authentication, and real-time chat functionality. Optimized app performance achieving 99.5% crash-free sessions.",
      "Worked in an agile environment with cross-functional teams, participating in sprint planning, daily standups, and retrospectives.",
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
