import React from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();

  console.log(id); // id is 1234567890
  return <h1>Edit 페이지는 {id}번 일기입니다</h1>;
};

export default Edit;
