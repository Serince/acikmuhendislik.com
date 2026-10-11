---
title: "Kompozit Çekme Testi Simülasyonu"
description: "Radioss, OpenRadioss ve ParaView ile kompozit çekme testi simülasyonu."
sidebar:
  order: 2
youtube: "CkicUWj7LhM"
yazar: "Ahmet Emre Yüksel"
yazarKanal: "https://www.youtube.com/@ahmetemreyuksel3694"
yazilim: "OpenRadioss"
tarih: 2026-09-17
---
Bu derste, OpenRadioss çözücüsü kullanılarak bir kompozit numunenin çekme testi simülasyonunun uçtan uca kurulum süreci ele alınmaktadır. Eğitim kapsamında ilk olarak test kuponunun geometrik modeli hazırlanarak kompozit tabakalanma yapısına uygun sonlu elemanlar ağı (mesh) oluşturulmaktadır. Ardından, kompozit malzemelere özgü anizotropik mekanik özellikler, oryantasyon açıları ve hasar kriterleri OpenRadioss malzeme kartları üzerinden tanımlanmaktadır. Fiziksel çekme testini yansıtacak şekilde numuneye uygulanacak mesnetleme ve çekme yönündeki deplasman/yük sınır koşulları belirlenmektedir. Dinamik açık (explicit) zaman adımı ayarları yapılarak çözüm başlatılmakta ve analiz sonrasında elde edilen gerilme-şekil değiştirme eğrileri, katmanlar arası hasar gelişimi ile kopma davranışı post-processing aşamasında değerlendirilmektedir.


Kompozit malzemelerin çekme davranışını anlamak için fiziksel testten önce simülasyon yapmak hem zaman hem maliyet kazandırır. Bu derste Radioss/OpenRadioss ile bir kompozit çekme testi modellenir: katmanlı malzeme tanımı, sınır şartları ve yükleme adım adım kurulur. Çözüm sonrası gerilme dağılımı ve hasar başlangıcı ParaView ile görselleştirilir. Kompozit analizlere giriş için iyi bir başlangıç noktasıdır.

## Sıradaki adımlar

- ← **Önceki ders:** [OpenRadioss Hyperview ve Paraview Kurulumu & Örnek Analizler](./openradioss-hyperview-ve-paraview-kurulumu-ornek-analizler/)
