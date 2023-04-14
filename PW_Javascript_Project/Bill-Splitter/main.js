function billSplitte(kitneRupayKi, logKitte) {
  const totalBill = kitneRupayKi * logKitte;
  return { kul_Total: totalBill, eke_launda_ko_Total: kitneRupayKi };
}
console.log(billSplitte(30, 3));
