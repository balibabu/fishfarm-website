import { waLink, escapeHtml } from '../utils/links.js'

export function renderFishVarieties(data) {
  const cards = data.fishes
    .map((fish) => {
      const inquiryUrl = waLink(
        data.whatsappNumber,
        `Hello, I want to inquire about the price and availability of "${fish.bhojpuriName}".`
      )
      const name = escapeHtml(fish.bhojpuriName)
      const commonName = escapeHtml(fish.commonName)
      const avgWeight = escapeHtml(fish.avgWeight)
      const description = escapeHtml(fish.description)
      const status = escapeHtml(fish.status)
      const image = escapeHtml(fish.image)

      return `
        <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
          <div>
            <div class="relative h-44 w-full bg-slate-100 overflow-hidden">
              <img src="${image}" alt="${name}" loading="lazy" class="w-full h-full object-cover">
              <span class="absolute top-2.5 right-2.5 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
                ${status}
              </span>
            </div>

            <div class="p-4 space-y-2.5">
              <div>
                <h4 class="text-base font-extrabold font-heading text-slate-900">${name}</h4>
                <p class="text-xs text-blue-600 font-semibold">${commonName}</p>
              </div>

              <div class="bg-slate-50 p-2 rounded-xl border border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span>Avg Weight:</span>
                <span class="text-slate-900 font-bold">${avgWeight}</span>
              </div>

              <p class="text-slate-500 text-xs leading-relaxed">
                ${description}
              </p>
            </div>
          </div>

          <div class="p-4 pt-0">
            <a href="${inquiryUrl}" target="_blank" rel="noopener" class="w-full bg-slate-50 hover:bg-emerald-600 text-slate-700 hover:text-white font-bold py-2 px-3 rounded-xl text-xs transition flex items-center justify-center gap-1.5 border border-slate-200 hover:border-transparent">
              <i data-lucide="message-circle" class="w-3.5 h-3.5"></i>
              <span>Inquire Price / Order</span>
            </a>
          </div>
        </div>
      `
    })
    .join('')

  return `
    <section class="max-w-6xl mx-auto px-4 py-6">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-5 gap-1">
        <div>
          <span class="text-blue-600 font-bold text-xs uppercase tracking-wider">Available Species</span>
          <h3 class="text-2xl font-extrabold font-heading text-slate-900">Fish Varieties & Details</h3>
        </div>
        <p class="text-xs text-slate-500 font-medium">* Prices follow current market rates per kg</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        ${cards}
      </div>
    </section>
  `
}
