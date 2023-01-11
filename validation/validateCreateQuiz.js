const Validator = require('validator');
const isEmpty = require('./is-empty');


const validateCreateQuiz = (data) => {
    let errors = {}
    data.subject = !isEmpty(data.subject) ? data.subject : '';
    data.pmarks = !isEmpty(data.pmarks) ? data.pmark : '';

    if (Validator.isEmpty(data.subject)) {
        errors.subject = 'Exam field is required';
    }
    if (Validator.isEmpty(data.pmarks)) {
        errors.pmarks = 'passing marks field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };

}


module.exports = validateCreateQuiz 