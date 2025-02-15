import { DiaryDispatchContext, DiaryStateContext } from "../App";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Editor from "../components/Editor";
import Header from "../components/Header";
import React from "react";

const Edit = () => {
  const params = useParams();
  const navigate = useNavigate();

  const data = useContext(DiaryStateContext);
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);

  const [currentDiaryItem, setCurrentDiaryItem] = useState();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다!");
      navigate("/", { replace: true });
    }

    setCurrentDiaryItem(currentDiaryItem);
  }, [params.id]);

  const onSubmit = (input) => {
    const updateConfirm = window.confirm("일기를 정말 수정할까요?");
    if (updateConfirm) {
      onUpdate(params.id, input.date.getTime(), input.emotionId, input.content);

      alert("일기가 수정 되었습니다!");
      navigate("/", { replace: true });
    }
  };

  const onClickDeleteItem = () => {
    const deleteConfirm = window.confirm(
      "일기를 정말 삭제하시겠습니까?\n다시 복구되지 않아요!"
    );
    if (deleteConfirm) {
      onDelete(id);

      alert("일기가 삭제 되었습니다!");
      /*NOTE: useNavigate 
        브라우저내부가 렌더링 되지않았는데 return하기전에 navigate기능을 쓸수없음
        이렇게 쓰려면 useEffect를 써라 라고 안내한다
      */
      navigate("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        left={"< 뒤로가기"}
        onClickLeft={() => navigate(-1)}
        title={"일기 수정하기"}
        right={"삭제하기"}
        rightStatus={"delete"}
        onClickRight={onClickDeleteItem}
      />
      <Editor initData={currentDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
