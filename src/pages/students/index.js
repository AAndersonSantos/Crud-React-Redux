import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getAllStudents } from "../../applicationActions/studentsActions"
import Modal from '../../components/modalStudents/index'
import Moment from 'react-moment';

function Students() {

    const students = useSelector(state => state.students);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllStudents());
    }, [dispatch]);

    function renderTable() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Date of birth</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        )
    }

    function renderRows() {
        return students.map((post, key) => {
            return (
                <tr key={key}>
                    <td>{post.name}</td>
                    <td>{post.state}</td>
                    <td>{post.city}</td>
                    <td><Moment format="DD/MM/YYYY">{post.date_Birth}</Moment></td>
                </tr>
            )
        })
    }

    return (
        <div className="col-md-6">
            <h4>Students List</h4>
            {renderTable()}
            < Modal />
        </div>
    )
}

export default Students;