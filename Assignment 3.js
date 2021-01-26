//Q1 - Author and Book name were interchanged in the output example given in the question. Has been
// rectified here.
var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }
];
for(var i=0;i<library.length;i++)
{
    if(library[i].readingStatus===true)
    {
        console.log("Already read '"+library[i].title+"' by "+library[i].author);
    }
    else
    {
        console.log("You still need to read '"+library[i].title+"' by "+library[i].author);
    }
}

//Q2
var age=prompt("Enter your age");
if (age<18)
{
    alert("Not legal age to drive");
}
else
{
    alert("Drive safe");
}