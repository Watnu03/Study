import { useContext, useEffect, useState } from "react";

import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [currentDiaryItem, setCurrentDiaryItem] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (!data || data.length === 0) {
      return; // 데이터가 비어 있으면 실행하지 않음
    }

    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다!");
      navigate("/", { replace: true });
    }

    setCurrentDiaryItem(currentDiaryItem);
  }, [id]);

  return currentDiaryItem;
};

export default useDiary;
