const old_carts = [1, 2, 3, 4, 5];
const new_carts = [];
function update_cart_byDouble() {
  for (let i = 0; i < old_carts.length; i++) {
    new_carts.push(old_carts[i] * 2);
  }
}

update_cart_byDouble(old_carts);
console.log(new_carts);
