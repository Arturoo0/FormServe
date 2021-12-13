import { 
    HomeTopPanel,
    CreateFormPanel
} from "../components";

const Home = (props) => {
    const { username } = props.userInfo;
    return (
        <div>
            <HomeTopPanel username={username}/>
            <CreateFormPanel />
        </div> 
    ); 
}

export default Home;