import React from "react";
import getEmotionImg from "../util/get-emotion-img";

const EmotionCard = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={`emotion_card ${isSelected ? `emotion-${emotionId}` : ""}`}
    >
      <img src={getEmotionImg(emotionId)} alt={`emotion-${emotionId}`} />
      <p>{emotionName}</p>
    </li>
  );
};

export default EmotionCard;
