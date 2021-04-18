import React, { Component } from 'react';

import classes from './Menu.module.css';

import SectionList from '../../components/SectionList/SectionList';
import ModalWindow from '../../UI/ModalWindow/ModalWindow';

class Menu extends Component {

    state = {
        menu: [
            {
                section: "Combos",
                items: [
                    {
                        name: "Combo 1",
                        image: process.env.PUBLIC_URL + 'prod1.jpg',
                        description: "Gyozas de pollo, tartar de salmón y ensalada de col china",
                        price: 14.90
                    },
                    {
                        name: "Combo 2",
                        image: process.env.PUBLIC_URL + 'prod1.jpg',
                        description: "Gyozas de pollo, tartar de atún y ensalada de col china",
                        price: 14.90
                    },
                    {
                        name: "Combo 3",
                        image: process.env.PUBLIC_URL + 'prod1.jpg',
                        description: "Gyozas de pollo,bandeja maki mix (24 piezas) y ensalada wakame",
                        price: 16.90
                    }
                ]
            },
            {
                section: "Bandejas",
                items: [
                    {
                        name: "Bandeja Salmón, 16 Piezas",
                        image: process.env.PUBLIC_URL + 'prod1.jpg',
                        description: "4 sashimi salmón, 4 nigiri salmón y 8 philadelphia roll",
                        price: 16.50
                    },
                    {
                        name: "Bandeja Atún, 16 Piezas",
                        image: process.env.PUBLIC_URL + 'prod1.jpg',
                        description: "4 sashimi atún, 4 nigiri atún y 8 california atún roll",
                        price: 16.50
                    },
                    {
                        name: "Bandeja Vegetal, 16 Piezas",
                        image: process.env.PUBLIC_URL + 'prod1.jpg',
                        description: "4 maki aguacate, 4 maki vegetal y 8 mango roll",
                        price: 16.50
                    },
                    {
                        name: "Bandeja sin Pescado Crudo, 16 Piezas",
                        image: process.env.PUBLIC_URL + 'prod1.jpg',
                        description: "4 pollo roll, 2 nigiri anguila, 2 nigiri langostino, 4 sapporo roll y 4 cangrejo roll",
                        price: 16.50
                    },
                    {
                        name: "Bandeja Gourmet Mix, 24 Piezas",
                        image: process.env.PUBLIC_URL + 'prod1.jpg',
                        description: "4 green dragon roll, 4 california atún roll, 4 pez mantequilla trufado roll, 4 philadelphia roll, 4 maki atún y 4 maki salmón",
                        price: 16.50
                    }
                ]
            },
            {
                section: "Entrantes",
                items: [
                    {
                        name: "Gyozas de Pollo, 4 Unidades",
                        image: process.env.PUBLIC_URL + 'prod1.jpg',
                        description: "",
                        price: 3.90
                    },
                    {
                        name: "Ensalada Wakame",
                        image: process.env.PUBLIC_URL + 'prod1.jpg',
                        description: "",
                        price: 4.50
                    },
                    {
                        name: "Edame",
                        image: process.env.PUBLIC_URL + 'prod1.jpg',
                        description: "",
                        price: 5.50
                    },
                    {
                        name: "Goyzas de Vegetales, 4 Unidades",
                        image: process.env.PUBLIC_URL + 'prod1.jpg',
                        description: "",
                        price: 3.90
                    },
                    {
                        name: "Ceviche de Lubina",
                        image: process.env.PUBLIC_URL + 'prod1.jpg',
                        description: "",
                        price: 3.50
                    }
                ]
            },
            {
                section: "Nigiri",
                items: [
                    {
                        name: "Nigiri Salmón, 2 Unidades",
                        image: process.env.PUBLIC_URL + 'prod1.jpg',
                        description: "",
                        price: 3.95
                    },
                    {
                        name: "Nigiri Salmón Flambeado, 2 Unidades",
                        image: process.env.PUBLIC_URL + 'prod1.jpg',
                        description: "",
                        price: 3.95
                    },
                    {
                        name: "Nigiri Atún, 2 Unidades",
                        image: process.env.PUBLIC_URL + 'prod1.jpg',
                        description: "",
                        price: 4.50
                    },
                    {
                        name: "Nigiri Pez Mantequilla, 2 Unidades",
                        image: process.env.PUBLIC_URL + 'prod1.jpg',
                        description: "",
                        price: 4.95
                    }
                ]
            },
            {
                section: "Postres",
                items: [
                    {
                        name: "Arroz con Leche de Coco",
                        image: process.env.PUBLIC_URL + 'prod1.jpg',
                        description: "",
                        price: 5.50
                    },
                    {
                        name: "Mousse de Chocolate",
                        image: process.env.PUBLIC_URL + 'prod1.jpg',
                        description: "",
                        price: 4.50
                    }
                ]
            },
            {
                section: "Bebida",
                items: [
                    {
                        name: "Coca Cola Normal",
                        image: process.env.PUBLIC_URL + 'prod1.jpg',
                        description: "",
                        price: 2.00
                    },
                    {
                        name: "Coca Cola Zero",
                        image: process.env.PUBLIC_URL + 'prod1.jpg',
                        description: "",
                        price: 2.00
                    },
                    {
                        name: "Fanta Naranja Normal",
                        image: process.env.PUBLIC_URL + 'prod1.jpg',
                        description: "",
                        price: 2.00
                    },
                    {
                        name: "Fanta Naranja Zero",
                        image: process.env.PUBLIC_URL + 'prod1.jpg',
                        description: "",
                        price: 2.00
                    }
                ]
            }
        ],
        order: [],
        selectedItem: null,
        showItemSelector: false
    }

    componentDidMount () {
        console.log(this.props);
    }

    itemClickHandler = (itemName) => {
        const item = {
            ...this.state.menu.reduce((acc, section) => acc.concat(section.items), []).find(x => x.name === itemName),
            amount: 0
        };
        this.setState({
            selectedItem: item,
            showItemSelector: true
        });
    }

    itemSelectorCloseHandler = () => {
        this.setState({
            selectedItem: null,
            showItemSelector: false
        });
    }

    render () {

        const modalItemSelector = this.state.showItemSelector ? 
            <ModalWindow 
                item={this.state.selectedItem} 
                closeClick={this.itemSelectorCloseHandler} /> : null;

        return (
            <div className={classes.Menu}>
                <div className={classes.MenuContainer}>
                    <div className={classes.MenuItems}>
                        <SectionList 
                            sections={this.state.menu} 
                            itemClicked={this.itemClickHandler} />
                    </div>
                    <div className={classes.OrderSummary}>
                        {this.state.order.map(x => <div key={x.name}>{x.name + ' ' + x.amount}</div>)}
                    </div>
                </div>
                {modalItemSelector}
            </div>
        );
    }
}

export default Menu;