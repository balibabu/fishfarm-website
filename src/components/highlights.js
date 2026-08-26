const HIGHLIGHTS = [
  {
    icon: 'layers',
    title: '3 Pond System',
    subtitle: '1 Nursery + 2 Huge Ponds',
    iconClasses: 'bg-blue-50 text-blue-600',
  },
  {
    icon: 'wheat',
    title: 'Natural Feed',
    subtitle: 'Mustard Cake & Rice Bran',
    iconClasses: 'bg-amber-50 text-amber-600',
  },
  {
    icon: 'store',
    title: 'Farm Pickup',
    subtitle: 'Weighed Live in Front of You',
    iconClasses: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: 'users',
    title: 'B2B & Bulk',
    subtitle: 'Wholesale & Group Buyers',
    iconClasses: 'bg-purple-50 text-purple-600',
  },
]

export function renderHighlights() {
  const cards = HIGHLIGHTS.map(
    (item) => `
    <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3">
      <div class="p-2.5 ${item.iconClasses} rounded-xl shrink-0">
        <i data-lucide="${item.icon}" class="w-5 h-5"></i>
      </div>
      <div>
        <h4 class="font-bold font-heading text-slate-900 text-sm">${item.title}</h4>
        <p class="text-xs text-slate-500 mt-0.5">${item.subtitle}</p>
      </div>
    </div>
  `
  ).join('')

  return `
    <section class="max-w-6xl mx-auto px-4 py-2">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        ${cards}
      </div>
    </section>
  `
}
