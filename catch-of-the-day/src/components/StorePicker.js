import React from "react";
import {getFunName} from "../helpers";

class StorePicker extends React.Component {
    myInput = React.createRef();
    goToStore = event => {
        //1. prevent the default render
        //2. get the text from the input
        //3. change the page to /store/whatever entered
        event.preventDefault();
        const storeName= this.myInput.current.value; // we can use this with arrow functions otherwise it won't be availabke
        // only the basic functions will have this ex. component did mount etc

        //push state to next route do not refresh use push from history prop
        // this will be fast as we are not re-rendering just pushing the state
        this.props.history.push(`/store/${storeName}`);
    }
    render () {
        return (
            <form className="store-picker" onSubmit={this.goToStore}>
                <h2> please enter a store</h2>
                <input
                    type="text"
                    ref={this.myInput}
                    required
                    placeholder="Store Name"
                    defaultValue={getFunName()}
                />
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

export default StorePicker;

// render can return only 1 div.
// so either write empty div inside which we can write as manny as requried
// or we have react.fragment which can be used
// its advantage is in dev tools it does not show the empty div or fragment
// or we cna use <> </> empty tag
// also write {/* write comment like this*/} inside the main tag
// {} can be used inside the jsx to do some js coding


//onsubmit this.gotoStore() => if calling this function here then it will call the function
// on 1st render as well
// if we want to call this function on click then do not pass ()