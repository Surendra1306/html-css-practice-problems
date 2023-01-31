{
    function fact()
    {
        let num=prompt("Enter a number");
        fact=1;
        let i;

        if(i==0 || i==1)
        {
            document.write("1");
        }

        for(i=1;i<=num;i++)
        {
            fact*=i;
        }
        document.write("Factorial of "+num+ " is:"+fact);
    }

    function person_details()
    {
        let person=
        {
            name:"pavan",
            age:21,

            display()
            {
                document.write(this.name,"<br>"+this.age);
            }

        }
        person.display();
    }
}