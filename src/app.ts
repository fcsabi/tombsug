const calcButton01=document.querySelector("#calcButton01")
calcButton01.addEventListener('click',()=>{
    const Alfa=document.querySelector("#Alfa")as HTMLInputElement;
    const oldal=document.querySelector("#oldal")as HTMLInputElement;
    let AlfaNum:number=Number(Alfa.value);
    let oldalNum:number=Number(oldal.value);
    let area =calcArea(AlfaNum,oldalNum);
    alert(area);
})

function calcArea(Alfa:number,oldal:number):number{
    return  oldal/2*Math.sin(Alfa)
}