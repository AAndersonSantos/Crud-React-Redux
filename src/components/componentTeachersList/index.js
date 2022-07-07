import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTeachers, deleteAllTeachers } from '../../applicationActions/teachersActions';

function TeacherList() {

    const [currentTutorial, setCurrentTutorial] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const teachers = useSelector(state => state.teachers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTeachers());
    }, [dispatch]);

    const refreshData = () => {
        setCurrentTutorial(null);
        setCurrentIndex(-1);
    };

    const removeAllTeachers = () => {
        dispatch(deleteAllTeachers())
            .then(response => {
                console.log(response);
                refreshData();
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div className="col-md-6">
            <h4>Teachers List</h4>
            <ul className="list-group">
                {teachers.map((post, key) => (
                    <li className="list-group-item" key={key}> {post.name} </li>
                ))}
            </ul>
            <button className="m-3 btn btn-sm btn-danger" onClick={removeAllTeachers}> Remove All </button>
        </div>
    )
}

export default TeacherList;

