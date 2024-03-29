declare global {
    interface Window {
        electronAPI: {
            send: (
                channel: string,
                ...args: unknown[]
            ) => void;

            on: (
                channel: string,
                listener: (
                    event: Electron.IpcRendererEvent,
                    ...args: unknown[]
                ) => void
            ) => void

            once: (
                channel: string,
                listener: (
                    event: Electron.IpcRendererEvent,
                    ...args: unknown[]
                ) => void
            ) => Electron.IpcRenderer;

            removeListener: (
                channel: string,
                listener: (
                    event: Electron.IpcRendererEvent,
                    ...args: unknown[]
                ) => void
            ) => void
        };
    }
}

export { };