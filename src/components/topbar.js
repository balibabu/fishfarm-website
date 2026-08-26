export function renderTopbar(data) {
  return `
    <div class="bg-slate-900 text-white text-xs py-2 px-4">
      <div class="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div class="flex items-center gap-2 font-medium">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span data-slot="harvest-notice">Upcoming harvest alert loading...</span>
        </div>
        <div class="flex items-center gap-4 text-slate-300">
          <a data-slot="map-link" href="#" target="_blank" rel="noopener" class="flex items-center gap-1 hover:text-white transition">
            <i data-lucide="map-pin" class="w-3.5 h-3.5 text-emerald-400"></i> Open in Maps
          </a>
          <span class="flex items-center gap-1">
            <i data-lucide="clock" class="w-3.5 h-3.5 text-emerald-400"></i> ${data.openingHours}
          </span>
        </div>
      </div>
    </div>
  `
}
