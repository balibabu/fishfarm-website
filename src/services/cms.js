import FARM_DATA from '../data/farm-data.js'

const FIREBASE_CONFIG = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
}

const SETTINGS_DOC = 'settings'

function isConfigured() {
  return Boolean(FIREBASE_CONFIG.projectId)
}

async function fetchFromFirestore() {
  const [{ initializeApp, getFirestore, doc, getDoc, collection, getDocs, query, orderBy, limit }] =
    await Promise.all([import('firebase/app'), import('firebase/firestore')])

  const db = getFirestore(initializeApp(FIREBASE_CONFIG))

  const settingsSnapshot = await getDoc(doc(db, 'site', SETTINGS_DOC))
  const settings = settingsSnapshot.exists() ? settingsSnapshot.data() : {}

  const fetchCollection = async (name) => {
    const snapshot = await getDocs(query(collection(db, name), orderBy('order', 'asc'), limit(50)))
    return snapshot.docs.map((entry) => ({ id: entry.id, ...entry.data() }))
  }

  const [fishes, gallery, videos] = await Promise.all([
    fetchCollection('fishes'),
    fetchCollection('gallery'),
    fetchCollection('videos'),
  ])

  return { settings, fishes, gallery, videos }
}

export async function loadFarmData() {
  if (!isConfigured()) return FARM_DATA

  try {
    const { settings, fishes, gallery, videos } = await fetchFromFirestore()

    return {
      ...FARM_DATA,
      ...settings,
      fishes: fishes.length > 0 ? fishes : FARM_DATA.fishes,
      gallery: gallery.length > 0 ? gallery : FARM_DATA.gallery,
      videos: videos.length > 0 ? videos : FARM_DATA.videos,
    }
  } catch {
    return FARM_DATA
  }
}
