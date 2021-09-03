$(".form-check-input").click((e)=>{
    $(".form-check-input").each((index,element)=>{
        if(index!=0)
        {
            if(e.target!==element)
            {
                $(element).prop("checked",false)      
            }            
        }
    })
})








