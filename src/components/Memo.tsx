import { useState, useMemo } from "react";
import { Button } from "antd";

const getTimestamp = () => new Date().getTime();

const Memo = () => {
  const [valueOne, setValueOne] = useState<boolean>(false);
  const [valueTwo, setValueTwo] = useState<boolean>(false);

  const getNumberWithMemo = useMemo(() => {
    return getTimestamp();
  }, [valueTwo]);

  const numberWithoutMemo = getTimestamp();

  return (
    <>
      <p>แบบไม่ใช้ useMemo: {numberWithoutMemo}</p>
      <hr />
      <p>แบบใช้ useMemo: {getNumberWithMemo}</p>

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
            setValueTwo((prev) => !prev);
          }}
        >
          Click Memo
        </Button>
      </div>
    </>
  );
};

export default Memo;
