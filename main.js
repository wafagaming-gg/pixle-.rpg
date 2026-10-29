const {app,BrowserWindow,Menu}=require('electron');
const path=require('path');
function create(){
  const w=new BrowserWindow({width:1280,height:720,backgroundColor:'#101820',autoHideMenuBar:true,
    icon:path.join(__dirname,'../www/icons/icon-512.png'),webPreferences:{contextIsolation:true,backgroundThrottling:false}});
  Menu.setApplicationMenu(null);
  w.loadFile(path.join(__dirname,'../www/index.html'));
  w.webContents.on('before-input-event',(e,i)=>{if(i.type==='keyDown'&&i.key==='F11'){w.setFullScreen(!w.isFullScreen());e.preventDefault();}});
}
app.whenReady().then(create);
app.on('window-all-closed',()=>{app.quit();});
