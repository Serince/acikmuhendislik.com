---
title: "y+ hesaplama ve mesh iyileştirme"
description: "y+ hesaplama ve mesh iyileştirme – FreeCAD CfdOF video dersi."
sidebar:
  order: 6
youtube: "avqbFTzOF68"
yazar: "Erencan Kahveci"
yazarKanal: "https://www.youtube.com/@Cankahveci78"
yazilim: "FreeCAD CfdOF"
tarih: 2023-05-29
---

Bu videoda y+’değerini iyileştimek için nasıl bir yaklaşımda bulunulması gerektiği anlatılmaya çalışılmıştır. Bu analizce simplefoma solver kullanıldığı için simlefoam komutu ile hesaplanılmışttr.

simpleFoam -postProcess -latestTime -func yPlus

Eğer solver’ınız farklı ise ki bunu config dosyasından öğrenebilirsiniz komutu solver ismi ile değiştirmelisiniz.
