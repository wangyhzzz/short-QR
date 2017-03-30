safari.application.addEventListener("popover",fff,true);
function fff(event){
    if(event.target.identifier !== "ppop")return;
    var long_url = safari.application.activeBrowserWindow.activeTab.url;
    $.ajax({
        url:'http://api.t.sina.com.cn/short_url/shorten.json?source=3271760578&url_long='+long_url,
        async:false,
        error:function(){
            $('#qrcode-box').empty();
            $('#qrcode-box').qrcode({
                width: 200,
                height: 200,
                text: long_url
            });
        },
        success:function(re){
            try{
                $('#qrcode-box').empty();
                $('#qrcode-box').qrcode({
                    width: 200,
                    height: 200,
                    text: re[0].url_short
                });
                $('#short_url').html(re[0].url_short)

            }catch(e){
                $('#qrcode-box').empty();
                $('#qrcode-box').qrcode({
                    width: 200,
                    height: 200,
                    text: long_url
                });
            }
        }
    });
}
