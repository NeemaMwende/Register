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

 /* function afterTryCatch()
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
    finally
    {
      console.log('this will print regardless of what happens');
    }
    console.log('My program is still running');
 }
 afterTryCatch();
 */

 function performCalculation(obj)
 {
   if(!obj.hasOwnProperty('b'))
   {
      throw new Error("The object doesn't have property b");
   }
   // otherwise continue with calculation
   return 6;
 }
// performCalculation();

function performHigherLevelOperation()
{
   let obj = {};
   let value = 0;
   try
   {
      value= performCalculation(obj);
   }
   catch (error)
   {
      console.log(error.message);
   }

   if (value == 0) {}
}
