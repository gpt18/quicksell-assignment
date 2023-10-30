import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { fetchData } from './utils/api';
import { useStateValue } from './state-management/useStateReducer';

function App() {
  const [{ grouping, ordering }] = useStateValue();
  const [tickets, setTickets] = useState([]);
  const [uniqueGroups, setUniqueGroups] = useState([]);

  useEffect(() => {
    fetchData().then(data => {
      setTickets(data.tickets);
      const uniqueGroupsData = [...new Set(data.tickets.map(ticket => ticket[grouping]))];
      setUniqueGroups(uniqueGroupsData);
    });
  }, [grouping, ordering]);

  return (
    <div className="app">
      <Header />
      <Main
        tickets={tickets}
        groupedHeadings={uniqueGroups}
        grouping={grouping}
        sorting={ordering}
      />
    </div>
  );
}

export default App;
