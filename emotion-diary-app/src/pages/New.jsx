import { DiaryDispatchContext } from "../App";
import Editor from "../components/Editor";
import Header from "../components/Header";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

const New = () => {
  const navigate = useNavigate();
  const { onCreate } = useContext(DiaryDispatchContext);
  usePageTitle("새 일기 쓰기");

  const onSubmit = (input) => {
    onCreate(input.date.getTime(), input.emotionId, input.content);

    alert("새로운 일기가 추가 되었습니다!");
    //일기추가후 페이지이동
    //NOTE: navigate에서 두번째인수: replace:true 뒤로가기 버튼으로 못가게 방지
    navigate("/", { replace: true });
  };

  return (
    <div className="new">
      <Header
        left={"< 뒤로가기"}
        title={"새 일기 쓰기"}
        onClickLeft={() => navigate(-1)}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
