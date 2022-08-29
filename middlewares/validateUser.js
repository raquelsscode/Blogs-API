const validateUser = (req, res, next) => {
    const { email, password, displayName } = req.body;

//Expressão regular para validação de email com regex em "https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail"
    const validateEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    if (displayName.length < 8) {
      return res.status(400).json({
        message: '"displayName" length must be at least 8 characters long',
      });
    }

    if (!validateEmail.test(email)) {
      return res.status(400).json({
        message: '"email" must be a valid email',
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: '"password" length must be at least 6 characters long',
      });
    }

  
    next();
  };
  
  module.exports = {
    validateUser,
  }; 