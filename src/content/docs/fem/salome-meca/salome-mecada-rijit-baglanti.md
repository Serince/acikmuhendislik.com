---
title: "Salome-Meca'da Rijit Bağlantı"
description: "LIAISON_DDL ile noktalar arası bağımlılık ve kuvvet aktarımı simülasyonu."
youtube: "umxpYVELJcc"
sidebar:
  order: 19
yazar: "Enes Durukan"
yazarKanal: "https://www.youtube.com/@EnesDurukan-r4p"
yazilim: "Salome-Meca"
tarih: 2025-08-04
---
Bu derste, Salome-Meca ortamında sonlu elemanlar analizi için rijit bağlantı (rigid link) modelleme iş akışı ele alınmaktadır. Süreç, geometri modülünde rijit şekilde bağlanacak yüzey veya düğüm gruplarının tanımlanması ve ardından Mesh modülünde bu bölgeleri içerecek ağ yapısının oluşturulmasıyla başlar. AsterStudy modülü üzerinden Code_Aster komutları kullanılarak malzeme özellikleri tanımlanır ve modelin serbestlik derecelerini birbirine bağlayan rijit sınır şartı (genellikle AFFE_CHAR_MECA altındaki kinematik bağıntılar) kurgulanır. Yük ve sınır koşullarının tamamlanmasının ardından mekanik çözüm çalıştırılır. Son olarak, rijit bağlantının uygulandığı bölgedeki yük aktarımı, gerilme dağılımları ve deformasyon davranışı ParaViS modülü aracılığıyla görselleştirilerek sonuçlar değerlendirilir.


Salome-Meca yazılım ortamında noktalar arası bağımlılık (LIAISON_DDL) kullanarak kuvvet aktarımının nasıl simüle edildiğini adım adım açıklamaktadır. Video, bir vida mekanizması üzerinden kuvvetin bir yüzeyden diğerine nasıl aktarıldığını göstermektedir.

## Sıradaki adımlar

- ← **Önceki ders:** [Salome-Meca’da Harmonik Titreşim Analizi](./salome-mecada-harmonik-titresim-analizi/)
