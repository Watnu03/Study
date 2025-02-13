import EmotionItemList from "../components/EmotionItemList";
import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const itemData = [
  { id: 0, title: "2025. 2. 11.", emotionId: 2 },
  { id: 1, title: "2025. 3. 12.", emotionId: 5 },
  { id: 2, title: "2025. 2. 13.", emotionId: 3 },
  { id: 3, title: "2025. 5. 14.", emotionId: 4 },
  { id: 4, title: "2025. 11. 15.", emotionId: 1 },
];

const Home = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState(itemData);

  const handleCreateBtn = () => {
    navigate("/new");
  };
  const handleEditBtn = (id) => {
    navigate(`/edit/:${id}`);
  };
  const handleDeleteBtn = (targetId) => {
    setItems(items.filter((item) => item.id !== targetId));
    console.log();
  };

  return (
    <div className="home">
      <Header left={"<"} title={"2025년 2월"} right={">"} />
      <MenuBar handleCreateBtn={handleCreateBtn} />
      <EmotionItemList
        items={items}
        handleEditBtn={handleEditBtn}
        handleDeleteBtn={handleDeleteBtn}
      />
    </div>
  );
};

export default Home;
