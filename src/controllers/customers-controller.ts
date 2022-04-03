class CustomersController {
  getAll() {
    return [
      { name: "John", email: "john@email.com" },
      { name: "Dani", email: "dani@email.com" },
    ];
  }
}

export const customersController = new CustomersController();
