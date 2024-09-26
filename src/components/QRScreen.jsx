import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import QRCode from 'react-qr-code';

function QRScreen({
    next,
    userEmail,
    Button,
    generateMfaQrLink,
    companyName,
    IS_ENTERPRISE,
    SCAN_QR_USING_AUTHENTICATOR_TO_LINK,
    USE_GOOGLE_MICROSOFT_AUTH_DUO_AUTHENTICATOR,
    LEARN_MORE,
    NEXT,
}) {
    const [qrLink, setQRLink] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getQrLink = async () => {
            setIsLoading(true);
            const qrLinkResponse = await generateMfaQrLink(
                companyName,
                userEmail
            );
            if (!qrLinkResponse.error) {
                const { qrLink } = qrLinkResponse;
                setQRLink(qrLink);
            }
            setIsLoading(false);
        };

        getQrLink();
    }, [userEmail, generateMfaQrLink]);

    return (
        <>
            <div className="row white-bg-popup mb-2 pb-22">
                <div className="col-lg-12 d-flex flex-column justify-content-between">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 text-center mfa-qr-container p-0">
                            {isLoading ? (
                                <div className="qr-code-loader mb-8" />
                            ) : (
                                <div className="mb-8">
                                    <QRCode size={200} value={qrLink} />
                                </div>
                            )}
                            <h3 className="mfa-qr-text mt-0 mb-8">
                                {SCAN_QR_USING_AUTHENTICATOR_TO_LINK}{' '}
                                {companyName}
                            </h3>
                            <p className="mb-0 text-grey">
                                {USE_GOOGLE_MICROSOFT_AUTH_DUO_AUTHENTICATOR}
                                {!IS_ENTERPRISE && (

                                    <a
                                    href="https://help.socialpilot.co/article/746-how-to-set-up-2fa-in-my-socialpilot-account"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    {LEARN_MORE}
                                </a>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-end">
                <Button
                    bsClass={`btn btn-primary btn-medium`}
                    disabled={isLoading}
                    variant="primary"
                    onClick={next}
                >
                    {NEXT}
                </Button>
            </div>
        </>
    );
}

QRScreen.propTypes = {
    next: PropTypes.func.isRequired,
    userEmail: PropTypes.string.isRequired,
    Button: PropTypes.elementType.isRequired,
    generateMfaQrLink: PropTypes.func.isRequired,
    SCAN_QR_USING_AUTHENTICATOR_TO_LINK: PropTypes.string,
    USE_GOOGLE_MICROSOFT_AUTH_DUO_AUTHENTICATOR: PropTypes.string.isRequired,
    LEARN_MORE: PropTypes.string.isRequired,
    NEXT: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
};

QRScreen.defaultProps = {
    SCAN_QR_USING_AUTHENTICATOR_TO_LINK: 'Scan using authenticator to link',
};

export default QRScreen;
