
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"uni-tab-bar{ height: 100%; }\n.",[1],"uni-media-list-text-top{ line-height: auto; font-size:0.8em ; }\n.",[1],"uni-media-list-body{ height: auto; }\n.",[1],"btu .",[1],"_button{ height: 3em; width: 100%; }\n",],undefined,{path:"./pages/index/index.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/index/index.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      