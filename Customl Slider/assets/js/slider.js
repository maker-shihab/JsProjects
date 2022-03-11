const images = [
    'https://images.unsplash.com/photo-1616004667892-d348f7349d39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    'https://media.istockphoto.com/photos/cyber-security-web-development-and-work-in-it-concept-picture-id1289411982?b=1&k=20&m=1289411982&s=170667a&w=0&h=0R3OXR4L6LOGphYA3sul4bWQwpGj_DSl05ENiP2kRZg=',
    'https://media.istockphoto.com/photos/female-it-professional-in-server-room-picture-id1304167727?b=1&k=20&m=1304167727&s=170667a&w=0&h=xUqAdaUuDNq9TGJTHMssQtYZZFggFy1qc1MxTT_5ttQ=',
    'https://media.istockphoto.com/photos/shot-of-a-young-woman-using-a-laptop-while-working-in-a-server-room-picture-id1347879996?b=1&k=20&m=1347879996&s=170667a&w=0&h=C-38plIYbktoToed2R-o_uYsrwLOOHclz1mFXxFXksg=',
    'https://media.istockphoto.com/photos/portrait-of-a-handsome-successful-confident-young-mixed-race-latino-picture-id1359746925?b=1&k=20&m=1359746925&s=170667a&w=0&h=qRdvQ5_q-wZ4y3eOicBgQe10f5oyByqJC7GGoyRTHec=',
    'https://images.unsplash.com/photo-1510751007277-36932aac9ebd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    'https://images.unsplash.com/photo-1510751007277-36932aac9ebd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    'https://images.unsplash.com/photo-1522198734915-76c764a8454d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxOTQxNTg1fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8MTk0MTU4NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60'
];
let imgeIndex = 0;
const setImage = document.getElementById('set-img');
setInterval(() => {
  if(imgeIndex >= images.length){
    imgeIndex = 0;
  }else{
    const imgUrl = images[imgeIndex];
    imgeIndex++;
    setImage.setAttribute('src', imgUrl);
    console.log(imgUrl);
  }
  
},2000)