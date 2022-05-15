const body = document.getElementsByTagName("body")[0];
const header = document.getElementsByTagName("header")[0];
const mainbox = document.getElementsByClassName("mainbox")[0];
const paw = document.getElementById("pawtxt");
const showPic_btn_i = document.querySelector("#showPic-btn-i");
const search_wrap = document.querySelector("#search-wrap");
const search_btn = document.querySelector("#search-btn");
const search_btn_i = document.querySelector("#search-btn-i");
const search_text = document.querySelector("#search-text");
const alertwd = document.querySelector("#alertwd");
const func_bar = document.querySelector("#function-bar");
const menu_btn = document.querySelector("#menu-btn");
const menu_btn_i = document.querySelector("#menu-btn-i");
const menu_context = document.querySelector("#menu-context");
const dark_btn_i =document.querySelector("#dark-btn-i");
const pers_link = document.querySelector("#pers-link");
const personalise = document.querySelector("#personalise");
const pers_btn = document.querySelector("#pers-btn");
const prv_link = document.querySelector("#prv-link");
const prv_board = document.querySelector("#private");
const prv_btn = document.querySelector("#prv-btn");
const imglist = document.querySelector("#imglist");
const search_place = document.querySelector("#search-place");
const search_place_ol = document.querySelector("#placelist");


window.onload = function(){
	
	paw.style.transition = "0.5s";

// 右上角功能栏合并监听器
	func_bar.addEventListener("click",function(e){
		if(e.target == showPic_btn_i){
			e.preventDefault();
			if(body.style.backgroundImage){
				// 换背景
				body.style.backgroundImage ="";
			}else{
				body.style.backgroundImage = "url(" + selectimg.src + ")";
			}
		}else if(e.target == dark_btn_i){
			// 切换暗夜模式
			header.classList.toggle("header-dark");
			paw.classList.toggle("pawtxt-dark");
			search_btn.classList.toggle("search_btn-dark");
			search_text.classList.toggle("search_text-dark");
			menu_context.classList.toggle("menu_context-dark");
			body.classList.toggle("body-dark");
			mainbox.classList.toggle("mainbox-dark");
			search_place.classList.toggle("search_place-dark");
			search_place_ol.classList.toggle("placelist-dark");
			personalise.classList.toggle("personalise-dark");
			prv_board.classList.toggle("private-dark");
		}else if(e.target == menu_btn_i){
			// 菜单 
			menu_context.classList.toggle("menu_context-active");
		}
	},false)
	
// 搜索框鼠标悬浮监听器
	search_btn.addEventListener("mouseenter",function(e){
		search_btn.classList.add("search_btn-active");
		search_text.classList.add("search_text-active");
		func_bar.classList.add("function-hide");
		paw.style.color = "#b8f0f7";
		paw.style.textShadow = "0px 0px 6px #88d0de";
		search_text.focus();
	},false)

	
// 聚焦搜索框监听器
	search_text.addEventListener("keyup",apple,false);
	search_text.addEventListener("focus",apple,false);
	// search_text.addEventListener("blur",appleFade,false);
	
	
// 单击空白处关闭搜索组件监听器
	window.addEventListener("mousedown",function(e){
		// 使用 composedPath来检查事件冒泡路径 
		let domPath = e.composedPath();
		if(!domPath.some(item => item == search_wrap) && !domPath.some(item => item == func_bar) && !domPath.some(item => item == search_place)){
			search_btn.classList.remove("search_btn-active");
			search_text.classList.remove("search_text-active");
			search_place.classList.remove("search_place-active");
			func_bar.classList.remove("function-hide");
			paw.style.color = "#fff";
			paw.style.textShadow = "none"
		}
		
		if(!domPath.some(item => item == menu_context) && !domPath.some(item => item == menu_btn)){
			menu_context.classList.remove("menu_context-active")
		}
	},false)
	

// 菜单列表监听器
	menu_context.addEventListener("click",function(e){
		if(e.target == pers_link){
			personalise.classList.add("personalise-active");
			menu_context.classList.remove("menu_context-active");
		}else if(e.target == prv_link){
			prv_board.classList.add("private-active");
			menu_context.classList.remove("menu_context-active");
		console.log(e.target);
	}},false)
	

// 背景图片选择监听器
	var imglistElem = getElem();
	var selectimg = imglistElem[0];
	personalise.addEventListener("click",function(e){
		for(let i=0;i<imglistElem.length;i++){
			if(e.target == imglistElem[i]){
				selectimg = imglistElem[i];
				for(let j=0;j<imglistElem.length;j++){
					imglistElem[j].classList.remove("bgimg-select");
				}
				selectimg.classList.toggle("bgimg-select");
				console.log(selectimg);
			}
		}
	},false)
	
// 全局click事件合并侦听器
	window.addEventListener("click",function(e){
		if(e.target == pers_btn ){
			// 个性化面板
			personalise.classList.toggle("personalise-active");
			body.style.backgroundImage = "url(" + selectimg.src + ")";
		}else if(e.target == prv_btn){
			// 隐私选项
			prv_board.classList.toggle("private-active");
		}else if(e.target == search_btn || e.target == search_btn_i){
			// 搜索按钮弹窗提示
			e.preventDefault();
			alertwd.style.opacity = "1";
			alertwd.style.visibility = "visible"
			setTimeout(function(){alertwd.style.opacity = "0";alertwd.style.visibility = ""},1200);
			setTimeout(function(){location.href = "result.html"},1500);
			console.log(e.target);
		}
	},false)
	
//onload函数结尾括号 
}

// 获取imglist的全部图片元素
function getElem(){
		let imglistChild = imglist.childNodes;
		let imglistElem = new Array();
		for(let i=0,j=0;i<imglistChild.length;i++){
			if(imglistChild[i].nodeType == "1" && imglistChild[i].classList.contains("bgimg")){
				imglistElem[j] = imglistChild[i];
				j++;
			}
		}
		return imglistElem;
	}

//苹果函数
function apple(e){
	if(search_text.value.toLowerCase() == "apple" || search_text.value.toString() == "苹果" ){
		search_place.classList.add("search_place-active");
	}
	if(search_text.value.toLowerCase() != "apple" && search_text.value.toString() != "苹果"){
		search_place.classList.remove("search_place-active");
	}
}

function appleFade(e){
		search_place.classList.remove("search_place-active");
}

// 以下代码已在上面进行监听器合并
	// 显示背景图片按钮监听器
	// showPic_btn.addEventListener("click",function(e){
	// 	e.preventDefault();
	// 	if(body.style.backgroundImage){
	// 		body.style.backgroundImage ="";
	// 	}else{
	// 		body.style.backgroundImage = "url(imgs/earth.jpg)";
	// 	}
	// },false)
	
// // 切换暗色模式
// 	dark_btn.addEventListener("click",function(e){
// 		header.classList.toggle("header-dark");
// 		paw.classList.toggle("pawtxt-dark");
// 		search_btn.classList.toggle("search_btn-dark");
// 		search_text.classList.toggle("search_text-dark");
// 		menu_context.classList.toggle("menu_context-dark");
// 		body.classList.toggle("body-dark");
// 	},false)

// // 显示菜单
// 	menu_btn.addEventListener("click",function(e){
// 		menu_context.classList.toggle("menu_context-active");
// 	},false)

// // 个性化菜单 
// 	pers_link.onclick = function(){
// 		personalise.classList.add("personalise-active");
// 		menu_context.classList.remove("menu_context-active");
// 	}
	
// 	pers_btn.onclick = function(){
// 		personalise.classList.toggle("personalise-active");
// 	}

// // 隐私选项菜单
// 	prv_link.onclick = function(){
// 		prv_board.classList.add("private-active");
// 		menu_context.classList.remove("menu_context-active");
// 	}
	
// 	prv_btn.onclick = function(){
// 		prv_board.classList.toggle("private-active");
// 	}

// 应该算是彩蛋吧？还没完工
	// search_btn.addEventListener("click",function(e){
		// alertwd.style.opacity = "1";
		// setTimeout(function(){	alertwd.style.opacity = "0";},1200);
	// },false)
	

	




