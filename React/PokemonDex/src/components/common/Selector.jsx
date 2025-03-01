import React from "react";
import styled from "styled-components";

const Selector = ({ topic, options }) => {
  return (
    <SelectorWrapper>
      <h4>{topic}</h4>
      <select value="basic">
        {options.map((item) => (
          <option key={item.id} name={item.name} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </SelectorWrapper>
  );
};

export default Selector;

const SelectorWrapper = styled.div`
  width: 100%;
  padding: 10px 0;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 15px;
    color: #989898;
    margin-bottom: 5px;
  }

  select {
    width: 95%;
    padding: 10px 15px;
    border: 1px solid #000;
    text-align: center;
  }
`;
