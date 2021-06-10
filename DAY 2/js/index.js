const changeColor = (color) => {
    let piano = document.getElementsByClassName("pianoContainer");
    if (piano[0].classList[2]) {
      piano[0].classList.remove(piano[0].classList[2]);
    }
    piano[0].classList.add(color);
  };
  
  let b1 = new Audio("./assets/notes_A.mp3");
  let b2 = new Audio("./assets/notes_B.mp3");
  let b3 = new Audio("./assets/notes_C.mp3");
  let b4 = new Audio("./assets/notes_D.mp3");
  let b5 = new Audio("./assets/notes_E.mp3");
  let b6 = new Audio("./assets/notes_F.mp3");
  let b7 = new Audio("./assets/notes_G.mp3");
  let b8 = new Audio("./assets/notes_Gb.mp3");


  const play1 =()=>(b1.play());
  const play2 =()=>(b2.play());
  const play3 =()=>(b3.play());
  const play4 =()=>(b4.play());
  const play5 =()=>(b5.play());
  const play6 =()=>(b6.play());
  const play7 =()=>(b7.play());
  const play8 =()=>(b8.play());
  
  
 