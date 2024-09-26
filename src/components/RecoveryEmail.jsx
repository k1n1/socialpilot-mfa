import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import mfaRecoveryEmailValidator from '../utils/mfaRecoveryEmailValidator';

const RecoveryEmail = ({
    userEmail,
    skip,
    onComplete,
    isRecoveryEmailMandatory,
    Button,
    FormControl,
    setShowDialog,
    SpinnerSmallLoader,
    isSetupCompleteApiLoading,
    ADD_RECOVERY_EMAIL,
    LOSE_ACCESS_AUTHENTICATOR_USE_EMAIL_BACKUP,
    SKIP,
    VERIFY,
    RECOVERY_EMAIL_MANDATORY,
    NOT_VALID_EMAIL,
    RECOVERY_EMAIL_CAN_NOT_BE_SAME_AS_LOGIN_EMAIL,
    ENTER_EMAIL_HERE,
}) => {
    const [recoveryEmail, setRecoveryEmail] = useState('');
    const [recoveryEmailError, setRecoveryEmailError] = useState('');
    const recoveryEmailInputRef = useRef(null);

    const handleRecoveryEmailChange = (e) => {
        setRecoveryEmailError('');
        setRecoveryEmail(e.target.value.trim());
    };

    const handleSubmit = () => {
        const error = mfaRecoveryEmailValidator(
            recoveryEmail,
            userEmail,
            false,
            RECOVERY_EMAIL_MANDATORY,
            NOT_VALID_EMAIL,
            RECOVERY_EMAIL_CAN_NOT_BE_SAME_AS_LOGIN_EMAIL
        );
        if (error) {
            setRecoveryEmailError(error);
            return;
        }

        onComplete(recoveryEmail);
    };

    useEffect(() => {
        if (!recoveryEmail) {
            return setRecoveryEmailError('');
        }
    }, [recoveryEmail]);

    useEffect(() => {
        if (recoveryEmailInputRef.current) {
            recoveryEmailInputRef.current.focus();
        }
        setShowDialog(true);

        return () => {
            setShowDialog(false);
        };
    }, []);

    const isBtnDisabled =
        !recoveryEmail.length || (recoveryEmail.length && recoveryEmailError);

    return (
        <>
            <div className="row mfa-qr white-bg-popup mb-2">
                <div className="col-lg-12 d-flex flex-column justify-content-between">
                    <div className="row justify-content-center mfa-recovery-main">
                        <div className="col text-center mfa-recovery-container p-0">
                            <h3 className="mfa-qr-text mb-1">
                                {ADD_RECOVERY_EMAIL}
                            </h3>
                            <h5 className="mfa-recovery-text-secondary mb-2">
                                {LOSE_ACCESS_AUTHENTICATOR_USE_EMAIL_BACKUP}
                            </h5>
                            <div className="form-group">
                                <FormControl
                                    type="email"
                                    id="mfa-recovery-email"
                                    ref={recoveryEmailInputRef}
                                    hasError={recoveryEmailError}
                                    errorMessage={recoveryEmailError}
                                    name="recoveryEmail"
                                    value={recoveryEmail}
                                    onChange={handleRecoveryEmailChange}
                                    bsClass={`text-center mfa-password-input-box`}
                                    autoFocus
                                    placeholder={ENTER_EMAIL_HERE}
                                    onEnterKeyPress={() => {
                                        if (!isBtnDisabled) {
                                            handleSubmit();
                                        }
                                    }}
                                />
                                <div
                                    className={`invalid-feedback ${
                                        recoveryEmailError ? 'd-block' : ''
                                    }`}
                                >
                                    {recoveryEmailError}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-end align-items-center">
                {isSetupCompleteApiLoading && (
                    <SpinnerSmallLoader className="circular-spinner" />
                )}
                {!isRecoveryEmailMandatory && (
                    <a
                        className={`delete-group btn-medium ${
                            isSetupCompleteApiLoading ? 'disabled' : ''
                        }`}
                        href="javascript:;"
                        onClick={skip}
                    >
                        {SKIP}
                    </a>
                )}

                <Button
                    bsClass="btn btn-primary btn-medium"
                    disabled={!!isBtnDisabled || isSetupCompleteApiLoading}
                    variant="primary"
                    onClick={handleSubmit}
                >
                    {VERIFY}
                </Button>
            </div>
        </>
    );
};

RecoveryEmail.propTypes = {
    userEmail: PropTypes.string.isRequired,
    skip: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired,
    isRecoveryEmailMandatory: PropTypes.bool.isRequired,
    Button: PropTypes.elementType.isRequired,
    FormControl: PropTypes.elementType.isRequired,
    ADD_RECOVERY_EMAIL: PropTypes.string.isRequired,
    LOSE_ACCESS_AUTHENTICATOR_USE_EMAIL_BACKUP: PropTypes.string.isRequired,
    SKIP: PropTypes.string.isRequired,
    VERIFY: PropTypes.string.isRequired,
    RECOVERY_EMAIL_MANDATORY: PropTypes.string.isRequired,
    NOT_VALID_EMAIL: PropTypes.string.isRequired,
    RECOVERY_EMAIL_CAN_NOT_BE_SAME_AS_LOGIN_EMAIL: PropTypes.string.isRequired,
    ENTER_EMAIL_HERE: PropTypes.string.isRequired,
    SpinnerSmallLoader: PropTypes.elementType.isRequired,
};

export default RecoveryEmail;
