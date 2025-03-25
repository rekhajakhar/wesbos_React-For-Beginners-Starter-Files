import React from 'react';
import {formatPrice} from "../helpers";

class Order extends React.Component {
    renderOrder = key => {
        const count = this.props.order[key];
        const fish = this.props.fishes[key];
        const isAvailable = fish && fish.status === 'available';
        if(!fish)
            return null;
        if(!isAvailable) {
            return <li>Sorry {fish ? fish.name : 'fish'} is no longer available </li>
        }
        return (
            <li>
                {count} lbs {fish.name}
                {formatPrice(count * fish.price)}
            </li>
        )
    }
    render() {
        const OrderIds = Object.keys(this.props.order);
        const total = OrderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';
            if(isAvailable){
                return prevTotal + count * fish.price;
            }
            return prevTotal;
        }, 0);
        return (
            <div className="Order-wrap">
                <h2>
                    Order
                </h2>
                <ul>{OrderIds.map(this.renderOrder)}</ul>
                <div className="total">
                    Total:
                    <strong>{formatPrice(total)}</strong>
                </div>

            </div>
        )
    }
}

export default Order;