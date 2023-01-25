let pdf = require("handlebars-pdf");

const templateToPdfConverter = async (fileName, path, msg) => {
    const document = {
        template: fileName,
        context: {
            msg: msg,
        },
        path: "./resume.pdf",
    };
    pdf.create(document)
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.error(error);
        });
};

module.exports = { templateToPdfConverter };
