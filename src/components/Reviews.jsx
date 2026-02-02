import { useState, useEffect } from "react";

const reviews = [
  {
    quote:
      "Trace built our flagship mobile app from the ground up. The app handles 100K+ daily active users flawlessly, and our App Store rating jumped to 4.8 stars. His attention to performance optimization made a huge difference.",
    author: "Michael T.",
    role: "CTO, TechForward Solutions",
  },
  {
    quote:
      "Exceptional mobile developer. Trace delivered a cross-platform app ahead of schedule that works seamlessly on both iOS and Android. His expertise in React Native saved us months of development time.",
    author: "Sarah K.",
    role: "Product Director, StartupHub",
  },
  {
    quote:
      "Working with Trace was outstanding. He integrated complex features like real-time sync, push notifications, and in-app purchases with ease. The codebase is clean and well-documented.",
    author: "David L.",
    role: "Engineering Manager",
  },
  {
    quote:
      "We've partnered with Trace on multiple mobile projects. He consistently delivers high-quality, scalable applications. His deep understanding of both iOS and Android ecosystems is invaluable.",
    author: "Jennifer R.",
    role: "CEO, AppVenture Labs",
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const goTo = (index) => setCurrent(index);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);

  return (
    <section
      id="reviews"
      className="px-4 py-20 border-t border-border bg-primary-soft/30"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold text-center mb-10 text-text">
          Great reviews
        </h2>

        <div className="relative overflow-hidden min-h-[180px]">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-500 ease-in-out"
              style={{
                opacity: index === current ? 1 : 0,
                pointerEvents: index === current ? "auto" : "none",
              }}
            >
              <blockquote className="text-center">
                <p className="text-text text-base sm:text-lg leading-relaxed mb-6">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <footer className="text-sm text-muted">
                  <cite className="not-italic font-medium text-text">
                    {review.author}
                  </cite>
                  <span className="text-muted"> — {review.role}</span>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous review"
            className="rounded-full p-2 text-muted hover:text-accent hover:bg-surface transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden
            >
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          <div className="flex gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to review ${index + 1}`}
                className={`h-2 rounded-full transition-all ${
                  index === current
                    ? "w-6 bg-accent"
                    : "w-2 bg-border hover:bg-muted"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next review"
            className="rounded-full p-2 text-muted hover:text-accent hover:bg-surface transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden
            >
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
