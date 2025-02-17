import { DiaryDispatchContext, DiaryStateContext } from "../App";
import { useContext, useState } from "react";

import DiaryList from "../components/DiaryList";
import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import { useNavigate } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

//특정 월의 데이터를 필터링하는 함수
const getMonthlyDate = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1
  ).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  return data.filter((item) => {
    if (typeof item.date !== "number") return false;
    return beginTime <= item.date && item.date <= endTime;
  });
};

const Home = () => {
  usePageTitle("감정 일기장");
  const data = useContext(DiaryStateContext);
  const { onDelete, onSort } = useContext(DiaryDispatchContext);
  const navigate = useNavigate();

  //현재 선택된 월
  const [pivotDate, setPivotDate] = useState(new Date());
  //현재 선택된 월의 데이터만 필터링
  const monthlyDate = getMonthlyDate(pivotDate, data);

  //Header 날짜 변경 버튼 클릭
  //다음 달로 이동하는 함수
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  //이전 달로 이동하는 함수
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  //새 일기 작성 페이지로 이동
  const onClickCreateBtn = () => {
    navigate("/new");
  };
  //일기 수정 페이지로 이동
  const onClickEditBtn = (targetId) => {
    navigate(`/edit/${targetId}`);
  };
  //특정 일기 상세 페이지로 이동
  const onClickCard = (targetId) => {
    navigate(`/diary/${targetId}`);
  };

  return (
    <div className="home">
      <Header
        left={"<"}
        onClickLeft={onDecreaseMonth}
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        right={">"}
        onClickRight={onIncreaseMonth}
      />
      <MenuBar onSortItems={onSort} onClickCreateBtn={onClickCreateBtn} />
      <DiaryList
        data={monthlyDate}
        onClickEditBtn={onClickEditBtn}
        onClickDelete={onDelete}
        onClickCard={onClickCard}
      />
    </div>
  );
};

export default Home;
