const express = require("express");
const fs = require("fs");
const hbs = require("hbs");
const router = express.Router();
const fileSource = require("../templates/basic.hbs");
const pdf = require("html-pdf");

/*
    path: '/createresume'
    type: POST
    paramaters: {
        personalInformation,
        experience
    }
    return value:  download a pdf containing hbs template having following passed data
*/
router.post("/", async (req, res) => {
    const data = req.body;
    const template = hbs.compile(fileSource);
    const html = template({
        ...data["personalInformation"],
        experience: data["experience"],
    });
    pdf.create(html).toBuffer(function (err, buffer) {
        if (err) return res.send(err.stack);
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "attachment; filename=mypdf.pdf");
        res.send(buffer);
    });
});

module.exports = router;
