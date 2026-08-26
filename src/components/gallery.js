import { escapeHtml } from '../utils/links.js'

export function renderGallery(data) {
  const items = data.gallery
    .map((item) => {
      const title = escapeHtml(item.title)
      const url = escapeHtml(item.url)

      return `
        <div class="group relative rounded-xl overflow-hidden h-36 bg-slate-200 border border-slate-200">
          <img src="${url}" alt="${title}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2.5">
            <span class="text-white text-xs font-semibold">${title}</span>
          </div>
        </div>
      `
    })
    .join('')

  return `
    <section class="max-w-6xl mx-auto px-4 py-6">
      <div class="mb-4">
        <span class="text-blue-600 font-bold text-xs uppercase tracking-wider">Farm Gallery</span>
        <h3 class="text-xl sm:text-2xl font-extrabold font-heading text-slate-900">Ponds & Harvesting Highlights</h3>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
        ${items}
      </div>
    </section>
  `
}
