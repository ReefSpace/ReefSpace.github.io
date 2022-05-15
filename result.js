const search_wrap = document.querySelector("#search-wrap");
const search_btn = document.querySelector("#search-btn");
const search_btn_i = document.querySelector("#search-btn-i");
const search_text = document.querySelector("#search-text");
const errntfy = document.querySelector("#err_notify");
const stext = document.getElementById("stext");
const r_olist = document.querySelector("#r_olist");
const r_words = document.querySelector("#r_words");
const delete_btn = document.querySelector("#delete-btn");
const relresult_box = document.querySelector("#relresult_box");
const filter_box = document.querySelector("#filter_box");

// search组件对象
var search = {
	wrap: search_wrap,
	btn: search_btn,
	btn_i: search_btn_i,
	text: search_text,
	classAddActive:function(prop){
		// this.prop.classList.add(this.toString() + "-active");
		this[prop].classList.add(this[prop].className.toString() + "-active");
		console.log( prop +  "的类名已经更新为: "+ this[prop].className);
	}
}

window.onload = function(){
	showSearchText();
}
// 显示搜索框
function showSearchText(){
	flag = 0;
	let myfunc1 = function(e){
		// search_wrap.classList.add("search_wrap-active");
		// search_text.classList.add("search_text-active");
		search.classAddActive("wrap");
		search.classAddActive("text");
		delete_btn.style.visibility = "visible";
		search.text.focus();
		search.wrap.removeEventListener("click",myfunc1);
		search.wrap.addEventListener("click",myfunc2,false); //闭包
		console.log("remove");
		flag =1;
	}
	
	let myfunc2 = function(e){
		if(e.target == search.btn || e.target == search.btn_i){
			stext.textContent = "‘" + search.text.value + "’";
			try{
				if(search.text.value.toString() == "游戏"){
					r_olist.style.visibility = "visible";
					r_words.textContent = '"' + search_text.value + '"';
					filter_box.getElementsByClassName("filterlist")[0].style.visibility ="visible";
					relresult_box.getElementsByClassName("relresult")[0].style.visibility ="visible";
				}else{
					throw e;
				}
			}catch(e){
				r_olist.style.visibility = "hidden";
				filter_box.getElementsByClassName("filterlist")[0].style.visibility ="hidden";
				relresult_box.getElementsByClassName("relresult")[0].style.visibility ="hidden";
				r_words.textContent = '"' + search_text.value + '"';
				errntfy.classList.add("err_notify-active");
				setTimeout(function(){
					errntfy.classList.remove("err_notify-active");
				},1200);
			}
		}
		
		if(e.target == delete_btn){
			search.text.textContent = null;
			search.text.value = null;
		}
	}
	
	search_wrap.addEventListener("click",myfunc1,false);
	return flag;
}





