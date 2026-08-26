export function renderHarvestAlert() {
  return `
    <section class="max-w-6xl mx-auto px-4 py-4">
      <div class="bg-amber-50 border border-amber-300 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="p-2.5 bg-amber-500 text-white rounded-xl shrink-0">
            <i data-lucide="calendar-check" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="inline-block bg-amber-200/80 text-amber-950 text-xs font-bold px-2 py-0.5 rounded">
              Next Net Catch Operation
            </div>
            <p class="text-sm sm:text-base font-bold text-slate-900 mt-0.5" data-slot="harvest-notice">
              Loading harvest schedule...
            </p>
          </div>
        </div>
        <a data-slot="wa-btn" href="#" target="_blank" rel="noopener" class="w-full sm:w-auto text-center whitespace-nowrap bg-slate-900 hover:bg-slate-800 text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition shadow-sm">
          Reserve Your Order
        </a>
      </div>
    </section>
  `
}
