function convert(){
    let massval=Number(document.getElementById("value").value);
    let heval=Number(document.getElementById("value2").value);
    let bmival=massval/heval**2
    let convert=document.getElementById("result")
    convert.innerHTML=bmival.toFixed(2);
    }