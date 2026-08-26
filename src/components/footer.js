export function renderFooter(data) {
  return `
    <footer class="bg-slate-900 text-slate-400 py-6 border-t border-slate-800 text-xs text-center">
      <div class="max-w-6xl mx-auto px-4 space-y-1.5">
        <p class="text-slate-200 font-bold font-heading text-sm" data-slot="farm-name">${data.farmName}</p>
        <p>Naturally Raised Freshwater Fish • Direct Earthen Pond Harvest</p>
        <p class="text-slate-500 pt-2">© ${new Date().getFullYear()} ${data.farmName}. All rights reserved.</p>
      </div>
    </footer>
  `
}
