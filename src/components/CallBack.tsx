import { useState, useCallback } from "react";
import { Button } from "antd";

const getTimestamp = () => new Date().getTime();

const CallBack = () => {
  const [valueOne, setValueOne] = useState<boolean>(false);
  const [valueTwo, setValueTwo] = useState<boolean>(false);
  const [numberWithCallback, setNumberWithCallback] = useState<string>("-");

  const numberWithoutCallBack = getTimestamp();

  const handleCallback = useCallback(() => {
    setNumberWithCallback(() => `${getTimestamp()}`);
  }, [valueTwo]);

  return (
    <>
      <p>แบบไม่ใช้ useCallback: {numberWithoutCallBack}</p>
      <hr />
      <p>แบบใช้ useCallback: {numberWithCallback}</p>

      <div>
        <Button
          onClick={() => {
            setValueOne((prev) => !prev);
          }}
        >
          Click
        </Button>
        <Button
          onClick={() => {
            handleCallback();
            setValueTwo((prev) => !prev);
          }}
        >
          Click CallBack
        </Button>
      </div>
    </>
  );
};

export default CallBack;
