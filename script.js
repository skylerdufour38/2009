const apps = [
  {
    name: 'Animal Sounds',
    bundleId: 'com.smartbabyapps.animalsounds',
    version: '2.0',
    platform: 'iOS',
    minimumOs: '3.1',
    ipaFile: 'Animal Sounds 2.0.ipa',
    sizeMB: 19.8,
    bundlePath: 'Payload/Animal Sounds.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'SoundTouch',
    bundleId: 'com.yourcompany.SoundTouch',
    version: '1.4',
    platform: 'iOS',
    minimumOs: '3.0',
    ipaFile: 'SoundTouch 1.4.ipa',
    sizeMB: 155.5,
    bundlePath: 'Payload/SoundTouch.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Tozzle',
    bundleId: 'com.nodeflexion.Tozzle',
    version: '3.7',
    platform: 'iOS',
    minimumOs: '3.1.3',
    ipaFile: 'Tozzle 3.7.ipa',
    sizeMB: 112.6,
    bundlePath: 'Payload/Tozzle.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'AutismXpress',
    bundleId: 'X7WS995LSR.com.StudioEmotion.AutismXpress',
    version: '1.0',
    platform: 'iOS',
    minimumOs: '3.1.2',
    ipaFile: 'AutismXpress 1.0.ipa',
    sizeMB: 7.4,
    bundlePath: 'Payload/AutismXpress.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Lunchbox',
    bundleId: 'com.thup.MonkeyPreschool',
    version: '1.4',
    platform: 'iOS',
    minimumOs: '3.0',
    ipaFile: 'Lunchbox 1.4.ipa',
    sizeMB: 13.7,
    bundlePath: 'Payload/Lunchbox.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Peek-a-Zoo',
    bundleId: 'com.duckduckmoosedesign.peekazoo',
    version: '1.1.1',
    platform: 'iOS',
    minimumOs: '3.0',
    ipaFile: 'Peek-a-Zoo 1.1.1.ipa',
    sizeMB: 19.1,
    bundlePath: 'Payload/Peek-a-Zoo.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Michigan Nature Sounds',
    bundleId: 'com.yourcompany.MichiganNatureSounds',
    version: '1.0',
    platform: 'iOS',
    minimumOs: '3.0',
    ipaFile: 'Michigan Nature Sounds 1.0.ipa',
    sizeMB: 24.6,
    bundlePath: 'Payload/Michigan Nature Sounds.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Peek-a-Zoo',
    bundleId: 'com.tbd.pazCLL',
    version: '1.0',
    platform: 'iOS',
    minimumOs: '3.0',
    ipaFile: 'Peek-a-Zoo 1.0.ipa',
    sizeMB: 24.6,
    bundlePath: 'Payload/Peek-a-Zoo.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Artsee',
    bundleId: 'com.britejar.artsee',
    version: '1.1',
    platform: 'iOS',
    minimumOs: '2.2',
    ipaFile: 'Artsee 1.1.ipa',
    sizeMB: 12.4,
    bundlePath: 'Payload/Artsee.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Angry Birds',
    bundleId: 'com.rovio.AngryBirdsHalloween',
    version: '1.5.3',
    platform: 'iOS',
    minimumOs: '3.0',
    ipaFile: 'Angry Birds 1.5.3.ipa',
    sizeMB: 16.8,
    bundlePath: 'Payload/Angry Birds.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Farm Flip Fun',
    bundleId: 'lv.yapp.farmflipfun',
    version: '1.0',
    platform: 'iOS',
    minimumOs: '3.0',
    ipaFile: 'Farm Flip Fun 1.0.ipa',
    sizeMB: 10.6,
    bundlePath: 'Payload/Farm Flip Fun.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Farm Story',
    bundleId: 'com.teamlava.farmstory',
    version: '1.2',
    platform: 'iOS',
    minimumOs: '3.0',
    ipaFile: 'Farm Story 1.2.ipa',
    sizeMB: 19.9,
    bundlePath: 'Payload/Farm Story.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Stickers',
    bundleId: 'com.nightanddaystudios.ericcarlestickers',
    version: '1.0',
    platform: 'iOS',
    minimumOs: '5.0',
    ipaFile: 'Stickers 1.0.ipa',
    sizeMB: 206.1,
    bundlePath: 'Payload/Stickers.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Forest',
    bundleId: 'com.nightanddaystudios.peekabooforest',
    version: '1.1.0',
    platform: 'iOS',
    minimumOs: '3.1.3',
    ipaFile: 'Forest 1.1.0.ipa',
    sizeMB: 25.6,
    bundlePath: 'Payload/Forest.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Virtuoso',
    bundleId: 'com.peterb.virtuosopianofree',
    version: '3.1.2',
    platform: 'iOS',
    minimumOs: '4.0',
    ipaFile: 'Virtuoso 3.1.2.ipa',
    sizeMB: 19.9,
    bundlePath: 'Payload/Virtuoso.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'ABC Tracer',
    bundleId: 'com.appzoo.ABCTracer',
    version: '1.8',
    platform: 'iOS',
    minimumOs: '2.2.1',
    ipaFile: 'ABC Tracer 1.8.ipa',
    sizeMB: 20.9,
    bundlePath: 'Payload/ABC Tracer.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Peek Wild',
    bundleId: 'com.nightanddaystudios.peekaboowild',
    version: '2.0.1',
    platform: 'iOS',
    minimumOs: '3.1.3',
    ipaFile: 'Peek Wild 2.0.1.ipa',
    sizeMB: 9.8,
    bundlePath: 'Payload/Peek Wild.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Peekaboo',
    bundleId: 'com.nightanddaystudios.peekaboobarn',
    version: '2.0',
    platform: 'iOS',
    minimumOs: '2.2',
    ipaFile: 'Peekaboo 2.0.ipa',
    sizeMB: 3.6,
    bundlePath: 'Payload/Peekaboo.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Finding Sight',
    bundleId: 'my.finding3',
    version: '2.1',
    platform: 'iOS',
    minimumOs: '3.2',
    ipaFile: 'Finding Sight 2.1.ipa',
    sizeMB: 34,
    bundlePath: 'Payload/Finding Sight.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'ArtikPix',
    bundleId: 'com.rinnapps.artikpix.iap',
    version: '1.2.4',
    platform: 'iOS',
    minimumOs: '3.1',
    ipaFile: 'ArtikPix 1.2.4.ipa',
    sizeMB: 41.4,
    bundlePath: 'Payload/ArtikPix.app',
    archiveType: 'App Store Package'
  }
];

const appGrid = document.getElementById('app-grid');
const searchInput = document.getElementById('search');
const sortSelect = document.getElementById('sort');

const compareVersions = (a, b) => {
  const pa = a.version.split('.').map(Number);
  const pb = b.version.split('.').map(Number);
  const length = Math.max(pa.length, pb.length);

  for (let i = 0; i < length; i++) {
    const va = pa[i] ?? 0;
    const vb = pb[i] ?? 0;
    if (va !== vb) return vb - va;
  }

  return 0;
};

const formatSize = (sizeMB) => `${Number(sizeMB).toFixed(1).replace(/\.0$/, '')} MB`;

const getVisibleApps = () => {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = apps.filter((app) => {
    const haystack = `${app.name} ${app.bundleId} ${app.ipaFile} ${app.minimumOs}`.toLowerCase();
    return haystack.includes(query);
  });

  const sorted = [...filtered];
  const sortMode = sortSelect.value;

  if (sortMode === 'size-desc') {
    sorted.sort((a, b) => b.sizeMB - a.sizeMB);
  } else if (sortMode === 'size-asc') {
    sorted.sort((a, b) => a.sizeMB - b.sizeMB);
  } else if (sortMode === 'version-desc') {
    sorted.sort(compareVersions);
  } else {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  }

  return sorted;
};

const renderApps = () => {
  const visibleApps = getVisibleApps();
  appGrid.innerHTML = visibleApps
    .map(
      (app) => `
        <article class="app-card">
          <div class="app-header">
            <h2 class="app-name">${app.name}</h2>
            <span class="platform-badge">${app.platform}</span>
          </div>
          <p class="bundle-id">${app.bundleId}</p>

          <dl class="info-grid">
            <div class="info-block">
              <dt>Version</dt>
              <dd>${app.version}</dd>
            </div>
            <div class="info-block">
              <dt>Min iOS</dt>
              <dd>${app.minimumOs}</dd>
            </div>
            <div class="info-block">
              <dt>Size</dt>
              <dd>${formatSize(app.sizeMB)}</dd>
            </div>
            <div class="info-block">
              <dt>Archive</dt>
              <dd>${app.archiveType}</dd>
            </div>
          </dl>

          <div class="package-meta">
            <div><strong>IPA File:</strong> ${app.ipaFile}</div>
            <div><strong>Bundle Path:</strong> ${app.bundlePath}</div>
          </div>
        </article>
      `
    )
    .join('');

  const totalSize = visibleApps.reduce((sum, app) => sum + app.sizeMB, 0);
  document.getElementById('app-count').textContent = visibleApps.length;
  document.getElementById('total-size').textContent = `${totalSize.toFixed(1).replace(/\.0$/, '')} MB`;

  if (!visibleApps.length) {
    appGrid.innerHTML = '<article class="app-card"><h2 class="app-name">No matches found</h2><p class="bundle-id">Try another search term or reset the filter.</p></article>';
  }
};

searchInput.addEventListener('input', renderApps);
sortSelect.addEventListener('change', renderApps);
renderApps();
