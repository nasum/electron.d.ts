//reference：https://gist.github.com/anurse/3fe1f38c9cc0ea927c4f
/// <references src="../node/node.d.ts" />

declare module "app" {
	var app: Electron.App;

	export = app;
}

declare module "browser-window" {
	class _BrowserWindow extends Electron.BrowserWindow { }

	export = _BrowserWindow;
}

declare module "ipc" {
	var ipc: any;

	export = ipc;
}

declare module "crash-reporter" {
	var crashReporter: any;

	export = crashReporter;
}

declare module Electron {
	class EventEmitter implements NodeJS.EventEmitter {
		static listenerCount(emitter: EventEmitter, event: string): number;

		addListener(event: string, listener: Function): EventEmitter;
		on(event: string, listener: Function): EventEmitter;
		once(event: string, listener: Function): EventEmitter;
		removeListener(event: string, listener: Function): EventEmitter;
		removeAllListeners(event?: string): EventEmitter;
		setMaxListeners(n: number): void;
		listeners(event: string): Function[];
		emit(event: string, ...args: any[]): boolean;
	}

	export class BrowserWindow extends EventEmitter {
		constructor(options: BrowserWindowOptions);

		static getAllWindows(): BrowserWindow[];
		static getFocusedWindow(): BrowserWindow;
		static fromWebContents(webContents: WebContents): BrowserWindow;
		static fromId(id: number): BrowserWindow;
		static addDevToolsExtension(path: string): string;
		static removeDevToolsExtension(name: string);

		webContents: WebContents;
		devToolsWebContents: WebContents;
		id: number;

		destroy(): void;
		close(): void;
		focus(): void;
		isFocused(): boolean;
		show(): void;
		showInactive(): void;
		hide(): void;
		isVisible(): boolean;
		maximize(): void;
		unmaximize(): void;
		isMaximized(): boolean;
		minimize(): void;
		restore(): void;
		isMinimized(): boolean;
		setFullScreen(flag: boolean): void;
		isFullScreen(): boolean;
		setSize(width: number, height: number): void;
		getSize(): number[];
		setContentSize(width: number, height: number): void;
		getContentSize(): number[];
		setMinimumSize(width: number, height: number): void;
		getMinimumSize(): number[];
		setMaximumSize(width: number, height: number): void;
		getMaximumSize(): number[];
		setResizable(resizable: boolean): void;
		isResizable(): boolean;
		setAlwaysOnTop(flag: boolean): void;
		isAlwaysOnTop(): boolean;
		center(): void;
		setPosition(x: number, y: number): void;
		getPosition(): number[];
		setTitle(title: string): void;
		getTitle(): string;
		flashFrame(flag: boolean): void;
		setSkipTaskbar(skip: boolean): void;
		setKiosk(flag: boolean): void;
		isKiosk(): boolean;
		setRepresentedFilename(filename: string): void;
		getRepresentedFilename(): string;
		setDocumentEdited(edited: boolean): void;
		isDocumentEdited(): boolean;
		openDevTools(): void;
		closeDevTools(): void;
		toggleDevTools(): void;
		inspectElement(x: number, y: number): void;
		focusOnWebView(): void;
		blurWebView(): void;
		capturePage(rect: { x: number; y: number; width: number; height: number }, callback: Function): void;
		print(options: { silent: boolean; printBackground: boolean }): void;
		loadUrl(url: string): void;
		reload(): void;
		setMenu(menu: any): void;
		setProgressBar(progress: number): void;
		showDefinitionForSelection(): void;
		setAutoHideMenuBar(hide: boolean): void;
		isMenuBarAutoHide(): boolean;
	}

	export interface UserTask {
		program: string;
		arguments: string;
		title: string;
		description: string;
		iconPath: string;
		iconIndex: number;
	}

	export interface CommandLine {
		appendSwitch(sw: string, value?: string): void;
		appendArgument(value: string): void;
	}

	export interface Dock {
		bounce(type?: string): number;
		cancelBounce(id: number): void;
		setBadge(text: string): void;
		getBadge(): string;
		hide(): void;
		show(): void;
		setMenu(menu: any): void;
	}

	export class App extends EventEmitter {
		quit(): void;
		terminate(): void;
		getDataPath(): string;
		getVersion(): string;
		getName(): string;
		resolveProxy(url: string, callback: (proxy: any) => void);
		addRecentDocument(path: string);
		clearRecentDocuments(): void;
		setUserTasks(tasks: UserTask[]): void;
		commandLine: CommandLine;
		dock: Dock;
	}

	export interface BrowserWindowOptions {
		x?: number;
		y?: number;
		width?: number;
		height?: number;
		'use-content-size'?: boolean;
		center?: boolean;
		'min-width'?: number;
		'min-height'?: number;
		'max-width'?: number;
		'max-height'?: number;
		resizable?: boolean;
		'always-on-top'?: boolean;
		fullscreen?: boolean;
		'skip-taskbar'?: boolean;
		'zoom-factor'?: number;
		kiosk?: boolean;
		title?: string;
		icon?: string;
		show?: boolean;
		frame?: boolean;
		'node-integration'?: boolean;
		'accept-first-mouse'?: boolean;
		'auto-hide-menu-bar'?: boolean;
		'enable-larger-than-screen'?: boolean;
		'dark-theme'?: boolean;
		preload?: boolean;
		'web-preferences'?: {
			javascript?: boolean;
			'web-security'?: boolean;
			images?: boolean;
			java?: boolean;
			'text-areas-are-resizable'?: boolean;
			webgl?: boolean;
			webaudio?: boolean;
			plugins?: boolean;
			'extra-plugin-dirs'?: string[];
			'experimental-features'?: boolean;
			'experimental-canvas-features'?: boolean;
			'subpixel-font-scaling'?: boolean;
			'overlay-scrollbars'?: boolean;
			'overlay-fullscreen-video'?: boolean;
			'shared-worker'?: boolean;
			'direct-write'?: boolean;
		};
	}

	export interface WebContents extends EventEmitter {
		loadUrl(url: string): void;
		getUrl(): string;
		getTitle(); string;
		isLoading(): boolean;
		isWaitingForResponse(): boolean;
		stop(): void;
		reload(): void;
		reloadIgnoringCache(): void;
		canGoBack(): boolean;
		canGoForward(): boolean;
		canGoToOffset(offset: number): void;
		goBack(): void;
		goForward(): void;
		goToIndex(index: number): void;
		goToOffset(offset: number): void;
		isCrashed(): boolean;
		setUserAgent(userAgent: string): void;
		insertCSS(css: string): void;
		executeJavaScript(code: string): void;
		send(channel: string, ...args: any[]): void;
	}
}
