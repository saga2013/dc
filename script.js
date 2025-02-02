const daynight =document.getElementById("daynight")
const body=document.querySelector("body")
const send =document.getElementById("send")
const input=document.getElementById("input")
const tasklist=document.getElementById("tasklist")

daynight.addEventListener('click', ()=>{
    if(body.classList.toggle('dark-mode')){
        daynight.textContent='☀️'
    }else{
        daynight.textContent='🌙'
    }
});

send.addEventListener('click',()=>{
    if(input.value===''){
        return;
    }
    const li = document.createElement("li")
    li.className='li-element'
    tasklist.appendChild(li)
    
    let a =document.createElement("span")
    a.textContent=input.value
    li.appendChild(a)

    const editdelete =document.createElement("div")
    li.appendChild(editdelete)

    const editBtn=document.createElement("button")
    editBtn.textContent='🖊'
    editdelete.appendChild(editBtn)

    const delBtn=document.createElement("button")
    delBtn.textContent='🗑'
    editdelete.appendChild(delBtn)
    delBtn.addEventListener('click',()=>{
        li.remove()
    })

   
    editBtn.addEventListener('click', ()=>{
        a.textContent=prompt('измени значение ${a.textContent} на следующее')
    })
    input.value=''
    


    
})