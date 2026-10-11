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
Bu derste, FreeCAD CfdOF çalışma tezgahı kullanılarak hesaplamalı akışkanlar mekaniği (CFD) analizlerinde sınır tabaka modellemesinin temel unsurlarından olan 
𝑦
+
y
+
 parametresinin hesaplanması ve ağ yapısının (mesh) iyileştirilmesi adımları ele alınmaktadır. Akış modeli oluşturulduktan sonra, seçilen türbülans modeline ve sınır tabaka beklentilerine uygun ilk hücre yüksekliğini belirlemek için 
𝑦
+
y
+
 değerinin teorik yaklaşımı ve CfdOF arayüzündeki karşılığı incelenir. Katı yüzeyler etrafında sınır tabakayı doğru yakalamak amacıyla mesh parametreleri optimize edilerek duvar kenarlarında sınır tabaka şişirme (inflation layer/boundary layer mesh) ve bölgesel hücre sıklaştırma işlemleri uygulanır. Sınır şartları ve malzeme özellikleri tanımlanmış model çözücüye aktarılarak ön hesaplama veya tam çözüm koşturulur. Çözüm sonrasında elde edilen 
𝑦
+
y
+
 dağılımı kontrol edilerek ağ yapısının türbülans modelinin gereksinimlerini karşılayıp karşılamadığı doğrulanır ve gerekirse mesh revizyonu yapılarak analiz tekrarlanır.


Bu videoda y+’değerini iyileştimek için nasıl bir yaklaşımda bulunulması gerektiği anlatılmaya çalışılmıştır. Bu analizce simplefoma solver kullanıldığı için simlefoam komutu ile hesaplanılmışttr.

simpleFoam -postProcess -latestTime -func yPlus

Eğer solver’ınız farklı ise ki bunu config dosyasından öğrenebilirsiniz komutu solver ismi ile değiştirmelisiniz.

## Sıradaki adımlar

- ← **Önceki ders:** [Hex Mesh ve Gözenekli Bölge](./hex-mesh-ve-gozenekli/)
