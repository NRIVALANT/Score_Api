exports.getApiResponse = (req, res) => {
    console.log("On est bien sur la route de l'api")
    console.log(req)
    res.status(200).json({"res":"ok"})
}