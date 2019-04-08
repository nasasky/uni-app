
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"swiper{ width:100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack:center; -webkit-justify-content:center; -ms-flex-pack:center; justify-content:center; }\n.",[1],"tower-swiper .",[1],"tower-item { -webkit-transform: scale(calc(0.5 + var(--index) / 10)); -ms-transform: scale(calc(0.5 + var(--index) / 10)); transform: scale(calc(0.5 + var(--index) / 10)); margin-left: calc(var(--left) * ",[0,100]," - ",[0,150],"); z-index: var(--index); }\n",],undefined,{path:"./pages/component/swiper.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/component/swiper.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      