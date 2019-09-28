const Image = require("../model/Image.js");

exports.upload = (req, res) => {
  const image = new Image();
  if (req.files === null) {
    return res
      .status(400)
      .json({ success: false, msg: "No File Exists: Bad Request" });
  }
  const file = req.files.file;

  file.mv(
    `${__dirname}/../client/public/uploads/${image._id}__${file.name}`,
    err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      const filePath = `/uploads/${image._id}__${file.name}`;

      image.img.filePath = filePath;
      image.img.fileName = file.name;

      image
        .save()
        .then(img =>
          res.send({ fileName: img.fileName, filePath: img.filePath })
        )
        .catch(err => {
          return res.send(err);
        });
    }
  );
};

exports.view = (req, res) => {
  Image.find().exec((err, image) => {
    if (err)
      return res.status(400).send({ success: false, msg: "No Files found" });
    return res.send({ success: true, image });
  });
};
