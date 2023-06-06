export default class Character {
  constructor(name, type) {
    const nameLength = name.length;
    if (typeof name === 'string' && nameLength >= 2 && nameLength <= 10) {
      this.name = name;
    } else {
      throw new Error('Длина имени должна быть от 2-х до 10 символов');
    }

    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!types.includes(type)) {
      throw new Error('Разрешенные персонажи: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    }
    this.type = type;

    this.health = 100;
    this.level = 1;

    switch (type) {
      case 'Bowman':
      case 'Undead':
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Swordsman':
      case 'Zombie':
        this.attack = 40;
        this.defence = 10;
        break;
      default:
        this.attack = 10;
        this.defence = 40;
        break;
    }
  }
}
