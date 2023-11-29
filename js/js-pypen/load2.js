"use strict";

var scripts = [
    "../js/js-pypen/js/jquery.min.js",
    "../js/js-pypen/js/jquery.contextMenu.min.js",
    "../js/js-pypen/js/jquery.ui.position.min.js",
    "../js/js-pypen/js/plotly-latest.min.js",
    "../js/js-pypen/js/codemirror.js",
    "../js/js-pypen/js/zlib.min.js",
    '../js/js-pypen/setting.js',
    "../js/js-pypen/pypen.js",
    "../js/js-pypen/sample.js",
    "../js/js-pypen/quiz.js",
    "../js/js-pypen/answer.js",
    "../js/js-pypen/base64.js",
    "../js/js-pypen/fileio.js",
    "../js/js-pypen/run.min.js"
];

function load_js(js)
{
    return new Promise(resolve =>{
        var script = document.createElement('script');
        script.defer = 1;
        script.src = js;
        script.type = "text/javascript";
        script.addEventListener('load', resolve);
        document.body.appendChild(script);    
    });
}

(async () => {
    for(var i = 0; i < scripts.length; i++)
    {
        await load_js(scripts[i]);
    }
    var input_status = document.getElementById('input_status');
    input_status.style.visibility = 'hidden';
    input_status.innerText = '入力待ち';
})();
