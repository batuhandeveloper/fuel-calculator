function hesapla() {
  const yakitElement = document.getElementById("yakit");
  const litreElement = document.getElementById("litre");
  const bakiyeElement = document.getElementById("bakiye");

  let dizel = 24.53,
    benzin = 22.25,
    lpg = 11.1;

  const yeniSatir = "\r\n";

  let yakit = yakitElement.value;

  if (yakit == "1" || yakit == "2" || yakit == "3") {
    let litre = Number(litreElement.value);
    let bakiye = Number(bakiyeElement.value);

    if (yakit == "1") {
      let odenecekTutar = dizel * litre;
      if (odenecekTutar < bakiye) {
        bakiye = bakiye - odenecekTutar;
        alert(
          "Bizi tercih ettiğiniz için teşekkür ederiz :)" +
            yeniSatir +
            "Kalan bakiye: " +
            bakiye
        );
      } else {
        alert(
          "Üzgünüz, talebiniz mevcut bakiyenizin üstünde." +
            yeniSatir +
            "Ödemeniz gereken tutar: " +
            odenecekTutar +
            yeniSatir +
            "Bakiye: " +
            bakiye +
            yeniSatir +
            "Eksik tutar: " +
            (odenecekTutar - bakiye)
        );
      }
    } else if (yakit == "2") {
      let odenecekTutar = benzin * litre;
      if (odenecekTutar < bakiye) {
        bakiye = bakiye - odenecekTutar;
        alert(
          "Bizi tercih ettiğiniz için teşekkür ederiz :)" +
            yeniSatir +
            "Kalan bakiye: " +
            bakiye
        );
      } else {
        alert(
          "Üzgünüz, talebiniz mevcut bakiyenizin üstünde." +
            yeniSatir +
            "Ödemeniz gereken tutar: " +
            odenecekTutar +
            yeniSatir +
            "Bakiye: " +
            bakiye +
            yeniSatir +
            "Eksik tutar: " +
            (odenecekTutar - bakiye)
        );
      }
    } else if (yakit == "3") {
      let odenecekTutar = lpg * litre;
      if (odenecekTutar < bakiye) {
        bakiye = bakiye - odenecekTutar;
        alert(
          "Bizi tercih ettiğiniz için teşekkür ederiz :)" +
            yeniSatir +
            "Kalan bakiye: " +
            bakiye
        );
      } else {
        alert(
          "Üzgünüz, talebiniz mevcut bakiyenizin üstünde." +
            yeniSatir +
            "Ödemeniz gereken tutar: " +
            odenecekTutar +
            yeniSatir +
            "Bakiye: " +
            bakiye +
            yeniSatir +
            "Eksik tutar: " +
            (odenecekTutar - bakiye)
        );
      }
    }
  } else {
    alert("LÜTFEN GEÇERLİ BİR YAKIT TÜRÜ SEÇİNİZ");
  }
}
