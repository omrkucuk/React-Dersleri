import React, { useState } from 'react'

const ToggleBox = () => {

    const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
          <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? "Gizle" : "Göster"}</button>

          {isVisible && (
              <div style={{ padding: "16px", background: "#f0f0f0", marginTop: "8px" }}>
                  Bu kutu toggle edildi
              </div>)}
    </div>
  )
}

export default ToggleBox
