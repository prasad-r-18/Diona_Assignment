
const datasets = {
  sampleA:{
    claimNo:"20042047",appId:"712041",submitted:"March 28, 2024 20:43",worker:"Madeleine Willson",
    prescriptions:[["Naproxen","February 28, 2024","February 29, 2024","Dr. Best","$20.00"]],
    otc:[["Advil","March 28, 2024","$8.00","Shoppers Drug Mart","Pain"]],
    supplies:[["Tensor","February 28, 2024","Yes","Dr. Best","$10.00","Shoppers DrugMart"]],
    parking:[["333 St Mary Ave, Winnipeg MB R3C4A5, Canada","March 28, 2024","$10.00","yes","12245"]],
    mileage:[["March 28, 2024","HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada","WCB, 333 Broadway, Winnipeg MB R3C 4W3,Canada","20 km"]],
    fares:[
      ["March 28, 2024","","HSC Winnipeg Women’s Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada","Bus","$3.00"],
      ["March 27, 2024","25 Furby St, Winnipeg MB R3C2A2, Canada","440 Edmonton St, Winnipeg MB R3B 2M4, Canada","Taxi","$15.00"]
    ]
  },
  sampleB:{
    claimNo:"30058112",appId:"845201",submitted:"August 19, 2026 10:30",worker:"Alex Morgan",
    prescriptions:[
      ["Ibuprofen","August 10, 2026","August 11, 2026","Dr. Singh","$14.00"],
      ["Acetaminophen","August 12, 2026","August 12, 2026","City Clinic","$9.50"]
    ],
    otc:[
      ["Cold Pack","August 13, 2026","$6.00","Health Plus","Swelling"],
      ["Pain Relief Gel","August 14, 2026","$11.00","Wellness Store","Muscle pain"]
    ],
    supplies:[
      ["Wrist Brace","August 12, 2026","Yes","Dr. Singh","$35.00","Health Plus"],
      ["Gauze","August 15, 2026","No","City Clinic","$7.00","Pharma Care"]
    ],
    parking:[
      ["100 Main St, Winnipeg MB R3C 1A1, Canada","August 16, 2026","$12.00","yes","54321"],
      ["20 Portage Ave, Winnipeg MB R3B 2E2, Canada","August 17, 2026","$8.00","no",""]
    ],
    mileage:[
      ["August 16, 2026","City Hospital, 700 William Ave, Winnipeg MB R3E 0Z5, Canada","Employer, 333 Broadway, Winnipeg MB R3C 4W3, Canada","16 km"],
      ["August 17, 2026","Rehab Centre, 100 Main St, Winnipeg MB R3C 1A1, Canada","Employer, 333 Broadway, Winnipeg MB R3C 4W3, Canada","12 km"]
    ],
    fares:[
      ["August 16, 2026","10 King St, Winnipeg MB","City Hospital, 700 William Ave, Winnipeg MB","Bus","$4.00"],
      ["August 17, 2026","25 Furby St, Winnipeg MB","Rehab Centre, 100 Main St, Winnipeg MB","Taxi","$18.00"],
      ["August 18, 2026","5 River Ave, Winnipeg MB","City Clinic, 50 Main St, Winnipeg MB","Bus","$3.50"]
    ]
  }
};

function header(d){
 return `<header class="header">
   <div><img class="logo" src="../assets/wcb-logo.png"></div>
   <div class="address">333 Broadway<br>Winnipeg, MB R3C 4W3<br>Phone: (204) 954-4321<br>Toll Free: 1-855-954-4321<br>wcb.mb.ca</div>
   <div class="titlebox"><div class="title"><b>Medical & Travel Expense<br>Request</b></div><span class="claim">Claim No. ${d.claimNo}</span></div>
 </header>`
}
function footer(d,page,total=2){
 return `<footer class="footer"><span>Worker App ID: ${d.appId}</span><span>Submitted: ${d.submitted}</span><span>Page ${page} of ${total}</span></footer>`
}
function table(title,heads,rows){
 return `<div class="expense-title">${title}</div><table><thead><tr>${heads.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c||"&nbsp;"}</td>`).join("")}</tr>`).join("")}</tbody></table>`
}
function page1(d){
 return `<section class="paper">
 ${header(d)}
 <div style="font-size:14px;margin:10px 0 15px"><span class="small-blue">${d.worker}</span> requested reimbursement for the following medical and/or travel expenses:</div>
 ${table("Prescription Drugs",["Drug Name","Prescription Date","Date Purchased","Healthcare Provider Name","Paid Amount"],d.prescriptions)}
 ${table("Over-the-Counter Drugs",["Drug Name","Date Purchased","Paid Amount","Seller's Name","Reason for Purchasing"],d.otc)}
 ${table("Bandages, Braces or Other Medical Supplies",["Item Purchased","Date Purchased","Was this Prescribed?","Healthcare Provider Name","Paid Amount","Seller's Name"],d.supplies)}
 ${table("Parking for Medical Appointments",["Address of Healthcare Provider/Medical Facility","Date","Paid Amount","Meter Used?","Meter Number"],d.parking)}
 <div class="expense-title">Mileage to Medical Appointments</div>
 <div class="note">The WCB will generally reimburse only those transportation costs which are in excess of costs that would be incurred by the worker while travelling to and from work.</div>
 ${table("",["Appointment Date","Address of Healthcare Provider/Medical Facility","Address of Workplace","Number of km (Round Trip)"],d.mileage)}
 ${footer(d,1)}
 </section>`
}
function page2(d){
 return `<section class="paper pagebreak">
 ${header(d)}
 <div class="expense-title">Bus or Taxi Fare for Medical Appointments*</div>
 <div class="note">*Note: Pre-approval is required from your WCB representative to claim taxi fare(s).</div>
 ${table("",["Appointment Date","Address of Starting Point","Address of Healthcare Provider/Medical Facility","Bus or Taxi (indicate one)","Total Fare Paid"],d.fares)}
 <div class="certification">I understand that the Privacy Notice applies to the personal information collected in this document.</div>
 ${footer(d,2)}
 </section>`
}
function render(d){document.getElementById("report").innerHTML=page1(d)+page2(d)}
const select=document.getElementById("datasetSelect");
Object.keys(datasets).forEach(k=>{const o=document.createElement("option");o.value=k;o.textContent=k==="sampleA"?"Sample A — Original-like data":"Sample B — Multiple-row data";select.appendChild(o)})
select.addEventListener("change",()=>render(datasets[select.value]));
render(datasets.sampleA);
