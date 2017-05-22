interface Map {
  name: String;
}

const maps: Map[] = [{
  name: 'mirage'
}];

function getMap (mapName: String) {
  const filteredMaps = maps.filter((map) => map.name === mapName);
  if (filteredMaps.length) {
    return filteredMaps[0];
  } else {
    return null;
  }
}

export { Map, maps, getMap };
