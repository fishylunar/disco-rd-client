//Get Disco-RD - Stable

//Check for theme css in cookies

//Define storage functions

var imports = style1.split("@import url(")
var bgURLs = style1.split("background-image: url(")
const injectStyleFromUrl = async (url, callback) => {
let importData = await fetch(url)
let cssCode = await importData.text()
console.log(url)
console.log(cssCode)
bgURLs.forEach(function(node) {
if(!node=="") {
console.log(node.split(")")[0])
if(node.split(")")[0].replace('"','').replace('"','').endsWith(".png") || node.split(")")[0].replace('"','').replace('"','').endsWith(".jpg") || node.split(")")[0].replace('"','').replace('"','').endsWith(".svg")) {

		if(node.split(")")[0].replace('"','').replace('"','').startsWith("http")) {
	replaceWithDataURL(node.split(")")[0].replace('"','').replace('"',''), cssCode)
	}
	}

}
})

}
  const getBase64Image = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const reader = new FileReader();
    await new Promise((resolve, reject) => {
      reader.onload = resolve;
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
    return reader.result.replace(/^data:.+;base64,/, '')
  }
const replaceWithDataURL = async (url, cssCode, callback) => {
	  var b64 = await getBase64Image(url)
  var dataURL="data:image/png;base64," + b64;
  cssCode = cssCode.replace(url, dataURL)
  console.log("replaced : " + url + " with : " + dataURL)
  var newStyle = document.createElement("style")
newStyle.innerHTML = cssCode
document.documentElement.appendChild(newStyle)
}
imports.forEach(function(node) {
if(!node=="") {
console.log(node.split(")")[0])
injectStyleFromUrl(node.split(")")[0].replace('"','').replace('"',''))
style1 = style1.replace("@import url(" + node.split(");")[0] + ");","")
}
})

//Injecting the stylesheet without the imports
var ogStyle = document.createElement("style")
ogStyle.innerHTML = style1
document.documentElement.appendChild(ogStyle)
  });
  		

var rdScript = "";
var rdTheme = "";
var token=localStorage.getItem("token")
const loader_loader_waitUntilElementExists = (selector, callback) => {
const el = document.querySelector(selector);

if (el) {
    return callback(el);
}

setTimeout(() => loader_loader_waitUntilElementExists(selector, callback), 500);
}
//inject the small css for the loading screen
const loadercss = document.createElement("style")
loadercss.innerHTML = '.container-16j22k{background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9Ijk4LjE1IiBoZWlnaHQ9Ijg1IiB2aWV3Qm94PSIwIDAgMzQuNjQxMDE2MTUxMzc3NTUsMzAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgyMjEpIj48cmVjdCBpZD0icGF0dGVybi1iYWNrZ3JvdW5kIiB3aWR0aD0iNDAwJSIgaGVpZ2h0PSI0MDAlIiBmaWxsPSIjMDAwMDAwIj48L3JlY3Q+IDxwYXRoIGZpbHRlcj0idXJsKCNmaWx0ZXIxcGF0dGVybikiIGZpbGw9IiMyOTA1MzMiIGQ9Ik0tMjAgLTIwIGgyMDAgdjIwMCBoLTIwMCBNMzIuOTEgMjZMMjUuOTggMjJMMTkuMDUgMjZMMTkuMDUgMzRMMjUuOTggMzhMMzIuOTEgMzR6TTE1LjU5IDI2TDguNjYgMjJMMS43MyAyNkwxLjczIDM0TDguNjYgMzhMMTUuNTkgMzR6TTYuOTMgMTFMMCA3TC02LjkzIDExTC02LjkzIDE5TDAgMjNMNi45MyAxOXpNMTUuNTkgLTRMOC42NiAtOEwxLjczIC00TDEuNzMgNEw4LjY2IDhMMTUuNTkgNHpNMzIuOTEgLTRMMjUuOTggLThMMTkuMDUgLTRMMTkuMDUgNEwyNS45OCA4TDMyLjkxIDR6TTQxLjU3IDExTDM0LjY0IDdMMjcuNzEgMTFMMjcuNzEgMTlMMzQuNjQgMjNMNDEuNTcgMTl6TTI0LjI1IDExTDE3LjMyIDdMMTAuMzkgMTFMMTAuMzkgMTlMMTcuMzIgMjNMMjQuMjUgMTl6Ij48L3BhdGg+PHBhdGggZmlsdGVyPSJ1cmwoI2ZpbHRlcjJwYXR0ZXJuKSIgZmlsbD0iIzIyMmQ1OSIgZD0iTS0yMCAtMjAgaDIwMCB2MjAwIGgtMjAwIE00MS45MSAyNkwzNC45OCAyMkwyOC4wNSAyNkwyOC4wNSAzNEwzNC45OCAzOEw0MS45MSAzNHpNMjQuNTkgMjZMMTcuNjYgMjJMMTAuNzMgMjZMMTAuNzMgMzRMMTcuNjYgMzhMMjQuNTkgMzR6TTE1LjkzIDExTDkgN0wyLjA3IDExTDIuMDcgMTlMOSAyM0wxNS45MyAxOXpNMjQuNTkgLTRMMTcuNjYgLThMMTAuNzMgLTRMMTAuNzMgNEwxNy42NiA4TDI0LjU5IDR6TTQxLjkxIC00TDM0Ljk4IC04TDI4LjA1IC00TDI4LjA1IDRMMzQuOTggOEw0MS45MSA0ek01MC41NyAxMUw0My42NCA3TDM2LjcxIDExTDM2LjcxIDE5TDQzLjY0IDIzTDUwLjU3IDE5ek01OS4yMyAyNkw1Mi4zIDIyTDQ1LjM3IDI2TDQ1LjM3IDM0TDUyLjMgMzhMNTkuMjMgMzR6TTMzLjI1IDQxTDI2LjMyIDM3TDE5LjM5IDQxTDE5LjM5IDQ5TDI2LjMyIDUzTDMzLjI1IDQ5ek03LjI3IDI2TDAuMzQgMjJMLTYuNTkgMjZMLTYuNTkgMzRMMC4zNCAzOEw3LjI3IDM0ek03LjI3IC00TDAuMzQgLThMLTYuNTkgLTRMLTYuNTkgNEwwLjM0IDhMNy4yNyA0ek0zMy4yNSAtMTlMMjYuMzIgLTIzTDE5LjM5IC0xOUwxOS4zOSAtMTFMMjYuMzIgLTdMMzMuMjUgLTExek01OS4yMyAtNEw1Mi4zIC04TDQ1LjM3IC00TDQ1LjM3IDRMNTIuMyA4TDU5LjIzIDR6TTUwLjU3IDQxTDQzLjY0IDM3TDM2LjcxIDQxTDM2LjcxIDQ5TDQzLjY0IDUzTDUwLjU3IDQ5ek0xNS45MyA0MUw5IDM3TDIuMDcgNDFMMi4wNyA0OUw5IDUzTDE1LjkzIDQ5ek0tMS4zOSAxMUwtOC4zMiA3TC0xNS4yNSAxMUwtMTUuMjUgMTlMLTguMzIgMjNMLTEuMzkgMTl6TTE1LjkzIC0xOUw5IC0yM0wyLjA3IC0xOUwyLjA3IC0xMUw5IC03TDE1LjkzIC0xMXpNNTAuNTcgLTE5TDQzLjY0IC0yM0wzNi43MSAtMTlMMzYuNzEgLTExTDQzLjY0IC03TDUwLjU3IC0xMXpNNjcuODkgMTFMNjAuOTYgN0w1NC4wMyAxMUw1NC4wMyAxOUw2MC45NiAyM0w2Ny44OSAxOXpNMzMuMjUgMTFMMjYuMzIgN0wxOS4zOSAxMUwxOS4zOSAxOUwyNi4zMiAyM0wzMy4yNSAxOXoiPjwvcGF0aD48L3BhdHRlcm4+IDxmaWx0ZXIgaWQ9ImZpbHRlcjFwYXR0ZXJuIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9IjAuMDEgMCIgbnVtT2N0YXZlcz0iMiIgcmVzdWx0PSJyZXN1bHQxIj48L2ZlVHVyYnVsZW5jZT48ZmVEaXNwbGFjZW1lbnRNYXAgaW4yPSJyZXN1bHQxIiBzY2FsZT0iMCIgcmVzdWx0PSJyZXN1bHQyIiB4Q2hhbm5lbFNlbGVjdG9yPSJSIiB5Q2hhbm5lbFNlbGVjdG9yPSJHIiBpbj0iU291cmNlR3JhcGhpYyI+PC9mZURpc3BsYWNlbWVudE1hcD48ZmVDb21wb3NpdGUgaW4yPSJyZXN1bHQyIiBpbj0iU291cmNlR3JhcGhpYyIgb3BlcmF0b3I9ImF0b3AiIHJlc3VsdD0iY29tcG9zaXRlR3JhcGhpYyI+PC9mZUNvbXBvc2l0ZT48ZmVPZmZzZXQgaW49ImNvbXBvc2l0ZUdyYXBoaWMiIHJlc3VsdD0iZmJTb3VyY2VHcmFwaGljIiBkeD0iMCI+PC9mZU9mZnNldD48L2ZpbHRlcj4gPGZpbHRlciBpZD0iZmlsdGVyMnBhdHRlcm4iPjxmZVR1cmJ1bGVuY2UgYmFzZUZyZXF1ZW5jeT0iMCAwLjAxIiBudW1PY3RhdmVzPSIyIiByZXN1bHQ9InJlc3VsdDEiPjwvZmVUdXJidWxlbmNlPjxmZURpc3BsYWNlbWVudE1hcCBpbjI9InJlc3VsdDEiIHNjYWxlPSIwIiByZXN1bHQ9InJlc3VsdDIiIHhDaGFubmVsU2VsZWN0b3I9IlIiIHlDaGFubmVsU2VsZWN0b3I9IkciIGluPSJTb3VyY2VHcmFwaGljIj48L2ZlRGlzcGxhY2VtZW50TWFwPjxmZUNvbXBvc2l0ZSBpbjI9InJlc3VsdDIiIGluPSJTb3VyY2VHcmFwaGljIiBvcGVyYXRvcj0iYXRvcCIgcmVzdWx0PSJjb21wb3NpdGVHcmFwaGljIj48L2ZlQ29tcG9zaXRlPjxmZU9mZnNldCBpbj0iY29tcG9zaXRlR3JhcGhpYyIgcmVzdWx0PSJmYlNvdXJjZUdyYXBoaWMiIGR5PSIwIj48L2ZlT2Zmc2V0PjwvZmlsdGVyPjwvZGVmcz4gPHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSI+PC9yZWN0Pjwvc3ZnPg==)}.rd-rounded{border-radius:25px;background:#040404;padding:20px;width:60%;margin-bottom:20px;margin-left:auto;margin-right:auto}'
document.documentElement.appendChild(loadercss)

function connectionProblems(){
let rdError = document.createElement("a")
rdError.innerText="Errors with DiscoRD"
rdError.href="https://sergal.site/rd/error"
rdError.classList=[
"anchor-3Z-8Bb",
 "anchorUnderlineOnHover-2ESHQB",
  "statusLink-gFXhrL links-3Ldd4A"]
document.getElementsByClassName("problems-3mgf6w slideIn-sCvzGz")[0].children[1].appendChild(rdError)
document.getElementsByClassName("problems-3mgf6w slideIn-sCvzGz")[0].classList.add("rd-rounded")
loader_loader_waitUntilElementExists('.problems-3mgf6w .slideIn-sCvzGz', (el) =>
connectionProblems()
);
}
//document.getElementsByClassName("ready-36e6Vk").children[1].src=""

  console.log("Trying to inject Disco-RD");
  console.log("Disco-RD Web 2.0 - compiled 07/09/2020");


console.log("Theme has been loaded as")
console.log(rdTheme)

console.log("Script has been loaded as")
console.log(rdScript)
//Inject the theme
try {
//Get the scripts
/*
fetch("https://raw.githubusercontent.com/FiskDk/disco-rd-client/master/css.txt")
.then((response) => response.text().then(setScript)); 

fetch("https://raw.githubusercontent.com/FiskDk/disco-rd-client/master/defaultDark.css")
*/
function setScript(retrievedText){ 
var actualCode = retrievedText;
var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();
}
function setOverlay(retrievedText){ 
var actualCode = retrievedText;
rdTheme = actualCode;
var style = document.createElement('style');
style.innerHTML = actualCode;
(document.head||document.documentElement).appendChild(style);
}
try {
var info = document.createElement("a")
info.id = "rdInfo"
info.class = token
info.href = "Comming Soon!"
document.documentElement.appendChild(info)
} catch {
console.log("Error while passing user auth")
}

} catch (err){
console.log("error while loading Disco-RD" + err);
}