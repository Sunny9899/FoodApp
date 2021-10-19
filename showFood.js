async function getFoodData(link){

   let res=await fetch(link);
   let data=await res.json();

   return data;

}

function appendFood(data,container){


    data.forEach(({idMeal,strMeal,strCategory,strInstructions,strMealThumb,strTags,strYoutube,strIngredient1,strIngredient2,strIngredient3,strMeasure1,strMeasure2,strMeasure3})=>{ // using . notation ka alternative so that we can directly access these values from the server data and no need to use dot notataion to access it(el.title or el.image)

        let div1=document.createElement("div");
        div1.setAttribute("class","div1");
        let div2=document.createElement("div");
        div2.setAttribute("class","div2");
        let div3=document.createElement("div");
        div3.setAttribute("class","div3");

        let p1=document.createElement("p");
        let p2=document.createElement("p");
        let p3=document.createElement("p");       
        let p4=document.createElement("p");
        let p5=document.createElement("p");
        let p6=document.createElement("p"); 
        let mI=document.createElement("p");
                    
        p1.innerText="DishId: "+idMeal;
        p2.innerText="Name: "+strMeal;
        p3.innerText="Category: "+strCategory;
        p4.innerText="Instructions: "+strInstructions;
        p5.innerText="RelatedTags: "+strTags;
        p6.innerText="Youtube Link: "+strYoutube;       
        mI.innerText="Ingredients Required: "+ strIngredient1+"-"+strMeasure1+", "+strIngredient2+"-"+strMeasure2+", "+strIngredient3+"-"+strMeasure3;
        
        let img7=document.createElement("img");
        img7.src=strMealThumb;
        div1.append(img7);
    
        div2.append(p1,p2,p3,p5,mI,p4,p6);

        div3.append(div1,div2);
    
        container.append(div3);
    })
}


async function searchFoodData(address){

    let res2=await fetch(address);
    let data2=await res2.json();

    return data2;
}

export{getFoodData,appendFood,searchFoodData};