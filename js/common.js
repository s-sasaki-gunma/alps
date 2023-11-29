function deflate(val) {
	val = encodeURIComponent(val); // UTF16 → UTF8
	val = RawDeflate.deflate(val); // 圧縮
	val = btoa(val); // base64エンコード
	return val;
}

function inflate(val) {
	val = atob(val); // base64デコード
	val = RawDeflate.inflate(val); // 復号
	val = decodeURIComponent(val); // UTF8 → UTF16
	return val;
}

function code2query(baseURL, code) {
	let param = deflate(code);
	return baseURL+"?"+param;
}

function query2code() {
	let param=location.search.substring(1);
	return inflate(param);
}

function makeURL(baseURL, targetId) {
	let code = document.getElementById(targetId).innerText;
	return code2query(baseURL , code);
}

function createLink(url, targetId, caption){
	let $div = document.getElementById(targetId);
	if ( $div.hasChildNodes() ) { $div.innerHTML=""; }
	let $span = document.createElement("span");
	$span.innerText = caption;
	$div.appendChild($span);
	let $a = document.createElement("a");
	$a.setAttribute("href" ,url);
	$a.setAttribute("target" ,"_blank");
	$a.setAttribute("rel" ,"noopener noreferrer");
	$a.innerText = url;
	$div.appendChild($a);
}

function setCode(targetId) {
	let code = query2code();
	document.getElementById(targetId)["innerText"]=code
}
