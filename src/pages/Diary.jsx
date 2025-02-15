import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { DiaryStateContext } from "../App";
import Header from "../components/Header";
import getEmotionImage from "../util/get-emotion-img";

const emotionData = [
  { emotionId: 1, emotionName: "완전좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "그럭저럭" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "끔찍함" },
];

const Diary = () => {
  const navigate = useNavigate();
  const params = useParams();
  const data = useContext(DiaryStateContext);

  const [currentDiaryItem, setCurrentDiaryItem] = useState({});
  const [currentDiaryDate, setCurrentDiaryDate] = useState();

  useEffect(() => {
    const initDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    );

    if (initDiaryItem) {
      setCurrentDiaryDate(
        new Date(Number(initDiaryItem.date)).toISOString().slice(0, 10)
      );
    }
    setCurrentDiaryItem(initDiaryItem);
  }, [params.id, currentDiaryDate]);

  return (
    <div className="diary">
      <Header
        left={"< 뒤로가기"}
        onClickLeft={() => navigate("/")}
        title={`${currentDiaryDate} 기록`}
        right={"수정하기"}
        onClickRight={() => navigate(`/edit/${params.id}`)}
      />
      <div className="diary_content">
        <section className="td_emotion">
          <h4>오늘의 감정</h4>
          <div
            className={`emotionImage ${
              currentDiaryItem.emotionId
                ? `emotion-${currentDiaryItem.emotionId}`
                : ""
            }`}
          >
            <img
              src={getEmotionImage(currentDiaryItem.emotionId)}
              alt={`emotion-${currentDiaryItem.emotionId}`}
            />
            <p>
              {emotionData.find(
                (item) => item.emotionId === currentDiaryItem?.emotionId
              )?.emotionName || ""}
            </p>
          </div>
        </section>
        <section className="td_content">
          <h4>오늘의 일기</h4>
          <div className="content">
            <p>{currentDiaryItem.content}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Diary;
