chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
	  var currentUrl = tabs[0].url;
	  alert(currentUrl);
	  if(currentUrl.includes("www.aqr.com")){
	  window.open( 
              "https://funds.aqr.com", "_blank"); 
	  window.open( 
              "https://ucits.aqr.com/", "_blank");
			  
	  }
   }
);
document.getElementById("clickMe").onclick = function () { alert('hello!'); };