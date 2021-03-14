// Middleware is the check between action and computation
// Used in the backend

// basic imports
import jwt from 'jsonwebtoken';

// "next" means do something, and move onto next action
const auth = async (req, res, next) => {
    try {
        // grabbing token
        const token = req.headers.authorization.split(" ")[1];
        // if token.length > 500, is Google OAuth
        const isCustomAuth = token.length < 500;

        let decodedData;

        if (token && isCustomAuth) {
            // grab data
            decodedData = jwt.verify(token, 'test');
            // set userId to token id
            req.userId = decodedData?.id;
        } else {
            // if is Google OAuth
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }

        // do next action
        next();
    } catch (error) {
        
    }
}

export default auth;