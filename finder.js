chrome.storage.sync.get('asvberiabd', function(result) {
    if(result.asvberiabd === 'start'){
        window.onload = function(){
            var s1854234 = document.createElement('script');
            var div19670 = document.createElement('div');
            div19670.id = "dim-shower10573";
            div19670.style.position = "fixed";
            div19670.style.backgroundColor = "#6b6b6b";
            div19670.style.color = "#e0e0e0";
            div19670.style.padding = " 0 5px 7px 5px";
            div19670.style.borderRadius = "0 0 10px 0";
            div19670.style.visibility = "hidden";
            div19670.style.zIndex = "99999999";
            div19670.style.fontFamily = "Georgia";
            div19670.style.fontSize = "40px";
            div19670.style.top = "0px";
            div19670.style.left = "0px";
            div19670.style.verticalAlign = "text-top";
            div19670.innerHTML = "asdfasdf";
            s1854234.src = chrome.runtime.getURL('script1578213.js');
            s1854234.onload = function() {
                this.remove();
            };
            document.body.appendChild(div19670);
            (document.head || document.documentElement).appendChild(s1854234);
        }        
    }
});
