const rxjs = require('rxjs')
const path = require('path')
module.exports = (app) => {
    let home$ = new rxjs.Subject()

    app.get('/', (req, res) => home$.next([req, res]))
    home$
    .subscribe((args) => {
            let [req, res] = args
            res.send({'status': 'up'})
    })

    let get$ = new rxjs.Subject()
    app.get('/img/:id', (req, res) => get$.next([req, res]))
    get$
    .subscribe((args) => {
            let [req, res] = args
            res.sendFile(path.join(__dirname + '/public/' + req.params.id))
    })

}