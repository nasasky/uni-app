
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["wx-text{ font-size: 1.5em; }\n.",[1],"content{ width: 96%; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; margin: 0 auto; margin-left: 3%; }\n.",[1],"body .",[1],"_img{ width: 90%; }\n",],undefined,{path:"./pages/info/info.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/info/info.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      