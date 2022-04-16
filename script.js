const colorPicker = document.getElementById('color');

colorPicker.addEventListener("input", update, false);


function update(event){
    
    document.querySelectorAll("article").forEach(function(a){
        
        a.style.backgroundColor = event.target.value;
        console.log(event.target.value)
        if(event.target.value === "#ffffff"){
            document.querySelectorAll('.legende').forEach(legende =>
                legende.style.color = "black");
            document.querySelectorAll('li').forEach(li =>
                    li.style.color = "black");
            document.querySelectorAll('a').forEach(a =>
                a.style.color = "black");
            document.querySelectorAll('h4').forEach(h4 =>
                h4.style.color = "black");
            document.querySelectorAll('label').forEach(label =>
                label.style.color = "black");
        }

        if(event.target.value === "#000000"){
            document.querySelectorAll('.legende').forEach(legende =>
                legende.style.color = "white");
            
            document.querySelectorAll('li').forEach(li =>
                    li.style.color = "white");
            document.querySelectorAll('a').forEach(a =>
                a.style.color = "white");
            document.querySelectorAll('h4').forEach(h4 =>
                h4.style.color = "white");
            document.querySelectorAll('label').forEach(label =>
                label.style.color = "white");                
        }
        
    });

    document.querySelectorAll('.main-header').forEach(function(a){
        a.style.backgroundColor = event.target.value;
    })
}
