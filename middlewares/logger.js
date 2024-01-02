module.exports = (req, res, next ) => { // next() sert à passer le relai aux autres middlewares et fonctions
        try {
            console.log('Je suis au bon endroit');
            next()
        } catch (err) {
            res.status(501).json({message : 'Error au niveau du logger: ' + err.message})
            console.log('Erreur au niveau du logger: ' + err.message)
        }
    
    }
    