import farmerData from '../../helpers/data/farmerData';
import card from '../cards/farmerCards';

const farmersView = () => {
  farmerData.getAllFarmers().then((response) => {
    response.forEach((item) => {
      if (response.length) {
        $('#app').append(card.farmerMaker(item));
      } else {
        $('#app').append('<h2>NO FARMERS!</h2>');
      }
    });
  });
};

export default { farmersView };
