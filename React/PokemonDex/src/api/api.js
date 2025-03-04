export const fetchPokemon = async (pokemonId) => {
  try {
    // 포켓몬의 종에 대한 상세정보
    const responsePokemonSpecies = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
    );
    const pokemonSpeciesData = await responsePokemonSpecies.json();

    //포켓몬에 대한 상세정보(Type)
    const responsePokemonInfo = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    const pokemonInfoData = await responsePokemonInfo.json();

    //Pokemon 데이터
    const pokemonData = {
      id: pokemonId,
      name: pokemonSpeciesData.names.find((item) => item.language.name === "ko")
        .name,
      genus: pokemonSpeciesData.genera.find(
        (item) => item.language.name === "ko"
      ).genus,
      color: pokemonSpeciesData.color.name,
      description: pokemonSpeciesData.flavor_text_entries.find(
        (item) => item.language.name === "ko"
      ).flavor_text,
      isLegendary: pokemonSpeciesData.is_legendary,
      frontImg: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
      backImg: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
      types: pokemonInfoData.types.map((item) => item.type.name),
      height: pokemonInfoData.height,
      weight: pokemonInfoData.weight,
    };

    return pokemonData;
  } catch (error) {
    console.error("fetch error:", error);
    throw error;
  }
};
