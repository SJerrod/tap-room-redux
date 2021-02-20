export default (state = null, action) => {
  const { name, brand, description, price, alcoholContent, pints, id } = action;
  switch (action.type) {
    case 'BUY_PINT':
      return {
        [id] : {
          name: name,
          brand: brand,
          description: description,
          price: price,
          alcoholContent: alcoholContent,
          pints: pints,
          id: id
        }
      }
    default:
      return state;
  }
};