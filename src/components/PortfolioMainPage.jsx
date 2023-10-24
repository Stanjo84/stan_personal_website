import { h, Component } from 'preact';
import Portfolio from './PortfolioPage';

class App extends Component {
    state = {
        isPortfolioMounted: false
    };

    setPortfolioMounted = (isMounted) => {
        this.setState({ isPortfolioMounted: isMounted });
    };

    render() {
        const { isPortfolioMounted } = this.state;

        return (
            <div>
                <Portfolio setPortfolioMounted={this.setPortfolioMounted} />
                {isPortfolioMounted && <div>Portfolio is Mounted!</div>}
            </div>
        );
    }
}

export default App;
