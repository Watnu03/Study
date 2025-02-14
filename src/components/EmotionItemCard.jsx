import Button from "./Button";
import React from "react";
import getEmotionImg from "../util/get-emotion-img";

const EmotionItemCard = ({
  id,
  emotionId,
  title,
  handleEditBtn,
  handleDeleteBtn,
  handleClickCard,
}) => {
  const onEdit = (e) => {
    e.stopPropagation();
    handleEditBtn(id);
  };
  const onDelete = (e) => {
    e.stopPropagation();
    handleDeleteBtn(id);
  };

  return (
    <div className="item_card" onClick={() => handleClickCard(id)}>
      <div className={`item_img emotion-${emotionId}`}>
        <img src={getEmotionImg(emotionId)} alt={emotionId} />
      </div>
      <div className="item_title">
        <p>{new Date(title).toLocaleDateString()}</p>
      </div>
      <div className="item_buttons">
        <Button text={"수정하기"} onClick={onEdit} />
        <Button text={"삭제하기"} status={"delete"} onClick={onDelete} />
      </div>
    </div>
  );
};

export default EmotionItemCard;
