/**
 * @author Tim
 */
var qotePath = $('webttjs') ? $('webttjs').src : '.';
var webttPath = qotePath.substring(0, qotePath.lastIndexOf('/') + 1);
webttPath = webttPath == '' ? '.' : webttPath;

function $(id){
    if (document.getElementById(id)) {
        return document.getElementById(id);
    }
    else 
        if (document.all) {
            return document.all[id];
        }
        else 
            if (document.layers) {
                return document.layers[id];
            }
}

var webtt_init = function(){
    document.body.innerHTML = '<div  style=" position:absolute;left:0px;top:0px; width:100%;height:32px;z-index:1;margin: 0px;padding: 0px; "><iframe  src=" ' + webttPath + '/lib/frame.html" width="100%" height="38px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" style="padding:0px; margin:0px;background-color:transparent" allowtransparency="true" ></iframe></div>' + document.body.innerHTML;
}
if (document.attachEvent) {
    window.attachEvent("onload", webtt_init);
}
else 
    window.addEventListener('load', webtt_init, false);
