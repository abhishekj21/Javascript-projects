// Define a customer object with name and balance properties
const customer = {
  name: "John Doe",
  balance: 1000,

  // Method to deposit money into the customer's account
  deposit: function (amount) {
    this.balance += amount;
    console.log(
      `Deposited ${amount} into ${this.name}'s account. New balance is ${this.balance}.`
    );
  },

  // Method to withdraw money from the customer's account
  withdraw: function (amount) {
    if (amount > this.balance) {
      console.log(`Insufficient balance in ${this.name}'s account.`);
    } else {
      this.balance -= amount;
      console.log(
        `Withdrew ${amount} from ${this.name}'s account. New balance is ${this.balance}.`
      );
    }
  },
};

// Example usage:
customer.deposit(500); // Deposited 500 into John Doe's account. New balance is 1500.
customer.withdraw(2000); // Insufficient balance in John Doe's account.
customer.withdraw(800); // Withdrew 800 from John Doe's account. New balance is 700.
