let s1=document.getElementById("s-form");
const s2 =() => {
    let s3= localStorage.getItem("s-ent");
    if(s3){
        s3=JSON.parse(s3);

    }else{
        s3=[];
    }
    return s3;
}

let s4 =s2();
const s5 =() =>{
    const s6=s2();
    const s7=s6.map((entry) => {
        
        const names = `<td class='border px-4 py-2'>${entry.name}</td>`;
        const emails= `<td class='border px-4 py-2'>${entry.email}</td>`;
        const passwords= `<td class='border px-4 py-2'>${entry.password}</td>`;
        const dobs= `<td class='border px-4 py-2'>${entry.dob}</td>`;
        const acceptTermss= `<td class='border px-4 py-2'>${entry.acceptedTermsAndConditions}</td>`;
        const rows= `<tr>${names} ${emails} ${passwords} ${dobs} ${acceptTermss}</tr>`;
        return rows;
    }).join("\n");
    const table= `<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">Dob</th>
    <th class="px-4 py-2">Accepted terms?</th>
    </tr>${nte} </table>`;
    let details=document.getElementById("s-ent");
    details.innerHTML = table;
}
const s8 = (event) => {
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const dob=document.getElementById("dob").value;
    const acceptedTermsAndConditions=document.getElementById("acceptTerms").checked;
    const entry={
        name,
        email,
        password,
        dob,
        acceptedTermsAndConditions
    };
    s4.push(entry);
    localStorage.setItem("s-ent",JSON.stringify(s4));
    s5();
}
s1.addEventListener("submit",s8);
s5();


   
        function ganval3()
        {   let element= document.getElementById("dob");
            const dob = document.getElementById("dob").value;
            let sri1=new Date(dob);
            var td = new Date(); 
            var age=parseInt(td.getFullYear()) - parseInt(sri1.getFullYear());
            if (td.getMonth() < sri1.getMonth() || (td.getMonth() === sri1.getMonth() && td.getDate() < sri1.getDate())) age--;
            if(!(age>18 && age <55))
            {
                element.setCustomValidity("age should between 18 and 55");
                element.reportValidity();
            }
            else{
            element.setCustomValidity("");
            }
        }

