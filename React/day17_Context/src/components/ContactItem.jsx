import "./ContactItem.css";

import { dispatchContext } from "../App";
import { memo } from "react";
import { useContext } from "react";

function ContactItem({ id, name, contact }) {
  const { onRemoveContact } = useContext(dispatchContext);

  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button onClick={() => onRemoveContact(id)}>🗑️ Remove</button>
    </div>
  );
}

/*NOTE: memo 메서드
  memo는 기본적으로 props의 얕은 비교를 수행하지만,
  두 번째 인수로 비교 함수를 전달하면 직접 변경 여부를 판단할 수 있음.
  (과거의 props, 현재의 props)
*/
export default memo(ContactItem, (prevProps, nextProps) => {
  return (
    prevProps.id === nextProps.id &&
    prevProps.name === nextProps.name &&
    prevProps.contact === nextProps.contact &&
    prevProps.onRemoveContact === nextProps.onRemoveContact
  );
});
