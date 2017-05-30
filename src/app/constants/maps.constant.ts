interface Map {
  name: String;
  link: String;
  label: String;
  imageSrc: String;
}

const maps: Map[] = [{
  name: 'mirage',
  label: 'Mirage',
  link: '/map/mirage',
  imageSrc: '/assets/img/maps/mirage.jpg'
}, {
  name: 'cobblestone',
  label: 'Cobblestone',
  link: '/map/cobblestone',
  imageSrc: '/assets/img/maps/cobblestone.png'
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
