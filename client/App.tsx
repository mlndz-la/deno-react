import React from 'https://dev.jspm.io/react';

const App = () => {
  const [count, setCount] = (React as any).useState(0)
  return (
    <div>
      <h1>Hello DenoLand!</h1>
      <h1>{count}</h1>
      <button onClick={() => {
        setCount(count + 1);
        console.log(count)
        }}>CLick ME</button>
    </div>
  );
};

export default App;