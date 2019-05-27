
//Function used to sort the rows based on their distance from Oregon State.
function sort(sortType) {
    var table, rows, swap, i, a, b;
    table = document.getElementById("myTable");
    swap = true;
    //Run a while loop that will go until their is not more swapping to be done.
    while (swap) {
      swap = false;
      //Grab the rows of my table.
      rows = table.rows;
      //Run a for loop for the number of rows that there are.
      for (i = 1; i < (rows.length - 1); i++) {
        //Get the distance column of two rows near each other.
        a = rows[i].getElementsByTagName("TD")[3];
        b = rows[i + 1].getElementsByTagName("TD")[3];
        //compare them if it is Ascending order, swap accordingly.
        if(sortType == "Ascending"){
            if (a.innerHTML> b.innerHTML) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                swap = true;
                break;
              }
        }
        //compare them if it is Descending order, swap accordingly.
        if(sortType == "Descending"){
            if (a.innerHTML < b.innerHTML) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                swap = true;
                break;
              }
        }

      }
    }
  }