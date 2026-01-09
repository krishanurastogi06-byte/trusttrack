import jwt from "jsonwebtoken";

const SECRET = "trusttrack_secret";

export const login = (req, res) => {
    const { email } = req.body;

    let role = "donor";
    if (email.includes("ngo")) role = "ngo";
    if (email.includes("admin")) role = "admin";

    const token = jwt.sign(
        { email, role },
        SECRET,
        { expiresIn: "1h" }
    );

    res.json({
        token,
        user: { email, role }
    });
};
