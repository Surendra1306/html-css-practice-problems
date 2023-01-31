let sum=0;
let i;
let x=10;
let name=['T','E','J','A'];
product=0;


for(i=1;i<=100;i++)
{
    sum=sum+i;
}
document.write(sum);
document.write("<br>" +"<br>");

for(i=1;i<=10;i++)
{
    product=x*i;
    document.write("10*"+i +"=" +product +"<br>" );
}

document.write("<br>");

for(let a of name)
{
    document.write(a+ "<br>");
}