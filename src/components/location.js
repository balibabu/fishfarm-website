export function renderLocation(data) {
  return `
    <section class="max-w-6xl mx-auto px-4 py-6">
      <div class="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div class="space-y-4">
          <div class="inline-flex items-center gap-1.5 text-blue-600 font-bold text-xs uppercase tracking-wider">
            <i data-lucide="map-pin" class="w-4 h-4"></i> Location & Farm Pickup
          </div>
          <h3 class="text-2xl font-extrabold font-heading text-slate-900">How To Visit The Farm</h3>

          <div class="space-y-2.5 text-slate-700 text-xs sm:text-sm font-medium">
            <div class="flex items-start gap-2.5">
              <div class="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</div>
              <p><b class="text-slate-900">Farm Gate Pickup:</b> Buyers visit during designated catch hours to pick up live/fresh fish.</p>
            </div>
            <div class="flex items-start gap-2.5">
              <div class="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</div>
              <p><b class="text-slate-900">Direct Weighing:</b> All fish are weighed on-site in front of you.</p>
            </div>
            <div class="flex items-start gap-2.5">
              <div class="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</div>
              <p><b class="text-slate-900">Payment:</b> In-person cash or QR mobile banking payment at the farm.</p>
            </div>
          </div>

          <div class="pt-2 flex flex-col sm:flex-row gap-2.5">
            <a data-slot="map-link" href="#" target="_blank" rel="noopener" class="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-3 rounded-xl transition text-sm shadow">
              <i data-lucide="navigation" class="w-4 h-4"></i>
              <span>Open in Google Maps</span>
            </a>
            <a data-slot="call-btn" href="#" class="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-5 py-3 rounded-xl transition text-sm border border-slate-300">
              <i data-lucide="phone" class="w-4 h-4 text-blue-600"></i>
              <span>Call for Directions</span>
            </a>
          </div>
        </div>

        <a data-slot="map-link" href="#" target="_blank" rel="noopener" class="group bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-2xl h-56 sm:h-64 flex flex-col items-center justify-center p-6 text-center transition cursor-pointer">
          <div class="p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition duration-200 mb-2">
            <i data-lucide="map-pinned" class="w-8 h-8 text-blue-600"></i>
          </div>
          <h5 class="font-bold font-heading text-slate-900 text-sm sm:text-base">${data.farmName}</h5>
          <p class="text-xs text-slate-500 mt-1">Click to view location on Google Maps</p>
          <span class="mt-3 inline-flex items-center gap-1 text-xs font-bold text-blue-600">
            Get Navigation <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </span>
        </a>
      </div>
    </section>
  `
}
