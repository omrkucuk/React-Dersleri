const { useState, useEffect } = require("react");

function useDebounce(value, delay = 400) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer); // yeni harf gelince önceki timer'ı iptal et.
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
