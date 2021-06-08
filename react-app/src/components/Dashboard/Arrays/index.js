import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { getAllProblems } from "../../../store/problems";
import NavBar from '../../NavBar';

import './index.css';

const ArraysComponent = () => {
    const dispatch = useDispatch();
    const all_problems = useSelector(state => state.problems.problems);

    let easyProblems = [];

    let mediumProblems = [];

    let hardProblems = [];

    let easyColor;
    let mediumColor;
    let hardColor;

    for (let key in all_problems) {
        let val = all_problems[key];
        if (val.difficulty === 'Easy') {
            easyProblems.push(val);
            easyColor = (
                <div className="easy-button"></div>
            )
        };
        if (val.difficulty === 'Medium') {
            mediumProblems.push(val);
            mediumColor = (
                <div className="medium-button"></div>
            )
        };
        if (val.difficulty === 'Hard') {
            hardProblems.push(val);
            hardColor = (
                <div className="hard-button"></div>
            )
        }
    }


    useEffect(() => {
        dispatch(getAllProblems("arrays"))
    }, [dispatch])

    return (
        <div className="arrays-outer-div">
            <NavBar />
            <div className="outer-div">
                <div>
                    <div className="category-title">Easy ✨</div>
                    {easyProblems.map((problem, i) => (
                        <div className="problem-div" key={i}>
                            {easyColor}
                            <div key={i}>
                                <Link key={i} className="problem-title" to={`/${problem.category}/${problem.id}`}>
                                    <div key={i}>{problem.title}</div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <div className="category-title">Medium 🙏🏼</div>
                    {mediumProblems.map((problem, i) => (
                        <div className="problem-div" key={i}>
                            {mediumColor}
                            <div key={i}>
                                <Link key={i} className="problem-title" to={`/${problem.category}/${problem.id}`}>
                                    <div key={i}>{problem.title}</div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <div className="category-title">Hard 🔥</div>
                    {hardProblems.map((problem, i) => (
                        <div className="problem-div" key={i}>
                            {hardColor}
                            <div key={i}>
                                <Link key={i} className="problem-title" to={`/${problem.category}/${problem.id}`}>
                                    <div key={i}>{problem.title}</div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ArraysComponent;
