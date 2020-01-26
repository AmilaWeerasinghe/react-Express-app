const express = require("express");
const app = express();
app.get("/api/customers", (req, res) => {
    const customers = [{
            id: 1,
            firstName: "Amila",
            lastName: "Joe"
        },
        {
            id: 2,
            firstName: "Kanthi",
            lastName: "Munasinghe"
        },
        {
            id: 1,
            firstName: "Dilan",
            lastName: "Joe"
        }
    ];
    res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));