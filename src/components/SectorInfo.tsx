import { Waves, Home, Lock, Droplets, Bed, AirVent } from 'lucide-react';

export default function SectorInfo() {
  return (
    <div className="bg-gradient-to-br from-cyan-500 via-teal-600 to-emerald-600 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
      <div className="flex items-center gap-3 mb-6">
        <Waves className="w-10 h-10 text-cyan-200" />
        <h2 className="text-3xl md:text-4xl font-bold">REFÚGIO ATLÂNTIDA</h2>
      </div>

      <p className="text-xl md:text-2xl font-semibold mb-6 text-cyan-50">
        Exclusividade e Conforto Absoluto
      </p>

      <p className="text-lg leading-relaxed mb-6 text-white/95">
        O Refúgio Atlântida é o espaço perfeito para quem busca viver o evento com máximo conforto, privacidade e sofisticação.
      </p>

      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/20">
        <p className="text-lg leading-relaxed mb-6">
          Neste setor, você terá acesso a um bangalô exclusivo, equipado com ar-condicionado, proporcionando um ambiente agradável durante todo o evento. O espaço conta com cama para descanso, porta com chave garantindo total segurança e privacidade, além de banheiro privativo com ducha quente para uma experiência completa.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-2 bg-white/10 rounded-lg p-3">
            <AirVent className="w-5 h-5 text-cyan-200" />
            <span className="text-sm font-medium">Ar-condicionado</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 rounded-lg p-3">
            <Bed className="w-5 h-5 text-cyan-200" />
            <span className="text-sm font-medium">Cama</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 rounded-lg p-3">
            <Lock className="w-5 h-5 text-cyan-200" />
            <span className="text-sm font-medium">Porta com chave</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 rounded-lg p-3">
            <Home className="w-5 h-5 text-cyan-200" />
            <span className="text-sm font-medium">Banheiro privativo</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 rounded-lg p-3 col-span-2 md:col-span-1">
            <Droplets className="w-5 h-5 text-cyan-200" />
            <span className="text-sm font-medium">Ducha quente</span>
          </div>
        </div>
      </div>

      <p className="text-lg leading-relaxed mb-6">
        Ideal para quem quer curtir intensamente, mas também ter um refúgio reservado para relaxar com conforto e tranquilidade.
      </p>

      <div className="bg-gradient-to-r from-yellow-400 to-amber-400 text-gray-900 rounded-xl p-6 font-semibold text-lg text-center">
        ✨ Viva o evento no seu ritmo, com uma experiência única e diferenciada.
      </div>
    </div>
  );
}
