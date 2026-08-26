export function renderMobileBar() {
  return `
    <div class="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-2 sm:hidden flex gap-2 shadow-2xl">
      <a data-slot="call-btn" href="#" class="flex-1 bg-slate-900 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-xs shadow">
        <i data-lucide="phone" class="w-4 h-4"></i>
        <span>Call Farm</span>
      </a>
      <a data-slot="wa-btn" href="#" target="_blank" rel="noopener" class="flex-1 bg-emerald-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-xs shadow">
        <i data-lucide="message-circle" class="w-4 h-4"></i>
        <span>WhatsApp</span>
      </a>
    </div>
  `
}
