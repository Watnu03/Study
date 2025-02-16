import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../components/Header";
import Viewer from "../components/Viewer";
import { getStringedDate } from "../util/get-stringed-date";
import useDiary from "../hooks/useDiary";

const Diary = () => {
  const navigate = useNavigate();
  const params = useParams();
  const currentDiaryItem = useDiary(params.id);

  if (!currentDiaryItem) {
    return <div>로딩중...</div>;
  }

  const { date, emotionId, content } = currentDiaryItem;

  const title = getStringedDate(new Date(date));

  return (
    <div className="diary">
      <Header
        left={"< 뒤로가기"}
        onClickLeft={() => navigate("/")}
        title={`${title} 기록`}
        right={"수정하기"}
        onClickRight={() => navigate(`/edit/${params.id}`)}
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
