function calculator() {
    var qValue = parseInt(document.getElementById("inputQ").value);
    var dValue = parseInt(document.getElementById("inputD").value);      
    var nValue = parseInt(document.getElementById("inputN").value);      
    var pValue = parseInt(document.getElementById("inputP").value);     
    var coinValue = ((qValue * 0.25) + (dValue * 0.1) + (nValue * 0.05) + (pValue * 0.01));
    var totalCoins = (qValue+dValue+nValue+pValue);
    document.getElementById("totalCoins").innerHTML = "Total coins: " + totalCoins;
    document.getElementById("coinValue").innerHTML = "Amount: " + Math.round(100*coinValue)/100;

}