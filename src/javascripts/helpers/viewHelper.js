import farmer from '../components/views/farmersView';
import cow from '../components/views/cowsView';
import add from '../components/views/addCowView';
import updateCow from '../components/views/updateCowView';
import singleFarmer from '../components/views/singleFarmerView';

const viewHelper = (id, arg) => {
  $('#app').html('');
  switch (id) {
    case 'farmers-link':
      return farmer.farmersView();
    case 'cows-link':
      return cow.cowsView();
    case 'add-cow-link':
      return add.addCowView();
    case 'update-cow-link':
      return updateCow.updateCowView(arg);
    case 'single-farmer-link':
      return singleFarmer.singleFarmerView(arg);
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
  $('body').on('click', '.update-cow', (e) => {
    const cowFirebaseKey = e.currentTarget.id;
    viewHelper('update-cow-link', cowFirebaseKey);
  });
  $('body').on('click', '.card.farmer .see-cows', (e) => {
    const farmerUid = e.currentTarget.id;
    viewHelper('single-farmer-link', farmerUid);
  });
};

export default { viewListener };
