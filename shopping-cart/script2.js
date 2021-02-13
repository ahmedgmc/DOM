function increment(id, pr1, tot_pr1) {
  let inp = document.getElementById(id);
  let val = Number(inp.value);
  val++;
  inp.value = val;
  let price = document.getElementById(pr1).innerHTML;
  let tot1 = document.getElementById(tot_pr1);
  tot1.innerHTML = price * val;
}

function decrement(id, pr1, tot_pr1) {
  let inp = document.getElementById(id);
  let val = Number(inp.value);
  if (val > 0) val--;
  inp.value = val;
  let price = document.getElementById(pr1).innerHTML;
  let tot1 = document.getElementById(tot_pr1);
  tot1.innerHTML = price * val;
}
