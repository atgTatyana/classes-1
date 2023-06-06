import Character from '../Character';

test('testing class Character for wrong name', () => {
  function error() {
    const character = new Character('C', 'Zombie');
  }
  expect(error).toThrowError('Длина имени должна быть от 2-х до 10 символов');
});

test('testing class Character for wrong type', () => {
  function error() {
    const character = new Character('VVV', 'Vampire');
  }
  expect(error).toThrowError('Разрешенные персонажи: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});
