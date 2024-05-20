
import { Select } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'

import { useEffect, useRef, useState } from 'react'

interface SelectFromProps {
    label?: string
    data: any
    value: string
    readOnly?: boolean
    onChange: (value: any) => void
    searchable: boolean
    className?: 'floatingLabel' | 'NotfloatingLabel'
    clearable?: boolean
    nameSelectBox?: string
    maxDropdownHeight?: number
    placeholder: string
    disabled?: boolean
    customData?: any
    small?: boolean
    minDate?: Date
}


export function SelectForm({
    label,
    readOnly,
    className = 'floatingLabel',
    clearable = true,
    nameSelectBox,
    data,
    value,
    onChange,
    searchable,
    maxDropdownHeight,
    placeholder,
    disabled,
    customData,
    small = false,
    minDate,
  }: SelectFromProps) {

    const [focused, setFocused] = useState<boolean>(false)

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = () => {
        setFocused(false);
    };

    
    const dataLarge =
      data &&
      data.map((item: any) => {
        return {
          value: item.value,
          label: item.label,
        }
    })

    const classList = `${focused || !!value ? 'selectLabel' : 'notSelected'} ${className === 'floatingLabel' ? 'floating-label-Select' : 'not-floating-label'}`
  
    return (
      <Select
        label={label}
        placeholder={placeholder}
        data={customData ? dataLarge : data}
        value={value}
        readOnly={readOnly}
        disabled={disabled}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        checkIconPosition="right"
        className={classList}
        name={nameSelectBox}
        searchable={searchable}
        maxDropdownHeight={maxDropdownHeight}
        clearable={clearable}
      />
    )
  }


  export const SelectDatePicker = ({ label, clearable, value, placeholder, onChange, minDate,maxDate, className }: any) => {
    
    const [focused, setFocused] = useState<boolean>(false)
    const datePickerRef = useRef<HTMLDivElement>(null);




    const handleBlur = (event: any) => {
      setFocused(true);
    };

    const handleClickOutside = (event: any) => {
        if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
            setFocused(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
      if (datePickerRef.current && datePickerRef.current.classList.contains('mantine-Popover-dropdown')) {
          setFocused(true);
          console.log('first')
      } else {
          setFocused(false);
      }
  }, []);

    const classList = `${focused || !!value ? 'selectLabel' : 'notSelected'} ${className === 'floatingLabel' ? 'floating-label-Select' : 'not-floating-label'}`

    return (
        <div ref={datePickerRef}>
            <DatePickerInput
              label={label}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              minDate={minDate}
              onFocus={handleBlur}
              maxDate={maxDate}
              clearable={true}
              className={classList}
          />
        </div>
    );
  }