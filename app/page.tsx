export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Legal Compliance Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Using Unlicensed Media<br />
          <span className="text-[#58a6ff]">Before It Costs You</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Content Licensing Tracker scans your image and video libraries, tracks expiration dates, and suggests free alternatives — so you never face a licensing lawsuit.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔍</div>
            <h3 className="font-semibold text-white mb-1">Scan Libraries</h3>
            <p className="text-sm text-[#8b949e]">Upload or connect your content library. We identify every image and video that lacks a valid license.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📅</div>
            <h3 className="font-semibold text-white mb-1">Track Expiry</h3>
            <p className="text-sm text-[#8b949e]">Get alerts before licenses expire. Never accidentally publish content with a lapsed license again.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🖼️</div>
            <h3 className="font-semibold text-white mb-1">Free Alternatives</h3>
            <p className="text-sm text-[#8b949e]">Instantly see royalty-free replacements from Unsplash, Pexels, and Pixabay for any flagged asset.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 text-left mb-8">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited library scans</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> License expiration alerts</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Free alternative suggestions</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Dashboard & audit reports</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Email & Slack notifications</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What types of content can it scan?</h3>
            <p className="text-sm text-[#8b949e]">We support JPEG, PNG, GIF, WebP images and MP4, MOV, AVI video files. You can upload files directly or connect cloud storage like Google Drive or Dropbox.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does license detection work?</h3>
            <p className="text-sm text-[#8b949e]">We use image recognition APIs to match your assets against known stock photo databases and check embedded metadata. You can also manually enter license details for custom assets.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel with one click from your account dashboard. You keep access until the end of your billing period with no hidden fees.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Content Licensing Tracker. All rights reserved.
      </footer>
    </main>
  );
}
