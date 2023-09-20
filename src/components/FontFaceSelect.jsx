/* eslint-disable react/prop-types */
import Select, { components } from 'react-select'
import ArrowDownIcon from '../assets/icon-arrow-down.svg'

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <img src={ArrowDownIcon} alt="Font Face" />
    </components.DropdownIndicator>
  )
}

export default function FontFaceSelect({
  fontFace = 'sans-serif',
  setFontFace = () => {},
}) {
  const options = [
    { value: 'sans-serif', label: 'Sans-Serif' },
    { value: 'serif', label: 'Serif' },
    { value: 'monospace', label: 'Mono' },
  ]

  const style = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      border: 0,
      boxShadow: state.isFocused ? '0 0 2px #A445ED' : '0',
    }),
    singleValue: (baseStyles) => ({
      ...baseStyles,
      color: 'inherit',
    }),
    menu: (baseStyles) => ({
      ...baseStyles,
      backgroundColor: '#efefef',
      border: '1px solid #efefef',
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      color: state.isActive
        ? '#A445ED !important'
        : state.isFocused
        ? '#A445ED !important'
        : '#000000',
      fontFamily:
        state.data.value === 'monospace'
          ? "'Inconsolata', monospace"
          : state.data.value === 'serif'
          ? "'Lora', serif"
          : "'Inter', sans-serif",
    }),
  }

  return (
    <Select
      className="font-face-select"
      options={options}
      components={{ DropdownIndicator }}
      styles={style}
      value={{
        value: fontFace,
        label: options.find((option) => option.value === fontFace)?.label,
      }}
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
