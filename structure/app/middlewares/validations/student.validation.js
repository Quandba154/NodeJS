const checkEmty = (req, res, next) => {
  const { fullname, age, numberClass } = req.body;
  if (fullname && age && numberClass) {
    next();
  } else {
    res.status(500).send("You must fill full [fullname && age && numberClass]");
  }
};

const checkNumberClass = (req, res, next) => {
  const { numberClass } = req.body;
  if (1 <= numberClass && numberClass <= 12) {
    next();
  } else {
    res.status(500).send("You must provide numberClass between 1 and 12.");
  }
};

module.exports = { checkEmty, checkNumberClass };
