import PropTypes from 'prop-types';
import React from 'react';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';

function SliderComponent(props) {
    const {
        defaultValue,
        min,
        max,
        label,
        unit,
        onChange,
        amount,
        value,
        steps,
    } = props;
    return (
        <Stack my={1.4}>
            <Stack gap={1}>
                <Typography variant="subtitle2">{label}</Typography>
                <Typography variant="h5">
                    {unit} {amount}
                </Typography>
            </Stack>
            <Slider
                min={min}
                max={max}
                defaultValue={defaultValue}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={onChange}
                value={value}
                marks
                step={steps}
            />
            <Stack direction="row" justifyContent="space-between">
                <Typography variant="caption" color="text.secondary">
                    {unit} {min}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    {unit} {max}
                </Typography>
            </Stack>
        </Stack>
    );
}

SliderComponent.propTypes = {
    amount: PropTypes.number,
    defaultValue: PropTypes.number,
    label: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
    onChange: PropTypes.func,
    steps: PropTypes.number,
    unit: PropTypes.string,
    value: PropTypes.number,
};

export default SliderComponent;
