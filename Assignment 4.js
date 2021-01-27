//Q1
// 3 ways: 
// i) document.getElementById('id')
// Here, function returns the element having the id tag='id'. 
// This element can directly be stored in a variable, and then used.

// ii) document.getElementsByTagName('tag')
// Here, function returns an array of all elements in the HTML file having the 'tag' tag.
// To access any particular element, a loop can be used to traverse the array and extract the element 
// from it.

// iii) document.getElementsByClassName('class') 
// Similar to getElementsByTagName, just that the function here returns an array of all 
// elements in the HTML file having 'class' as their class.

//Q2
function num_add()
{
    var num_arr=document.getElementsByTagName("input");
    var num1=num_arr[0];
    var num2=num_arr[1];
    ele=document.getElementsById("para");
    console.log(ele);
    var c=num1+num2;
    ele.innerText=c;
}

