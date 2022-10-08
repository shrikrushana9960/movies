import { constants } from "../../../constants/constants.js";
var request = require("request");

export default function handler(req, res) {
  let { page,keyword } = req.body;

  var options = {
    method: "GET",
    url: constants.URL + "api/search?page="+page+"&query="+keyword,

    headers: {
      "Content-Type": "application/json",
    },
  };

  console.log(options);

  request(options, function (error, response) {
    try {
      if (error) {
        console.log(error);
        res.status(400).send(error);
        throw new Error(error);
      }

      res.status(200).json({ data: JSON.parse(response.body) });
    } catch (err) {
      res.status(400).json({ data: null });
    }
  });
}
