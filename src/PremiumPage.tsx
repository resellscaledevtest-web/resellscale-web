import React, { useState } from "react";

export default function PremiumPage() {
  const [code, setCode] = useState("");
  const [access, setAccess] = useState(false);

  const [selectedTab, setSelectedTab] = useState("dashboard");

  const [buyPrice, setBuyPrice] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);
  const [fees, setFees] = useState(0);

  const profit = sellPrice - buyPrice - fees;
  const roi = buyPrice > 0 ? ((profit / buyPrice) * 100).toFixed(1) : "0";

  const ACCESS_CODE = "RESELLSCALE2026";

  if (!access) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="bg-zinc-900 p-8 rounded-3xl w-full max-w-md">
          <h1 className="text-4xl font-bold mb-4">🔐 Espace Premium</h1>
          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Code d'accès"
            className="w-full p-3 rounded-xl bg-zinc-800 mb-4"
          />
          <button
            onClick={() => {
              if (code === ACCESS_CODE) setAccess(true);
              else alert("Code invalide");
            }}
            className="w-full bg-yellow-500 text-black p-3 rounded-xl font-bold"
          >
            Accéder
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex">
      <aside className="w-72 bg-zinc-950 border-r border-zinc-800 p-5">
        <h1 className="text-3xl font-bold text-yellow-400 mb-8">
          💎 ResellScale
        </h1>

        {["dashboard","guides","calculator","templates","vip","faq"].map((item) => (
          <button
            key={item}
            onClick={() => setSelectedTab(item)}
            className={`w-full text-left p-3 rounded-xl mb-2 ${
              selectedTab === item
                ? "bg-yellow-500 text-black"
                : "bg-zinc-900"
            }`}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </aside>

      <main className="flex-1 p-8">

        {selectedTab === "dashboard" && (
          <>
            <h2 className="text-5xl font-bold mb-6">Dashboard Premium</h2>

            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-zinc-900 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-yellow-400">100+</div>
                <div>Guides</div>
              </div>

              <div className="bg-zinc-900 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-yellow-400">VIP</div>
                <div>Accès Premium</div>
              </div>

              <div className="bg-zinc-900 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-yellow-400">24/7</div>
                <div>Support</div>
              </div>

              <div className="bg-zinc-900 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-yellow-400">∞</div>
                <div>Ressources</div>
              </div>
            </div>
          </>
        )}

        {selectedTab === "guides" && (
          <div>
            <h2 className="text-5xl font-bold mb-6">📚 Guides Premium</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-zinc-900 p-6 rounded-2xl">Guide débutant</div>
              <div className="bg-zinc-900 p-6 rounded-2xl">Optimisation annonces</div>
              <div className="bg-zinc-900 p-6 rounded-2xl">Gestion ventes</div>
              <div className="bg-zinc-900 p-6 rounded-2xl">Organisation complète</div>
            </div>
          </div>
        )}

        {selectedTab === "calculator" && (
          <div>
            <h2 className="text-5xl font-bold mb-6">💰 Calculateur</h2>

            <div className="grid md:grid-cols-3 gap-4">
              <input
                type="number"
                placeholder="Prix d'achat"
                className="bg-zinc-900 p-4 rounded-xl"
                onChange={(e) => setBuyPrice(Number(e.target.value))}
              />

              <input
                type="number"
                placeholder="Prix de vente"
                className="bg-zinc-900 p-4 rounded-xl"
                onChange={(e) => setSellPrice(Number(e.target.value))}
              />

              <input
                type="number"
                placeholder="Frais"
                className="bg-zinc-900 p-4 rounded-xl"
                onChange={(e) => setFees(Number(e.target.value))}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-zinc-900 p-6 rounded-2xl">
                <h3 className="text-xl font-bold">Bénéfice</h3>
                <p className="text-4xl text-green-400">{profit.toFixed(2)}€</p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-2xl">
                <h3 className="text-xl font-bold">ROI</h3>
                <p className="text-4xl text-yellow-400">{roi}%</p>
              </div>
            </div>
          </div>
        )}

        {selectedTab === "templates" && (
          <div>
            <h2 className="text-5xl font-bold mb-6">📝 Modèles</h2>
            <textarea
              readOnly
              className="w-full h-64 bg-zinc-900 p-4 rounded-xl"
              value={`Bonjour,\n\nMerci pour votre message.\nJe reste disponible pour toute question.\n\nCordialement.`}
            />
          </div>
        )}

        {selectedTab === "vip" && (
          <div>
            <h2 className="text-5xl font-bold mb-6">🏆 Espace VIP</h2>
            <div className="bg-zinc-900 p-6 rounded-2xl">
              Ressources exclusives, nouveautés et accès anticipé.
            </div>
          </div>
        )}

        {selectedTab === "faq" && (
          <div>
            <h2 className="text-5xl font-bold mb-6">❓ FAQ</h2>
            <div className="space-y-4">
              <div className="bg-zinc-900 p-6 rounded-2xl">
                Comment optimiser ses annonces ?
              </div>
              <div className="bg-zinc-900 p-6 rounded-2xl">
                Comment suivre sa rentabilité ?
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
