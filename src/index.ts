const MAIN_WINDOW_WEBPACK_ENTRY = `file://${__dirname}/index.html`;
import { spawn } from 'child_process';
import { BrowserWindow } from 'electron';

const startDjangoServer = () =>
{
    const djangoBackend = spawn(`python\\CMPS420-HCI-Project-JAGZ\\Scripts\\python.exe`,
        ['python\\CMPS420-HCI-Project-JAGZ\\manage.py', 'runserver', '--noreload']);
    djangoBackend.stdout.on('data', data =>
    {
        console.log(`stdout:\n${data}`);
    });
    djangoBackend.stderr.on('data', data =>
    {
        console.log(`stderr: ${data}`);
    });
    djangoBackend.on('error', (error) =>
    {
        console.log(`error: ${error.message}`);
    });
    djangoBackend.on('close', (code) =>
    {
        console.log(`child process exited with code ${code}`);
    });
    djangoBackend.on('message', (message) =>
    {
        console.log(`message:\n${message}`);
    });
    return djangoBackend;
}

const createWindow = (): void => {

    startDjangoServer();

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

