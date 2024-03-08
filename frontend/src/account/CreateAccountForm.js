// CreateAccountForm.js
import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Stack,
    Chip,
    IconButton,
} from '@mui/material';

const CreateAccountForm = ({ isOpen, handleClose }) => {
    const [accountData, setAccountData] = useState({
        name: '',
        description: '',
        tags: [],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAccountData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleTagAdd = () => {
        if (accountData.tags.includes(accountData.tag) || !accountData.tag) return;
        setAccountData((prevData) => ({
            ...prevData,
            tags: [...prevData.tags, prevData.tag],
            tag: '', // Clear the tag input after adding
        }));
    };

    const handleTagDelete = (tagToDelete) => {
        setAccountData((prevData) => ({
            ...prevData,
            tags: prevData.tags.filter((tag) => tag !== tagToDelete),
        }));
    };

    const handleSubmit = () => {
        // Add your logic for submitting the form data
        console.log('Submitted:', accountData);
        handleClose();
    };

    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle>Create New Account</DialogTitle>
            <DialogContent>
                <Stack spacing={2}>
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={accountData.name}
                        onChange={handleInputChange}
                    />
                    <TextField
                        fullWidth
                        label="Description"
                        name="description"
                        multiline
                        rows={4}
                        value={accountData.description}
                        onChange={handleInputChange}
                    />
                    <TextField
                        fullWidth
                        label="Tag"
                        name="tag"
                        value={accountData.tag || ''}
                        onChange={handleInputChange}
                        onKeyPress={(e) => e.key === 'Enter' && handleTagAdd()}
                    />
                    <Button variant="outlined" onClick={handleTagAdd}>
                        Add Tag
                    </Button>
                    <Stack direction="row" spacing={1}>
                        {accountData.tags.map((tag) => (
                            <Chip
                                key={tag}
                                label={tag}
                                onDelete={() => handleTagDelete(tag)}
                                color="primary"
                            />
                        ))}
                    </Stack>
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button variant="contained" onClick={handleSubmit}>
                    Create Account
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreateAccountForm;