export default function Loading() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--bg-primary)", fontFamily: "var(--font-jakarta)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button skeleton */}
        <div className="h-5 w-32 rounded-md mb-8 skeleton-shimmer" />

        {/* Header skeleton */}
        <div className="mb-8">
          <div className="h-6 w-16 rounded-full mb-3 skeleton-shimmer" />
          <div className="h-10 w-3/4 rounded-lg mb-3 skeleton-shimmer" />
          <div className="h-4 w-full rounded mb-2 skeleton-shimmer" />
          <div className="h-4 w-2/3 rounded mb-5 skeleton-shimmer" />

          {/* Tech tags */}
          <div className="flex gap-2 mb-6">
            {[60, 80, 70].map((w, i) => (
              <div
                key={i}
                className="h-7 rounded-md skeleton-shimmer"
                style={{ width: `${w}px` }}
              />
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <div className="h-9 w-36 rounded-lg skeleton-shimmer" />
          </div>
        </div>

        {/* Thumbnail skeleton */}
        <div
          className="w-full rounded-xl mb-8 skeleton-shimmer"
          style={{ height: "clamp(200px, 40vw, 420px)" }}
        />

        {/* Content skeleton */}
        <div
          className="rounded-xl p-6 sm:p-8"
          style={{
            background: "rgba(8,20,45,0.6)",
            border: "1px solid rgba(34,211,238,0.1)",
          }}
        >
          <div className="h-4 w-24 rounded mb-6 skeleton-shimmer" />
          {[100, 95, 88, 70, 92, 60, 85].map((w, i) => (
            <div
              key={i}
              className="h-4 rounded mb-3 skeleton-shimmer"
              style={{ width: `${w}%` }}
            />
          ))}
          <div className="h-24 rounded-lg mt-6 skeleton-shimmer" />
          {[90, 78, 85].map((w, i) => (
            <div
              key={i}
              className="h-4 rounded mt-3 skeleton-shimmer"
              style={{ width: `${w}%` }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .skeleton-shimmer {
          background: linear-gradient(
            90deg,
            rgba(34, 211, 238, 0.04) 0%,
            rgba(34, 211, 238, 0.08) 50%,
            rgba(34, 211, 238, 0.04) 100%
          );
          background-size: 200% 100%;
          animation: shimmer 1.6s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}
