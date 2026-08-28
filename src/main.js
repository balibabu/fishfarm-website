import './style.css'
import { createIcons } from 'lucide'
import { icons } from './icons.js'
import { loadFarmData } from './services/cms.js'
import { renderTopbar } from './components/topbar.js'
import { renderNavbar } from './components/navbar.js'
import { renderHero } from './components/hero.js'
import { renderHighlights } from './components/highlights.js'
import { renderHarvestAlert } from './components/harvest-alert.js'
import { renderFishVarieties } from './components/fish-varieties.js'
import { renderFeedBanner } from './components/feed-banner.js'
import { renderGallery } from './components/gallery.js'
import { renderYouTube, setupYouTube } from './components/youtube.js'
import { renderLocation } from './components/location.js'
import { renderFooter } from './components/footer.js'
import { renderMobileBar } from './components/mobile-bar.js'
import { waLink, telLink } from './utils/links.js'

function applyDynamicLinks(data) {
  const tel = telLink(data.phoneNumber)
  const wa = waLink(
    data.whatsappNumber,
    `Hello, I would like to inquire about buying fresh fish from ${data.farmName}.`
  )
  const feedWa = waLink(
    data.whatsappNumber,
    'Hello, I have mustard cake (khali) / rice bran (dhuto) to sell for your fish feed.'
  )

  document.querySelectorAll('[data-slot="call-btn"]').forEach((el) => (el.href = tel))
  document.querySelectorAll('[data-slot="wa-btn"]').forEach((el) => (el.href = wa))
  document.querySelector('[data-slot="feed-wa-btn"]').href = feedWa
  document.querySelectorAll('[data-slot="map-link"]').forEach((el) => (el.href = data.mapUrl))
  document
    .querySelectorAll('[data-slot="harvest-notice"]')
    .forEach((el) => (el.textContent = data.harvestNotice))
}

function renderApp(data) {
  const app = document.getElementById('app')
  app.innerHTML = [
    renderTopbar(data),
    renderNavbar(data),
    renderHero(data),
    renderHighlights(data),
    renderHarvestAlert(data),
    renderFishVarieties(data),
    renderFeedBanner(data),
    renderGallery(data),
    renderYouTube(data),
    renderLocation(data),
    renderFooter(data),
    renderMobileBar(data),
  ].join('')

  applyDynamicLinks(data)
  setupYouTube()
  createIcons({ icons })

  app.classList.add('animate-[fadeIn_0.4s_ease-out]')
}

async function init() {
  const data = await loadFarmData()
  renderApp(data)
}

init()
