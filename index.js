import { VimWasm, checkBrowserCompatibility } from './node_modules/vim-wasm/vimwasm.js';

// check browser compatibility
const errmsg = checkBrowserCompatibility();
if (errmsg !== undefined) {
    alert(errmsg);
}

const screenCanvasElement = document.getElementById('vim-screen');
const vim = new VimWasm({
    workerScriptPath: './node_modules/vim-wasm/vim.js',
    canvas: screenCanvasElement,
    input: document.getElementById('vim-input'),
});

// Handle drag and drop
function cancel(e) {
    e.stopPropagation();
    e.preventDefault();
}
screenCanvasElement.addEventListener(
    'dragover',
    e => {
        cancel(e);
        if (e.dataTransfer) {
            e.dataTransfer.dropEffect = 'copy';
        }
    },
    false,
);
screenCanvasElement.addEventListener(
    'drop',
    e => {
        cancel(e);
        if (e.dataTransfer) {
            vim.dropFiles(e.dataTransfer.files).catch(console.error);
        }
    },
    false,
);

vim.onVimExit = status => {
    alert(`Vim exited with status ${status}; Reload the page to start it back up!`);
};

vim.onFileExport = (fullpath, contents) => {
    const slashIdx = fullpath.lastIndexOf('/');
    const filename = slashIdx !== -1 ? fullpath.slice(slashIdx + 1) : fullpath;
    const blob = new Blob([contents], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.rel = 'noopener';
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};

vim.readClipboard = navigator.clipboard.readText;
vim.onWriteClipboard = navigator.clipboard.writeText;

vim.onError = console.error;

// get demo files from fs
const loadFile = (filepath) => {
    const header = {
        'Content-Type': 'text/plain',
        'Accept': 'text/plain'
    }

    return fetch(filepath, { headers: header })
        .then(async (res) => {
            return await res.text();
        })
        .catch(err => {
            return '';
        })
}

const main = async () => {

    vim.start({
        cmdArgs: ['/home/web_user/demo/demo1.md'],
        dirs: [
            '/home/web_user/demo',
            '/home/web_user/.vim/autoload'
        ],
        files: {
            '/home/web_user/demo/demo1.md': await loadFile('files/demo1.md'),
            '/home/web_user/.vim/vimrc': await loadFile('files/vimrc')
        },
        fetchFiles: { }
    });


}

main();

