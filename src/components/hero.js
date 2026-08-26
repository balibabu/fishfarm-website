export function renderHero(data) {
  return `
    <section class="max-w-6xl mx-auto px-4 pt-6 pb-6">
      <div class="bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div class="max-w-2xl relative z-10 space-y-4">
          <div class="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <i data-lucide="leaf" class="w-3.5 h-3.5"></i>
            ${data.hero.badge}
          </div>

          <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight leading-tight">
            ${data.hero.title} <br><span class="text-yellow-400">${data.hero.titleHighlight}</span>
          </h2>

          <p class="text-slate-300 text-sm sm:text-base font-normal leading-relaxed max-w-xl">
            ${data.hero.description}
          </p>

          <div class="pt-2 flex flex-wrap gap-3">
            <a data-slot="call-btn" href="#" class="flex-1 sm:flex-initial inline-flex justify-center items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow transition text-sm">
              <i data-lucide="phone-call" class="w-4 h-4"></i>
              <span>Call: <span data-slot="phone-text">${data.phoneNumber}</span></span>
            </a>
            <a data-slot="wa-btn" href="#" target="_blank" rel="noopener" class="flex-1 sm:flex-initial inline-flex justify-center items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl shadow transition text-sm">
              <i data-lucide="message-circle" class="w-4 h-4"></i>
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `
}
