export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center gap-6">
        <p className="text-sm uppercase tracking-[0.25em] text-accent">
          Mobile Application Developer
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          I build{" "}
          <span className="text-accent">high-performance, intuitive</span> mobile
          applications.
        </h1>
        <p className="max-w-2xl text-base sm:text-lg text-muted">
          Based in the United States, specializing in native iOS and Android development 
          with React Native and Flutter. Delivering scalable, user-focused mobile solutions 
          from concept to App Store deployment.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          <a
            href="#projects"
            className="rounded-full border border-accent bg-accent px-5 py-2 text-sm font-medium text-primary hover:bg-accent/90 hover:scale-105 transition-all"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-5 py-2 text-sm font-medium text-muted hover:border-accent hover:text-accent transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
