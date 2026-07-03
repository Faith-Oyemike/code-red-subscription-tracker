//handles request to get all function
function getSubscriptions(req, res) {
  res.json([
    {
      id: 1,
      name: "Netflix",
      price: 10,
      renewalDate: "2026-07-01",
    },
    {
      id: 2,
      name: "Apple Music",
      price: 15,
      renewalDate: "2026-07-05",
    },
  ]);
}
//Export the function
module.exports = {
  getSubscriptions,
};
