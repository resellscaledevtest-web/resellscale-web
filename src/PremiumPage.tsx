import React, { useState } from "react";

export default function PremiumPage() {
  const [code, setCode] = useState("");
  const [access, setAccess] = useState(false);

  const ACCESS_CODE = "RESELLSCALE2026";

  const checkAccess = () => {
    if (code === ACCESS_CODE) setAccess(true);
    else alert("Code invalide");
  };

  if (!access) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <div className="bg-zinc-900 p-8 rounded-3xl w-full max-w-md">
          <h1 className="text-4xl font-bold mb-4">🔐 Espace Premium</h1>
          <p className="text-zinc-400 mb-6">
            Entrez votre code d'accès ResellScale.
          </p>

          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Code d'accès"
            className="w-full p-3 rounded-xl bg-zinc-800 mb-4"
          />

          <button
            onClick={checkAccess}
            className="w-full bg-yellow-500 text-black font-bold p-3 rounded-xl"
          >
            Accéder
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">💎 Centre Premium ResellScale</h1>
        <p className="text-zinc-400 mb-10">
          Ressources, outils et documents réservés aux membres Premium.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-zinc-900 rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-3">🎯 Débuter</h2>
            <ul className="space-y-2 text-zinc-300">
              <li>✓ Guide de démarrage</li>
              <li>✓ Organisation des ventes</li>
              <li>✓ Gestion du budget</li>
              <li>✓ Checklist débutant</li>
            </ul>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-3">📝 Messages</h2>
            <textarea
              className="w-full h-40 bg-zinc-800 p-3 rounded-xl"
              readOnly
              value={`Bonjour,\n\nMerci pour votre message.\nJe reste disponible pour toute question.\n\nCordialement.`}
            />
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-3">📦 Expédition</h2>
            <ul className="space-y-2 text-zinc-300">
              <li>✓ Préparation colis</li>
              <li>✓ Suivi commandes</li>
              <li>✓ Archivage ventes</li>
              <li>✓ Checklist envoi</li>
            </ul>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-3">📸 Optimisation</h2>
            <ul className="space-y-2 text-zinc-300">
              <li>✓ Photos de qualité</li>
              <li>✓ Descriptions efficaces</li>
              <li>✓ Titres clairs</li>
              <li>✓ Présentation professionnelle</li>
            </ul>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-3">💰 Rentabilité</h2>
            <p className="text-zinc-300">
              Utilise un calculateur pour suivre :
            </p>
            <ul className="mt-3 space-y-2">
              <li>• Prix d'achat</li>
              <li>• Prix de vente</li>
              <li>• Bénéfice</li>
              <li>• ROI</li>
            </ul>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-3">📊 Tableau de Suivi</h2>
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th>Article</th>
                  <th>Coût</th>
                  <th>Vente</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Exemple</td>
                  <td>10€</td>
                  <td>20€</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-3">🎓 Formation</h2>
            <ul className="space-y-2">
              <li>Module 1 : Organisation</li>
              <li>Module 2 : Annonces</li>
              <li>Module 3 : Relation client</li>
              <li>Module 4 : Finances</li>
            </ul>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-3">🏆 VIP</h2>
            <ul className="space-y-2">
              <li>✓ Ressources exclusives</li>
              <li>✓ Accès anticipé</li>
              <li>✓ Événements privés</li>
              <li>✓ Nouveautés Premium</li>
            </ul>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-3">❓ FAQ Premium</h2>
            <p className="text-zinc-300">
              Conseils, organisation, suivi des ventes et bonnes pratiques.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
