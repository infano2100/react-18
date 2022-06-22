import { useState, useLayoutEffect } from "react";
import { flushSync } from "react-dom";
import { Button } from "antd";

const AutoBranching = () => {
  const [count, setCount] = useState<number>(0);
  const [flag, setFlag] = useState<boolean>(false);

  const handleClickAutoBranching = () => {
    console.log("=== click Auto ===");
    fetchSomething().then((res: any) => {
      setCount((c) => c + 1);
      setFlag((f) => !f);
    });
  };

  const handleClickFlushSync = () => {
    console.log("=== click FlushSync ===");
    flushSync(() => {
      setCount((c) => c + 1);
    });
    flushSync(() => {
      setFlag((f) => !f);
    });
  };

  const fetchSomething = () =>
    new Promise((resolve) => setTimeout(resolve, 100));

  const LogEvents = () => {
    useLayoutEffect(() => {
      // console.log("Commit");
    });
    console.log("Render");
    return null;
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Button onClick={handleClickAutoBranching}>
            click AutoBranching
          </Button>
          <Button onClick={handleClickFlushSync}>click FlushSync</Button>
        </div>
        <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
        <LogEvents />
      </header>
    </div>
  );
};

export default AutoBranching;
