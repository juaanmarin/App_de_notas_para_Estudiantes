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
const result=document.getElementById("result");


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

const NoteForrollOfHonor=()=>{
    let number=calculateNotes();
    let noteFinal=(4.0-number)/0.4;
    result.innerText=`la nota minima para apracer en el cuadro de honor es de ${noteFinal} `;
}

const missingNote=()=>{
    let number=calculateNotes();
    let noteFinal=(1-number)/0.4;
    result.innerText=`la nota que debe sacar para perder la materia es ${noteFinal} `;
}

const approvalNote=() =>{
    let number=calculateNotes();
    let noteFinal=(3.5-number)/0.4;
    result.innerText=`la nota minima para aprobar es de ${noteFinal} `;
}

const recoveryNote=() =>{
    let number=calculateNotes();
    let noteFinal=(2-number)/0.4;
    result.innerText=`la nota minima para recuperar es de ${noteFinal} `; 
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