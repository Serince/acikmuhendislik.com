// Wayback + YouTube kurtarma verisinden Starlight Markdown dersleri üretir.
// Kullanım: node scripts/kurtar.mjs ../kurtarma-paketi.json
import fs from 'node:fs';
import path from 'node:path';

const src = process.argv[2] || '../kurtarma-paketi.json';
const B = JSON.parse(fs.readFileSync(src, 'utf8'));
const DOCS = path.resolve('src/content/docs');

// Yazarlar (Hakkımızda sayfasındaki ekip + oEmbed'den gelen kanal adları)
const yazar = {
  pakrad: ['Pakrad Amini', 'https://www.youtube.com/@muhendislik1012'],
  nuri: ['Nuri Taytan', 'https://www.youtube.com/@nuritaytan7838'],
  nedir: ['Nedir Ymamov', 'https://www.youtube.com/@nedir.y'],
  sarp: ['Sarp Gürenli', 'https://www.youtube.com/@sarpgurenli3218'],
  ugur: ['Uğur Can', 'https://www.youtube.com/@ugurcan4366'],
  can: ['Can Karaca Kantarcı', 'https://www.youtube.com/@cankantarc6507'],
  kenan: ['Kenan Aslan', 'https://www.youtube.com/@kenanaslan1702'],
  ahmetozkan: ['Ahmet Özkan Canlı', 'https://www.youtube.com/@AhmetOzkanCanli'],
  bahar: ['Bahar Ebru Ezer', 'https://www.youtube.com/@baharebruezer6894'],
  berat: ['Berat Yağmur', 'https://www.youtube.com/@beratyyagmur'],
  erencan: ['Erencan Kahveci', 'https://www.youtube.com/@Cankahveci78'],
  asena: ['Asena Çataloluk', 'https://www.youtube.com/@asenacataloluk2419'],
  furkan: ['Furkan Arıkan', 'https://www.youtube.com/@FurkanAr%C4%B1kan-y2f'],
  fatih: ['Fatih Yegül', 'https://www.youtube.com/@FatihYegul-ix1td'],
  huseyin: ['Hüseyin Kürşad Namlı', 'https://www.youtube.com/@huseyinkursadnamli1015'],
  volkan: ['Volkan Bayrak', 'https://www.youtube.com/@volkanbayrak8896'],
  efsun: ['Efsun Sultan Bulut', 'https://www.youtube.com/@efsltn'],
  ahmetemre: ['Ahmet Emre Yüksel', 'https://www.youtube.com/@ahmetemreyuksel3694'],
  ibrahim: ['İbrahim Halil Bedük', 'https://www.youtube.com/@engineer-e4y'],
  mouhammad: ['Mouhammad Almoukaddam', 'https://www.youtube.com/@acikmuhendislik'],
  ercanli: ['İbrahim Furkan Ercanlı', 'https://www.youtube.com/@fercanl2442'],
  batuhan: ['Batuhan Tangut', 'https://www.youtube.com/@Askleipos'],
};

// slug -> { kurs, sira, youtube, yazar, title?, dogrulama? }
// youtube verilmezse Wayback'ten kurtarılan ID kullanılır.
const M = {
  // ---------- FreeCAD FEM (Ağu–Ara 2021) ----------
  '2021/08/27/freecad-cubuk-egilme-analizi': { k: 'fem/freecad-fem', s: 1, yt: 'K2KMLyhuC6I', y: 'nuri', t: 'FreeCAD Çubuk Eğilme Analizi', d: true },
  '2021/09/01/freecad-fem-shell-eleman-analizi': { k: 'fem/freecad-fem', s: 2, yt: 'B2BRT8-ubfI', y: 'nuri', t: 'FreeCAD FEM Shell Eleman Analizi' },
  '2021/09/02/gmsh-kurulumu': { k: 'fem/freecad-fem', s: 3, yt: 'zmV5pgyh0H8', y: 'pakrad', t: 'Gmsh Kurulumu' },
  '2021/09/02/freecad-fem-cekme-analizi': { k: 'fem/freecad-fem', s: 4, yt: 'na5uT3bA9Ww', y: 'pakrad', t: 'FreeCAD FEM Çekme Analizi', d: true },
  '2021/09/06/fem-shell': { k: 'fem/freecad-fem', s: 5, yt: 'qOuUmdu8P28', y: 'pakrad', t: 'FreeCAD FEM Shell Kalınlığı Tanımlama' },
  '2021/09/07/freecad-fem-cubuk-kesiti-tanimlama': { k: 'fem/freecad-fem', s: 6, yt: '1icWkfumE3g', y: 'pakrad', t: 'FreeCAD FEM Çubuk Kesiti Tanımlama' },
  '2021/09/15/destekli-levha-analizi': { k: 'fem/freecad-fem', s: 7, yt: 'F2D6Xviyeq4', y: 'pakrad', t: 'Destekli Levha Analizi' },
  '2021/09/23/freecad-femde-contact-ve-displacement-tanimlama': { k: 'fem/freecad-fem', s: 8, yt: 'iC7Wgn4brsQ', y: 'pakrad', t: "FreeCAD FEM'de Contact ve Displacement Tanımlama" },
  '2021/09/24/freecad-femde-mesh-yakinsama-calismasi': { k: 'fem/freecad-fem', s: 9, yt: 'rGmVwVlQcDc', y: 'pakrad', t: "FreeCAD FEM'de Mesh Yakınsama Çalışması" },
  '2021/09/30/freecadde-bolgesel-mesh-ve-basinc': { k: 'fem/freecad-fem', s: 10, yt: '5pI6JxVbuvA', y: 'pakrad', t: "FreeCAD'de Bölgesel Mesh ve Basınç" },
  '2021/10/07/freecadde-hidrostatik-basinc-olusturma': { k: 'fem/freecad-fem', s: 11, yt: '2yIBtQQGhTU', y: 'pakrad', t: "FreeCAD'de Hidrostatik Basınç Oluşturma" },
  '2021/10/12/simetri-sarti-ve-kesit-goruntuleme': { k: 'fem/freecad-fem', s: 12, yt: 'n6lI5Oh688A', y: 'pakrad', t: 'Simetri Şartı ve Kesit Görüntüleme' },
  '2021/12/21/freecadde-dogal-frekans-analizi': { k: 'fem/freecad-fem', s: 13, yt: 'JC4quVrbMzU', y: 'pakrad', t: "FreeCAD'de Doğal Frekans Analizi" },

  // ---------- CalculiX ----------
  '2021/09/01/linuxda-calculix-yazilimini-kurma': { k: 'fem/calculix-fem', s: 1, yt: 'kQXc8mUNtBI', y: 'nuri', t: "Linux'ta CalculiX Yazılımını Kurma" },
  '2021/09/01/calculixde-1d-ve-2d-elemanlara-kalinlik-ve-genislik-tanimlama': { k: 'fem/calculix-fem', s: 2, yt: '4cidlH_5uq4', y: 'nuri', t: "CalculiX'te 1D ve 2D Elemanlara Kalınlık ve Genişlik Tanımlama" },
  '2021/09/01/calculixde-s8r-ve-b32r-elemanlarla-statik-analiz': { k: 'fem/calculix-fem', s: 3, yt: 'GUUwWGDgplQ', y: 'nuri', t: "CalculiX'te S8R ve B32R Elemanlarla Statik Analiz" },

  // ---------- Salome-Meca ----------
  '2021/09/10/linuxda-salome-meca-kurulumu': { k: 'fem/salome-meca', s: 1, yt: 'S5bdkfmysIY', y: 'nedir', t: "Linux'ta Salome-Meca Kurulumu" },
  '2023/11/06/windowsda-salome-meca-kurulumu': { k: 'fem/salome-meca', s: 2, y: 'furkan' },
  '2021/10/07/salome-mecada-bir-boyutlu-kiris-analizi': { k: 'fem/salome-meca', s: 3, yt: '3VdiaGF3ILg', y: 'nedir', t: "Salome-Meca'da Bir Boyutlu Kiriş Analizi" },
  '2021/10/08/salome-meca-da-basit-kiris-analiz': { k: 'fem/salome-meca', s: 4, yt: 'cSnKw6veQMc', y: 'nedir', t: "Salome-Meca'da Basit Kiriş Analizi" },
  '2021/10/08/salome-mecada-2': { k: 'fem/salome-meca', s: 5, yt: 'cKOQudfSDR0', y: 'nedir', t: "Salome-Meca'da Yüzeye Kalınlık Verme", d: true },
  '2021/10/21/salome-mecada-destekli-levha-analizi': { k: 'fem/salome-meca', s: 6, yt: 'wuK-eEX7KMs', y: 'nedir', t: "Salome-Meca'da Destekli Levha Analizi" },
  '2021/10/25/farkli-boyutlarda-meshleme': { k: 'fem/salome-meca', s: 7, yt: 'jBa1Nu03BUE', y: 'nedir', t: 'Farklı Boyutlarda Meshleme', d: true },
  '2021/11/06/salomede-simetri-sarti-olusturma': { k: 'fem/salome-meca', s: 8, yt: '-9wg2_YXnv4', y: 'nedir', t: "Salome'de Simetri Şartı Oluşturma" },
  '2021/11/06/salomede-contact-ve-displacement': { k: 'fem/salome-meca', s: 9, yt: 'Y22CzBakxEc', y: 'nedir', t: "Salome'de Contact ve Displacement" },
  '2021/11/06/salomede-eleman-dikme': { k: 'fem/salome-meca', s: 10, yt: 'QOjy8fzaUCM', y: 'nedir', t: "Salome'de Eleman Dikme (Mesh Yüzeylerini Birleştirme)", d: true },
  '2021/11/06/salomede-hidrostatik-basinc': { k: 'fem/salome-meca', s: 11, yt: 'iLYpeSQkGJ8', y: 'nedir', t: "Salome'de Hidrostatik Basınç" },
  '2021/11/22/kirise-kesit-tanimlama': { k: 'fem/salome-meca', s: 12, yt: '_mSXJXkNOds', y: 'nedir', t: 'Kirişe Kesit Tanımlama (Hollanda Profili)', d: true },
  '2021/11/22/2d-ve-1d-elemanlari-birlikte-tanimlama': { k: 'fem/salome-meca', s: 13, yt: 'tXtglZG2uKw', y: 'nedir', t: '2D ve 1D Elemanları Birlikte Tanımlama', d: true },
  '2021/11/23/salomede-mesh-yakinsama-calismasi': { k: 'fem/salome-meca', s: 14, yt: 'uGH4kIurres', y: 'nedir', t: "Salome'de Mesh Yakınsama Çalışması" },
  '2021/11/23/salomede-dogal-frekans-analizi': { k: 'fem/salome-meca', s: 15, yt: 'REHiCAhyJBk', y: 'nedir', t: "Salome'de Doğal Frekans Analizi" },
  '2024/07/24/salome-mecada-harmonik-titresim-analizi': { k: 'fem/salome-meca', s: 16, y: 'mouhammad' },

  // ---------- PrePoMax ----------
  '2023/05/11/prepomax-kurulumu-cubuk-egilme-analizi': { k: 'fem/prepomax', s: 1, y: 'bahar' },
  '2023/05/29/prepomax-ile-burulma-analizi': { k: 'fem/prepomax', s: 2, y: 'bahar' },
  '2023/06/19/modal-ve-harmonik-analiz': { k: 'fem/prepomax', s: 3, y: 'bahar' },
  '2024/04/17/prepomax-kabuk-eleman-analizi': { k: 'fem/prepomax', s: 4, y: 'huseyin' },
  '2024/04/17/prepomax-kabuk-eleman-kalinlik-tanimlama': { k: 'fem/prepomax', s: 5, y: 'huseyin' },
  '2024/05/03/prepomaxda-kuvvet-turleri': { k: 'fem/prepomax', s: 6, y: 'efsun' },

  // ---------- FreeCAD Burkulma ----------
  '2023/05/15/freecadde-burkulma-analizi': { k: 'fem/freecad-burkulma', s: 1, y: 'berat' },
  '2023/06/15/freecadde-burkulma-analizi-2': { k: 'fem/freecad-burkulma', s: 2, y: 'berat' },

  // ---------- FEMbyGEN ----------
  '2022/11/18/fembygen-kurulumu-ve-braket-analizi': { k: 'fem/fembygen', s: 1, y: 'ahmetozkan' },
  '2024/05/01/topoloji-optimizasyonu': { k: 'fem/fembygen', s: 2, y: 'volkan' },
  '2024/06/20/parametrik-dizaynda-istatistiksel-karar-verme': { k: 'fem/fembygen', s: 3, y: 'ibrahim' },

  // ---------- OpenRadioss ----------
  '2024/05/20/openradioss-hyperview-ve-paraview-kurulumu-ornek-analizler': { k: 'fem/openradioss', s: 1, y: 'ahmetemre' },

  // ---------- FreeCAD CFD ----------
  '2021/10/13/freecad-cfdof-kurulumu': { k: 'cfd/freecad-cfd', s: 1, yt: 'qCBrJcmU47w', y: 'pakrad', t: 'FreeCAD CfdOF Kurulumu' },
  '2021/10/17/freecadde-boru-ici-akis': { k: 'cfd/freecad-cfd', s: 2, yt: 'ExaZYYXO8O0', y: 'pakrad', t: "FreeCAD'de Boru İçi Akış" },
  '2021/10/21/laminer-akis-analizi': { k: 'cfd/freecad-cfd', s: 3, yt: 'a-_7xTDceOE', y: 'pakrad', t: 'Laminer Akış Analizi' },
  '2021/10/29/akis-modelin-bolgesel-mesh': { k: 'cfd/freecad-cfd', s: 4, yt: 'DMu34HYh_ac', y: 'pakrad', t: 'Akış Modelinde Bölgesel Mesh (Boundary Layer)' },
  '2021/11/02/dis-akis-analizi': { k: 'cfd/freecad-cfd', s: 5, yt: 'ph0C_yQilyk', y: 'pakrad', t: 'Dış Akış Analizi' },
  '2021/11/06/hex-mesh-ve-gozenekli': { k: 'cfd/freecad-cfd', s: 6, yt: 'Je0E-zQNY04', y: 'pakrad', t: 'Hex Mesh ve Gözenekli Bölge' },
  '2021/11/14/terma': { k: 'cfd/freecad-cfd', s: 7, yt: 'sJ5g0S9RF6s', y: 'pakrad', t: 'Sabit Sıcaklıkta Termal Analiz' },
  '2022/06/20/surgulu-valf-analizi-ve-y-gosterimi': { k: 'cfd/freecad-cfd', s: 8, y: 'kenan' },
  '2023/05/29/y-hesaplama-ve-mesh-iyilestirme': { k: 'cfd/freecad-cfd', s: 9, y: 'erencan' },
  '2024/06/21/cift-fazli-akis-analizi': { k: 'cfd/freecad-cfd', s: 10, y: 'ercanli' },
  '2025/01/31/kcs-cift-fazli-akis-analizi': { k: 'cfd/freecad-cfd', s: 11, y: 'batuhan' },
  '2025/02/03/darpa-denizalti-analizi': { k: 'cfd/freecad-cfd', s: 12, y: 'batuhan' },

  // ---------- HelyxOS ----------
  '2021/12/21/linuxda-helyx-os-kurulumu': { k: 'cfd/helyxos-cfd', s: 1, yt: 'DxplTKr2E6c', y: 'sarp', t: "Linux'ta HELYX-OS Kurulumu" },

  // ---------- OpenFOAM ----------
  '2022/01/28/openfoam-v4-1-kurulumu': { k: 'cfd/openfoam-temel', s: 1, yt: 'DxA2ihyLokI', y: 'sarp', t: 'OpenFOAM v4.1 Kurulumu (Ubuntu)' },
  '2022/01/28/openfoam-egitimi-1-gun-1-bolum': { k: 'cfd/openfoam-temel', s: 2, yt: 'u5QnBGE-DRE', y: 'ugur', t: 'OpenFOAM Eğitimi – 1. Gün 1. Bölüm' },
  '2022/01/28/openfoam-egitimi-1-gun-1-bolum-2': { k: 'cfd/openfoam-temel', s: 3, yt: 'd7QQmIpAzX0', y: 'ugur', t: 'OpenFOAM Eğitimi – 1. Gün 2. Bölüm' },
  '2022/01/28/openfoam-egitimi-2-gun-1-bolum': { k: 'cfd/openfoam-temel', s: 4, yt: 'Sbc1JQLKvhE', y: 'ugur', t: 'OpenFOAM Eğitimi – 2. Gün 1. Bölüm' },
  '2022/01/28/openfoam-egitimi-2-gun-2-bolum': { k: 'cfd/openfoam-temel', s: 5, yt: 'jwqWpNLFXZU', y: 'ugur', t: 'OpenFOAM Eğitimi – 2. Gün 2. Bölüm' },
  '2022/01/29/openfoam-egitimi-3-gun-1-bolum': { k: 'cfd/openfoam-temel', s: 6, yt: 'zEBIXNo2Yuc', y: 'ugur', t: 'OpenFOAM Eğitimi – 3. Gün 1. Bölüm' },
  '2022/01/29/openfoam-egitimi-3-gun-2-bolum': { k: 'cfd/openfoam-temel', s: 7, yt: 'aTYbAFox5oY', y: 'ugur', t: 'OpenFOAM Eğitimi – 3. Gün 2. Bölüm' },
  '2022/01/29/openfoam-egitimi-3-gun-3-bolum': { k: 'cfd/openfoam-temel', s: 8, yt: '_WUBTW_UYzI', y: 'ugur', t: 'OpenFOAM Eğitimi – 3. Gün 3. Bölüm' },

  // ---------- Açık Donanım ----------
  '2022/06/20/arduino-ile-yari-otonom-tekne-tasarimi': { k: 'acik-donanim', s: 1, yt: ['tdpd9_HsV-o', 'i3n_Lcj0wfI', 'LraMBl4vgOs', 'R27JORq-vmA'], y: 'pakrad', t: 'Arduino ile Yarı Otonom Tekne Tasarımı' },
  '2022/07/19/cop-kapar-tekne-tasarimi': { k: 'acik-donanim', s: 2, y: 'can' },
  '2024/07/03/goruntu-isleme-destekli-yon-tayini': { k: 'acik-donanim', s: 3, yt: null, y: 'ibrahim', t: 'Görüntü İşleme Destekli Yön Tayini', d: true },

  // ---------- FreeCAD Makro ----------
  '2023/06/15/parametrik-cfd-analizi-ve-makro-yazma': { k: 'freecad-makro', s: 1, y: 'asena' },
  '2024/01/22/freecadde-makro-ile-gemi-kesiti-cizme': { k: 'freecad-makro', s: 2, y: 'fatih' },
  '2024/03/05/freecadde-makro-ile-animasyon': { k: 'freecad-makro', s: 3, y: 'pakrad' },
};

const yazilimOf = (k) => ({
  'fem/freecad-fem': 'FreeCAD FEM', 'fem/calculix-fem': 'CalculiX', 'fem/salome-meca': 'Salome-Meca', 'fem/prepomax': 'PrePoMax',
  'fem/freecad-burkulma': 'FreeCAD FEM', 'fem/fembygen': 'FreeCAD FEMbyGEN', 'fem/openradioss': 'OpenRadioss',
  'cfd/freecad-cfd': 'FreeCAD CfdOF', 'cfd/helyxos-cfd': 'HELYX-OS', 'cfd/openfoam-temel': 'OpenFOAM',
  'acik-donanim': 'Açık Donanım', 'freecad-makro': 'FreeCAD Makro',
})[k];

const esc = (s) => String(s).replace(/"/g, '\\"');
const clean = (s) => s.replace(/\s+/g, ' ').trim();

let n = 0, dogrulanacak = [];
for (const [slugPath, m] of Object.entries(M)) {
  const r0 = B.results[slugPath + '/'];
  const r = r0 && r0.status === 200 ? r0 : null; // 404 arşiv sayfalarını yoksay
  const slug = slugPath.split('/').slice(3).join('/');
  const [yy, mm, dd] = slugPath.split('/');
  const title = m.t || (r && r.title) || slug;
  let yt = m.yt !== undefined ? m.yt : (r && r.yt && r.yt.length ? (r.yt.length === 1 ? r.yt[0] : r.yt) : null);
  const [yName, yUrl] = yazar[m.y] || ['', ''];

  // Wayback'ten gelen açıklama metni (varsa)
  let body = '';
  if (r && r.blocks && r.blocks.length) {
    const paras = r.blocks
      .filter((b) => b.tag === 'p' && b.text.length > 40 && !/çerez|cookie|GDPR|Powered by|var |function|E-posta adresiniz|yayınlanmayacak|Yorum|yanıt yazın/i.test(b.text))
      .map((b) => clean(b.text.replace(/\[?\s*(sonraki|önceki)\b.*$/i, '')))
      .filter((t) => t.length > 40);
    body = [...new Set(paras)].slice(0, 4).join('\n\n');
  }
  // Yazıdaki dış bağlantılar (indirme, GitHub vb.)
  if (r && r.ext && r.ext.length) {
    const links = r.ext.filter((u) => !/youtube\.com|youtu\.be|linkedin|twitter|instagram|t\.me|techpy|facebook|wp-content|gravatar|w3\.org|schema\.org|google|wordpress|neve|themeisle|archive\\.org|archive-it|openlibrary/i.test(u));
    if (links.length) body += (body ? '\n\n' : '') + '### Bağlantılar\n\n' + links.map((u) => `- <${u}>`).join('\n');
  }
  if (!body) body = `Bu ders **${yName || 'ekibimiz'}** tarafından hazırlanmıştır. Videoyu izledikten sonra sorularınızı [Telegram grubumuzda](https://t.me/acikmuhendislik) sorabilirsiniz.`;

  const fm = [
    '---',
    `title: "${esc(title)}"`,
    r && r.desc ? `description: "${esc(clean(r.desc).slice(0, 155))}"` : `description: "${esc(title)} – ${yazilimOf(m.k)} video dersi."`,
    `sidebar:\n  order: ${m.s}`,
    yt ? (Array.isArray(yt) ? `youtube:\n${yt.map((i) => `  - "${i}"`).join('\n')}` : `youtube: "${yt}"`) : null,
    yName ? `yazar: "${esc(yName)}"` : null,
    yUrl ? `yazarKanal: "${yUrl}"` : null,
    `yazilim: "${yazilimOf(m.k)}"`,
    `tarih: ${yy}-${mm}-${dd}`,
    m.d ? 'dogrulama: true' : null,
    '---',
  ].filter(Boolean).join('\n');

  const extra = !yt ? '\n\n:::caution[Video bulunamadı]\nBu dersin videosu arşivde/kanalda bulunamadı. `youtube:` alanına video ID\'sini ekleyin.\n:::\n' : '';
  const file = path.join(DOCS, m.k, `${slug}.md`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${fm}\n\n${body}${extra}\n`);
  n++;
  if (m.d) dogrulanacak.push(`${m.k}/${slug}.md — ${title}${yt ? ` (video: ${Array.isArray(yt) ? yt.join(',') : yt})` : ' (video yok)'}`);
}

// Hakkımızda: ekip
const team = B.team || [];
const yt2handle = (u) => u;
const ekip = team.map((t) => {
  const links = t.links.filter((l) => !l.url.startsWith('mailto:')).map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.type}</a>`).join(' ');
  return `  <div class="ekip-kart"><h3>${t.fname} ${t.lname}</h3><p>${t.desc}</p>${links}</div>`;
}).join('\n');
fs.writeFileSync(path.join(DOCS, 'hakkimizda.mdx'), `---
title: Hakkımızda
description: Açık Mühendislik ekibi ve amacımız.
tableOfContents: false
---

## Biz kimiz

Bu site herhangi bir kâr amacı gütmeden, sadece bilginin yayılması amacıyla kurulmuştur. İçerikleri istediğiniz gibi kullanabilir, paylaşabilirsiniz. Amacımız, ticari mühendislik programlarının alternatifi olan **açık kaynak mühendislik uygulamalarını** tanıtmak ve kullanımını artırmak için olabildiğince kolay anlaşılır eğitici videolar hazırlamaktır. Bu sitede anlatılan programların tamamı ücretsiz ve açık kaynak kodludur.

Lütfen paylaşımlarla ilgili geri bildirim vererek çalışmalarımızın iyileştirilmesine yardımcı olun: [Telegram grubu](https://t.me/acikmuhendislik).

## Ekip

<div class="ekip">
${ekip}
</div>
`);

console.log(`${n} ders yazıldı. Doğrulanacak: ${dogrulanacak.length}`);
fs.writeFileSync(path.resolve('DOGRULANACAK.md'), `# Elle doğrulanması gereken eşleşmeler\n\nBu dersler Wayback Machine'de tekil sayfa olarak arşivlenmemişti; video eşleşmesi başlık benzerliği ve yayın tarihine göre yapıldı.\n\n${dogrulanacak.map((d) => `- [ ] ${d}`).join('\n')}\n`);
