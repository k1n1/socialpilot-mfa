/* eslint-disable react/prop-types */
import React from 'react';

const SpinnerSmallLoader = ({ id, className }) => (
    <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`primary-loader ${className} `}
    >
        <mask id={id} fill="white">
            <path d="M16 8C16 9.89522 15.3272 11.7289 14.1014 13.1743C12.8755 14.6197 11.1764 15.583 9.30662 15.8926C7.43685 16.2021 5.51791 15.8378 3.89169 14.8645C2.26547 13.8913 1.03759 12.3723 0.426816 10.5782C-0.183955 8.78405 -0.137946 6.83137 0.556646 5.06803C1.25124 3.30468 2.5493 1.84519 4.21955 0.949594C5.88981 0.0539972 7.82378 -0.219538 9.6769 0.177723C11.53 0.574984 13.1819 1.61724 14.3383 3.11879L13.1615 4.02504C12.2198 2.80227 10.8746 1.95352 9.36556 1.63002C7.8565 1.30651 6.28159 1.52926 4.92144 2.25858C3.56128 2.9879 2.50422 4.17642 1.93859 5.61238C1.37296 7.04834 1.33549 8.63848 1.83287 10.0995C2.33024 11.5605 3.33015 12.7975 4.65444 13.5901C5.97874 14.3826 7.54141 14.6793 9.06403 14.4272C10.5867 14.1752 11.9703 13.3907 12.9686 12.2136C13.9668 11.0366 14.5147 9.54335 14.5147 8H16Z" />
        </mask>
        <path
            d="M16 8C16 9.89522 15.3272 11.7289 14.1014 13.1743C12.8755 14.6197 11.1764 15.583 9.30662 15.8926C7.43685 16.2021 5.51791 15.8378 3.89169 14.8645C2.26547 13.8913 1.03759 12.3723 0.426816 10.5782C-0.183955 8.78405 -0.137946 6.83137 0.556646 5.06803C1.25124 3.30468 2.5493 1.84519 4.21955 0.949594C5.88981 0.0539972 7.82378 -0.219538 9.6769 0.177723C11.53 0.574984 13.1819 1.61724 14.3383 3.11879L13.1615 4.02504C12.2198 2.80227 10.8746 1.95352 9.36556 1.63002C7.8565 1.30651 6.28159 1.52926 4.92144 2.25858C3.56128 2.9879 2.50422 4.17642 1.93859 5.61238C1.37296 7.04834 1.33549 8.63848 1.83287 10.0995C2.33024 11.5605 3.33015 12.7975 4.65444 13.5901C5.97874 14.3826 7.54141 14.6793 9.06403 14.4272C10.5867 14.1752 11.9703 13.3907 12.9686 12.2136C13.9668 11.0366 14.5147 9.54335 14.5147 8H16Z"
            stroke="#0F67EA"
            strokeWidth={3}
            mask={`url(#${id})`}
        />
    </svg>
);

SpinnerSmallLoader.defaultProps = { id: 'spinnerSmall', className: '' };
export default SpinnerSmallLoader;
