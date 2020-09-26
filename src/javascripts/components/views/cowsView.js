import mergedData from '../../helpers/data/mergedData';
import card from '../cards/cowCard';

const cowsView = () => {
  mergedData.getDataForCowsView().then((response) => {
    response.forEach((item) => {
      if (response.length) {
        $('#app').append(card.cowMaker(item));
      } else {
        $('#app').append('<h2>NO COWS!</h2>');
      }
    });
  });
};

export default { cowsView };
