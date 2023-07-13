import React from 'react'
import {RiArrowDropDownLine} from "react-icons/ri"
import { Select } from '@mantine/core';

const Dropdown = () => {
    return (
        <Select className='w-[110px]'
          placeholder="Weekly"
          rightSection={<RiArrowDropDownLine size="3rem" />}
          rightSectionWidth={30}
          styles={{ rightSection: { pointerEvents: 'none' } }}
          data={['Daily','Weekly','Monthly']}
        />
      );
}

export default Dropdown