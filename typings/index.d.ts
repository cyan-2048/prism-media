import type { Transform } from "stream";

import { opus } from "./opus";
import { vorbis } from "./vorbis";

export interface VolumeOptions {
	type: "s16le" | "s16be" | "s32le" | "s32be";
	volume?: number;
}

export class VolumeTransformer extends Transform {
	public volume: number;

	constructor(options: VolumeOptions);
	public setVolume(volume: number): void;
	public setVolumeDecibels(db: number): void;
	public setVolumeLogarithmic(value: number): void;
	public readonly volumeDecibels: number;
	public readonly volumeLogarithmic: number;
}

export { opus, vorbis };

namespace prism {
	export { opus, vorbis };
	export { VolumeTransformer, VolumeOptions };
}

export default prism;
