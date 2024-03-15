export enum FormatMode {
	Minify,
	Beautify,
}

export interface FormatSettings {
	Mode: FormatMode;
	RenameVariables: boolean;
	RenameGlobals: boolean;
	SolveMath: boolean;
}
