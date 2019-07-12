//  检测账号
function checkNumber() {
    var username = document.getElementById("aid");
    var message = "";
    if(username.value==""){
        message="请输入学工号";

    }else
    //检测是否位数字  数字之间不能有空格
    if (isNaN(username.value) || username.value.replace(/(^\s*)|(\s*$)/g,"")=="") {
        message = "请输入正确的学工号";


    }else if (username.value.length!=10){//判断是否是10位数

        message = "请输入正确的学工号"


    }else if(username.value[0]!=1){//判断是否是1开头的数字
        message = "请输入正确的学工号"


    }
    if(message!=""){
        username.value=""
        //设置弹出框
        $('#aid').popover(
            {
                trigger:'manual', //触发方式
                html: true, // 为true的话，data-content里就能放html代码了
                content:content(message),//这里可以直接写字符串，也可以 是一个函数，该函数返回一个字符串；
            }
        );
        //显示弹出框
        $('#aid').popover('show');

        return false;
        // username.blur()
    }else{
        $('#aid').popover('hide');
        return true;
    }

}
//检测手机号
function checkPhone() {
    //为了方便的设置为空  第一步获取元素
    var phone1=document.getElementById("aphone");
    var phone=phone1.value;
    var flag = false;
    var message = "";
    var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[4-9]{1})|(18[0-9]{1})|(199))+\d{8})$/;
    if (phone == '') {

        message = "手机号码不能为空！";

    } else if (phone.length != 11) {

        message = "请输入11位手机号码！";

    } else if (!myreg.test(phone)) {

        message = "请输入有效的手机号码！";

    } else {
        flag = true;
    }
    if (message != "") {
        phone1.value ="";
        //设置弹出框
        $('#aphone').popover(
            {
                trigger:'manual', //触发方式
                html: true, // 为true的话，data-content里就能放html代码了
                content:content(message),//这里可以直接写字符串，也可以 是一个函数，该函数返回一个字符串；
            }
        );
        //显示弹出框
        $('#aphone').popover('show');

    }else{
        $('#aphone').popover('hide');
    }
    return flag;
}
//检测密码
function checkPassword() {
    var pass1=document.getElementById("apassword");
    var pass2=document.getElementById("inputPassword2");
    var message = "";
    /* if(pass1.value == ""){
         message="请先设置密码！";

     }else*/
    if(pass2.value != pass1.value){
        message="两次输入的密码不一致！"
    }
    if(message != ""){
        pass2.value="";
        //设置弹出框
        $('#inputPassword2').popover(
            {
                trigger:'manual', //触发方式
                html: true, // 为true的话，data-content里就能放html代码了
                content:content(message),//这里可以直接写字符串，也可以 是一个函数，该函数返回一个字符串；
            }
        );
        //显示弹出框
        $('#inputPassword2').popover('show');
        return false;
    }else{
        $('#inputPassword2').popover('hide');
        return true;
    }
}
//检测邮箱
function postComment() {
    //验证邮箱
    if(!$("#amail").val().match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/))
    {
        var email=document.getElementById("amail");
        var message = "邮箱格式错误!";
        //清空输入框
        email.value = "";
        //设置弹出框
        $('#amail').popover(
            {
                trigger:'manual', //触发方式
                html: true, // 为true的话，data-content里就能放html代码了
                content:content(message),//这里可以直接写字符串，也可以 是一个函数，该函数返回一个字符串；
            }
        );
        //显示弹出框
        $('#amail').popover('show');
        return false;
    }else{
        $('#amail').popover('hide');
        return true;
    }

}
//内容函数，同时对样式进行修改
function content(message) {
    var content1="<div><img src=\"img/error.png\" height=\"10px\" width=\"10px\"><span style='color: red'>"+message+"</span></div>"
    var data = $(content1);
    return data;
}

/*$("input[type=radio]").click(function(){
    if($(this).prop("checked")==true){
        return true;
    } else{
        console.log("未勾选");
    }
});*/
//表单转json函数
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

/*$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};*/
$(function () {
    $("#register_btn").click(function () {
        var aid=document.getElementById("aid").value;
         var aname=document.getElementById("aname").value;
         var ausername=document.getElementById("ausername").value;
         var apassword=document.getElementById("apassword").value;
         var aphone=document.getElementById("aphone").value;
         var amail=document.getElementById("amail").value;//postComment()&&checkPhone()&&checkNumber()&&(aname!="")&&(ausername!="")
        if(aid==""){
            alert("请输入学工号")
        } else if(aname==""){
            alert("请输入名字")
        }else if(ausername==""){
            alert("请输入用户名")
        }else if(apassword==""){
            alert("密码不能为空")
        }else if(aphone==""){
            alert("请输入手机号")
        }else if(amail==""){
            alert("请输入邮箱")
        }else if(true)

        {
                //函数实现表单转字符串
                var jsonuserinfo = $('#form1').serializeObject();

            //var obj={"aid":1613062030,"aname":"韩士旭","ausername":"axu","apassword":123,"asex":"男","aphone":17826155592,"amail":"1035219157@qq.com"}
            //var obj = $("form").serialize()
           // var myJSON = JSON.stringify(obj);//会出现中文乱码
            //对serialize后的参数值进行一次解码，防止中文乱码
            //formStr = decodeURIComponent(myJSON,true);
            //alert(formStr)
            var url = "http://47.101.207.229:8080/shaw/admin/register"
            $.ajax({
                url:url,
                type:'POST',
                contentType: "application/json; charset=utf-8",
                dataType:'json',//json 返回值类型
                data:JSON.stringify(jsonuserinfo),//转化为json字符串
                success:function(data){
                    console.log(data)
                }
            });
        } else {
            alert("请将信息填写完整！！")
        }


    })

    $("#cancel_reg,#cancel_get_back").click(function () {
        window.history.back(-1);
    })
    $("#get_back_btn").click(function () {
        var a=checkNumber();
        var  b=checkPhone();
        var c=postComment();
        if (a&&b&&c) {
            var jsonuserinfo= $("#form2").serializeObject();
            var url = "http://47.101.207.229:8080/shaw/####"
            $.ajax({
                url:url,
                type:'POST',
                contentType: "application/json; charset=utf-8",
                dataType:'json',//json 返回值类型
                data:JSON.stringify(jsonuserinfo),//转化为json字符串
                success:function(data){
                    console.log(data)
                }
            });
        } else {
            alert("请将信息填写完整！！！")
        }
    })


})
















