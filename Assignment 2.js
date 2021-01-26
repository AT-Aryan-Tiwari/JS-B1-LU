// Q1
const clothes = ['jacket', 't-shirt'];
clothes.length = 0;
console.log(clothes[0]);
//The output of above code can be expected to be 'jacket', but as the length of the constant array
// clothes has been changed to 0, it means that the array is now empty. Hence, upon trying to access the
// zeroth element of clothes will lead to 'undefined' as the output, as JS does not raise a syntax error,
// but instead gives undefined values.

//Q2
var arr=[10,20,30,40,50,60,70,80,90,100];
var sum=0;
for(var i=0;i<arr.length;i++)
{
    sum+=arr[i];
}
console.log(sum);
// The above code gives output as sum of the all the elements of the given array.