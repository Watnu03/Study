import { useNavigate, useParams } from "react-router-dom";

import { DiaryDispatchContext } from "../App";
import Editor from "../components/Editor";
import Header from "../components/Header";
import { useContext } from "react";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

const Edit = () => {
  const params = useParams();
  const navigate = useNavigate();
  usePageTitle(`${params.id}번 일기 수정`);

  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  const currentDiaryItem = useDiary(params.id);

  const onSubmit = (input) => {
    const updateConfirm = window.confirm("일기를 정말 수정할까요?");

    if (updateConfirm) {
      onUpdate(params.id, input.date, input.emotionId, input.content);

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
