import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action;
  const currentState = {
    1: {
      name: 'OktoberFest',
      brand: 'Sam Adams',
      description: 'Hearty and Smooth, Marzen',
      price: 5.50,
      alcoholContent: 5.2,
      pints: 124,
      id: 1
    },
    2: {
      name: 'Winter Lager',
      brand: 'Sam Adams',
      description: 'Spiced cinnamon, ginger, and orange peel, Bock',
      price: 6.00,
      alcoholContent: 5.6,
      pints: 124,
      id: 2
    }
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, description, price, alcoholContent, pints, id } = currentState;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      description: description,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints,
      id: id
    };
    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        description: description,
        price: price,
        alcoholContent: alcoholContent,
        pints: pints,
        id: id
      }
    });
  });

  test('Should successfully delete a keg', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        name: 'Winter Lager',
        brand: 'Sam Adams',
        description: 'Spiced cinnamon, ginger, and orange peel, Bock',
        price: 6.00,
        alcoholContent: 5.6,
        pints: 124,
        id: 2
      }
    });
  });
  
});