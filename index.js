'use strict';

let express = require('express');
let app = express();

app.use('*', (req, res) => res.sendFile(`${__dirname}/index.html`));

app.listen(process.env.PORT, () => console.log(`listening on ${process.env.PORT}`));