// module.exports = {
//   succeed,
//   fail,
//   repair,
//   get
// };
module.exports = {
  success: item => {
    if (item.enhancement <= 14 && item.durability < 25) {
      throw new Error('Durability is below 25; item cannot be enhanced');
    }
    if (item.enhancement >= 15 && item.durability < 10) {
      throw new Error('Durability is below 10, item cannot be enhanced');
    }
    if (item.enhancement === 20) {
      throw new Error('Item enhancement is at max');
    }
    if (item.enhancement >= 0 && item.enhancement < 15) {
      item.enhancement += 1;
    } else if (item.enhancement === 15) {
      item.enhancement += 1;
    } else if (item.enhancement === 16) {
      item.enhancement += 1;
    } else if (item.enhancement === 17) {
      item.enhancement += 1;
    } else if (item.enhancement === 18) {
      item.enhancement += 1;
    } else if (item.enhancement === 19) {
      item.enhancement += 1;
    }
    return item;
  },
  fail: item => {
    if (item.enhancement < 15) {
      item.durability -= 5;
    }
    if (item.type === 'weapon' && item.enhancement <= 7) {
      throw new Error('Weapon enhancement is level 7 or under, cannot fail.');
    } else if (item.enhancement >= 0 && item.enhancement <= 14) {
      item.durability -= 5;
    } else if (item.enhancement > 14 && item.enhancement <= 16) {
      item.durability -= 10;
    } else if (item.enhancement === 17) {
      item.enhancement -= 1;
      item.durability -= 10;
    } else if (item.enhancement === 18) {
      item.enhancement -= 1;
      item.durability -= 10;
    } else if (item.enhancement === 19) {
      item.enhancement -= 1;
      item.durability -= 10;
    }
    return item;
  },

  repair: item => {
    return { ...item };
  },

  get: item => {
    return { ...item };
  }
};
