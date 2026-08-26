export function renderNavbar(data) {
  return `
    <header class="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
      <div class="max-w-6xl mx-auto px-4 py-3.5 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-200">
            <i data-lucide="fish" class="w-6 h-6"></i>
          </div>
          <div>
            <h1 class="text-lg sm:text-xl font-extrabold font-heading text-slate-900 tracking-tight" data-slot="farm-name">${data.farmName}</h1>
            <p class="text-xs text-slate-500 font-medium">${data.tagline}</p>
          </div>
        </div>

        <div class="hidden sm:flex items-center gap-2.5">
          <a data-slot="call-btn" href="#" class="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-4 py-2 rounded-xl text-sm transition">
            <i data-lucide="phone" class="w-4 h-4 text-blue-600"></i>
            <span>Call Now</span>
          </a>
          <a data-slot="wa-btn" href="#" target="_blank" rel="noopener" class="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl text-sm shadow-sm transition">
            <i data-lucide="message-circle" class="w-4 h-4"></i>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  `
}
