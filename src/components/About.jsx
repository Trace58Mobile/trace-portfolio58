export default function About() {
  return (
    <section
      id="about"
      className="px-4 py-20 border-t border-border bg-linear-to-b from-primary to-primary-soft"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold mb-10 text-text">About</h2>
        <div className="grid gap-10 md:grid-cols-1">
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <p>
              Hi, I'm Trace — a Mobile Application Developer based in the United States 
              with a passion for building high-quality, scalable mobile experiences. I 
              specialize in developing native and cross-platform applications that combine 
              clean architecture with exceptional user experiences.
            </p>
            <p>
              With expertise in React Native, Flutter, Swift, and Kotlin, I develop 
              end-to-end mobile solutions for iOS and Android platforms. My technical 
              stack includes state management tools like Redux and Provider, REST APIs, 
              GraphQL, Firebase, and cloud services (AWS, Google Cloud). I'm experienced 
              with CI/CD pipelines, automated testing, and App Store/Play Store deployment 
              processes.
            </p>
            <p>
              I follow industry best practices including MVVM/MVC architecture patterns, 
              test-driven development, and agile methodologies. My focus is always on 
              writing maintainable, well-documented code that scales with business needs.
            </p>
            <p>
              Core competencies: <br /> 
              - Native iOS (Swift/SwiftUI) & Android (Kotlin/Jetpack Compose) development <br /> 
              - Cross-platform development with React Native & Flutter <br /> 
              - API integration, offline-first architecture & real-time features <br /> 
              - Performance optimization & app store optimization (ASO) <br />
              - Push notifications, in-app purchases & third-party SDK integrations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
