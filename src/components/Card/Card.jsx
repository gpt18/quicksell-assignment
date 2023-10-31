import React, { useEffect, useState } from 'react'
import './Card.css'

import { getSingleUserData } from '../../utils/api'
import { priorityIconsSelector, statusIconSlector, userIconSelector } from '../../utils/selector'
import { useStateValue } from '../../state-management/useStateReducer'

const Card = ({ id, title, userid, tag, priority, status }) => {

    const [{ grouping }] = useStateValue();

    const [userData, setUserData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = await getSingleUserData(userid);
                setUserData(user);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [userid]);


    return (
        <div className="card">
            <div className="row">
                <div className="card-id">{id}</div>
                {grouping !== "userId" ? userIconSelector(userData)
                    :
                    <div className="tag">
                        {statusIconSlector[status]}
                    </div>
                }

            </div>
            <div className="title">

                {title}
            </div>
            <div className="tags">
                {grouping !== "priority" ?
                    <div className="tag">
                        {priorityIconsSelector[priority]}
                    </div>
                    :
                    <div className="tag">
                        {statusIconSlector[status]}
                    </div>
                }

                {tag.map((tag, idx) => (
                    <div className="tag" key={idx}>
                        <div className="circle" />
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card;
