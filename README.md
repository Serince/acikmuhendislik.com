# acikmuhendislik.com

Açık kaynak mühendislik yazılımları için öğrencilerin hazırladığı Türkçe video dersler.
[Astro](https://astro.build) + [Starlight](https://starlight.astro.build) ile üretilen statik site; içerik Markdown dosyalarıdır.

## Geliştirme

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/ klasörüne statik çıktı
```

## İçerik yapısı

```
src/content/docs/
├─ index.mdx                 ana sayfa
├─ buradan-basla.md          yol haritası
├─ katkida-bulun.md          ders ekleme rehberi
├─ hakkimizda.mdx            ekip
├─ fem/<kurs>/<ders>.md      FEM kursları (prepomax, freecad-fem, salome-meca, calculix-fem, ...)
├─ cfd/<kurs>/<ders>.md      CFD kursları (freecad-cfd, openfoam-temel, helyxos-cfd)
├─ acik-donanim/<ders>.md
└─ freecad-makro/<ders>.md
```

Ders dosyası örneği ve alanların açıklaması için `src/content/docs/katkida-bulun.md` dosyasına bakın.
Kurs menüsü `astro.config.mjs` içindeki `sidebar` bölümünden yönetilir; yeni bir kurs klasörü açarsanız oraya bir satır ekleyin.

## İçerik paneli (Pages CMS)

`.pages.yml` dosyası [Pages CMS](https://pagescms.org) için hazırdır. Depo GitHub'a yüklendikten sonra
<https://app.pagescms.org> adresine GitHub ile giriş yapın, depoyu seçin; "Dersler" bölümünden form ile ders ekleyebilirsiniz.
Ders ekleyecek öğrencileri GitHub deposuna *collaborator* olarak davet etmeniz yeterlidir.

## Yayınlama (Cloudflare Pages)

1. Bu klasörü GitHub'a gönderin.
2. Cloudflare Pages → Create project → Connect to Git → depoyu seçin.
3. Framework preset: **Astro** (build: `npm run build`, output: `dist`).
4. Custom domains → `acikmuhendislik.com` ekleyin.

Her `git push` (veya Pages CMS'ten her kayıt) siteyi otomatik yeniden derler.

## Eski siteden kurtarma

`scripts/kurtar.mjs`, Wayback Machine ve YouTube'dan toplanan `kurtarma-paketi.json` verisinden ders dosyalarını üretti.
`DOGRULANACAK.md` içindeki 8 ders için video eşleşmesi elle kontrol edilmelidir.
# acikmuhendislik.com
# acikmuhendislik.com
