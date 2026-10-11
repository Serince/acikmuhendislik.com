---
title: "Basit Şaft Transient Analizi"
description: "Salome-Meca'da basit şaft üzerinde transient (zamana bağlı) analiz."
sidebar:
  order: 2
youtube: "8uo0P-GGiPI"
yazar: "Muhammet Ali Akyüz"
yazarKanal: "https://www.youtube.com/@muhammetali-g7v"
yazilim: "Salome-Meca"
tarih: 2026-09-17
---
Bu derste, Salome-Meca ortamında basit bir şaft modelinin zamana bağlı (transient) dinamik analiz adımları ele alınmaktadır. Süreç, şaft geometrisinin Shaper veya Geometry modülünde hazırlanması ya da içe aktarılmasıyla başlayıp, dinamik davranışı doğru yakalayacak uygun ağ (mesh) yapısının SMESH modülünde oluşturulmasıyla devam eder. Code_Aster arayüzünde malzemeye ait elastik özelliklerin yanı sıra dinamik analiz için kritik olan yoğunluk ve sönüm parametrelerinin tanımlanması üzerinde durulur. Şaftın yataklama noktalarına karşılık gelen sınır şartları ile zamana bağlı değişen dinamik yüklerin (tork, kuvvet veya devir gibi) sisteme atanması incelenir. Çözüm aşamasında zaman adımlarının ve geçici rejim çözücüsünün yapılandırılması ele alınarak simülasyon koşturulur. Son olarak ParaViS modülü üzerinden şaftın zamana bağlı gerilme dağılımları, deformasyonları ve dinamik tepkilerinin görselleştirilip değerlendirilmesi sağlanır.


Gerçek yükler çoğu zaman statik değil, zamana bağlı değişir. Bu derste Salome-Meca'da basit bir şaft modeli üzerinde transient analiz yapılır: zaman adımları, yük geçmişi ve çözüm ayarları anlatılır. Modal ve harmonik analizlerden sonra izlendiğinde, dinamik analiz türleri arasındaki farkı netleştirir.

## Sıradaki adımlar

- ← **Önceki ders:** [1D Kolon Burkulma Analizi](./salome-mecada-1d-kolon-burkulma-analizi/)
- **Sonraki ders:** [Linux'ta Salome-Meca Kurulumu](./linuxda-salome-meca-kurulumu/) →
