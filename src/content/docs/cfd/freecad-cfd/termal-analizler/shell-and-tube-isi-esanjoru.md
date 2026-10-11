---
title: "Shell and Tube Isı Eşanjörü Analizi"
description: "OpenFOAM ile gövde-boru tipi ısı eşanjörü termal analizi."
sidebar:
  order: 2
youtube: "Yv7mCPcjLTY"
yazar: "Taygan Taşkıran"
yazarKanal: "https://www.youtube.com/@taygantaskran8711"
yazilim: "FreeCAD CfdOF"
tarih: 2026-09-17
---
Bu derste, FreeCAD CfdOF çalışma tezgâhı kullanılarak gövde-boru (shell and tube) tipi bir ısı eşanjörünün hesaplamalı akışkanlar dinamiği (CFD) analizi iş akışı ele alınmaktadır. İlk aşamada, gövde ve boru tarafındaki akışkan hacimlerinin geometrik olarak hazırlanması ve termal etkileşimi sağlayacak uygun akışkan-katı veya çoklu akışkan bölgelerinin tanımlanması üzerinde durulmaktadır. Ardından, sıcak ve soğuk akışkanlar için viskozite, yoğunluk ve ısıl iletkenlik gibi malzeme özellikleri atanarak türbülans ve ısı transferi fiziksel modelleri kurulmaktadır. Karmaşık boru demetlerini ve gövde içi akışı doğru yakalayabilmek adına, kritik bölgelerde sınır tabaka ve yerel sıklaştırmalar içeren hesaplama ağı (mesh) oluşturma adımları gösterilmektedir. Akışkan girişleri için kütlesel debi/hız ve sıcaklık sınır şartları ile çıkış basınçları tanımlandıktan sonra sayısal çözüm süreci yürütülmektedir. Son aşamada ise eşanjör boyunca oluşan basınç düşüşleri, sıcaklık dağılımları ve akış çizgileri gibi temel termal-hidrolik sonuçların görselleştirilmesi ve değerlendirilmesi incelenmektedir.


Isı eşanjörleri, akış ve ısı transferinin birlikte çözülmesi gereken klasik mühendislik problemlerindendir. Bu derste OpenFOAM ile gövde-boru (shell and tube) tipi bir eşanjörün termal analizi yapılır: sıcak ve soğuk akışkan bölgeleri, arayüz şartları ve sıcaklık dağılımı adım adım kurulur. Temel akış derslerinden sonra izlendiğinde, termal analizlere geçiş sağlanır.

## Sıradaki adımlar

- ← **Önceki ders:** [Sabit Sıcaklıkta Termal Analiz](./terma/)
