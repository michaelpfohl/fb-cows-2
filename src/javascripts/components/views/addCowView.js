import form from '../forms/addCowForm';

const addCowView = () => {
  $('#app').html('<div id="cow-form">Put cow form here</div>');
  form.cowForm();
};

export default { addCowView };
