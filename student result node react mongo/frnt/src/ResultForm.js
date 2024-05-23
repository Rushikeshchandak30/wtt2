import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ResultForm.css';

const ResultForm = () => {
    const [formData, setFormData] = useState({
        student_name: '',
        subject1: '',
        subject2: '',
        subject3: '',
        subject4: '',
        subject5: '',
        subject6: ''
    });

    const [percentage, setPercentage] = useState(null);
    const [results, setResults] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    useEffect(() => {
        fetchResults();
    }, []);

    const fetchResults = async () => {
        try {
            const response = await axios.get('http://localhost:5000/results');
            setResults(response.data);
        } catch (error) {
            console.error('There was an error fetching the results!', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/results', formData);
            alert('Result added successfully!');

            const totalMarks = parseInt(formData.subject1) + parseInt(formData.subject2) + parseInt(formData.subject3) + parseInt(formData.subject4) + parseInt(formData.subject5) + parseInt(formData.subject6);
            const calculatedPercentage = (totalMarks / 600) * 100;
            setPercentage(calculatedPercentage);

            fetchResults();

            setFormData({
                student_name: '',
                subject1: '',
                subject2: '',
                subject3: '',
                subject4: '',
                subject5: '',
                subject6: ''
            });
        } catch (error) {
            console.error('There was an error adding the result!', error);
            alert('Error adding result!');
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(`http://localhost:5000/results/${searchName}`);
            setSearchResult(response.data);
        } catch (error) {
            console.error('There was an error fetching the result!', error);
            alert('Student not found!');
            setSearchResult(null);
        }
    };

    return (
        <div className="form-container">
            <h2>Enter Student Results</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Student Name:</label>
                    <input type="text" name="student_name" value={formData.student_name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Subject 1:</label>
                    <input type="number" name="subject1" value={formData.subject1} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Subject 2:</label>
                    <input type="number" name="subject2" value={formData.subject2} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Subject 3:</label>
                    <input type="number" name="subject3" value={formData.subject3} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Subject 4:</label>
                    <input type="number" name="subject4" value={formData.subject4} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Subject 5:</label>
                    <input type="number" name="subject5" value={formData.subject5} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Subject 6:</label>
                    <input type="number" name="subject6" value={formData.subject6} onChange={handleChange} required />
                </div>
                <button type="submit">Submit</button>
            </form>
            {percentage !== null && (
                <div className="percentage-display">
                    <h2>Calculated Percentage: {percentage.toFixed(2)}%</h2>
                </div>
            )}

            <h2>Search Student Results</h2>
            <form onSubmit={handleSearch}>
                <div className="form-group">
                    <label>Student Name:</label>
                    <input type="text" value={searchName} onChange={(e) => setSearchName(e.target.value)} required />
                </div>
                <button type="submit">Search</button>
            </form>
            {searchResult && (
                <div className="search-result">
                    <h2>Result for {searchResult.student_name}</h2>
                    <p>Subject 1: {searchResult.subject1}</p>
                    <p>Subject 2: {searchResult.subject2}</p>
                    <p>Subject 3: {searchResult.subject3}</p>
                    <p>Subject 4: {searchResult.subject4}</p>
                    <p>Subject 5: {searchResult.subject5}</p>
                    <p>Subject 6: {searchResult.subject6}</p>
                    <p>Percentage: {searchResult.percentage.toFixed(2)}%</p>
                </div>
            )}

            <h2>All Results</h2>
            <div className="results-table-container">
                <table className="results-table">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Subject 1</th>
                            <th>Subject 2</th>
                            <th>Subject 3</th>
                            <th>Subject 4</th>
                            <th>Subject 5</th>
                            <th>Subject 6</th>
                            <th>Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result) => (
                            <tr key={result._id}>
                                <td>{result.student_name}</td>
                                <td>{result.subject1}</td>
                                <td>{result.subject2}</td>
                                <td>{result.subject3}</td>
                                <td>{result.subject4}</td>
                                <td>{result.subject5}</td>
                                <td>{result.subject6}</td>
                                <td>{result.percentage.toFixed(2)}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ResultForm;
