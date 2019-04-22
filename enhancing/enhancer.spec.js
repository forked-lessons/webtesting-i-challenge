const enhancer = require('./enhancer');

describe('outcomes', () => {
  describe('success outcome', () => {
    const weapon1 = {
      name: 'Clouds Buster Sword',
      type: 'weapon',
      durability: 90,
      enhancement: 18
    };
    const weaponSuccess1 = {
      name: 'Clouds Buster Sword',
      type: 'weapon',
      durability: 90,
      enhancement: 19
    };
    const weapon2 = {
      name: 'Clouds Buster Sword',
      type: 'weapon',
      durability: 20,
      enhancement: 0
    };
    const weapon3 = {
      name: 'Clouds Buster Sword',
      type: 'weapon',
      durability: 50,
      enhancement: 0
    };
    const weaponSuccess3 = {
      name: 'Clouds Buster Sword',
      type: 'weapon',
      durability: 50,
      enhancement: 1
    };
    test('Should increase the enhancement of the item by 1', () => {
      const enhancedItem = enhancer.success(weapon1);
      const enhancedItem3 = enhancer.success(weapon3);
      expect(enhancedItem).toEqual(weaponSuccess1);
      expect(enhancedItem3).toEqual(weaponSuccess3);
    });
    test('error if durability is below 25 and item enhancement is less than or equal to 14', () => {
      expect(() => {
        enhancer.success(weapon2);
      }).toThrow();
    });
    test('error if item enhancement is already 20', () => {
      expect(() => {
        enhancer.success(armor1);
      }).toThrow();
    });
  });
  describe('fail outcome', () => {
    const item2 = {
      name: 'testsword',
      type: 'weapon',
      durability: 80,
      enhancement: 18
    };
    const failedItem2 = {
      name: 'testsword',
      type: 'weapon',
      durability: 70,
      enhancement: 17
    };
    test('Should fail when enhancing', () => {
      const failedEnhance1 = enhancer.fail(item2);
      expect(failedEnhance1).toEqual(failedItem2);
    });
  });
});
