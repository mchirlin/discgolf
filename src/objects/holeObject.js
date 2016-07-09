import Parse from 'parse/react-native';

export default class HoleObject extends Parse.Object {
  constructor() {
    super('HoleObject');
  }
}

Parse.Object.registerSubclass('HoleObject', HoleObject);
