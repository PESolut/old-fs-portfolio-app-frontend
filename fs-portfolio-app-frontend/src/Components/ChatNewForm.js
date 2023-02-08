import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ChatNewForm = () => {
    const API = process.env.REACT_APP_API_URL
    const navigate = useNavigate();
    const [formData, setFormData] = useState ({
        message: '',
        user_id: ''
    })
    // const [userId, setUserId] = useState('');
    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     // Fetch the users data from the API or database
    //     // and store it in the state
    //     // ...
        
    
    //     setUsers(fetchedUsers);
    //   }, []);

    const handleInputChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        // logic that talks to the database
        axios
        .post(`${API}/messages`, formData)
        .then(() => {
            window.location.reload()
        })
        .catch((error) => console.log(error))
    }

    return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="message">Message:</label>
                    <input
                        type="text"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        />
            </div>
            <div>
                <label htmlFor="user_id">User ID:</label>
                    <input
                        type="text"
                        id="user_id"
                        name="user_id"
                        value={formData.user_id}
                        onChange={handleInputChange}
                        />
            </div>
            <button type="submit">Post Message</button>
        </form>
    </>
    );
};

export default ChatNewForm;