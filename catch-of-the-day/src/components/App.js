import React from 'react';
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import fishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
    state={
        fishes:{},
        order:{}
    };
    componentDidMount() {
        // take order from local storage & store in state
        const localStorageRef = localStorage.getItem(this.props.match.params.storeId);
        console.log(localStorageRef);
        if(localStorageRef){
            this.setState({order: JSON.parse(localStorageRef)})
        }

        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // store storage in local storage
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
        console.log(JSON.stringify(this.state.order));
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }
    addFish=(fish)=>{
        // add the fish to the state fishes

        //save the current state
        const fishes ={...this.state.fishes};
        // add the new fish in the array of the existing fishes
        // fishes array's key will be unqiue bu using the date.now
        // it will give the current timestamp from 1970
        fishes[`fish${Date.now()}`] = fish;
        // add the new state to the states of the component
        this.setState({fishes:fishes});
    }
    updateFish=(key,updatedFish)=>{
        //1. take a copy of current state
        const fishes={...this.state.fishes};
        //2. update the state
        fishes[key]=updatedFish;
        //3. update the state
        this.setState({fishes});
    }
    loadSampleFishes=()=>{
        this.setState({fishes:fishes});
    }
    addToOrder=(key)=>{
        //1. save the state
        const order={...this.state.order};
        //2. add to order
        order[key] = order[key] + 1 || 1;
        //3. update the current state with new one
        this.setState({order});
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tageline="Fresh Seafood Market"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key=> <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order}/>
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} fishes={this.state.fishes} updateFish={this.updateFish}/>
            </div>
        )
    }
}

export default App;