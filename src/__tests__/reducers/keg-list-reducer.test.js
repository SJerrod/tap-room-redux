import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action;
  const kegData = {
    name: 'OktoberFest',
    brand: 'Sam Adams',
    description: 'Hearty and Smooth, marzen',
    price: 5.50,
    alcoholContent: 5.2,
    pints: 124,
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, description, price, alcoholContent, pints, id } = kegData;
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
});