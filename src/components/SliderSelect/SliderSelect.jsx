import PropTypes from 'prop-types';
import React from 'react';
import SliderComponent from '../SliderComponent';

function SliderSelect({ data, setData }) {
    const bank_limit = 10000;
    return (
        <div>
            <SliderComponent
                onChange={(e, value) => {
                    setData({
                        ...data,
                        homeValue: Number(value.toFixed(0)),
                        downPayment: Number((0.2 * value).toFixed(0)),
                        loanAmount: Number((0.8 * value).toFixed(0)),
                    });
                }}
                defaultValue={data.homeValue}
                min={1000}
                max={bank_limit}
                steps={100}
                unit='$'
                amount={data.homeValue}
                label='Home Value'
                value={data.homeValue}
            />
            <SliderComponent
                onChange={(e, value) =>
                    setData({
                        ...data,
                        downPayment: Number(value.toFixed(0)),
                        loanAmount: Number((data.homeValue - value).toFixed(0)),
                    })
                }
                defaultValue={data.downPayment}
                min={0}
                max={data.homeValue}
                steps={100}
                unit='$'
                amount={data.downPayment}
                label='Down Payment'
                value={data.downPayment}
            />
            <SliderComponent
                onChange={(e, value) =>
                    setData({
                        ...data,
                        loanAmount: Number(value.toFixed(0)),
                        downPayment: Number(
                            (data.homeValue - value).toFixed(0)
                        ),
                    })
                }
                defaultValue={data.loanAmount}
                min={0}
                max={data.homeValue}
                steps={100}
                unit='$'
                amount={data.loanAmount}
                label='Loan Amount'
                value={data.loanAmount}
            />
            <SliderComponent
                onChange={(e, value) =>
                    setData({
                        ...data,
                        interestRate: Number(value),
                    })
                }
                defaultValue={data.interestRate}
                min={2}
                max={18}
                steps={0.5}
                unit='%'
                amount={data.interestRate}
                label='Interest Rate'
                value={data.interestRate}
            />
        </div>
    );
}

SliderSelect.propTypes = {
    data: PropTypes.shape({
        downPayment: PropTypes.number,
        homeValue: PropTypes.number,
        interestRate: PropTypes.number,
        loanAmount: PropTypes.number,
    }),
    setData: PropTypes.func,
};

export default SliderSelect;
