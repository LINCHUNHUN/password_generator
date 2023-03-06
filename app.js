// app.js
// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
//const bodyParser = require('body-parser')(Express已內建，所以不用另寫載入)
const generatePassword = require('./generate_password')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//setting body-parser
//app.use(bodyParser.urlencoded({ extended: true }))（此寫法為Express未內建時要寫）
app.use(express.urlencoded({ extended: true })) //此寫法為Express已內建

//setting routes
app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    //console.log('random password is: ', generatePassword(req.body))
    const options = req.body
    const password = generatePassword(options)
    res.render('index', {password: password, options: options})
    //在 JavaScript ES6 中，當物件的屬性名稱和屬性要帶入的變數名稱相同時，例如這裡的 { password: password, options: options }，可以簡寫出屬性名稱就好，變成 { password, options }。
})

// starts the express server and listening for connections.
app.listen(port, () => {
    console.log(`Express app listening on port http://localhost:${port}`)
})