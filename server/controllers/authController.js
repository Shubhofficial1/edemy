const register = (req, res) => {
  console.log(req.body);
  res.json("Register Route");
};

export { register };
