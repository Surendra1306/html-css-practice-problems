{
    function shoppingList()
    {
        let items=['Eggs','Milk','Bread'];

        for(let i of items)
        {
            document.getElementById("list").innerHTML+="<li>"+i+"</li>";
        }

    }

    function shoppingList2()
    {
        let item=document.getElementById("input");
        let list=document.getElementById("list2");
        list.innerHTML+="<li>"+item.value+"</li>";
    }
}