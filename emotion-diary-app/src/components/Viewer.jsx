import { emotionData } from "../util/constants";
import getEmotionImage from "../util/get-emotion-img";

const Viewer = ({ emotionId, content }) => {
  const currentEmotionItem = emotionData.find(
    (item) => String(item.emotionId) === String(emotionId)
  );

  return (
    <div className="viewer">
      <section className="td_emotion">
        <h4>오늘의 감정</h4>
        <div
          className={`emotionImage ${emotionId ? `emotion-${emotionId}` : ""}`}
        >
          <img src={getEmotionImage(emotionId)} alt={`emotion-${emotionId}`} />
          <p>{currentEmotionItem.emotionName}</p>
        </div>
      </section>
      <section className="td_content">
        <h4>오늘의 일기</h4>
        <div className="content">
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
