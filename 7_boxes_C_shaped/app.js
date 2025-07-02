const boxes = document.getElementsByClassName("box");

const seq = [];

const checkAllBoxesAreRed = () => {
  const boxNumbers = [1, 2, 3, 4, 5, 6, 7];
  // Extract numbers from seq (which contains class names like 'box1', 'box2', ...)
  const arr = seq.map((val) => val.replace("box", ""));
  // Check if all boxNumbers are present in arr
  const allPresent = boxNumbers.every((num) => arr.includes(num.toString()));
  return allPresent;
};

const boxClickHandler = (e) => {
  e.preventDefault();
  e.currentTarget.style.backgroundColor = "red";
  seq.push(e.currentTarget.classList[0]);
  if (checkAllBoxesAreRed()) {
    const boxesArr = [...boxes];
    const arr = seq.slice().reverse(); // Reverse the sequence
    arr.forEach((boxclass, idx) => {
      const num = boxclass.replace("box", "");
      setTimeout(() => {
        boxesArr[num - 1].style.backgroundColor = "green";
        // After the last box turns green, reset seq
        if (idx === arr.length - 1) {
          setTimeout(() => {
            // Reset all boxes to original color
            boxesArr.forEach((box) => {
              box.style.backgroundColor = "";
            });
            seq.length = 0;
          }, 500); // Small delay to ensure green is visible
        }
      }, 1000 * (idx + 1));
    });
  }
};

Array.from(boxes).forEach((box) => {
  box.addEventListener("click", boxClickHandler);
});
