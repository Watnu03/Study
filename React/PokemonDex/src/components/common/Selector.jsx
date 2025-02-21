import React from "react";
import styled from "styled-components";

const Selector = () => {
  return (
    <SelectorWrapper>
      <h4>특성</h4>
      <select value="">
        <option name="lowest" value="lowest" selected>
          도감 낮은 번호순서
        </option>
        <option name="highest" value="highest">
          도감 높은 번호순서
        </option>
        <option name="az" value="az">
          이름 순서(A-Z)
        </option>
        <option name="za" value="za">
          이름 반대순서(Z-A)
        </option>
      </select>
    </SelectorWrapper>
  );
};

export default Selector;

const SelectorWrapper = styled.div`
  width: 100%;
  padding: 8px 0;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    margin-bottom: 5px;
  }

  select {
    width: 95%;
    padding: 8px 15px;
    border: 1px solid #000;
    text-align: center;
  }
`;
