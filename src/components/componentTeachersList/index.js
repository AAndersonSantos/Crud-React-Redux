import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTeachers } from '../../applicationActions/actions';

function TeacherList() {

    const teachers = useSelector(state => state.teachers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTeachers());
    }, []);

    return (
        <div className="col-md-6">
            <h4>Teachers List</h4>
            <ul className="list-group">
                {teachers.map((post, key) => (
                    <li key={key}> {post.name} </li>
                ))}
            </ul>
        </div>
    )
}

export default TeacherList;

