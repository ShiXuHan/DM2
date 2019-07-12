
//检测输入的用户账号
function checkNumber() {
    var username = document.getElementById("aid");
    var message = "";
    if(username.value==""){
        message="请输入账户"
    }else
    //检测是否位数字  数字之间不能有空格
    if (isNaN(username.value) || username.value.replace(/(^\s*)|(\s*$)/g,"")=="") {

        message="请输入正确的账户"



    }else if (username.value.length!=10){//判断是否是10位数

        message="请输入正确的账户"


    }else if(username.value[0]!=1){//判断是否是1开头的数字
        message="请输入正确的账户"

    }
    if(message!=""){
        username.value=""
        alert(message)
    }

}

//登录按钮设置
$(function () {
    $("#btn_login").click(function () {


        var password = document.getElementById("apassword");
        var aid = document.getElementById("aid");
            //检测账户是否为空
        if (aid.value=="") {
            alert("请输入账户");
            //检测密码是否为空
        }else if(password.value == ""){
            alert("请输入密码")
        }
        else{
            var url = "http://47.101.207.229:8080/shaw/admin/login";
            var login = {"aid": aid.value, "apassword":password.value};
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
    }
    })
    $("#btn_register").click(function () {
        window.location.href="register1.html";
    })
})

//实现跳转到注册页面







