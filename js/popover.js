safari.application.addEventListener("popover",fff,true);
function fff(event){
    if(event.target.identifier !== "ppop")return;
    try{
        $.ajax({
            url:'http://api.t.sina.com.cn/short_url/shorten.json?source=3271760578&url_long='+safari.application.activeBrowserWindow.activeTab.url,
            async:false,
            data:null,
            success:function(re){
                $('#qrcode-box').empty();
                $('#qrcode-box').qrcode({
                    width: 200,
                    height: 200,
                    text: re[0].url_short
                });
            }
        });
    }catch(e){
        alert(e);
    }
}
