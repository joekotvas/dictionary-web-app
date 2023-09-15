/* eslint-disable react/prop-types */
import Select, { components } from 'react-select'
import ArrowDownIcon from '../assets/icon-arrow-down.svg'

export default function FontFaceSelect({
    fontFace = 'sans-serif',
    setFontFace = () => {},
}) {

    const DropdownIndicator = props => {
        return (
            <components.DropdownIndicator {...props}>
                <img src={ArrowDownIcon} alt="Font Face" />
            </components.DropdownIndicator>
        )
    }

    const options = [
        { value: 'sans-serif', label: 'Sans-Serif' },
        { value: 'serif', label: 'Serif' },
        { value: 'monospace', label: 'Monospace' }
    ]

    const style = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            border: 0,
            boxShadow: state.isFocused ? '0 0 2px #A445ED' : '0'
        }),
        option: (baseStyles, state) => ({
            ...baseStyles,
            color: state.isActive
                ? '#A445ED'
                : state.isFocused
                ? '#A445ED'
                : '#000000'
        })
    }

    return (
        <Select 
            className="font-face-select" 
            options={options}
            components={{ DropdownIndicator }}
            styles={style}
            value={{value: fontFace, label: fontFace}} 
            onChange={(e) => setFontFace(e.value)} 
            classNames={{
                control: () => 'select-control',
                indicatorSeparator: () => 'select-indicator-separator',
                option: () => 'select-option',
                menu: () => 'select-menu',
            }}
            isSearchable={false}
        />
    )
}