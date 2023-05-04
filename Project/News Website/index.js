let card = document.querySelectorAll(".report-card");
let card1 = document.getElementsByClassName("card1")
let Xbox = document.querySelectorAll('.fa-circle-xmark');
let checkboxCardContainer = document.querySelectorAll(".checkbox-card-container");
let checkboxHeart = document.querySelectorAll(".checkbox");

checkboxCardContainer.forEach((element,i )=> {
    element.addEventListener('mouseover', e => {
        document.querySelectorAll(".checkbox-card")[i].style.color = "#0266FF";
    });
    element.addEventListener('mouseout', e =>{
        document.querySelectorAll(".checkbox-card")[i].style.color = "#9D9DB5";

    });
    
    element.addEventListener('click', e => {
        if(element.checked){
            document.querySelectorAll(".checkbox-card")[i].style.display = 'flex';
        }
    })
})

card.forEach((element,i)=>{
    element.addEventListener('mouseout', e=>{
        if(!checkboxCardContainer[i].checked){
            document.querySelectorAll(".checkbox-card")[i].style.display = 'none';
        }else{
            document.querySelectorAll(".checkbox-card")[i].style.display = 'flex';
            document.querySelectorAll(".checkbox-card")[i].style.paddingBottom = '5px';
        }
    })
    element.addEventListener('mouseover',e=>{
        document.querySelectorAll(".checkbox-card")[i].style.display = 'flex';
    })
})

checkboxHeart.forEach((element, i) =>{
    element.addEventListener('click', e=>{
        if(element.checked){
            document.querySelectorAll(".fa-heart")[i].style.fontWeight = '900';
            document.querySelectorAll(".fa-heart")[i].style.color = '#0266FF';
        }else{
            document.querySelectorAll(".fa-heart")[i].style.fontWeight = '100';
            document.querySelectorAll(".fa-heart")[i].style.color = '#9D9DB5';
        }
    })
    element.addEventListener('mouseover', e=>{
        if(!element.checked){
            document.querySelectorAll(".fa-heart")[i].style.color = '#0266FF';
        }
    })
    element.addEventListener('mouseout', e=>{
        if(!element.checked){
            document.querySelectorAll(".fa-heart")[i].style.color = '#9D9DB5';
        }
    })
})

Xbox.forEach((element, i) =>{
    element.addEventListener('click', e=>{
        element.style.fontWeight = '900';
        element.style.color = '#0266FF';
        card[i].style.display = 'none';
    })
})
