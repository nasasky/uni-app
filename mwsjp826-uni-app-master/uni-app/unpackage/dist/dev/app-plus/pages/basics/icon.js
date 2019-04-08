
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body { padding-top: 50px; }\n",],undefined,{path:"./pages/basics/icon.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/basics/icon.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      