const opus = require("./opus");
const vorbis = require("./vorbis");
const { VolumeTransformer } = require("./core");

export { opus, vorbis, VolumeTransformer };

const def = {
	opus,
	vorbis,
	VolumeTransformer,
};

export default def;
