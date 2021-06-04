export const countItemsInOrder = (order) => {
    return Object.keys(order).reduce(
        (acc, itemName) => acc + order[itemName].amount,
        0
    );
};

export const preventBodyScroll = (isOverlayActive) => {
    if (isOverlayActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
};

export const emailValidation = (email) => {
  const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
  return emailRegex.test(email);
};

export const passwordValidation = (password) => {
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return passwordRegex.test(password);
}

export const telephoneNumberValidator = (telephone) => {
  const telephoneNumberRegex = /^[0-9]{2,3}-? ?[0-9]{6,7}$/;
  return telephoneNumberRegex.test(telephone);
}

export const addressValidator = (address) => {
  const addressRegex = /\w+,\s*\d{1,}/;
  return addressRegex.test(address);
}

export const postcodeValidator = (postcode) => {
  const postcodeRegex = /0[1-9][0-9]{3}|[1-4][0-9]{4}|5[0-2][0-9]{3}/;
  return postcodeRegex.test(postcode);
}
