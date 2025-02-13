import React from "react";

const MenuBar = ({ handleCreateBtn }) => {
  return (
    <div className="menu_bar">
      <select name="filter" id="">
        <option value="latest">최신순</option>
        <option value="oldest">오래된 순</option>
      </select>
      <button onClick={handleCreateBtn} className="button button-create">
        새 일기 쓰기
      </button>
    </div>
  );
};

export default MenuBar;
