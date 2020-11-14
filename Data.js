const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cameraDb");
const Schema = mongoose.Schema;

var dataSchema = new Schema({
    model: String,
    lens: String,
    megapixel: String,
    sensor: String,
    iso: String,
    shutterspeed: String,
    focuspoint: String,
    coverage: String,
    fps: String,
    flash: String,
    afvideo: String,
    media: String,
    video: String,
    dimension: String,
    processor: String,
    lcd: String,
    weight: String,
    life: String
});

var Data = mongoose.model("camera", dataSchema);

module.exports = Data;