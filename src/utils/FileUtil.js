const fs = require("fs");

const  jpgAndPngOnly = function(req, file, callback) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/)) {
        req.fileValidationError = "You need to upload photo file (jpg/png).";
        return callback(null, false, req.fileValidationError);
    }
    callback(null, true);
}

const removeFile = (path) => {
    let filename = path.split("/")[1];
    fs.unlink("uploads/" + filename, () => {});
}

const addFileExtention = (file, extention) => {
    fs.renameSync("uploads/" + file.filename, "uploads/" + file.filename + "." + extention);
}

module.exports = {
    jpgAndPngOnly,
    removeFile,
    addFileExtention
}