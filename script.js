let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    // two way of printing
    //Write your code here , just console.log
    //   arr.map((ele)=>{
    //     if(ele.profession=="developer"){
    //         console.log(ele);
    //     }
    //   }) 
    let narr=arr.filter((ele)=>{
        ele.profession=="developer";
        console.log(ele);
    }) 
    narr.map((item)=>{
        console.log(item);
    })  
  }
  
  function addData() {
    //Write your code here, just console.log
    let ndata={id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(ndata);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let rem=arr.filter((ele)=>{
       return ele.profession!=="admin";
    })
    arr=rem;
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr1 = [
        { id: 4, name: 'anika', age: 18, profession: 'developer' },
        { id: 5, name: 'arnav', age: 20, profession: 'designer' },
        { id: 6, name: 'duvi', age: 19, profession: 'admin' },
      ];
      let conct=arr.concat(arr1);
      console.log(conct);
      arr=conct;
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }