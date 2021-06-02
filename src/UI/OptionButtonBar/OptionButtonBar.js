import classes from './OptionButtonBar.module.css';

const OrderOption = ({ options, onOptionSelected, selected }) => {

    const optionButtons = Object.keys(options).map(key => {
        const isSelected = selected && selected.id === key ? classes.Selected : '';
        return (
            <button 
                key={key} 
                className={`${classes.Option} ${isSelected}`} 
                onClick={() => onOptionSelected(key)}>{options[key].name}</button>
        );
    });

    return (
        <div className={classes.OptionButtonBar}>
           {optionButtons}
        </div>
    );
};

export default OrderOption;