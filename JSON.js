console.log("Create your resume data in JSON Format");

const myResume = {
    "personal": "Aravind Balakrishnan",
    "mail": "aravindarvi12@gmail.com",
    "mobile":"9597370763",
    "address":{
        "plotNo ": 49,
        "street":"3rd ",
        "area":"keelkattalai",
        "city": "chennai",
        "state":"tamilnadu",
        "pincode": 600117
    },

"summary": [
    {
   "objective": "In pursuit of professional excellence, to avail opportunities where my skills and knowledge can be committed with full enthusiasm and responsibilities, thus adding value to the organization."
    
}
],
"experience": [
{
   "experience": "5 years",
   "role": "Cash Application Specialist",
   "project": "Exxonmobil" ,
   "summary": "A cash applications specialist is responsible for a business or client's accounts receivable processes, which includes applying payments to customer accounts" 
}
],
"education": [
       {
     "degree": "BSC(Computer Science)",
     "college": "Periyar EVR College",
     "location": "Trichy",
     "year": "2015 to 2018",
     "percentage": "60%"
   }
],

 "skills" : [
   {
  "skill 1": "English type writing"
   }
 ],
 
 declaration: [
   {

       "declaration": "I hereby declare that all the information furnished by me is true and correct to the best of my knowledge. Hope you will consider me as a right candidate."
   }
]
}
console.log(myResume);