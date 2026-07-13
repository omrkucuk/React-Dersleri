# 1- JSX Kuralları:

Her jsx bloğu tek bir kök element döndürmelidir.

// Yanlış
return(

  <h1>Başlık</h1>
  <p>Paragraf</p>
  )

// Doğru
return(

  <div>
    <h1>Başlık</h1>
    <p>Paragraf</p>
  </div>
  )

// Doğru - Fragment (DOM'a ekstra element eklemez)
return(
<>

<h1>Başlık</h1>
<p>Paragraf</p>
</>
)

# 2 - HTML attribute'larında bazı isimler farklıdır:

HTML - JSX
class -> className
for -> htmlFor
onclick -> onClick
tabindex -> tabIndex

# 3 - Javascript ifadeleri {} içinde yazılır:

const name = "Ömer";
const age = 30;

return (
<>

<div>Merhaba, {name}</div>
<p>Yaşın: {age > 18 ? "Yetişkin" : "Genç"} </p>
<p>2 + 2 = {2 + 2}</p>
</>
);

# 4 - Function Component

// Basit component
function Greeting() {
return <h1>Merhaba Dünya</h1>;
}

// Arrow function ile
const Greeting = () => {
return <h1>Merhaba Dünya</h1>;
};

# 5 - Component Oluşturma ve Kullanma

const Header = () => {
return (

<header>
<h1>Site Başlığı</h1>
</header>
);
};

const Footer = () => {
return (
<footer>
<p>Alt Bilgi</p>
</footer>
);
};

function App() {
return (

<div>
    <Header />
    <main>İçerik buraya gelecek</main>
    <Footer />
</div>
);
}
