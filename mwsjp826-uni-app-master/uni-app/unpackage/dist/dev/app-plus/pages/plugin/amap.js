
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["wx-view { display: block; }\n.",[1],"content { width: ",[0,660],"; margin: 0 auto; }\n.",[1],"page { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; width: 100%; text-align: center; }\n.",[1],"result-list { padding: ",[0,40],"; }\n.",[1],"result-list wx-view { padding: ",[0,10]," 0; }\n.",[1],"result-list wx-view wx-rich-text { font-size: ",[0,28],"; }\n.",[1],"btn-list .",[1],"_button { width: 100%; height: ",[0,80],"; margin: 0 auto ",[0,40],"; text-align: center; line-height: ",[0,80],"; background: #918984; color: #ffffff; border-radius: ",[0,40],"; }\n.",[1],"address-name { font-size: ",[0,28],"; }\n",],undefined,{path:"./pages/plugin/amap.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/plugin/amap.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      