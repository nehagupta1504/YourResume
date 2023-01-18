const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    // res.json({ messsage: "message" });
    res.render("basic.hbs", {
        name: "Neha",
        email: "neha@abc.com",
        contact: "12345",
        linkedIn: "neha@linkedin",
        github: "neha@github",
        experience: [
            {
                companyName: "Monotype",
                position: "SDE1",
                jobDescription: "Engineer at monotype",
                current: true,
                from: "10/Jan/2022",
            },
            {
                companyName: "LTI",
                position: "SDE",
                jobDescription: "Engineer at LTI",
                current: false,
                from: "10/Jan/2022",
                to: "06/Jan/2022",
            },
        ],
    });
});

/*
    path: '/createresume'
    type: POST
    paramaters: {
        personalInformation,
        experience
    }
    return value:  download a pdf containing hbs template having following passed data
*/

router.post("/createResume", (req, res) => {
    try {
        let { personalInformation, experience } = req.body;
        const { name, contact, email, linkedIn, github } = personalInformation;
        const { companyName, position, jobDescription, current, from, to } =
            experience;
    } catch (err) {
        console.log(err.messsage);
        res.json({ error: err.messsage });
    }
});

module.exports = router;
