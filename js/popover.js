safari.application.addEventListener("popover",fff,true);
function fff(event){
    if(event.target.identifier !== "ppop")return;
    try{
        var long_url = safari.application.activeBrowserWindow.activeTab.url;
        $.ajax({
            url:'http://api.t.sina.com.cn/short_url/shorten.json?source=3271760578&url_long='+long_url,
            async:false,
            data:null,
            error:function(){
                $('#qrcode-box').empty();
                $('#qrcode-box').qrcode({
                    width: 200,
                    height: 200,
                    text: long_url
                });
            }
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
