const jwt = require('jsonwebtoken');

module.exports = {
    generateAccessToken: (user) => {
        const payload = {
            name: user.name,
            email: user.email
        };

        const options = { expiresIn: '1h' };

        return jwt.sign(payload, process.env.PRIVATE_KEY, options);
    },
    verifyAccessToken: (token) => {
        try {
            const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
            return { success: true, data: decoded };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },
}