export default (state = {}, action) => {
  const { name, brand, description, price, alcoholContent, pints, id } = action;
  switch (action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
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
    default:
      return state;
  }
};