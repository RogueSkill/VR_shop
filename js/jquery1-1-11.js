/**
 * @author FeiKi / http://www.feikinet.com/
 */
//CopyRight by FeiKi
/*
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */// 

var SHOW = new F();
var _A=["\x23\x41","\x23\x42","\x23\x43","\x23\x44","\x23\x45","\x23\x46","\x23\x47","\x23\x48","\x23\x4d","\x23\x53","\x2c","\x23"];
var _N=["\31","\32","\33","\34","\35","\36","\37","\38","\39","\x31\x30","\x31\x31"];
var _V=["鞋身可选材质","附加鞋头可选材质","附加后身可选材质","鞋跟可选材质","鞋头装饰可选材质","后身装饰可选材质"];
var A=$(_A[0]).val().split(_A[10]);
var B=$(_A[1]).val().split(_A[10]);
var C=$(_A[2]).val().split(_A[10]);
var D=$(_A[3]).val().split(_A[10]);
var E=$(_A[4]).val().split(_A[10]);
var F=$(_A[5]).val().split(_A[10]);
var G=$(_A[6]).val().split(_A[10]);
var H=$(_A[7]).val().split(_A[10]);
var M=$(_A[8]).val().split(_A[10]);
var S=$(_A[9]).val();
var U='/thinkphp';
$(document).ready(function() {
	$(".design-title").find("li").click(function () {
        $(this).addClass("curren-menu").siblings().removeClass("curren-menu");
    });
	$(".design-title ul li").click(function(){
		var index=$(this).attr('index');
		console.log(index);
		for(var i=1;i<8;i++){ 
		  if(i==index){
			  $("#shoesbox"+i).show();
			  $("#MateialList-"+i).show();
		  }else{
			  $("#shoesbox"+i).hide();
			  $("#MateialList-"+i).hide();
		  }
	    }
	});
	$("#S_Size span").bind("click", function() {
		var length=$("#S_Size span").length;
		for(var i=0;i<length;i++){
			$("#S_Size span").removeClass('select');
		}
		$(".sizebox").removeClass('sizeerror');
		$(".selectsizefirst").hide();
		$(this).addClass('select');
		var value=$(this).html();
		$("#S_V").html(value+'码');
		$("#Size").val(parseInt(value));
	});
});
function checkuser(number) {
	var UName=$("#UName").val();
	if(UName){
		if(number==1){
    	_B();
		}else{
			
		}
	}else{
		$("#overlay").show('slow');
		$("#ajaxloginbox").show('slow');	
	}
}
function ajaxlogin() {
    var name = $("#username").val();
    var password = $("#password").val();
    if(name == "") {
       alert("用户名称不能为空！");
       $("#username").focus();
       return false;
    }
    if(password == "") {
        alert("用户密码不能为空！");
        $("#password").focus();
        return false;
     }
    $("#overlay").hide();
    $("#ajaxloginbox").hide();
    var url = U+'/index.php/home/ajaxuser/login/';
    $.ajax({
	type: 'POST',
	url: url,
	data: {
		'name': name,
		'password': password
	},
	success: function(data) {
		if (data == 'ok') {
			_B();
		} else {
			alert('登录失败，用户名称或是密码错误，请重新登录！');
			$("#overlay").show('slow');
			$("#ajaxloginbox").show('slow');
		}
	},
 });
}
function _ADD() {
	eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('3 0=$("#4").5();1(0){$("#2").6()}a{$(".b").c(\'7\');$(".8").9()}',13,13,'size|if|shoppingcart|var|Size|val|submit|sizeerror|selectsizefirst|show|else|sizebox|addClass'.split('|'),0,{}));
}

function _B(){
	$(".price").html('￥'+$("#Totalprice").val());
	var HeelHeight=(S.replace(/[^0-9]/g,''))+'CM';
	$("#A_N").html(B[0]+ B[1]);
	$("#A_M").html(D[0]);
	$("#A_I").html('<img src="'+U+'/'+E[0]+'" height="24" class="material_image">');
	$("#B_M").html(D[3]);
	$("#B_I").html('<img src="'+U+'/'+E[3]+'" height="24" class="material_image">');
	$("#C_M").html(D[4]);
	$("#C_I").html('<img src="'+U+'/'+E[4]+'" height="24" class="material_image">');
	$("#D_H").html(HeelHeight);
	$("#D_M").html(D[2]);
	$("#D_I").html('<img src="'+U+'/'+E[2]+'" height="24" class="material_image">');
	$("#E_M").html(D[6]);
	$("#E_I").html('<img src="'+U+'/'+E[6]+'" height="24" class="material_image">');
	var Images = SHOW.SaveImage();
	document.getElementById("P_image").src = "data:image/png;base64,"+Images;
	$("#Simage").val(Images);
	if(D[7]){
		$("#F_M").html(D[7]);
		$("#F_I").html('<img src="'+U+'/'+E[7]+'" height="24" class="material_image">');	
	}else{
		$("#F_M").html('无');
	}
	if(D[8]){
		$("#G_M").html(D[8]);
		$("#G_I").html('<img src="'+U+'/'+E[8]+'" height="24" class="material_image">');	
	}else{
		$("#G_M").html('无');
	}
	if (D[9]) {
		$("#H_M").html(D[9]);
		$("#H_I").html('<img src="'+U+'/' + E[9] + '" height="24" class="material_image">');
	} else {
		$("#H_M").html('无');
	}
	if (D[10]) {
		$("#J_M").html(D[10]);
		$("#J_I").html('<img src="'+U+'/' + E[10] + '" height="24" class="material_image">');
	} else {
		$("#J_M").html('无');
	}
	
	$("#overlay").show();
	$("#designbox").show();
}
function DE(s1){
	var tmp2='';
	for(i=0;i<s1.length;)
	tmp2+='%'+s1.substring (i,i+=2);
	return decodeURI(tmp2);
}
function PP(data){
	if (data.length % 2) return '';
	var tmp='';
	for(i=0;i<data.length;i+=2)
	{
		tmp += '%' + data.charAt(i) + data.charAt(i+1);
	}
	return decodeURI(tmp);
}
function Close(ID) {
	$("#overlay").hide();
	$(_A[11]+ID).hide();
}
function A() {
	var size = $("#Size").val();
	if (size) {
		$("#shoppingcart").submit();
	}else {
        $(".sizebox").addClass('sizeerror');
		$(".selectsizefirst").show();
	}
}
function FC(){
	var _$=["\x23\x4c\x6f\x61\x64\x69\x6e\x67","\x23\x46\x65\x69\x6b\x69","\x63\x61\x6e\x76\x61\x73"];
	$(_$[0]).hide();	
	$(_$[1]+" "+_$[2]).show();  
}
function CH(thisObj){
	var _$=["\x64\x61\x74\x61\x2d\x61\x74\x74\x72","\x23\x46\x65\x69\x6b\x69","\x63\x61\x6e\x76\x61\x73","\x23\x4c\x6f\x61\x64\x69\x6e\x67","\x63\x68\x6f\x6f\x73\x65","\x64\x69\x73\x70\x6c\x61\x79","\x69\x6e\x6c\x69\x6e\x65","\x31\x30\x30\x30"]
	var data=$(thisObj).attr(_$[0]).split(_A[10]);
	$(_$[1]+" "+_$[2]).hide();
	$(_$[3]).show()
	_SH(data);
	_LM(data,thisObj);
	if(data[0]==_N[9] || data[0]==_N[10]){
	}else{
		$(thisObj).parent().addClass(_$[4]);
		$(thisObj).prev().css(_$[5],_$[6]);
	}
	setTimeout(FC,_$[7]);
}
function _SH(V){
	var Loading='<img src="'+U+'/Public/img/Loading.gif" class="loading" width="50" height="50" />';
    var Url = U+'/index.php/home/ajaxshoes/getmateriallist/';
    $.ajax({
        type: 'POST',
        url: Url,
        data: {
            'id': V[1],
			'style':V[0]
        },
        success: function(data) {
			var _$=["\x23\x73\x68\x6f\x65\x73\x62\x6f\x78\x31","\x23\x73\x68\x6f\x65\x73\x62\x6f\x78\x32","\x23\x73\x68\x6f\x65\x73\x62\x6f\x78\x33","\x23\x73\x68\x6f\x65\x73\x62\x6f\x78\x34","\x23\x4d\x61\x74\x65\x69\x61\x6c\x4c\x69\x73\x74\x2d\x31","\x23\x4d\x61\x74\x65\x69\x61\x6c\x4c\x69\x73\x74\x2d\x32","\x23\x4d\x61\x74\x65\x69\x61\x6c\x4c\x69\x73\x74\x2d\x33","\x23\x4d\x61\x74\x65\x69\x61\x6c\x4c\x69\x73\x74\x2d\x34","\x68\x33\x3a\x65\x71\x28\x31\x29","\x68\x33\x3a\x65\x71\x28\x32\x29"];
            if (V[0] == 1) {
                $(_$[0]+" "+_$[8]).html((_V[0]));
				$(_$[4]).html(data);
            }else if(V[0] == 8) {
                $(_$[0]+" "+_$[8]).html((_V[1]));
				$(_$[4]).html(data);
            }else if(V[0]== 2) {
                $(_$[1]+" "+_$[8]).html(_V[0]);
				$(_$[5]).html(data);
            }else if(V[0] == 9) {
                $(_$[1]+" "+_$[8]).html(_V[2]);
				$(_$[5]).html(data);
            }else if(V[0]== 3) {
                $(_$[2]+" "+_$[8]).html(_V[3]);
				$(_$[6]).html(data);
            }else if(V[0] == 10) {
                $(_$[4]+" "+_$[9]).html(_V[4]);
				$(_$[7]).html(data);
		   }else if(V[0] == 11) {
				 $(_$[4]+" "+_$[9]).html(_V[4]);
				 $(_$[7]).html(data);
            }
        }
    });
}
function _LM(V,thisObj){
	var _$=["\x64\x61\x74\x61\x2d\x74\x6f\x70","\x64\x61\x74\x61\x2d\x62\x61\x63\x6b","\x63\x68\x6f\x6f\x73\x65","\x64\x69\x73\x70\x6c\x61\x79","\x69\x6e\x6c\x69\x6e\x65"];
	var P=V[0]-1;
	if(V[0]==1){
		if(B[7])SHOW.HP(B[7]);
		SHOW.HP(B[0]+B[1]);
    	SHOW.Load(V[2]+B[1],V[7],V[0],V);
		_UP(V[0],P,V);
	}else if(V[0]==8){
		if(B[7])SHOW.HP(B[7]);
		if(B[0]==$(_A[11]+V[2]).attr(_$[0]).split(_A[10])[2]){
			SHOW.Load(V[2],V[7],V[0],V);
		}else{
			SHOW.HP(B[0]+B[1]);
			SHOW.Load($(_A[11]+V[2]).attr(_$[0]).split(_A[10])[2]+B[1],$(_A[11]+V[2]).attr(_$[0]).split(_A[10]),V[7],$(_A[11]+V[2]).attr(_$[0]).split(_A[10]));
			_UP(1,0,$(_A[11]+V[2]).attr(_$[0]).split(_A[10]));
			SHOW.Load(V[2],V[7],V[0],V);
		}
		_UP(1,P,V);
	}else if(V[0]==2){
		if(B[8])SHOW.HP(B[8]);
		SHOW.HP(B[0]+B[1]);
    	SHOW.Load(B[0]+V[2],V[7],V[0],V);
		_UP(V[0],P,V);
	}else if(V[0]==9){
		if(B[8])SHOW.HP(B[8]);
		if(B[1]==$(_A[11]+V[2]).attr(_$[1]).split(_A[10])[2]){
			SHOW.Load(V[2],V[7],V[0],V);
		}else{
			SHOW.HP(B[0]+B[1]);
			SHOW.Load(B[0]+$(_A[11]+V[2]).attr(_$[1]).split(_A[10])[2],$(_A[11]+V[2]).attr(_$[1]).split(_A[10])[7],V[0],$(_A[11]+V[2]).attr(_$[1]).split(_A[10]));
			_UP(2,1,$(_A[11]+V[2]).attr(_$[1]).split(_A[10]));
			SHOW.Load(V[2],V[7],V[0],V);
		}
		_UP(2,P,V);
	}else if(V[0]==3){
		SHOW.HP(B[2]);
    	SHOW.Load(V[2],V[7],V[0],V);
		_UP(V[0],P,V);
	}else if(V[0]==10){
		if(B[9])SHOW.HP(B[9]);
		if(B[9]!=V[2]){
		  SHOW.Load(V[2],V[7],V[0],V); 
		  _UP(V[0],P,V);
		  $(thisObj).parent().addClass(_$[2]);
		  $(thisObj).prev().css(_$[3],_$[4]);
		}else{
		 var D=['','','','','','','','',''];
		 _UP(V[0],P,D);	
		}
	}else if(V[0]==11){
		if(B[10])SHOW.HP(B[10]);
		if(B[10]!=V[2]){
		  SHOW.Load(V[2],V[7],V[0],V); 
		  _UP(V[0],P,V);
		  $(thisObj).parent().addClass(_$[2]);
		  $(thisObj).prev().css(_$[3],_$[4]);
		}else{
		  var D=['','','','','','','','',''];
		  _UP(V[0],P,D);	
		}
	}   
}
function _UP(NU,I,V){
	var _$=["\x23\x53\x68\x6f\x65\x73\x54\x6f\x70\x42\x6f\x78","\x6c\x69","\x63\x68\x6f\x6f\x73\x65","\x69","\x23\x54\x6f\x74\x61\x6c\x70\x72\x69\x63\x65","\x2e\x70\x72\x69\x63\x65"];
	$(_$[0]+NU+" "+_$[1]).removeClass(_$[2]);
    $(_$[0]+NU+" "+_$[3]).hide();
	A[I]=V[1];
	B[I]=V[2];
	C[I]=V[6];
	D[I]=V[5];
	E[I]=V[7];
	F[I]=V[3];
	G[I]=V[4];
	H[I]=V[8];
	M[I]=V[9];
	$(_A[0]).val(A.join(_A[10]));
	$(_A[1]).val(B.join(_A[10]));
	$(_A[2]).val(C.join(_A[10]));
	$(_A[3]).val(D.join(_A[10]));
	$(_A[4]).val(E.join(_A[10]));
	$(_A[5]).val(F.join(_A[10]));
	$(_A[6]).val(G.join(_A[10]));
	$(_A[7]).val(H.join(_A[10]));
	$(_A[8]).val(M.join(_A[10]));
	var Price=0;
	for(var i=0;i<10;i++){
		if(A[i]!=''){
			Price=Price+(parseInt(F[i])*parseFloat(G[i]));
		}
	}
	$(_$[4]).val(Price);
    $(_$[5]).html('￥'+Price);
}
function CM(thisObj){
	var _$=["\x64\x61\x74\x61\x2d\x61\x74\x74\x72","\x23\x4d\x61\x74\x65\x69\x61\x6c\x4c\x69\x73\x74\x2d\x31","\x23\x4d\x61\x74\x65\x69\x61\x6c\x4c\x69\x73\x74\x2d\x32","\x23\x4d\x61\x74\x65\x69\x61\x6c\x4c\x69\x73\x74\x2d\x33","\x23\x4d\x61\x74\x65\x69\x61\x6c\x4c\x69\x73\x74\x2d\x34","\x23\x4d\x61\x74\x65\x69\x61\x6c\x4c\x69\x73\x74\x2d\x35","\x23\x4d\x61\x74\x65\x69\x61\x6c\x4c\x69\x73\x74\x2d\x36","\x23\x4d\x61\x74\x65\x69\x61\x6c\x4c\x69\x73\x74\x2d\x37","\x6c\x69","\x69","\x73\x65\x6c\x65\x63\x74\x2d\x69\x6d\x67","\x64\x69\x73\x70\x6c\x61\x79","\x69\x6e\x6c\x69\x6e\x65"];
	var V=$(thisObj).attr(_$[0]).split(_A[10]);
	var P=V[0]-1;
	if(V[0]==1){
		SHOW.CMaterial(B[0]+B[1],V[2],V[0]);
		$(_$[1]+" "+_$[8]).removeClass(_$[10]);
		$(_$[1]+" "+_$[9]).hide();
	}else if(V[0]==8){
		SHOW.CMaterial(B[P],V[2],1);
		$(_$[1]+" "+_$[8]).removeClass(_$[10]);
		$(_$[1]+" "+_$[9]).hide();
	}else if(V[0]==2){
		SHOW.CMaterial(B[0]+B[1],V[2],1);
		$(_$[2]+" "+_$[8]).removeClass(_$[10]);
		$(_$[2]+" "+_$[9]).hide();
	}else if(V[0]==9){
		SHOW.CMaterial(B[P],V[2],V[0]);
		$(_$[2]+" "+_$[8]).removeClass(_$[10]);
		$(_$[2]+" "+_$[9]).hide();
	}else if(V[0]==3){
		SHOW.CMaterial(B[P],V[2],V[0]);
		$(_$[3]+" "+_$[8]).removeClass(_$[10]);
		$(_$[3]+" "+_$[9]).hide();
	}else if(V[0]==4){
		SHOW.CMaterial(B[0]+B[1],V[2],V[0]);
		$(_$[6]+" "+_$[8]).removeClass(_$[10]);
		$(_$[6]+" "+_$[9]).hide();
	}else if(V[0]==5){
		SHOW.CMaterial('\x50\x41\x44',V[2],V[0]);
		$(_$[5]+" "+_$[8]).removeClass(_$[10]);
		$(_$[5]+" "+_$[9]).hide();
	}else if(V[0]==7){
		SHOW.CMaterial(B[2],V[2],V[0]);
		$(_$[7]+" "+_$[8]).removeClass(_$[10]);
		$(_$[7]+" "+_$[9]).hide();
	}else if(V[0]==10){
		SHOW.CMaterial(B[9],V[2],V[0]);
		$(_$[4]+" "+_$[8]).removeClass(_$[10]);
		$(_$[4]+" "+_$[9]).hide();
	}else if(V[0]==11){
		SHOW.CMaterial(B[10],V[2],V[0]);
		$(_$[4]+" "+_$[8]).removeClass(_$[10]);
		$(_$[4]+" "+_$[9]).hide();
	}
	UPM(P,V);
	$(thisObj).parent().addClass(_$[10]);
	$(thisObj).prev().css(_$[11],_$[12]);
}
function UPM(I,V){
	var _$=["\x23\x54\x6f\x74\x61\x6c\x70\x72\x69\x63\x65","\x2e\x70\x72\x69\x63\x65"]
	C[I]=V[1];
	D[I]=V[4];
	E[I]=V[2];
	G[I]=V[3];
	H[I]=V[6];
	M[I]=V[5];
	$(_A[2]).val(C.join(","));
	$(_A[3]).val(D.join(","));
	$(_A[4]).val(E.join(","));
	$(_A[6]).val(G.join(","));
	$(_A[7]).val(H.join(","));
	$(_A[8]).val(M.join(","));
	var Price=0;
	for(var i=0;i<10;i++){
		if(A[i]!=''){
			Price=Price+(parseInt(F[i])*parseFloat(G[i]));
		}
	}
	$(_$[0]).val(Price);
    $(_$[1]).html('￥'+Price);
}

function F() {
	var _A=["\x23\x41","\x23\x42","\x23\x43","\x23\x44","\x23\x45","\x23\x46","\x23\x47","\x23\x48","\x23\x4d","\x23\x53","\x2c","\x23","\x23\x4e","\x23\x53","\x23\x4a"];
	var A=$(_A[0]).val().split(_A[10]);
	var B=$(_A[1]).val().split(_A[10]);
	var C=$(_A[2]).val().split(_A[10]);
	var D=$(_A[3]).val().split(_A[10]);
	var E=$(_A[4]).val().split(_A[10]);
	var F=$(_A[5]).val().split(_A[10]);
	var G=$(_A[6]).val().split(_A[10]);
	var H=$(_A[7]).val().split(_A[10]);
	//var N=$(_A[12]).val().split(_A[10]);
	var N=3;
	var S=$(_A[13]).val();
	var J=$(_A[14]).val();
	var U='/thinkphp';
	var Path = U+'\x2f\x50\x75\x62\x6c\x69\x63\x2f\x4a\x73\x6f\x6e\x4d\x6f\x64\x65\x6c\x2f'+S+'\x2f';
	var img = new Image();
	var globalID,selectID,timer,M_x, M_y;
    var container,scene, camera, renderer, controls, stats, raycaster;
	var W_Width = window.innerWidth;
    var W_Height = window.innerHeight;
	var CamPosX = 240;
    var CamPosZ = 400;
    var mouse = new FEIKI.Vector2(),INTERSECTED;
    var radius = 0x64,theta = 0;
    var Mod_S = 0x32;
    var CameraPosZ = 0x1f4;
    var meshs = {};
    var group = new FEIKI.Group();
	var setgroup = new FEIKI.Group();
    var scrollPosY = 0;
	var scrollPosX = 0;
	var Feiki = document.getElementById("\x46\x65\x69\x6b\x69");
    var pos = Feiki.getBoundingClientRect();
	var Off_x = pos.left + scrollPosX,
    Off_y = pos.top + scrollPosY;
	var SCREEN_WIDTH = 900,
    SCREEN_HEIGHT = 600;
	if($("#feikiwidth").val())SCREEN_WIDTH=$("#feikiwidth").val();
	if($("#feikiheight").val())SCREEN_HEIGHT=$("#feikiheight").val();
	function init() {
		initScene();
		initCamera();
        initWebgl();
		initLight();
        raycaster = new FEIKI.Raycaster();
        document.addEventListener('\x6d\x6f\x75\x73\x65\x6d\x6f\x76\x65',onDocumentMouseMove, false);
        window.addEventListener('\x72\x65\x73\x69\x7a\x65', onWindowResize, false);
        window.addEventListener('\x63\x6c\x69\x63\x6b', onModelSelect, false);
		//window.addEventListener('touchstart',onDocumentMouseMove, false);
		//window.addEventListener('touchmove',onDocumentMouseMove, false);
    }
	function initScene() { 
		scene = new FEIKI.Scene();
		scene.name='\x46\x65\x69\x6b\x69';
		scene.receiveShadow=true;
		scene.castShadow = true;
	}
	function initCamera() { 
		var VIEW_ANGLE = 45,
        ASPECT = SCREEN_WIDTH/SCREEN_HEIGHT,
        NEAR = 0x64,
        FAR = 0x4e20;
        camera = new FEIKI.PerspectiveCamera(VIEW_ANGLE,ASPECT,NEAR,FAR);
        scene.add(camera);
        camera.position.set(0,0,500);
        camera.lookAt(scene.position);
	    Front_Camera1 = new FEIKI.PerspectiveCamera(VIEW_ANGLE,ASPECT,NEAR,FAR);
        scene.add(Front_Camera1);
        Front_Camera1.position.set(-500,-500, -500);
        Front_Camera1.lookAt(scene.position);
	}
	function initWebgl() { 
		if(Detector.webgl) {
            renderer = new FEIKI.WebGLRenderer({
                antialias: true,
                precision: "highp",
                alpha: true,
                premultipliedAlpha: false,
                stencil: false,
                preserveDrawingBuffer: true,
                maxLights:8
            });
        }else{ 
			renderer = new FEIKI.CanvasRenderer();
		}
        renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
		document.getElementById('\x46\x65\x69\x6b\x69').appendChild(renderer.domElement);
        controls = new FEIKI.OrbitControls(camera,renderer.domElement);
        controls.maxPolarAngle = Math.PI / 0x2;
        controls.minDistance = 0x1c2;
        controls.maxDistance = 0x1c2;
	}
	function initLight() { 
		var e = 0.8;
        var ambient = new FEIKI.AmbientLight(0x444444);
        scene.add(ambient);
		var directionalLightA = new FEIKI.DirectionalLight(0xffffff,e);
		directionalLightA.position.set(-0xa,0x2,-0x64);
		scene.add(directionalLightA);
		var directionalLightB = new FEIKI.DirectionalLight(0xffffff, e * 0.7);
		directionalLightB.position.set(-0xf, 0x5, 0x8);
		scene.add(directionalLightB);
		var directionalLightC = new FEIKI.DirectionalLight(0xffffff, e * 0.7);
		directionalLightC.position.set(0xf, 0x5, 0x2);
		scene.add(directionalLightC);
		var directionalLightD = new FEIKI.DirectionalLight(0xffffff, e * 0.6);
		directionalLightD.position.set(0x0, 0x3, 0x3);
		scene.add(directionalLightD);
	}
	this.AddShoes=function(MName,Name,Position,MaterialShow){
		var Path='json/';
		var _$=["\x4d","\x49","\x48\x4b\x2d\x4b\x5a","\x47","\x44","\x50\x41\x44","\x4c\x4f\x47\x4f","\x4c\x4f\x47\x4f\x2d\x46\x57","\x50\x6f\x73\x69\x74\x69\x6f\x6e","\x54\x6e\x61\x6d\x65","\x54\x69\x64","\x4d\x6e\x61\x6d\x65","\x46\x65\x69\x6b\x69"];
		var ObjName;
        var Loader = new FEIKI.ObjectLoader();
        Loader.load('json/'+MName,function(object){
		   console.log(Name);
		   object.name=Name;
		   object.visible = true;
		   if(object.children.length > 1) {
				for(var i=0;i<object.children.length;i++) {
					var Nobj=object.children[i];
					var Nname=object.children[i].name;
					if(Position==1 && Nname.charAt(Nname.length-1)==_$[0]){
						var UserData={'Position':Position,'Tname':D[0],'Tid':H[0],'Mname':C[0]};
						AddMaterial(Nobj,Nname,E[0],UserData,true,MaterialShow);
					}else if(Position==1 && Nname.charAt(Nname.length-1)==_$[1]){
						var UserData={'Position':4,'Tname':D[3],'Tid':H[3],'Mname':C[3]};
						AddMaterial(Nobj,Nname,E[3],UserData,true,MaterialShow);
					}else if(Position==1 && Nname==_$[2]){
						var Default_Material = new FEIKI.MeshPhongMaterial({
							color: 0x333333,
							shading: FEIKI.SmoothShading
						});
						Nobj.visible = true;
						Nobj.material=Default_Material;
						Nobj.userData={position:33};
					}else if(Position==2 && Nname.charAt(Nname.length-1)==_$[3]){
						var UserData={'Position':3,'Tname':D[2],'Tid':H[2],'Mname':C[2]};
						AddMaterial(Nobj,Nname,E[2],UserData,true,MaterialShow);
					}else if(Position==2 && Nname.charAt(Nname.length-1)==_$[4]){
						var UserData={'Position':7,'Tname':D[6],'Tid':H[6],'Mname':C[6]};
						AddMaterial(Nobj,Nname,E[6],UserData,true,MaterialShow);
					}else if(Position==3 && Nname==_$[5]){
						var UserData={'Position':5,'Tname':D[4],'Tid':H[4],'Mname':C[4]};
						AddMaterial(Nobj,Nname,E[4],UserData,true,MaterialShow);
					}else if(Position==3 && Nname==_$[6]){
						var UserData={'Position':6,'Tname':D[5],'Tid':H[5],'Mname':C[5]};
						AddMaterial(Nobj,Nname,E[5],UserData,true,MaterialShow);
					}else if(Position==3 && Nname==_$[7]){
						var UserData={'Position':22};
						AddMaterial(Nobj,Nname,E[3],UserData,false,MaterialShow);
					}
				}
		   }else{
			   if(Position==3){
				   var UserData={'Position':7,'Tname':D[6],'Tid':H[6],'Mname':C[6]};
				   PAddMaterial(object,Name,E[6],UserData,true,MaterialShow);
               }else if(Position==4){
				   var UserData={'Position':8,'Tname':D[7],'Tid':H[7],'Mname':C[7]};
				   PAddMaterial(object,Name,E[7],UserData,true,MaterialShow);
			   }else if(Position==5){
				   var UserData={'Position':9,'Tname':D[8],'Tid':H[8],'Mname':C[8]};
				   PAddMaterial(object,Name,E[8],UserData,true,MaterialShow);
			   }else if(Position==6){
				   var UserData={'Position':10,'Tname':D[9],'Tid':H[9],'Mname':C[9]};
				   PAddMaterial(object,Name,E[9],UserData,true,MaterialShow);
			   }else if(Position==7){
				   var UserData={'Position':11,'Tname':D[10],'Tid':H[10],'Mname':C[10]};
				   PAddMaterial(object,Name,E[10],UserData,true,MaterialShow);
			   }
		   }
		   N--;
		   group.add(object);
		   if(N==0){
			   group.name='\x46\x65\x69\x6b\x69';
           	   MakeModelCenter(50);
		   }
		});
    }
	function AddMaterial(Obj,Name,Images,UserData,Vis,ShowNo){
		if(ShowNo==1){
			var Images=U+Images.substr(1);
			img.src = Images;
			var texture = new FEIKI.Texture();
			var Nmat = new FEIKI.MeshPhongMaterial;
			texture = FEIKI.ImageUtils.loadTexture(Images);
			texture.name=Obj.name;
			texture.image=img;
			texture.magFilter=FEIKI.LinearFilter;
			texture.minFilter=FEIKI.LinearMipMapLinearFilter;
			texture.needsUpdate = true;
			texture.repeat.set(1,1);
			Nmat.map = texture;
			Nmat.name=Name;
			Obj.visible = Vis;
			Obj.material = Nmat;
			Obj.userData={'\x55\x73\x65\x72\x44\x61\x74\x61':UserData};
		}
	}
	function PAddMaterial(Obj,Name,Images,UserData,Vis){
		var Images=U+Images.substr(1);
		img.src = Images;
		var texture = new FEIKI.Texture();
		var Nmat = new FEIKI.MeshPhongMaterial;
		texture = FEIKI.ImageUtils.loadTexture(Images);
		texture.name=Obj.name;
		texture.image=img;
		texture.magFilter=FEIKI.LinearFilter;
		texture.minFilter=FEIKI.LinearMipMapLinearFilter;
		texture.needsUpdate = true;
		texture.repeat.set(1,1);
		Nmat.map = texture;
		Nmat.name=Name;
		Obj.children[0].visible = Vis;
		Obj.children[0].material = Nmat;
		Obj.children[0].userData={'\x55\x73\x65\x72\x44\x61\x74\x61':UserData};
	}
    function LoadShose() {
		/*var _$=["\x2c\x50\x41\x44","\x2e\x6a\x73\x6f\x6e","\x2c","\x23\x4a","\x50\x41\x44\x2e\x6a\x73\x6f\x6e","\x50\x41\x44"];
		var LoadJson=B[0]+B[1]+','+B[2]+_$[0];
	    _AddShoes(B[0]+B[1]+_$[1],B[0]+B[1],Path,1);
	    _AddShoes(B[2]+_$[1],B[2],Path,2);
		_AddShoes(_$[4],_$[5],Path,3);
		if(B[7]){_AddShoes(B[7]+_$[1],B[7],Path,4);LoadJson=LoadJson+_$[2]+B[7];}
		if(B[8]){_AddShoes(B[8]+_$[1],B[8],Path,5);LoadJson=LoadJson+_$[2]+B[8];}
		if(B[9]){_AddShoes(B[9]+_$[1],B[9],Path,6);LoadJson=LoadJson+_$[2]+B[9];}
		if(B[10]){_AddShoes(B[10]+_$[1],B[10],Path,7);LoadJson=LoadJson+_$[2]+B[10];}
		$(_$[3]).val(LoadJson);*/
    }
	function MakeModelCenter(SetS) {
        BoxH = new FEIKI.BoundingBoxHelper(group.children[0]);
        BoxH.update();
        MinX = BoxH.box.min.x;
        MaxX = BoxH.box.max.x;
        MinY = BoxH.box.min.y;
        MaxY = BoxH.box.max.y;
        MinZ = BoxH.box.min.z;
        MaxZ = BoxH.box.max.z;
        for (var i = 0; i < group.children.length; i++) {
            BoxH = new FEIKI.BoundingBoxHelper(group.children[i]);
            BoxH.update();
            if (MinX > BoxH.box.min.x) {
                MinX = BoxH.box.min.x;
            }
            if (MaxX < BoxH.box.max.x) {
                MaxX = BoxH.box.max.x;
            }
            if (MinY > BoxH.box.min.y) {
                MinY = BoxH.box.min.y;
            }
            if (MaxY < BoxH.box.max.y) {
                MaxY = BoxH.box.max.y;
            }
            if (MinZ > BoxH.box.min.z) {
                MinZ = BoxH.box.min.z;
            }
            if (MaxZ < BoxH.box.max.z) {
                MaxZ = BoxH.box.max.z;
            }
        }
        var MD_L, MD_W, MD_H;
        MD_L = Math.abs(MaxX - MinX);
        MD_H = Math.abs(MaxY - MinY);
        MD_W = Math.abs(MaxZ - MinZ);
        OFX = MinX + Math.round(MD_L) / 2;
        OFY = MinY + Math.round(MD_H) / 2;
        OFZ = MinZ + Math.round(MD_W) / 2;
        var MaxL = MD_H;
        if (MaxL < MD_W) {
            MaxL = MD_W;
        }
        if (MaxL < MD_L) {
            MaxL = MD_L;
        }
        var MScale = MaxL / CameraPosZ;
        MScale = 0x7 / MScale / 0xa;
        group.position.set(0,0,0);
        group.scale.set(MScale,MScale,MScale);
        for (var i = 0; i < group.children.length; i++) {
            BoxH = new FEIKI.BoundingBoxHelper(group.children[i]);
            BoxH.update();
            group.children[i].position.set( - OFX, -OFY, -OFZ);
        }
        scene.add(group);
		$("\x23\x4c\x6f\x61\x64\x69\x6e\x67").hide();
    }
    function onDocumentMouseMove(event) {
        event.preventDefault();
		var scrollPosY = scrollPosX = 0;
        if(window.pageYOffset)scrollPosY = window.pageYOffset;
        if(window.pageXOffset)scrollPosX = window.pageXOffset;
        var CX = event.clientX - Off_x + scrollPosX;
        var CY = event.clientY - Off_y + scrollPosY;
        mouse.x = ((CX) / (SCREEN_WIDTH)) * 2 - 1;
        mouse.y = -((CY-document.body.scrollTop) / (SCREEN_HEIGHT)) * 2 + 1;
        M_x = event.clientX + scrollPosX + 0x19;
        M_y = event.clientY + scrollPosY + 0x5;
		raycaster.setFromCamera(mouse,camera);
		var intersects = raycaster.intersectObjects(group.children,true);
		if(intersects.length>0){
			for(var i=0;i<intersects.length;i++){
				if(CheckNameVis(intersects[i].object.name)){
					 var UserData=intersects[i].object.userData;
					 var Positon,Tname;
					 for(obj in UserData){
						Positon=UserData[obj].Position;
						Tname=UserData[obj].Tname;
					 }
					var PopName=GetPonName(Positon,Tname);
					$("\x23\x53\x48\x4d").removeClass("\x48\x69\x64\x65\x4d");
					$("\x23\x53\x48\x4d").addClass("\x53\x68\x6f\x77\x4d");
					document.getElementById('\x53\x48\x4d').style.left = M_x + "\x70\x78";
					document.getElementById('\x53\x48\x4d').style.top = M_y + "\x70\x78";
					$("\x23\x53\x48\x4d").html(PopName);
					SetHighlightobj(intersects[i].object,PopName);
					return;
				}
			}
		}else{
			$("\x23\x53\x48\x4d").removeClass("\x53\x68\x6f\x77\x4d");
			$("\x23\x53\x48\x4d").addClass("\x48\x69\x64\x65\x4d");
			if(INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
           			INTERSECTED = null;
		}
    }
	function GetPonName(Positon,Tname){
		var name;
		var _$=$("#D").val().split(',');
		if(Positon==1 || Positon==2){
			name="鞋面材质："+_$[0];
		}else if(Positon==3){
			name="鞋跟材质："+_$[2];
		}else if(Positon==4){
			name="内里材质："+_$[3];
		}else if(Positon==5){
			name="鞋垫材质："+_$[4];
		}else if(Positon==7){
			name="鞋底材质："+_$[6];
		}else if(Positon==8){
			name="附加鞋头材质："+_$[7];
		}else if(Positon==9){
			name="附加后身材质："+_$[8];
		}else if(Positon==10){
			name="鞋头装饰材质："+_$[9];
		}else if(Positon==11){
			name="后身装饰材质："+_$[10];
		}
		return name;
	}
	function CheckNameVis(Name){
		for(var i= 0;i<group.children.length;i++) {
			if(group.children[i].name==Name){
			    return group.children[i].visible; 
		    }else{
				for(var j= 0;j<group.children[i].children.length;j++){
					if(group.children[i].children[j].name==Name){
						return group.children[i].children[j].visible; 
					}
				}
			}
		}
	}
	function SetHighlightobj(colladaobj,Name) {
        if(colladaobj.children.length > 0) {
            for (var k = 0; k < colladaobj.children.length; k++) {
                SetHighlightobj(colladaobj.children[k], Name);
            }
        }else {
            if (typeof(colladaobj.material) == '\x6f\x62\x6a\x65\x63\x74') {
                if (INTERSECTED != colladaobj) {
                    if(INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
                    INTERSECTED = colladaobj;
                    INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
                    INTERSECTED.material.emissive.setHex(0xFF0000);
                }
            } else {
                if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
                INTERSECTED = null;
            }
            colladaobj.material.emissive.setHex(0xFF0000);
            colladaobj.material.transparent = true;
        }
    }
    function onWindowResize() {
        camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
		camera.updateProjectionMatrix();
        renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    }
	function onModelSelect() {
	 raycaster.setFromCamera(mouse, camera);
     var intersects = raycaster.intersectObjects(scene.children, true);
     if(intersects.length > 0) {
		 var NameP = intersects[0].object;
		 var Pname = NameP.name;
		 var UserData=NameP.userData;
		 var Position;
		 for(obj in UserData){
			Position=UserData[obj].Position;
		 }
		  var _V=["鞋身可选材质","附加鞋头可选材质","附加后身可选材质","鞋跟可选材质","鞋头装饰可选材质","后身装饰可选材质"];
		  var _$=["\x23\x73\x68\x6f\x65\x73\x62\x6f\x78\x31","\x23\x73\x68\x6f\x65\x73\x62\x6f\x78\x32","\x23\x73\x68\x6f\x65\x73\x62\x6f\x78\x34","\x68\x33\x3a\x65\x71\x28\x31\x29","\x68\x33\x3a\x65\x71\x28\x32\x29"];
         if(CheckNameVis(Pname)) {
			 $("\x23\x53\x48\x4d").show();
			 cancelAnimationFrame(globalID);
             AnimateStop();
            if(Position==1){
				var title=$(_$[0]+" "+_$[3]).html();
				if(title==_V[0]){
					LC(Position);
				}else{
					CHM(Pname,Position);
				}
			}else if(Position==8){
				var title=$(_$[0]+" "+_$[3]).html();
				if(title==_V[1]){
					LC(1);
				}else{
					CHM(Pname,Position);
				} 
			}else if(Position==2){
				var title=$(_$[1]+" "+_$[3]).html();
				if(title==_V[0]){
					LC(Position);
				}else{
					CHM(Pname,Position);
				}
			}else if(Position==9){
				var title=$(_$[1]+" "+_$[3]).html();
				if(title==_V[2]){
					console.log('11');
					LC(2);
				}else{
					console.log('22');
					CHM(Pname,Position);
				}
			}else if(Position==10){
				var title=$(_$[2]+" "+_$[4]).html();
				if(title==_V[4]){
					LC(Position);
				}else{
					CHM(Pname,Position);
				}
				
			}else if(Position==11){
				var title=$(_$[2]+" "+_$[4]).html();
				if(title==_V[5]){
					LC(Position);
				}else{
					CHM(Pname,Position);
				}
			}else if(Position==3){
				LC(Position);
			}else if(Position==4){
				LC(6);
			}else if(Position==5){
				LC(Position);
			}else if(Position==7){
				LC(Position);
			}
		 }
       }
    }
    function LC(Position,I){
		var _$=["\x23\x73\x68\x6f\x65\x73\x62\x6f\x78","\x2e\x64\x65\x73\x69\x67\x6e\x2d\x74\x69\x74\x6c\x65","\x75\x6c\x20\x6c\x69\x3a\x65\x71\x28","\x29","\x63\x75\x72\x72\x65\x6e\x2d\x6d\x65\x6e\x75"];
		for(var i=0;i<8;i++){
		    var j=i-1;
			if(i==Position){
				$(_$[0]+i).show();
				$("#MateialList-"+i).show();
				$(_$[1]+" "+_$[2]+j+_$[3]).addClass(_$[4]);
			}else{
				$("#MateialList-"+i).hide();
				$(_$[0]+i).hide();
				$(_$[1]+" "+_$[2]+j+_$[3]).removeClass(_$[4]);
			}
		}
		clearInterval(timer);
        var getActed = false;
        $(document).mousemove(function(){
              getActed = true;
        });
        timer = setInterval(function(){
             if(!getActed){
                   cancelAnimationFrame(selectID);
                   animate();
                   clearInterval(timer);
              }else{
                   getActed = false;
              }
        },1000);
	}
	function CHM(Pname,Position){
		var ID=GetID(Position);
		var Url =U+'/index.php/home/ajaxshoes/getmateriallist/';
		$.ajax({
			type: 'POST',
			url: Url,
			data: {
            'id': ID,
			'style':Position
            },
			success: function(data) {
				ShowMaterail(Position,data);
			},
			error: function() {
				console.log('ERROR');
			}
		});
		
	}
	function GetID(Position){
		var loading='<img src="'+U+'/Public/img/Loading.gif" class="loading" width="50" height="50" />';
		for(var i=0;i<A.length;i++){
			$("#MateialList-"+Position).html(loading);
			return A[Position-1];
		}
	}
	function ShowMaterail(Position,data){
		var _$=['鞋面可选材质','附加鞋头可选材质','附加后身可选材质','鞋头装饰可选材质','后身装饰可选材质'];
		if(Position==1){
			var html='<ul><li><h3>鞋面可选材质：</h3></li></ul>'+data;
			$("#MateialList-1").html(html);
			LC(Position);
		}else if(Position==2){
			var html='<ul><li><h3>鞋面可选材质：</h3></li></ul>'+data;
			$("#MateialList-2").html(html);
			LC(Position);
		}else if(Position==8){
			var html='<ul><li><h3>附加鞋头可选材质：</h3></li></ul>'+data;
			$("#MateialList-1").html(html);
			LC(1);
		}else if(Position==9){
			var html='<ul><li><h3>附加后身可选材质：</h3></li></ul>'+data;
			$("#MateialList-2").html(html);
			LC(2);
		}else if(Position==10){
			var html='<ul><li><h3>鞋头装饰可选材质：</h3></li></ul>'+data;
			$("#MateialList-4").html(html);
			LC(4);
		}else if(Position==11){
			var html='<ul><li><h3>后身装饰可选材质：</h3></li></ul>'+data;
			$("#MateialList-4").html(html);
			LC(4);
		}
    }
	function render() {
        renderer.render(scene,camera);
    }
    function animate() {
        globalID = requestAnimationFrame(animate);
        controls.update();
        render();
    }
    function AnimateStop() {
        selectID = requestAnimationFrame(AnimateStop);
        render();
    }
    init();
    LoadShose();
    animate()
	this.HP = function(Name) {
		for(var i= 0;i<group.children.length; i++) {
		   if(group.children[i].name==Name){
			    group.children[i].visible = false;
			   if(group.children[i].children.length>1){
				   for(var j=0;j<group.children[i].children.length;j++) {
					  group.children[i].children[j].visible = false;
				   }
			   }
		   }	
		}
    }
	this.Load = function(Name,Images,P,V){
		var _$=["\x2c","\x2e\x6a\x73\x6f\x6e","\x4d","\x49","\x47","\x44"];
		if($(_A[14]).val().indexOf(Name)==-1){
			$(_A[14]).val($(_A[14]).val()+_$[0]+Name);
			var Loader = new FEIKI.ObjectLoader();
			Loader.load(Path+Name+_$[1],function(object){
				object.name = Name;
				object.position.set(-OFX,-OFY,-OFZ);
		        object.visible = true;
		        if(object.children.length > 1) {
				   for(var i=0;i<object.children.length;i++){
					   var Obj=object.children[i];
					   var Nname=object.children[i].name;
					   if((P==1 || P==2) && Nname.charAt(Nname.length-1)==_$[2]){
						   var UserData={'Position':1,'Tname':V[5],'Tid':V[8],'Mname':C[6]};
						   AddMaterial(Obj,Nname,Images,UserData,true);
					   }else if((P==1 || P==2) && Nname.charAt(Nname.length-1)==_$[3]){  
						   var UserData={'Position':4,'Tname':D[3],'Tid':H[3],'Mname':C[3]};
						   AddMaterial(Obj,Name,E[3],UserData,true);
					   }else if(P==3 && Nname.charAt(Nname.length-1)==_$[4]){
						    var UserData={'Position':P,'Tname':V[5],'Tid':V[8],'Mname':C[6]};
						    AddMaterial(Obj,Nname,Images,UserData,true);
					   }else if(P==3 && Nname.charAt(Nname.length-1)==_$[5]){
						   var UserData={'Position':7,'Tname':D[6],'Tid':H[6],'Mname':C[6]};
						   AddMaterial(Obj,Nname,E[6],UserData,true);
					   }
				   }
				}else{
					var UserData={'Position':P,'Tname':V[5],'Tid':V[8],'Mname':V[6]};
					PAddMaterial(object,Name,Images,UserData,true);
			    }
				group.add(object);
			});
		}else{
			for(var i= 0;i<group.children.length; i++) {
			   if(group.children[i].name==Name){
				    group.children[i].visible = true;
				   if(group.children[i].children.length>1){
					   for(var j=0;j<group.children[i].children.length;j++) {
						  group.children[i].children[j].visible = true;
					   }
				   }
			   }	
			}
		}
	}
	this.CMaterial = function(Name,Images,P) {
		var Images=U+Images.substr(1);
		img.src=Images;
        var texture = new FEIKI.Texture();
        var Nmat = new FEIKI.MeshPhongMaterial;
        texture = FEIKI.ImageUtils.loadTexture(Images);
		texture.name=Name;
		texture.image=img;
		texture.magFilter=FEIKI.LinearFilter;
		texture.minFilter=FEIKI.LinearMipMapLinearFilter;
        texture.needsUpdate = true;
		texture.repeat.set(1,1);
        Nmat.map = texture;
		for(var i= 0;i<group.children.length; i++) {
		   if(group.children[i].name==Name){
			   if(group.children[i].children.length>1){
				   for(var j=0;j<group.children[i].children.length;j++) {
					 var UserData=group.children[i].children[j].userData;
					 var Positon;
					 for(obj in UserData){
						Positon=UserData[obj].Position;
					 }
					 if(P==Positon)group.children[i].children[j].material = Nmat;
				   }
			   }else{
				 group.children[i].children[0].material = Nmat;  
			   }
		   }	
		}
    }
	this.SaveImage = function() {
        renderer.render(scene,Front_Camera1);
        ImageDate = renderer.domElement.toDataURL("\x69\x6d\x61\x67\x65\x2f\x70\x6e\x67");
        Images = ImageDate.replace("\x64\x61\x74\x61\x3a\x69\x6d\x61\x67\x65\x2f\x70\x6e\x67\x3b\x62\x61\x73\x65\x36\x34,", "");
		return Images;
    }
}
//SHOW.FeikiStart();