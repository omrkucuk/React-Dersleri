# Redux

## Store -> Tüm global state'in yaşadığı yer -> configureStore()

## Slice -> Bir domain'in state + reducer'ları -> cartSlice, userSlice

## Action -> State değişiklik isteği -> {type: "cart/addItem", payload:product}

## Reducer -> Action'a göre yeni state üreten fonksiyon -> addItem(state, action){...}

## Dispatch -> Action'ı store'a gönderme -> dispatch(addItem(product))

## Selector -> Store'dan state okuyan fonksiyon -> state => state.cart.items

### Redux Toolkit vs Zustand

# Kriter -> Redux Toolkit -> Zustand

Kurulum -> Orta(slice, store, provider) -> Basit(sadece create)
Öğrenme Eğrisi -> Dik -> Düz
Provider -> Gerekli -> Gerekmez
Async -> createAsyncThunk -> Manuel veya TanStack Query
Performans -> İyi(selector optimizasyonu) -> İyi(slice seçimi)
Ekip büyüklüğü -> Büyük ekipler için ideal -> Küçük-Orta ekipler
Kurumsal -> Yüksek -> Giderek Artıyor
