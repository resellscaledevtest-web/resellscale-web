import React, { useEffect, useState } from "react";
import PremiumPage from "./PremiumPage";

export default function App() {
  const [count, setCount] = useState(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [showPremium, setShowPremium] = useState(false);

  useEffect(() => {
    const i = setInterval(() => {
      setCount((v) => (v < 2500 ? v + 10 : v));
    }, 15);
    return () => clearInterval(i);
  }, []);

  const faqs = [
    ["Comment rejoindre ResellScale ?", "Clique sur Discord."],
    ["Quels avantages Premium ?", "Outils + calculateur + VIP."],
    ["Mises à jour ?", "Oui régulières."],
    ["Support ?", "Via Discord."]
  ];

  // 🔐 PAGE PREMIUM
  if (showPremium) {
    return <PremiumPage />;
  }

  return (
    <div className="min-h-screen bg-black text-white">

      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,#3b2a00,transparent_40%)]" />

      {/* HEADER */}
      <header className="sticky top-0 backdrop-blur border-b border-zinc-800 bg-black/70">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="font-bold text-2xl">💎 ResellScale</div>

          <div className="flex gap-3 flex-wrap">

            <a
              href="#pricing"
              className="px-4 py-2 rounded-xl border border-zinc-700"
            >
              Tarifs
            </a>

            <button
              onClick={() => setShowPremium(true)}
              className="px-4 py-2 rounded-xl bg-purple-600 font-bold"
            >
              🔐 Premium
            </button>

            <a
              href="https://discord.gg/E5eyTa5FRf"
              className="px-4 py-2 rounded-xl bg-yellow-500 text-black font-bold"
            >
              Discord
            </a>

          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-32 text-center">

        <h1 className="text-7xl font-extrabold">
          ResellScale
          <span className="block text-yellow-400">Vinted Business</span>
        </h1>

        <p className="mt-8 text-xl text-zinc-400 max-w-2xl mx-auto">
          Communauté, outils et calculateur pour augmenter tes profits sur Vinted.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <a
            href="https://discord.gg/E5eyTa5FRf"
            className="bg-yellow-500 text-black px-8 py-4 rounded-2xl font-bold"
          >
            Rejoindre Discord
          </a>

          <a
            href="#features"
            className="border border-zinc-700 px-8 py-4 rounded-2xl"
          >
            Découvrir
          </a>

        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">

        {[
          [count + "+", "Membres"],
          ["24/7", "Support"],
          ["100+", "Ressources"],
          ["VIP", "Premium"]
        ].map(([v, t], i) => (
          <div key={i} className="bg-zinc-900 rounded-3xl p-8 text-center">
            <div className="text-4xl font-bold text-yellow-400">{v}</div>
            <div className="text-zinc-400">{t}</div>
          </div>
        ))}

      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-bold text-center mb-16">
          Fonctionnalités
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "Guides Vinted",
            "Communauté Discord",
            "Calculateur de profit",
            "VIP Premium",
            "Support rapide",
            "Ressources exclusives"
          ].map((f, i) => (
            <div key={i} className="bg-zinc-900 p-8 rounded-3xl hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-3">{f}</h3>
              <p className="text-zinc-400">
                Outils pour développer ton activité efficacement.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 bg-zinc-950" id="pricing">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Tarifs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-zinc-900 p-8 rounded-3xl">
              <h3 className="text-3xl font-bold">Essentiel</h3>
              <div className="text-5xl font-bold my-6">9€</div>
              <p className="text-zinc-400">Accès base Discord</p>
            </div>

            <div className="bg-yellow-500 text-black p-8 rounded-3xl scale-105">
              <h3 className="text-3xl font-bold">Premium</h3>
              <div className="text-5xl font-bold my-6">25€</div>
              <p>Accès VIP + outils</p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-3xl">
              <h3 className="text-3xl font-bold">Pro</h3>
              <div className="text-5xl font-bold my-6">75€</div>
              <p className="text-zinc-400">Coaching avancé</p>
            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-bold text-center mb-12">
          FAQ
        </h2>

        {faqs.map(([q, a], i) => (
          <div key={i} className="mb-4 bg-zinc-900 rounded-2xl">

            <button
              className="w-full p-5 text-left font-bold"
              onClick={() => setFaqOpen(faqOpen === i ? null : i)}
            >
              {q}
            </button>

            {faqOpen === i && (
              <div className="p-5 text-zinc-400">{a}</div>
            )}

          </div>
        ))}

      </section>

      {/* CTA */}
      <section className="text-center py-24">

        <h2 className="text-5xl font-bold mb-6">
          Rejoins ResellScale
        </h2>

        <a
          href="https://discord.gg/E5eyTa5FRf"
          className="bg-yellow-500 text-black px-10 py-5 rounded-2xl font-bold"
        >
          🚀 Discord
        </a>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-10 text-center text-zinc-500">
        © 2026 ResellScale
      </footer>

    </div>
  );
}