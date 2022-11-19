import React from 'react';
import { Select } from 'antd';

const onChange = (value: string) => {
    console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
    console.log('search:', value);
};

const SelectCustom = () => (
    <div className="custom-select">
        <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
                {
                    value: 'Product-723712-chain',
                    label: 'Product-723712-chain',
                },
                {
                    value: 'Product-q2323-chain',
                    label: 'Product-q2323-chain',
                }
            ]}
        />
    </div>
);

export default SelectCustom;