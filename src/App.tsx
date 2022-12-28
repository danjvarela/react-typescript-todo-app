import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        type="button"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Count is {count}
      </button>
    </div>
  );
}

export default App;
