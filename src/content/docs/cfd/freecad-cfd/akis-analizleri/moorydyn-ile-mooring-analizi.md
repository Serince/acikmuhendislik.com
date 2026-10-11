---
title: "MoorDyn ile Mooring Analizi"
description: "OpenFOAM CFD'de moorDynR2 yöntemi ile mooring analizi."
sidebar:
  order: 10
youtube: "74AuoQ1d52Q"
yazar: "Ahmet Furkan Oymak"
yazarKanal: "https://www.youtube.com/@AhmetFurkanOymak"
yazilim: "FreeCAD CfdOF"
tarih: 2026-09-17
---
Bu derste, FreeCAD CfdOF ortamı kullanılarak MoorDyn kütüphanesi entegrasyonu ile açık deniz ve yüzer yapıların bağlama (mooring) hattı analizlerinin gerçekleştirilme süreci ele alınmaktadır. İş akışında öncelikle yüzer gövdenin geometrik modeli oluşturulmakta veya içe aktarılmakta, ardından akışkan bölgesi ile yapı arasındaki etkileşimi sağlayacak hesaplama ağı (mesh) tanımlanmaktadır. Çok fazlı akış veya serbest yüzey koşullarına yönelik akışkan özellikleri ile dalga-akıntı sınır şartları belirlenerek hidrodinamik alan çözüme hazırlanmaktadır. Yüzer cismin serbestlik derecelerine bağlı hareketini sınırlayan palamar hatları için MoorDyn parametreleri, hat özellikleri ve bağlantı noktaları tanımlanmaktadır. CFD ve dinamik bağlama çözücülerinin eş zamanlı koşturulmasıyla gövde hareketleri, hat gerilimleri ve sistemin dinamik tepkileri incelenerek elde edilen sonuçların son işlem (post-processing) adımlarıyla değerlendirilmesi amaçlanmaktadır.


LinearSpring basitleştirmesi yetmediğinde, halat dinamiğini daha gerçekçi çözen moorDyn devreye girer. Bu derste bir önceki LinearSpring analizinin devamı olarak moorDynR2 yöntemi ile mooring analizi kurulur: halat segmentleri, hidrodinamik katsayılar ve OpenFOAM ile eşleşme ayarları anlatılır. İki dersi peş peşe izlemek, iki yöntemin farkını net gösterir.

## Sıradaki adımlar

- ← **Önceki ders:** [LinearSpring Yöntemi ile Mooring Analizi](./linearspring-ile-mooring-analizi/)
