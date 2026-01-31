import { useState } from "react";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">
      <h1 className="text-3xl font-bold">Count is {count}</h1>

      <Button variant="primary" onClick={() => setCount(count + 1)}>
        Increase
      </Button>

      <Button variant="danger" onClick={() => setCount(count - 1)}>
        Decrease
      </Button>

      <Button variant="success" onClick={() => setCount(0)}>
        Reset
      </Button>
    </div>
  );
}

export default App;
