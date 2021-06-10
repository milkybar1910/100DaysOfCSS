const changeColor = () => {
    let piano = document.getElementsByClassName("pianoContainer");
    let arr=["bg-primary","bg-success","bg-danger","bg-warning"];
    if (piano[0].classList[2]) {
      piano[0].classList.remove(piano[0].classList[2]);
    }
    piano[0].classList.add(arr[Math.floor(Math.random()*4)]);
  };
  
  
  
 