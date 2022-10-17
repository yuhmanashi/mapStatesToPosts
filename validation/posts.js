const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.caption = validText(data.caption) ? data.caption : '';
  data.stateName = validText(data.stateName) ? data.stateName : '';

  if (!Validator.isLength(data.caption, { min: 5, max: 140 })) {
    errors.caption = 'Post must be between 5 and 140 characters';
  }

  if (Validator.isEmpty(data.caption)) {
    errors.caption = 'Caption field is required';
  }

  if (Validator.isEmpty(data.stateName)) {
    errors.caption = 'State name is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};