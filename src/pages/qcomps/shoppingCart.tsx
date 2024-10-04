import { useState } from 'react';

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending((n) => n + 1);
    await delay(3000);
    // in this case the snapshot is taken immediately after the button press,
    // it doesn't car about the delay (maybe if we used .then()) it would
    // after 3 seconds: pending = 0, completed = 0
    // so pending -> -1, completed = 1
    // after 4 seconds: pending = 1, completed - 1
    // so pending -> 0, completed = 1
    setPending((n) => n - 1);
    setCompleted((n) => n + 1);
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy
      </button>
    </>
  );
}

function delay(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}