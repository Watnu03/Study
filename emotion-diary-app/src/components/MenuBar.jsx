import React from "react";

const MenuBar = ({ onSortItems, onClickCreateBtn }) => {
  return (
    <div className="menu_bar">
      <select
        name="filterItems"
        onChange={(e) => {
          onSortItems(e.target.value);
        }}
      >
        <option value="latest">최신순</option>
        <option value="oldest">오래된 순</option>
      </select>
      <button onClick={onClickCreateBtn} className="button button-create">
        새 일기 쓰기
      </button>
    </div>
  );
};

export default MenuBar;
