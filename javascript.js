const data = [
    {
        name: "VEDANT N",
        regno: "2021",
        DC: "A" ,
        MICROCONTROLLER: "A"
        
        
    },
    {
        name: "VAIBHAV B",
        regno: "2021",
        DC: "A" ,
        MICROCONTROLLER: "A"
       
        
    },
    {
        name: "VINAY B",
        regno: "2023",
        DC: "B" ,
        MICROCONTROLLER: "B"
        
        
    }
]

const results = document.getElementById('res')

const smBtn = document.getElementById('smt-btn')
smBtn.addEventListener("click", function () {
    const name = document.getElementById('name-box').value;
    for (let i = 0; i < data.length; i++) {
        if (data[i].name.toLowerCase() == name.toLowerCase()) {
            console.log(data[i].marks)
            results.innerHTML = "<h3>" + "DC : " + data[i].DC + "</h3>" + "<h3>" + "MICROCONTROLLER : "
                + data[i].MICROCONTROLLER + "</h3>" 
            return;
        }
    }
    results.innerHTML = "<h1>" + "Not available" + "</h1>"
})