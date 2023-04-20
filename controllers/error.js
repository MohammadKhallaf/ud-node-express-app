exports.get404 = (req, res, next) => {
  // have to come at last to not overcome the previous calls
  res.status(404);
  res.send();
};
