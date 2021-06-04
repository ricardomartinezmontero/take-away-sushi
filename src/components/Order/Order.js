import { useState } from "react";
import { useSelector } from "react-redux";

import classes from './Order.module.css';

import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

import OptionButtonBar from "../../UI/OptionButtonBar/OptionButtonBar";
import OrderItemList from "./OrderItemList/OrderItemList";
import TextInput from "../Form/TextInput/TextInput";
import ActionButton from "../../UI/ActionButton/ActionButton";
import useInput from "../../utils/shared/useInput";
import { telephoneNumberValidator, addressValidator, postcodeValidator } from '../../utils/shared';

const Order = () => {

    const stripe = useStripe();
    const elements = useElements();

    const deliveryOption = {
        id: "delivery",
        name: "A domicilio"
    }

    const pickupOption = {
        id: "pickup",
        name: "Para recoger"
    }

    const collectionOptions = {"delivery": deliveryOption, "pickup": pickupOption};

    const[selectedOption, setSelectedOption] = useState(pickupOption);

    const order = useSelector(state => state.order.order);

    const onOptionSelectedHandler = (optionId) => {
        setSelectedOption(collectionOptions[optionId]);
    };

    const {
        value: nameValue,
        isValid: nameIsValid,
        isTouched: nameIsTouched,
        isBlur: nameIsBlur,
        onChange: onNameChange,
        onBlur: onNameBlur,
    } = useInput((value) => value.trim().length > 5);

    const nameHasError = (nameIsBlur && nameIsTouched) || nameIsBlur ? !nameIsValid : false;

    const {
        value: phoneValue,
        isValid: phoneIsValid,
        isTouched: phoneIsTouched,
        isBlur: phoneIsBlur,
        onChange: onPhoneChange,
        onBlur: onPhoneBlur,
    } = useInput(telephoneNumberValidator);

    const phoneHasError = (phoneIsBlur && phoneIsTouched) || phoneIsBlur ? !phoneIsValid : false;

    const {
        value: addressValue,
        isValid: addressIsValid,
        isTouched: addressIsTouched,
        isBlur: addressIsBlur,
        onChange: onAddressChange,
        onBlur: onAddressBlur,
    } = useInput(addressValidator);

    const addressHasError = (addressIsBlur && addressIsTouched) || addressIsBlur ? !addressIsValid : false;

    const {
        value: flatDetailsValue,
        isValid: flatDetailsIsValid,
        isTouched: flatDetailsIsTouched,
        isBlur: flatDetailsIsBlur,
        onChange: onFlatDetailsChange,
        onBlur: onFlatDetailsBlur,
    } = useInput(() => true);

    const flatDetailsHasError = (flatDetailsIsBlur && flatDetailsIsTouched) || flatDetailsIsBlur ? !flatDetailsIsValid : false;

    const {
        value: addressExtraInfoValue,
        isValid: addressExtraInfoIsValid,
        isTouched: addressExtraInfoIsTouched,
        isBlur: addressExtraInfoIsBlur,
        onChange: onAddressExtraInfoChange,
        onBlur: onAddressExtraInfoBlur,
    } = useInput(() => true);

    const addressExtraHasError = (addressExtraInfoIsBlur && addressExtraInfoIsTouched) || addressExtraInfoIsBlur ? !addressExtraInfoIsValid : false;

    const {
        value: cityValue,
        isValid: cityIsValid,
        isTouched: cityIsTouched,
        isBlur: cityIsBlur,
        onChange: onCityChange,
        onBlur: onCityInfoBlur,
    } = useInput((value) => value.trim().length > 3);

    const cityHasError = (cityIsBlur && cityIsTouched) || cityIsBlur ? !cityIsValid : false;

    const {
        value: postcodeValue,
        isValid: postcodeIsValid,
        isTouched: postcodeIsTouched,
        isBlur: postcodeIsBlur,
        onChange: onPostcodeChange,
        onBlur: onPostcodeBlur,
    } = useInput(postcodeValidator);

    const postcodeHasError = (postcodeIsBlur && postcodeIsTouched) || postcodeIsBlur ? !postcodeIsValid : false;

    const onSubmitHandler = (event) => {
        event.preventDefault();
    };

    const isFormValid = nameIsValid && phoneIsValid && addressIsValid && cityIsValid && postcodeIsValid;

    return (
        <form className={classes.Order} onSubmit={onSubmitHandler}>
            <fieldset className={classes.OrderSection}>
                <header>Para llevar o recoger</header>
                <OptionButtonBar 
                    options={collectionOptions} 
                    selected={selectedOption}
                    onOptionSelected={onOptionSelectedHandler} />
            </fieldset>
            <fieldset className={classes.OrderSection}>
                <header>Mi Pedido</header>
                <OrderItemList order={order} />
            </fieldset>
            <fieldset className={classes.OrderSection}>
                <header>Mis Detalles</header>
                <TextInput
                    label="Nombre Completo"
                    type="text"
                    name="name"
                    placeholder="Nombre completo"
                    errorMessage="Este campo no puede estar vacio"
                    value={nameValue}
                    onBlur={onNameBlur}
                    onChange={onNameChange}
                    hasError={nameHasError}
                />
                <TextInput
                    label="Telefono"
                    type="tel"
                    name="phone"
                    placeholder="Telefono"
                    errorMessage="El formato de telefono no es valido"
                    value={phoneValue}
                    onBlur={onPhoneBlur}
                    onChange={onPhoneChange}
                    hasError={phoneHasError}
                />
                <TextInput
                    label="Direccion"
                    type="text"
                    name="address"
                    placeholder="Calle y numero (Ej: Calle de alba, 12)"
                    errorMessage="Direccion debe ser introducido como: nombre calle, numero."
                    value={addressValue}
                    onBlur={onAddressBlur}
                    onChange={onAddressChange}
                    hasError={addressHasError}
                />
                <TextInput
                    label="Piso y puerta"
                    type="text"
                    name="flatDetails"
                    placeholder="Piso y puerta (Ej: Entresuelo B)"
                    value={flatDetailsValue}
                    onBlur={onFlatDetailsBlur}
                    onChange={onFlatDetailsChange}
                    hasError={flatDetailsHasError}
                />
                <TextInput
                    label="Ovservaciones"
                    type="text"
                    name="addressExtraInfo"
                    placeholder="Observaciones (Ej: Timbre 254)"
                    value={addressExtraInfoValue}
                    onBlur={onAddressExtraInfoBlur}
                    onChange={onAddressExtraInfoChange}
                    hasError={addressExtraHasError}
                />
                <TextInput
                    label="Ciudad"
                    type="text"
                    name="city"
                    placeholder="Ciudad (Ej: Madrid)"
                    errorMessage="Introduzca nombre de cuidad valido (Ej: Madrid)"
                    value={cityValue}
                    onBlur={onCityInfoBlur}
                    onChange={onCityChange}
                    hasError={cityHasError}
                />
                <TextInput
                    label="Codigo Postal"
                    type="number"
                    name="postcode"
                    placeholder="Codigo Postal (Ej: 28001)"
                    errorMessage="Introduzca un codigo postal correcto (Ej: 28001)"
                    value={postcodeValue}
                    onBlur={onPostcodeBlur}
                    onChange={onPostcodeChange}
                    hasError={postcodeHasError}
                />
            </fieldset>

            <fieldset className={classes.OrderSection}>
                <header>Detalles de pago</header>
                <CardElement className={classes.CardElement}/>
            </fieldset>

            <div className={classes.Actions}>
                <ActionButton type="submit" disabled={!isFormValid}>Procesar Pedido</ActionButton>
            </div>
        </form>
    );
};

export default Order;