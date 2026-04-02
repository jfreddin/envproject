import express from 'express';
import { verifyToken } from '../middleware/verifyToken.js';
import { 
    getAllUsers, 
    getMessages, 
    getUsersForSidebar, 
    sendMessage, 
    editMessage,   
    deleteMessage  
} from '../controllers/messageController.js';

const router = express.Router();

// --- User & Sidebar Routes ---
router.get('/users/sidebar', verifyToken, getUsersForSidebar);
router.get('/users/all', verifyToken, getAllUsers);

// --- Message Routes ---

// Get chat history with a specific user
router.get('/:id', verifyToken, getMessages);

// Send a new message
router.post('/send/:id', verifyToken, sendMessage);

// Edit an existing message
router.put('/edit/:messageId', verifyToken, editMessage);

// Delete a message
router.delete('/delete/:messageId', verifyToken, deleteMessage);

export default router;