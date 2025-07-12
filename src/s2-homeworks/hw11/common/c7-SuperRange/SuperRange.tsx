import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#0c2',
                width: 150,
                height: 5,
                padding: '15px 0',
                '& .MuiSlider-thumb': {
                    height: 18,
                    width: 18,
                    backgroundColor: '#fff',
                    border: '2px, solid, #0c2',
                    boxShadow: '0 0 2px 0px rgba(0, 0, 0, 0.1)',
                },

                '& .MuiSlider-rail': {
                    opacity: 0.5,
                    boxShadow: 'inset 0px 0px 4px -2px #000',
                    backgroundColor: '#8b8b8b',
                },

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
