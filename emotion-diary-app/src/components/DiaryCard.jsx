import Button from "./Button";
import getEmotionImage from "../util/get-emotion-img";
import { useNavigate } from "react-router-dom";

const DiaryCard = ({
  id,
  date,
  emotionId,
  content,
  onClickCard,
  onClickEditBtn,
  onClickDelete,
}) => {
  const navigate = useNavigate();

  const onUpdate = (e) => {
    e.stopPropagation();
    onClickEditBtn(id);
  };
  const onClickDeleteItem = (e) => {
    e.stopPropagation();

    const deleteConfirm = window.confirm("정말 삭제하시겠습니까?");
    if (deleteConfirm) {
      onClickDelete(id);

      alert("일기가 삭제 되었습니다!");
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="item_card" onClick={() => onClickCard(id)}>
      <div className={`item_img emotion-${emotionId}`}>
        <img src={getEmotionImage(emotionId)} alt={emotionId} />
      </div>
      <div className="item_title">
        <p>{new Date(date).toLocaleDateString()}</p>
        <p>{content}</p>
      </div>
      <div className="item_buttons">
        <Button text={"수정하기"} onClick={onUpdate} />
        <Button
          text={"삭제하기"}
          status={"delete"}
          onClick={onClickDeleteItem}
        />
      </div>
    </div>
  );
};

export default DiaryCard;
