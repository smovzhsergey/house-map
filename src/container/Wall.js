import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { arrayOf, func, number, object, objectOf } from 'prop-types';
import { actions } from '../store/actions';

import Address from './../components/Address';
import Area from './../components/Area';
import Image from './../components/Image';
import Price from './../components/Price';
import Controls from './../components/Controls';
import Card from './../components/Card';

class Wall extends Component {
    
    constructor(props) {
        super(props);

        this.createCard = this._createCard.bind(this);
    }

    static propTypes = {
        actions:        objectOf(func).isRequired,
        data:           arrayOf(object).isRequired,
        schema:         arrayOf(object).isRequired,
        currentView:    number.isRequired
    }

    componentDidMount() {
        this.props.actions.getTemplates();
    }

    _returnComponent = ( { component, field, children = null }, item ) => {
        switch (component) {

            case "ADDRESS":
                return  <Address
                            key = { `${item.id}${component}` }
                            address = { item[field] }
                        />;

            case "AREA":
                return  <Area
                            key = { `${item.id}${component}` }
                            area = { item[field] }
                        />;

            case "IMAGE":
                return  <Image
                            key = { `${item.id}${component}` }
                            image = { item[field][0] }
                            children = { children && this._returnComponent(children[0], item) }
                        />;

            case "PRICE":
                return  <Price
                            key = { `${item.id}${component}` } 
                            price = { item[field] }
                        />;
        
            default:
                return null;
        }
    }

    _createCard (schemaID, currentElement) {
        const { data, schema } = this.props;
        
        if (schema.length && data.length){

            const template = schema.filter( templateItem => templateItem.id === schemaID)[0].template;

            return (
                <Card key = { currentElement.id } className = 'card'>
                    { 
                        template.map( item => 
                            this._returnComponent(item, currentElement)
                        )
                    }    
                </Card>
            )
        }
    }

    render() {
        const { currentView, data, schema, actions: { changeTypeOfView } } = this.props;
        const itemList = data.map( el => this.createCard(currentView, el));
        
        return (
            <section className = 'page'>
                <Controls
                    current = { currentView }
                    schema = { schema }
                    selectView = { changeTypeOfView } 
                />
                <section className = 'wall'>
                    { data.length !== 0 && itemList }
                </section>
            </section>
        );
    }
}

export default connect(
    ( state ) => ({
        data:           state.data,
        schema:         state.schema,
        currentView:    state.currentView
    }),
    ( dispatch ) => ({
        actions: bindActionCreators({...actions}, dispatch)
    })
)(Wall) ;