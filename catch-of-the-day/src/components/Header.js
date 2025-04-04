import React from 'react';

const Header = (props) => {
    return (
        <header className="top">
            <h1>
                Catch
                <span className="ofThe">
                        <span className="of">Of</span>
                        <span className="the">The</span>
                    </span>
                Day
            </h1>
            <h3 className="tagline">
                <span>{props.tageline}</span>
            </h3>
        </header>
    )
}

// use functions instead of component if it does not have any state
/*
class Header extends React.Component {
    render() {
        return (
            <header className="top">
                <h1>
                    Catch
                    <span className="ofThe">
                        <span className="of">Of</span>
                        <span className="the">The</span>
                    </span>
                    Day
                </h1>
                <h3 className="tagline">
                    <span>{this.props.tageline}</span>
                </h3>
            </header>
        )
    }
}
*/
export default Header;