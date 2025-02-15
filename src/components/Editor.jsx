import React, { useEffect, useState } from "react";

import Button from "./Button";
import EmotionCard from "./EmotionCard";
import { useNavigate } from "react-router-dom";

const emotionData = [
  { emotionId: 1, emotionName: "완전좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "그럭저럭" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "끔찍함" },
];

//date 를 YYYY-MM-DD형식으로 string 으로 변환
const getStringDate = (targetDate) => {
  if (!(targetDate instanceof Date)) {
    targetDate = new Date(targetDate);
  }

  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};

const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate();

  //일기 작성 상태 (날짜, 감정 ID, 내용)
  const [input, setInput] = useState({
    date: new Date(),
    emotionId: 0,
    content: "",
  });

  //초기데이터가져와서 동기화
  useEffect(() => {
    if (initData) {
      setInput({ ...initData, data: new Date(Number(initData.date)) });
    }
  }, [initData]);

  //입력값 변경 시 상태 업데이트하는 함수
  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "date") {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  /*작성완료 버튼 클릭
    New 페이지에서 작동할때와 (onCreate)
    Edit 페이지에서 작동할때 구분해야함 (onUpdate)
  */
  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="editor">
      <section className="date">
        <h4>오늘의 날짜</h4>
        <input
          type="date"
          name="date"
          className="content"
          value={getStringDate(input.date)}
          onChange={onChangeInput}
        />
      </section>
      <section className="emotion">
        <h4>오늘의 감정</h4>
        <ol className="list">
          {emotionData.map((item) => (
            <EmotionCard
              key={item.emotionId}
              {...item}
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </ol>
      </section>
      <section className="diary">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          placeholder="오늘은 어땠나요?"
          maxLength={500}
          value={input.content}
          className="content"
          onChange={onChangeInput}
        ></textarea>
      </section>
      <section className="buttons">
        <Button text={"취소하기"} onClick={() => navigate(-1)} />
        <Button
          text={"작성완료"}
          status={"create"}
          onClick={onClickSubmitButton}
        />
      </section>
    </div>
  );
};

export default Editor;
