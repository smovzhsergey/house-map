import React from 'react';

const Controls = ({ current, selectView, schema }) => {

    const controlsList = schema.map( ({ id }, index) => {
        return (
            <label key = { id }>
                <input
                    checked = { id === current }
                    type = 'radio'
                    name = 'view'
                    onChange = { (e) => selectView(index+1) }
                />
                <span>Тип id: { id }</span>
            </label>
        )
    } )

    return (
        <div className = 'controls'>
            <h4>ID схемы</h4>
            { controlsList }
        </div>
    );
}

export default Controls;