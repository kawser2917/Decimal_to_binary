//initial reference

const decInp=document.querySelector("#dec-inp")
const binInp=document.querySelector("#bin-inp")
const errorMsg=document.querySelector("#error-msg")


//convert decimal to binary when user inputs the decimal field

decInp.addEventListener("input",()=>{
    const decValue= parseInt(decInp.value)

    //converts the decimal value to binary

    binInp.value=decValue.toString(2)
})


//convert binary to decimal when user inpus in the binary field

binInp.addEventListener("input",()=>{
    const binValue=binInp.value

    //if the binary number is valid conver it to the decimal 

    if(binValidator(binValue)){
        decInp.value= parseInt(binValue,2)
        errorMsg.textContent=""

    }//else display an error
    else{
        errorMsg.textContent="Vaia chokh Kan khula rakhun thik moto number den"
        
    }

    //Function to check the binary valid or not
    function binValidator(num){
        for (let i=0;i<num.length;i++){
            if(num[i]!="0" && num[i]!="1"){
                return
            }
        }
        return true
    }

})