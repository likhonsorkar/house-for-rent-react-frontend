import { useOutletContext } from "react-router";

const Dashboard = () => {
     const { setHeading } = useOutletContext();
     setHeading("Overview");
    return (
        <>
        More Body</>
    );
};

export default Dashboard;