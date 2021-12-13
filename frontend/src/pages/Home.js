import { HomeTopPanel } from "../components";

const Home = (props) => {
    const { username } = props.userInfo;
    return (
        <div>
            <HomeTopPanel username={username}/>
        </div> 
    ); 
}

export default Home;