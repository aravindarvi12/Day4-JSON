const myResume = [{

  "name": "Aravind Balakrishnan",
  "address": "49, 3rd street, Keelkattalai, Chennai, Pincode- 600117",
  "mail": "aravindarvi12@gmail.com",
  "phNumber": "9597370763"

}];

//For Loop

for(i = 0;i<myResume.length;i++){
    let obj = myResume[i];    

    console.log(obj.name);
    console.log(obj.address);
    console.log(obj.mail);
    console.log(obj.phNumber);
}

//For Each

myResume.forEach(myResume => {
    console.log(obj.name);
    console.log(obj.address);
    console.log(obj.mail);
    console.log(obj.phNumber);
});

//For in

for(values in myResume) {
    console.log(obj.name);
    console.log(obj.address);
    console.log(obj.mail);
    console.log(obj.phNumber);
}

//For of

for(values of myResume){
    console.log(obj.name);
    console.log(obj.address);
    console.log(obj.mail);
    console.log(obj.phNumber);  
}

console.log(myResume);