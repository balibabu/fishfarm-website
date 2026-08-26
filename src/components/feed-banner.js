export function renderFeedBanner() {
  return `
    <section class="max-w-6xl mx-auto px-4 py-4">
      <div class="bg-gradient-to-r from-emerald-800 to-teal-900 rounded-3xl p-6 sm:p-7 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-5">
        <div class="space-y-1.5 text-center md:text-left">
          <div class="inline-flex items-center gap-1.5 bg-emerald-500/30 text-emerald-200 border border-emerald-400/30 px-2.5 py-0.5 rounded-full text-xs font-bold">
            <i data-lucide="scale" class="w-3.5 h-3.5"></i>
            We Buy Raw Fish Feed
          </div>
          <h3 class="text-xl sm:text-2xl font-extrabold font-heading">Sell Us Your Mustard Cake (Khali) or Rice Bran (Dhuto)</h3>
          <p class="text-emerald-100 text-xs sm:text-sm max-w-xl">
            Own a rice mill or oil mill? We purchase quality scraps regularly at fair rates. Get in touch with our farm directly.
          </p>
        </div>
        <a data-slot="feed-wa-btn" href="#" target="_blank" rel="noopener" class="whitespace-nowrap bg-white text-emerald-950 hover:bg-emerald-50 font-bold px-5 py-3 rounded-xl shadow transition text-sm flex items-center gap-2">
          <i data-lucide="message-circle" class="w-4 h-4 text-emerald-600"></i>
          <span>Offer Your Feed Supply</span>
        </a>
      </div>
    </section>
  `
}
