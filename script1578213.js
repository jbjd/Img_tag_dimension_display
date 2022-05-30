document.querySelectorAll("img").forEach(img18463 => { 
    img18463.onmouseenter = function(){
        var width1943098073 = this.naturalWidth;
        var height145749751 = this.naturalHeight;
        var shower17573 = document.getElementById("dim-shower10573");
        shower17573.innerText = width1943098073 + " x " + height145749751;
        shower17573.style.visibility = "visible";
    };
    img18463.onmouseout = function(){
        var shower17573 = document.getElementById("dim-shower10573");
        shower17573.style.visibility = "hidden";
    };
})