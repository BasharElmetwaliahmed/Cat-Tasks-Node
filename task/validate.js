const { check } = require("express-validator");

exports.validator = [
  check("fullname").isAlpha().withMessage(`fullname mustn't contains numbers`),
  check("email")
    .exists()
    .withMessage("email is required")
    .notEmpty()
    .withMessage("email must not be empty")
    .isEmail()
    .withMessage("must be in the form of @gmail.com"),
  check("password")
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minNumbers: 1,
      minUppercase: 1,
      minSymbols: 1,
    })
    .withMessage(
      "password must be contains upper , lower case characters , special character and numbers with minlength of 8"
    )
    .custom((value, { req }) => {
      return req.body.confirmpassword === req.body.password;
    })
    .withMessage("password not matched"),
  check("birthdate").isDate().withMessage("birthdate must be a  date"),
];
