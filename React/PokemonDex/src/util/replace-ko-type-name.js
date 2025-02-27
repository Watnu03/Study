import pokemonTypeData from "../data/pokemon-type-data.json";

// 'name'과 일치하는 타입을 찾아서 name_kr과 color 반환
const replaceTypeName = (name) => {
  const type = pokemonTypeData.find(
    (type) => type.name.toLowerCase() === name.toLowerCase()
  );

  return type
    ? { name_kr: type.name_kr, color: type.color }
    : { name_kr: name, color: "#000" };
};

export default replaceTypeName;
