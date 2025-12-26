var TypescriptSession = /** @class */ (function () {
    function TypescriptSession() {
        this.ivar = 20;
    }
    TypescriptSession.prototype.firstFunc = function () {
        console.log("This is a print statement in typescript");
        console.log(this.ivar);
        console.log(TypescriptSession.svar);
    };
    TypescriptSession.prototype.secondFunc = function () {
        var lvar = 10;
        console.log(lvar);
    };
    TypescriptSession.staticMethod = function () {
        console.log("This is a print statement in static method");
    };
    TypescriptSession.prototype.dataTypeFunc = function () {
        var numval = 10;
        var charval = "a";
        var stringval = "This is a string";
        var boolval = true;
        var nullval = null;
        var undefval = undefined;
        var symbolval = Symbol("value check");
        //const bigIntval : bigint = 567890122332445
        console.log(charval);
        console.log(symbolval.description);
    };
    TypescriptSession.prototype.conditionStatement = function () {
        var a = 10;
        var b = 20;
        var c = 30;
        if (a > b) {
            console.log("conditon 1");
        }
        else {
            console.log("In else");
        }
    };
    TypescriptSession.prototype.conditionStatements = function () {
        var day = 3;
        switch (day) {
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            default:
                console.log("Invalid");
        }
    };
    TypescriptSession.prototype.forLoopFunc = function () {
        for (var indexval = 10; indexval < 21; indexval++) {
            if (indexval != 15) {
                if (indexval > 18) {
                    break;
                }
                else {
                    console.log(indexval);
                }
            }
        }
    };
    TypescriptSession.prototype.arrayDemo = function () {
        var arr1 = [24, 22, 20, 29, 28];
        var arr2 = [1, 2, 3, 4, 5];
        var arr3 = [3, 2, [8, 9], 10];
        console.log(arr1);
        console.log(arr1[4]);
        console.log(arr1.map(function (val) { return val * 2; }));
        console.log(arr2.reduce(function (sumVal, val) { return sumVal + val; }, 0));
        console.log(arr1.map(function (val) { return val * arr2.reduce(function (sumVal, val) { return sumVal + val; }, 0); }));
        //console.log(arr3.flatMap(val=>[val, val*2]))
    };
    TypescriptSession.svar = 30;
    return TypescriptSession;
}());
var obj = new TypescriptSession();
obj.firstFunc();
obj.secondFunc();
TypescriptSession.staticMethod();
console.log(obj.ivar);
console.log(TypescriptSession.svar);
obj.dataTypeFunc();
console.log("===============");
obj.conditionStatements();
console.log("====forLoop=====");
obj.forLoopFunc();
console.log("====array=====");
obj.arrayDemo();
obj.conditionStatement();
export {};
