import React from "react";

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    statusRef = React.createRef();

    createFish = (e) => {
        //1. stop the default action of the form. stop from submitting
        e.preventDefault();
        const fish ={
            name: this.nameRef.current.value,
            image: this.imageRef.current.value,
            desc: this.descRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
        }
        this.props.addFish(fish);
        //refresh the form to remove the entries
        e.currentTarget.reset();
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
                <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>

                <textarea name="description" ref={this.descRef} placeholder="Description" />
                <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
                <button type="submit">+ Add FIsh</button>
            </form>
        )
    }
}
export default AddFishForm;