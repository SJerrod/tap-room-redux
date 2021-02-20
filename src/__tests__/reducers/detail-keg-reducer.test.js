import detailKegReducer from '../../reducers/detail-keg-reducer';

describe('detailKegReducer', () => {

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
    }
  };

  test('Should return default state if no action type is recognized', () => {
    expect(detailKegReducer({}, { type: null })).toEqual({});
  });

  test('Should return selected keg when BUY_PINT action', () => {
    const { name, brand, description, price, alcoholContent, pints, id } = currentState;
    action = {
      type: 'BUY_PINT',
      name: name,
      brand: brand,
      description: description,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints,
      id: id
    };
    expect(detailKegReducer(currentState, { type: 'BUY_PINT'})).toEqual({
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