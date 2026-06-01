
import React, { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  useEffect(() => {
    const i = setInterval(() => {
      setCount((v) => (v < 2500 ? v + 10 : v));
    }, 15);
    return () => clearInterval(i);
  }, []);

  const faqs = [
    ["Comment rejoindre ResellScale ?", "Clique sur le bouton Discord."],
    ["Quels avantages Premium ?", "Ressources, VIP, support prioritaire."],
    ["Y a-t-il des mises à jour ?", "Oui, régulièrement."],
    ["Comment contacter le support ?", "Via ticket Discord."]
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,#3b2a00,transparent_40%)]" />

      <header className="sticky top-0 backdrop-blur border-b border-zinc-800 bg-black/70">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-2xl">💎 ResellScale</div>
          <div className="flex gap-3">
            <a href="#pricing" className="px-4 py-2 rounded-xl border border-zinc-700">Tarifs</a>
            <a href="https://discord.gg/E5eyTa5FRf" className="px-4 py-2 rounded-xl bg-yellow-500 text-black font-bold">
              Discord
            </a>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="inline-block px-4 py-2 rounded-full border border-yellow-700 text-yellow-400 mb-6">
          🚀 Plateforme Resell Vinted
        </div>

        <h1 className="text-7xl font-extrabold leading-tight">
          Développe ton activité
          <span className="block text-yellow-400">avec ResellScale</span>
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-xl text-zinc-400">
          Une communauté premium, des ressources exclusives, des guides,
          des outils et un accompagnement conçu pour les revendeurs.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a href="https://discord.gg/E5eyTa5FRf" className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-2xl">
            Rejoindre maintenant
          </a>
          <a href="#features" className="border border-zinc-700 px-8 py-4 rounded-2xl">
            Découvrir
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">
        {[
          [count + "+", "Membres"],
          ["24/7", "Support"],
          ["100+", "Ressources"],
          ["VIP", "Accès Premium"],
        ].map(([v, t], i) => (
          <div key={i} className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-8 text-center">
            <div className="text-4xl font-bold text-yellow-400">{v}</div>
            <div className="text-zinc-400 mt-2">{t}</div>
          </div>
        ))}
      </section>

      <section id="features" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold text-center mb-16">Fonctionnalités</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["Guides Premium","Communauté Discord","Ressources Exclusives","Support Rapide","Salons VIP","Mises à Jour"].map((f,i)=>(
            <div key={i} className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-8 hover:scale-105 transition">
              <h3 className="text-2xl font-bold mb-4">{f}</h3>
              <p className="text-zinc-400">
                Développe ton activité grâce à des ressources et conseils dédiés.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-zinc-950" id="pricing">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">Tarifs</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 rounded-3xl p-8">
              <h3 className="text-3xl font-bold">Essentiel</h3>
              <div className="text-6xl font-bold my-8">9€</div>
              <ul className="space-y-3 text-zinc-400">
                <li>✓ Guides</li>
                <li>✓ Discord</li>
                <li>✓ Support</li>
              </ul>
            </div>

            <div className="bg-yellow-500 text-black rounded-3xl p-8 scale-105 shadow-2xl">
              <div className="font-bold mb-3">PLUS POPULAIRE</div>
              <h3 className="text-3xl font-bold">Premium</h3>
              <div className="text-6xl font-bold my-8">25€</div>
              <ul className="space-y-3">
                <li>✓ Tout Essentiel</li>
                <li>✓ VIP</li>
                <li>✓ Ressources Premium</li>
                <li>✓ Priorité</li>
              </ul>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-8">
              <h3 className="text-3xl font-bold">Pro</h3>
              <div className="text-6xl font-bold my-8">75€</div>
              <ul className="space-y-3 text-zinc-400">
                <li>✓ Tout Premium</li>
                <li>✓ Accompagnement</li>
                <li>✓ Accès anticipé</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold text-center mb-16">Avis des membres</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Excellent serveur !","Très utile pour progresser.","Communauté sérieuse."].map((a,i)=>(
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p>{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold text-center mb-12">FAQ</h2>
        {faqs.map(([q,a],i)=>(
          <div key={i} className="mb-4 bg-zinc-900 rounded-2xl border border-zinc-800">
            <button
              className="w-full p-5 text-left font-bold"
              onClick={()=>setFaqOpen(faqOpen===i?null:i)}
            >
              {q}
            </button>
            {faqOpen===i && <div className="p-5 pt-0 text-zinc-400">{a}</div>}
          </div>
        ))}
      </section>

      <section className="text-center py-24 px-6">
        <h2 className="text-6xl font-bold mb-6">Prêt à passer au niveau supérieur ?</h2>
        <p className="text-zinc-400 mb-8">Rejoins la communauté ResellScale dès aujourd'hui.</p>
        <a href="https://discord.gg/E5eyTa5FRf" className="bg-yellow-500 text-black px-10 py-5 rounded-2xl font-bold">
          🚀 Rejoindre Discord
        </a>
      </section>

      <footer className="border-t border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-3">ResellScale</h3>
            <p className="text-zinc-500">La plateforme des revendeurs modernes.</p>
          </div>
          <div><h3 className="font-bold mb-3">Produit</h3><p>Premium</p><p>Discord</p></div>
          <div><h3 className="font-bold mb-3">Légal</h3><p>/terms</p><p>/privacy</p></div>
          <div><h3 className="font-bold mb-3">Support</h3><p>Tickets Discord</p></div>
        </div>
      </footer>
    </div>
  );
}
