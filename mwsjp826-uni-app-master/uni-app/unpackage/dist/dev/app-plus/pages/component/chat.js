
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body{ padding-bottom: ",[0,100],"; }\n",],undefined,{path:"./pages/component/chat.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/component/chat.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      