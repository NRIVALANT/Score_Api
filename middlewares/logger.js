module.exports = (req, res, next ) => { // next() sert à passer le relai aux autres middlewares et fonctions
    try {
        console.log('Je suis au bon endroit');
        next()
    } catch {
        res.status(501).json({message : 'Error au niveau du logger'})
    }

}