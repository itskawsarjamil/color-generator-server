const express = require('express');
const cors = require('cors');
const port = process.env.port || 5000;

const app = express();
app.use(cors());
const ips = [];
app.get('/', (req, res) => {
    if (ips[req.ip]) {
        res.send({ success: false, error: "You already used our free service" });
        return;
    }
    ips[req.ip] = 1;
    res.send({ success: true });
    // if (ips.includes(req.ip)) {
    //     res.send({ success: false, error: "You already used our free service" })
    // }
    // else {
    //     res.send({ success: true });
    //     ips.push(req.ip);
    // }
    console.log(ips);
})


app.listen(port, () => console.log(`Server is running on ${port}`))