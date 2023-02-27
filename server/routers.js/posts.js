import  express from "express";
const router = express.Router();

router.get('/', (request, response) => {
    response.send('ROUTER SUCCESSFUL');
});


export default router;