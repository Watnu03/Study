import EmotionItemCard from "./EmotionItemCard";
import React from "react";

const EmotionItemList = ({
  items,
  handleEditBtn,
  handleDeleteBtn,
  handleClickCard,
}) => {
  return (
    <div className="item_list">
      {items.map((item) => (
        <EmotionItemCard
          key={item.id}
          {...item}
          handleEditBtn={handleEditBtn}
          handleDeleteBtn={handleDeleteBtn}
          handleClickCard={handleClickCard}
        />
      ))}
    </div>
  );
};

export default EmotionItemList;
