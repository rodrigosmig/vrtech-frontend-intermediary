export const capitalizeFirstLetter = (string) => {
  if (string.length < 3) {
    return string.toUpperCase();
  }
  
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getPokemonColor = (type) => {
  const types = {
    bug: '#BDDD6E',
    dragon: '#8A55FD',
    dark: '#5F4632',
    electric: '#969101',
    fighting: '#800B11',
    fairy: '#F87EA7',
    fire: '#F66C6D',
    ghost: '#472B53',
    flying: '#085764',
    grass: '#48D0B0',
    ice: '#103D43',
    ground: '#BFAC21',
    normal: '#ACA974',
    psychic: '#EC0E63',
    poison: '#611380',
    rock: '#776A3E',
    water: '#36AFF6',
    steel: '#7B8E8A'
  }

  return types[type];
}