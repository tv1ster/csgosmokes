interface Map {
  name: String;
  imageSrc: String;
}

const maps: Map[] = [{
  name: 'mirage',
  imageSrc: '/assets/img/maps/mirage.jpg'
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
