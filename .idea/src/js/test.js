/*$(function () {
    $("#btn_login").click(function () {
        var obj={"aid":1613062030,"aname":"韩士旭","ausername":"axu","apassword":123,"asex":"男","aphone":17826155592,"amail":"1035219157@qq.com"}

        var myJSON = JSON.stringify(obj);
        var url = "http://47.101.207.229:8080/shaw/admin/register"
        $.ajax({
            url:url,
            type:'POST',
            contentType: "application/json; charset=utf-8",
            dataType:'json',//json 返回值类型
            data:myJSON,//转化为json字符串
            success:function(data){
                console.log(data)
            }
        });
    })
})*/


$(function () {
    $("#btn_login").click(function () {
        var url = "http://47.101.207.229:8080/shaw/admin/login";
        var login = {"aid":1613062030, "apassword":123};
        var myJSON = JSON.stringify(login);
        $.ajax({

            type:"POST",

            url:url,
            contentType: "application/json; charset=utf-8",
            dataType:'json',

            data:myJSON,

            success:function(data){

                console.log(data)

            }

        })
    })
})