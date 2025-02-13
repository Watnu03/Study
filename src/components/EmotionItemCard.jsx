import Button from "./Button";
import React from "react";
import getEmotionImg from "../util/get-emotion-img";

const EmotionItemCard = ({
  id,
  emotionId,
  title,
  handleEditBtn,
  handleDeleteBtn,
}) => {
  const handleClickCard = (e) => {
    console.log("클릭");
  };

  const onEdit = (e) => {
    e.stopPropagation();
    handleEditBtn(id);
    console.log("수정");
  };
  const onDelete = (e) => {
    e.stopPropagation();
    handleDeleteBtn(id);
    console.log("삭제", id);
  };

  return (
    <div className="item_card" onClick={handleClickCard}>
      <div className={`item_img emotion-${emotionId}`}>
        <img src={getEmotionImg(emotionId)} alt={emotionId} />
      </div>
      <div className="item_title">
        <p>{title}</p>
      </div>
      <div className="item_buttons">
        <Button text={"수정하기"} onClick={onEdit} />
        <Button text={"삭제하기"} status={"delete"} onClick={onDelete} />
      </div>
    </div>
  );
};

export default EmotionItemCard;
