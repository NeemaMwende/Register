// let a = 7 * undefined / "panama";
// console.log(a);
/* 
 function beforeTryCatch()
 {
    let obj = undefined;
    console.log(obj.b);
    console.log('if the previous line of code throws an exception you\'ll never see this');
 }
 beforeTryCatch(); */

 function afterTryCatch()
 {
    try
    {
     let obj = undefined;
    console.log(obj.b);
    console.log('if the previous line of code throws an exception you\'ll never see this');
    }
    catch (error)
    {
        console.log('i caught an exception:' + error.message);
    }
    console.log('My program is still running');
 }
 afterTryCatch();