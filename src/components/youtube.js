import { escapeHtml } from '../utils/links.js'

export function renderYouTube(data) {
  const videos = data.videos ?? []

  if (videos.length === 0) return ''

  const cards = videos
    .map((video) => {
      const videoId = escapeHtml(video.videoId)
      const title = escapeHtml(video.title)

      return `
        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div class="relative aspect-video bg-slate-900" data-youtube-card="${videoId}">
            <button type="button" class="group absolute inset-0 w-full h-full" data-youtube-play aria-label="Play ${title}">
              <img src="https://i.ytimg.com/vi/${videoId}/hqdefault.jpg" alt="${title}" loading="lazy" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition">
              <span class="absolute inset-0 flex items-center justify-center">
                <span class="w-14 h-10 bg-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-red-500 transition">
                  <i data-lucide="play" class="w-5 h-5 text-white fill-white"></i>
                </span>
              </span>
              <span class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 to-transparent p-3 pt-8 text-left">
                <span class="text-white text-xs font-bold line-clamp-1">${title}</span>
              </span>
            </button>
          </div>
        </div>
      `
    })
    .join('')

  return `
    <section class="max-w-6xl mx-auto px-4 py-6">
      <div class="mb-4">
        <span class="text-blue-600 font-bold text-xs uppercase tracking-wider">Watch Us On YouTube</span>
        <h3 class="text-xl sm:text-2xl font-extrabold font-heading text-slate-900">Farm Videos & Harvest Highlights</h3>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        ${cards}
      </div>
    </section>
  `
}

export function setupYouTube() {
  document.querySelectorAll('[data-youtube-play]').forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('[data-youtube-card]')
      const videoId = card.getAttribute('data-youtube-card')
      const iframe = document.createElement('iframe')
      iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`
      iframe.title = card.querySelector('img')?.alt ?? 'YouTube video'
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      iframe.allowFullscreen = true
      iframe.className = 'absolute inset-0 w-full h-full'
      iframe.referrerPolicy = 'strict-origin-when-cross-origin'
      button.replaceWith(iframe)
    })
  })
}
