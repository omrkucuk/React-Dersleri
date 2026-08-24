# // Fetch

- Tarayıcıya yerleşiktir, kurulum gerekmez
- HTTP hata kodlarında (404,500) reject etmez ok. kontrolü manuel yapılmalı
- JSON parse işlemi iki adımdır

### // Kullanımı

const res = await fetch("https://jsonplaceholder.typicode.com/todos/53");
if (!res.ok) throw new Error(`HTTP ${res.status}`)
const data = await res.json();

# // Axios

- Kurulum gerekir: npm install axios
- HTTP hata kodlarında otomatik reject eder -- try/catch yeterli
- JSON parse otomatiktir, response.data direkt kullanılır
- Interceptor desteği vardır - her isteğe token eklemek, hataları merkezi yönetmek için

### // Kullanımı

const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos/53")
