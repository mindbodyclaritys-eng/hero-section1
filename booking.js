 // GET PLAN FROM LOCAL STORAGE
        const plan = localStorage.getItem("selectedPlan");
        const price = localStorage.getItem("planPrice");
        const days = localStorage.getItem("planDays");
        
        if (plan) {
            document.getElementById("planName").innerText = plan;
            document.getElementById("planPrice").innerText = "$" + price;
            document.getElementById("totalPrice").innerText = "$" + price;
            document.getElementById("planDays").innerText = days || "—";
        }
        const bookbtn = document.querySelector('.book-btn').addEventListener('click',()=>{
            alert('form has submitted successfully')
        })