import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(0);


  return (
    <div>
          <p>Sayı: {count}</p>
          <button onClick={() => setCount(count + 1)}>Artır</button>
          <button onClick={() => setCount(count - 1)}>Azalt</button>
          <button onClick={() => setCount(0)}>Sıfırla</button>
    </div>
  )
}

export default Counter
