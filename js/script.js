const name=document.getElementById("name");
const note1=document.getElementById("note1");
const note2=document.getElementById("note2");
const color=document.getElementById("background");
const validate=document.getElementById("button");
const changebg=document.getElementById("changeBG");
const btnRecoveryNote=document.getElementById("btnRecoveryNote");
const btnMissingNote=document.getElementById("btnmissingNote");
const btnNoteToPassTheSubject=document.getElementById("btnnoteToPassTheSubject");
const btnRollOfHonor=document.getElementById("btnrollOfHonor");
const menu=document.getElementById("menuObtion");
const result=document.getElementById("result");
const cart=document.getElementById("card");
const msj=document.getElementById("msj");
const msj2=document.getElementById("msj2");
const msj3=document.getElementById("msj3");


menu.style.display="none";
cart.style.display="none";

const hideLetter=()=>{
    cart.style.display="none";
}

const convertValues=()=>{
    let convertNote1=parseFloat(note1.value);
    let convertNote2=parseFloat(note2.value);
    return values={note1:convertNote1, note2:convertNote2};
}

const calculateNotes=()=>{
    let values=convertValues()
    let cal=((values.note1*0.3) + (values.note2*0.3));
    return cal;
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
            menu.style.display=""
        }
    }
}

//funcion para salir en el cuadro de honor
const NoteForrollOfHonor=()=>{
    let number=calculateNotes();
    let noteFinal=(4.0-number)/0.4;
    msj.innerText=`la nota actual es ${number.toFixed(2)}`
    msj2.innerText=`necesita ${noteFinal.toFixed(2)} o superio par el cuadro de honor`
    if (noteFinal>0.9 && noteFinal <5.1){
        msj3.innerText=`es posible el cuadro de honor`;
        msj3.style.color=("blue");
    }
    else{
        msj3.innerText=`es imposible alcansar el cuadro de honor`;
        msj3.style.color=("blue");
    }
    
    cart.style.display="";
    setTimeout(hideLetter, 5000);
}

//funcion para perder la nota
const missingNote=()=>{
    let number=calculateNotes();
    let noteFinal=(2-number)/0.4;
    msj.innerText=`la nota actual es ${number.toFixed(2)}`
    msj2.innerText=`necesita ${noteFinal.toFixed(2)} o inferior para perder`

    if (noteFinal>1 && noteFinal <5){
        msj3.innerText=`es posible perder`;
        msj3.style.color=("red");
    }
    else{
        msj3.innerText=`es imposible perder`;
        msj3.style.color=("red");
    }
    cart.style.display="";
    setTimeout(hideLetter, 5000);
}

//funcion para aprobar
const approvalNote=() =>{
    let number=calculateNotes();
    let noteFinal=(3.5-number)/0.4;
    msj.innerText=`la nota actual es ${number.toFixed(2)}`
    msj2.innerText=`necesita ${noteFinal.toFixed(2)} o superior para aprobar`

    if (noteFinal>0.9 && noteFinal <5.1){
        msj3.innerText=`es posible aprobar`;
        msj3.style.color=("green");
    }
    else{
        msj3.innerText=`es imposible aprobar`;
        msj3.style.color=("red");
    }
    cart.style.display="";
    setTimeout(hideLetter, 5000);
}

//funcion para recuperar la nota
const recoveryNote=() =>{
    let number=calculateNotes();
    let noteFinal=(2-number)/0.4;
    msj.innerText=`la nota actual es ${number.toFixed(2)}`
    msj2.innerText=`necesita ${noteFinal.toFixed(2)} o superio para poder recuperar`
    if (noteFinal>0.9 && noteFinal <5.1){
        msj3.innerText=`es posible reuperar la materia `;
        msj3.style.color=("black");
    }
    else{
        msj3.innerText=`es imposible recuperar la materia`;
        msj3.style.color=("red");
    }
    cart.style.display="";
    setTimeout(hideLetter, 5000);
}

changebg.addEventListener("click",() =>{
    let actual=document.body;
    actual.style.background=color.value
})

btnRollOfHonor.addEventListener("click",() =>{
    NoteForrollOfHonor();
})
btnMissingNote.addEventListener("click",() =>{
    missingNote();
})

btnNoteToPassTheSubject.addEventListener("click",() =>{
    approvalNote();
})

btnRecoveryNote.addEventListener("click",() =>{
    recoveryNote();
})

validate.addEventListener("click", () =>{  
    validateFields();
})