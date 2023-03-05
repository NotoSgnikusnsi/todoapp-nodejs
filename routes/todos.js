const express = require("express");
const router = express.Router();
const app = express();

router.route("/")
  .get((req,res) => {
    res.send(req.originalUrl)
  })
router.route("/:task_id")
  .put((req,res) => {
    return null
  })
  .delete((req,res) => {
    return null
  })
router.route("/:task_id/done")
  .put((req,res) => {
    return null
  })
  .delete((req,res) => {
    return null
  })
router.route("/add")
  .get((req,res) => {
    return null
  })
  .post((req,res) => {
    return null
  })

module.exports = router;
