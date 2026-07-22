  # State Nedir?
    State component'in kendi içinde yönettiği, zamanla değişebilen veridir. State değiştiğinde React o component'i ve alt component'leri yeniden render eder.

  # Ne zaman state kullanacağız:
    - Kullanıcının bir input'a yazdığı metin
    - Bir modal'ın açık/kapalı durumu
    - Sepetteki ürün sayısı
    - API'dan gelen verinin yüklenip yüklenmediği

  # UseState Hook'u
    import {useState} from "react"
    const [state, setState] = useState(initialValue)

  - state - mevcut değer
  - setState - değeri güncelleyecek fonksiyon
  - initialValue - başlangıç değeri (sayı, string, boolean, dizi, obje, null) olabilir
