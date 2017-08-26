var allcookies = document.cookie;
function getCookie(cookie_name) {
	var allcookies = document.cookie;
	var cookie_pos = allcookies.indexOf(cookie_name);
	if(cookie_pos != -1) {
       cookie_pos += cookie_name.length + 1;
       var cookie_end = allcookies.indexOf(";", cookie_pos);
       if (cookie_end == -1) {
          cookie_end = allcookies.length;
       }
       var value = unescape(allcookies.substring(cookie_pos, cookie_end));
     }
     return value;
}
function userexit(){
	var url="/index.php/home/user/exituser/"
	$.ajax({
        type: 'POST',
        url: url,
        data:{},
        success: function(data) {
           showTips('帐户已经安全退出.',2500,1);
        },
        error: function() {
            console.log(url);
        }
    });
} 
function showTips(txt,time,status){  
	var htmlCon = '';  
    if(txt!=''){  
       if(status != 0 && status != undefined){  
          htmlCon = '<div class="tipsBox"><img src="/thinkphp/public/img/tips/right.jpg" class="tipsBox-img" alt="OK"/>'+txt+'</div>';  
       }else{  
          htmlCon = '<div class="tipsBox-error" style=""><img src="/thinkphp/public/img/tips/error.jpg" class="tipsBox-img" alt="Error"/>'+txt+'</div>';  
       }  
       $('body').prepend(htmlCon);  
       if(time == '' || time == undefined){  
       	   time = 2500;   
        }  
        setTimeout(function(){
			$('.tipsBox').remove();
			location.reload();
		},
		time);  
     }  
}  