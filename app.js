const qrText=document.getElementById("qr-text");
const sizes=document.getElementById("sizes");
const generateBtn=document.getElementById("genrate");
const downloadBtn=document.getElementById("download");

const qrContianer=document.querySelector(".qr-body");
let size=sizes.value;

generateBtn.addEventListener("click" ,(e)=>{
    e.preventDefault();
    isEmpty();
})



sizes.addEventListener("change",(e)=>{
    size=e.target.value;
    isEmpty();
})


downloadBtn.addEventListener("click", ()=>{
    let img=document.querySelector(".qr-body img");

    if(img!=null){
        let imgAtr=img.getAttribute("src");
        downloadBtn.setAttribute("href",imgAtr)
    }else{
        downloadBtn.setAttribute("href",`${document.querySelector("canvas").toDataURL()}`)

    }
})



function isEmpty(){
    if(qrText.value.length>0){
        generateQrCode();   
       }else{
           alert("Enter text or url")
       }
}
function generateQrCode(){
    qrContianer.innerHTML=""
    new QRCode(qrContianer, {
            text:qrText.value,
            height:size,
            width:size,
            colorLight:"#fff",
            colorDark:"#000",
        });
}