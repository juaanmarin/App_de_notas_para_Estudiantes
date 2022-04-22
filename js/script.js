const name=document.getElementById("name");
const note1=document.getElementById("note1");
const note2=document.getElementById("note2");
const color=document.getElementById("background");
const validate=document.getElementById("button");
const changebg=document.getElementById("changeBG");
const result=document.getElementById("result");

const cambiarfondo=()=>{
    console.error("cambiar color de fondo")
}

const calculateNotes=(values)=>{
    let noteFinal=(values.note1+values.note2)/2;

    result.innerText=`por el momento la nota actual es ${noteFinal}`
}

const convertValues=()=>{
    let convertNote1=parseFloat(note1.value);
    let convertNote2=parseFloat(note2.value);
    return values={note1:convertNote1, note2:convertNote2};
}

const validateFields=()=>{
    if(note1.value=="" || note2.value==""){
        result.innerText=`los datos de nota son requeridos`;
    }
    else{
        let values=convertValues();

        if(values.note1<1 || values.note1>5){
            result.innerText=`no puede ingresar numeros menores a 1 ni mayores a 5`;
        }
        else if(values.note2<1 || values.note2>5){
            result.innerText=`no puede ingresar numeros menores a 1 ni mayores a 5`;
        }
        else{
            calculateNotes(values);
        }
    }
}

changebg.addEventListener("click",() =>{
    cambiarfondo();
})

validate.addEventListener("click", () =>{  
    validateFields();
})