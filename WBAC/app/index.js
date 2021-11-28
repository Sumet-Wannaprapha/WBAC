const { app, Menu, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");
let win;

function createWindow() {
  var template = [
    {
      label: "Reload",
      submenu: [
        {
          label: "Reload",
          accelerator: "CmdOrCtrl+A",
          selector: "selectAll:",
          role: "reload",
        },
      ],
    },
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
  win = new BrowserWindow({
    "node-integration": false,
    width: 1024,
    height: 728,
    resizable: true,
    // icon: __dirname + "./icons/icon.ico",
    //autoHideMenuBar: false,
    // fullscreen:true,
    //simpleFullscreen:false,
    //frame: false
  });

  win.webContents.openDevTools();
//   win.loadURL(
//     url.format({
//       pathname: path.join(__dirname, `build/index.html`),

//       protocol: "file:",
//       slashes: true,
//     })
//   );
  win.loadURL('http://119.59.100.51/plesk-site-preview/www.repair1.xyz/https/119.59.100.51/')
//   win.on("closed", () => {
//     win = null;
//   });
}
app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
