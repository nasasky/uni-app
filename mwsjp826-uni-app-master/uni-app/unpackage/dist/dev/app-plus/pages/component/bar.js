
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"box { margin: ",[0,20]," 0; }\n.",[1],"box wx-view.",[1],"cu-bar { margin-top: ",[0,20],"; }\n",],undefined,{path:"./pages/component/bar.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/component/bar.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      