---
title: "OpenFOAM'da MRF Metodu ile Pervane Analizi"
description: "MRF (Multiple Reference Frame) metodu ile pervane analizi."
youtube: "8vjeuGMayS4"
sidebar:
  order: 7
yazar: "Fatma Özdağlı"
yazarKanal: "https://www.youtube.com/@fnurozdagl"
yazilim: "OpenFOAM"
tarih: 2025-06-25
---
Bu derste, OpenFOAM ortamında dönen ekipmanların aerodinamik veya hidrodinamik davranışlarını incelemek için sıkça başvurulan Çoklu Referans Çerçevesi (MRF) yöntemiyle pervane analizinin genel iş akışı ele alınmaktadır. Süreç, pervane geometrisinin ve dönen akışkan hacmini temsil eden MRF bölgesinin bilgisayar destekli tasarım (CAD) ortamından hazırlanarak OpenFOAM'a aktarılması ve ardından uygun ağ (mesh) yapısının oluşturulmasıyla başlar. Akışkanın malzeme özellikleri ve türbülans modeli tanımlandıktan sonra, giriş, çıkış ve duvar yüzeyleri için fiziksel sınır şartları tayin edilir. MRF metodunun temelini oluşturan dönme hızı, dönme ekseni ve ilgili hücre bölgesi (cellZone) tanımlamaları fvOptions veya ilgili kontrol dosyaları üzerinden sisteme tanıtılır. Uygun çözücü seçilerek yakınsama kriterleri doğrultusunda başlatılan simülasyonun ardından, pervane etrafındaki hız ve basınç dağılımları ParaView ortamında görselleştirilerek itki ve tork gibi performans parametreleri değerlendirilir.


MRF (Multiple Reference Frame): Akışkanlar mekaniğinde, dönen bir bölgeyi sabit koordinat sisteminde modellemek için kullanılır. Yani dönen parçaların hareketi zamanda sabit, ancak uzayda dönermiş gibi simüle edilir.

## Sıradaki adımlar

- ← **Önceki ders:** [FreeCAD CfdOF'da OpenFOAM Dalga Formu Oluşturma](./freecad-cfdofda-openfoam-dalga-formu-olusturma/)
- **Sonraki ders:** [OpenFOAM'da Overset Mesh ile Pervane Analizi](./openfoamda-overset-mesh-ile-pervane-analizi/) →
