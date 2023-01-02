const got = require('got');
const getCotizaciones =
    (req, res) => {
        const tokenBCRA = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTk1MzUyNTAsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJlX2p1ZHRAaG90bWFpbC5jb20ifQ.F8s_qkjywN9VpzCMWDNUhcGw1q-WkruJk6CPPvLKYM37kl4XO8PQ20dPmjwTJHymsnOUK_9XsSohxUHc3RUeFA';
        got('https://api.estadisticasbcra.com/usd_of', { headers: { Authorization: `Bearer ${tokenBCRA}`, Accept: 'application/json', 'transfer-encoding': 'chunked' } }).then(response => {
            //console.log(response.body);
            //res.send(response.body);
            res.render('cotizacion', { coti: response.body });
        }).catch(error => {
            console.log(error.response.explanation);
        });
    };
module.exports = getCotizaciones;