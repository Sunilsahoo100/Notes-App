let ad = document.getElementById("addBtn");
shownote();
ad.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");

  let notes = localStorage.getItem("notes");
  if (notes == null) noteArr = [];
  else {
    noteArr = JSON.parse(notes);
  }
  noteArr.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(noteArr));
  addTxt.value = "";
  shownote();
});

function shownote() {
  let notes = localStorage.getItem("notes");
  if (notes == null) noteArr = [];
  else {
    noteArr = JSON.parse(notes);
  }

  
  let newn = document.getElementById("new");
  let html = "";
  noteArr.forEach(function (element, index) {
    html += `<div class="card mx-2 my-2" style="width: 18rem " >
      <div class="card-body">
        <h5 class="card-title">Note ${index+1}</h5>
        <p class="card-text">${element}</p>
        <button id ="${index}" onClick="deleteNote(this.id) "class="btn btn-primary">Delete Note</button>
      </div>
    </div>`;
  });
  if (noteArr.length != 0) newn.innerHTML = html;
  else
    newn.innerHTML = `<h3>Nothing to show! Use "Add a Note" section above to add notes.</h3>`;

    
}


function deleteNote(index){
    // console.log("djbdb");
    let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) noteArr = [];
  else {
    noteArr = JSON.parse(notes);
  }
noteArr.splice(index,1);
localStorage.setItem("notes", JSON.stringify(noteArr));
shownote();
}