import { useEffect, useState } from "react";

const useSort = (initData) => {
  // 초기 데이터 설정
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    setSortedData(initData);
  }, [initData]);

  // 정렬Type에따른 switch문
  const sortData = (sortType) => {
    // 변화시킬 변수
    let data = [...sortedData];

    switch (sortType) {
      case "lowest":
        data.sort((a, b) => a.id - b.id);
        break;
      case "highest":
        data.sort((a, b) => b.id - a.id);
        break;
      case "az":
        data.sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );
        break;
      case "za":
        data.sort((a, b) =>
          b.name.toLowerCase().localeCompare(a.name.toLowerCase())
        );
        break;
      default:
        break;
    }
    setSortedData(data);
  };

  return [sortedData, sortData];
};

export default useSort;
