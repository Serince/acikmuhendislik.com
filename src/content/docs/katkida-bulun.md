---
title: Ders Nasıl Eklenir?
description: Açık Mühendislik'e yeni bir video ders eklemek için adım adım rehber.
---

Bu site tamamen Markdown dosyalarından oluşur ve GitHub'da durur. Ders eklemek için **iki yol** var.

## Yol 0 – Site içi panel (en kolayı, kod yok)

1. Videonuzu kendi YouTube kanalınıza yükleyin.
2. Sitenin **`/admin.html`** adresini açın (ör. `https://acikmuhendislik.com/admin.html`).
3. İlk kutuya GitHub **token'ınızı** bir kez girin (tarayıcınız hatırlar, kimseye gitmez).
4. Formu doldurun: başlık, kurs, sıra numarası, YouTube video ID'si (`watch?v=` sonrası 11 karakter), adınız ve ders notları.
5. **Kaydet ve Yayınla** deyin. Site 1–2 dakika içinde kendini günceller.

## Yol 1 – Pages CMS (alternatif panel)

1. Videonuzu kendi YouTube kanalınıza yükleyin.
2. Site yöneticisinden GitHub deposuna **davet** isteyin (GitHub hesabınız olmalı).
3. [app.pagescms.org](https://app.pagescms.org) adresine GitHub ile giriş yapın ve `acikmuhendislik.com` deposunu seçin.
4. Sol menüden **Dersler** → ilgili kurs klasörünü seçin → **Add entry**.
5. Formu doldurun: başlık, sıra numarası, YouTube video ID'si (`watch?v=` sonrası 11 karakter), adınız, kanal linkiniz ve kısa açıklama.
6. **Save** deyin. Değişiklik GitHub'a işlenir ve site 1–2 dakika içinde kendini günceller.

## Yol 2 – Doğrudan dosya (Git bilenler için)

İlgili kurs klasörüne bir `.md` dosyası ekleyin, örneğin `src/content/docs/fem/prepomax/prepomax-temas-analizi.md`:

```md
---
title: "PrePoMax ile Temas (Contact) Analizi"
description: "İki parça arasında sürtünmeli temas tanımlama."
sidebar:
  order: 7            # kurs içindeki sırası
youtube: "dQw4w9WgXcQ" # YouTube video ID
yazar: "Ad Soyad"
yazarKanal: "https://www.youtube.com/@kanaliniz"
yazilim: "PrePoMax"
tarih: 2026-01-15
---

Bu derste iki parça arasında sürtünmeli temas tanımlanır ve sonuçlar
analitik çözümle karşılaştırılır.

## Bu derste
- Contact pair oluşturma
- Sürtünme katsayısı
- Yakınsama ayarları
```

Sonra pull request açın. Derleme otomatik çalışır; zorunlu bir alan eksikse hata mesajında hangi dosya ve alan olduğu yazar.

## Kurallar

- Bir ders = bir video (birden fazla bölüm varsa `youtube:` alanına liste verebilirsiniz).
- Başlıklar Türkçe, yazılım adları orijinal yazımıyla (FreeCAD, CalculiX, Salome-Meca, PrePoMax, OpenFOAM).
- Kullandığınız yazılım sürümünü açıklamaya yazın.
- Ders dosyalarını, videoları ve modelleri paylaşmak isterseniz GitHub bağlantısı ekleyin.
