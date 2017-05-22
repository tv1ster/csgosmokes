interface Db {
  throws: Throws[];
}

interface Throws {
  positionOneTop: Number;
  positionOneLeft: Number;
  positionTwoTop: Number;
  positionTwoLeft: Number;
  type: String;
  side: String;
}

const db = {
  throws: [{
    positionOneTop: 0,
    positionOneLeft: 0,
    positionTwoTop: 10,
    positionTwoLeft: 10,
    type: 'smoke',
    side: 'ct'
  }]
};


export { Db, db };
