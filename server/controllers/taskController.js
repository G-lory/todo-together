function createTask(req, res) {
  console.log(req.body)

  res.json({
    success: true
  });
}

module.exports = {
  createTask
}