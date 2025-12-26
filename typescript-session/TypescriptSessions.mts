
class TypescriptSession{
ivar = 20
static svar = 30

    public firstFunc(){

console.log("This is a print statement in typescript")
console.log(this.ivar)
console.log(TypescriptSession.svar)
    }

    public secondFunc(){

        const lvar: number = 10
        console.log(lvar)
    }

    public static staticMethod(){

        console.log("This is a print statement in static method")

    }

    public dataTypeFunc(){
        const numval : number = 10
        const charval : string = "a"
        const stringval : string ="This is a string"
        const boolval : boolean = true
        let nullval : null = null
        const undefval : undefined = undefined
        const symbolval : symbol = Symbol("value check")
        //const bigIntval : bigint = 567890122332445

        console.log(charval)
        console.log(symbolval.description)
   
    }
    public conditionStatement(){
          const a=10
          const b=20
          const c=30

          if(a>b){
            console.log("conditon 1")
          }else{
            console.log("In else")
          }
}
    public conditionStatements(){

        const day : number = 3

        switch(day)
        {
          case 1 :
        console.log("Monday")
        break
          case 2 :
        console.log("Tuesday")  
        break
           case 3:
        console.log("Wednesday")
        break      
        default :
        console.log("Invalid") 
        }         
}
public forLoopFunc(){
    for(let indexval=10;indexval<21;indexval++){
        if(indexval!=15){
            if(indexval>18){
                break
            }else{
            console.log(indexval)    
            }
        }
    }
    
}

public arrayDemo(){
    const arr1 : number [] = [24, 22, 20, 29, 28]
    const arr2 = [1, 2, 3, 4, 5]
    const arr3 = [3, 2, [8, 9], 10]
    
    console.log(arr1)
    console.log(arr1[4])
    console.log(arr1.map(val=>val*2))
    console.log(arr2.reduce((sumVal,val)=>sumVal+val,0))
    console.log(arr1.map(val=>val*arr2.reduce((sumVal,val)=>sumVal+val,0)))

    //console.log(arr3.flatMap(val=>[val, val*2]))
}
}

    



               
               















    


const obj = new TypescriptSession()
obj.firstFunc()
obj.secondFunc()
TypescriptSession.staticMethod()
console.log(obj.ivar)
console.log(TypescriptSession.svar)
obj.dataTypeFunc()
console.log("===============")
obj.conditionStatements()
console.log("====forLoop=====")
obj.forLoopFunc()
console.log("====array=====")
obj.arrayDemo()
obj.conditionStatement()