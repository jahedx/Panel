import ValidationComponent from '@/components/ValidationComponent';
import { Input, useInput } from 'input-master';
import { useContext } from 'react';
import { SidebarContext } from '@/contexts/SidebarContext';
import { inputConfigs } from '@/lib/input_default_settings';

const SearchBar = () => {
  const { useRegister } = useInput();
  const { sidebarStatus } = useContext(SidebarContext);

  return (
    <div className={`m-4 rounded-md ${sidebarStatus === 'closed' ? 'hidden' : ''}`}>
      <Input
        {...inputConfigs()}
        placeholder={'جستجو'}
        id="code"
        titleClassName="w-0"
        name="text"
        type="text"
        validationOn="submit"
        minLength={3}
        validationComponent={ValidationComponent}
        register={useRegister}
        required
      />
    </div>
  );
};

export default SearchBar;
