import React from 'react';
import { HiOutlineDotsHorizontal, HiPlus } from 'react-icons/hi';
import { BsCircle } from 'react-icons/bs';
import Card from '../Card/Card';
import './Main.css';
import { priorityIconsSelector, priorityStringSelector, statusIconSlector, userIconSelector } from '../../utils/selector';
import { getSingleUserData } from '../../utils/api';

const Main = ({ tickets, grouped, grouping, sorting }) => {

    const [userdata, setUserdata] = React.useState({});

    React.useEffect(() => {

        if (grouping === 'userId') {
            const fetchData = async () => {
                const userData = {};
                await Promise.all(grouped.map(async (userId) => {
                    const user = await getSingleUserData(userId);
                    userData[userId] = user;
                }));
                setUserdata(userData);
            };

            fetchData();
        }
    }, [grouping, grouped]);


    const groupedTickets = {};
    tickets.forEach((ticket) => {
        const groupByValue = ticket[grouping];
        if (!groupedTickets[groupByValue]) {
            groupedTickets[groupByValue] = [];
        }
        groupedTickets[groupByValue].push(ticket);
    });

    Object.keys(groupedTickets).forEach((group) => {
        if (sorting === 'priority') {
            groupedTickets[group].sort((a, b) => b.priority - a.priority);
        } else if (sorting === 'title') {
            groupedTickets[group].sort((a, b) => a.title.localeCompare(b.title));
        }
    });

    return (
        <div className="main">
            {grouped.map((group, idx) => (
                <div className="section" key={idx}>
                    <div className="heading">
                        <div className="left-items">
                            {grouping === 'priority' ? priorityIconsSelector[group]
                                : grouping === 'status' ? statusIconSlector[group]
                                    : grouping === 'userId' ? userIconSelector(userdata[group]) : <BsCircle />}

                            <div className="fw-bold text-black">
                                {grouping === 'priority' ? priorityStringSelector[group]
                                    : grouping === 'userId' ? userdata[group]?.name
                                        : group}

                            </div>
                            <div>{groupedTickets[group]?.length}</div>
                        </div>
                        <div className="right-items">
                            <HiPlus size={20} />
                            <HiOutlineDotsHorizontal size={20} />
                        </div>
                    </div>
                    <div className="list">
                        {groupedTickets[group]?.map((ticket) => (
                            <Card
                                key={ticket.id}
                                id={ticket.id}
                                title={ticket.title}
                                userid={ticket.userId}
                                tag={ticket.tag}
                                priority={ticket.priority}
                                status={ticket.status}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Main;
