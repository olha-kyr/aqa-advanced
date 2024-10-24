function simple(num) {
  console.log(num);
  if (num >= 0) return simple(num - 1);
}

simple(5);
