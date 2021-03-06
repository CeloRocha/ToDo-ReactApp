import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import CheckIcon from '../Icons/CheckIcon';
import EditIcon from '../Icons/EditIcon';
import TrashIcon from '../Icons/TrashIcon';
import CloseIcon from '../Icons/CloseIcon';
import AddIcon from '../Icons/AddIcon';

const Button = (props) => {
    let iconComponent, buttonLabel;
    switch (props.type) {
        case 'add':
            buttonLabel = 'Adicionar tarefa';
            iconComponent = <AddIcon />;
            break;
        case 'check':
            buttonLabel = 'Completar';
            iconComponent = <CheckIcon />;
            break;
        case 'edit':
            buttonLabel = 'Editar';
            iconComponent = <EditIcon />;
            break;
        case 'remove':
            buttonLabel = 'Remover';
            iconComponent = <TrashIcon />;
            break;
        case 'close':
            buttonLabel = 'Fechar';
            iconComponent = <CloseIcon />;
            break;
    }
    return (
        <button
            className={`button ${props.type} ${props.className}`}
            onClick={props.onClick}
            aria-label={buttonLabel}
        >
            {iconComponent}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default Button;
