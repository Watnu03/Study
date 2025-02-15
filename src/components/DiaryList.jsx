import DiaryCard from "./DiaryCard";
import React from "react";

const DiaryList = ({ data, onClickCard, onClickEditBtn, onClickDelete }) => {
  return (
    <div className="item_list">
      {data
        .slice()
        .reverse()
        .map((item) => (
          <DiaryCard
            key={item.id}
            {...item}
            onClickEditBtn={onClickEditBtn}
            onClickDelete={onClickDelete}
            onClickCard={onClickCard}
          />
        ))}
    </div>
  );
};

export default DiaryList;
