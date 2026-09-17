---
title: "Sürgülü Valf Analizi ve y+ Gösterimi"
description: "Sürgülü Valf Analizi ve y+ Gösterimi – FreeCAD CfdOF video dersi."
sidebar:
  order: 1
youtube: "1GmErz52aGM"
yazar: "Kenan Aslan"
yazarKanal: "https://www.youtube.com/@kenanaslan1702"
yazilim: "FreeCAD CfdOF"
tarih: 2022-06-20
---

Tek fazlı akışta bir valf analizi gerçekleştirildi. Bu analizde mesh boyutlarının sınır tabakada hassaslaştırılması yapıldı ve analiz sonuçlarına göre y+ değerinin hesaplanması gösterildi. y+ değeri için videoda gösterilen yere aşağıdaki komut verilerek gösterilebilir.

simpleFoam -postProcess -latestTime -func yPlus

Eğer sonrasında paraviewde görselleştirmek isterseniz. paraFoam komutunu vererek paraview açıp oradan filitreler arasında threshold filter aracılığı ile görselleştirebilirisiniz.
