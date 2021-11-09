import React from 'react'
import { addIceCream, buyIceCream } from '../redux1'
import { connect } from 'react-redux'

const IceCreamContainer = (props) => {
    return (
        <div>
            <h2>Num of Ice Creams - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy ice cream</button>
            <button onClick={props.addIceCream}>Add Ice cream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCreams : state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream : () => dispatch(buyIceCream()),
        addIceCream : () => dispatch(addIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)