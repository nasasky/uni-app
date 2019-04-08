
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body { padding-top: 45px; }\n",],undefined,{path:"./pages/basics/layout.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/basics/layout.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      