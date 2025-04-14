import { Input, useInput } from 'input-master';
import { inputConfigs } from '@/lib/input_default_settings';
import ValidationComponent from '@/components/ValidationComponent';
import { Button } from '@/components/ui/button';
import { IFilter } from '@/constants/interfaces/filter';
import { FilterOperation } from '@/constants/enums/filter';

type InputType =
  | 'text'
  | 'integer'
  | 'decimal'
  | 'calendar'
  | 'select'
  | 'textarea'
  | 'checkbox'
  | 'password';

interface TableFilterProps {
  onFilterChange: (filters: IFilter[]) => void;
  filterFields: {
    name: string;
    label: string;
    type?: InputType;
  }[];
}

export function TableFilter({ onFilterChange, filterFields }: TableFilterProps) {
  const { useRegister, submit } = useInput();

  const handleFilter = () => {
    submit(data => {
      const newFilters: IFilter[] = [];

      filterFields.forEach(field => {
        if (data[field.name]?.trim()) {
          newFilters.push({
            field: field.name,
            operation: FilterOperation.Equal,
            value: data[field.name],
          });
        }
      });

      onFilterChange(newFilters);
    });
  };

  const renderInput = (field: TableFilterProps['filterFields'][0]) => {
    const baseProps = {
      ...inputConfigs(),
      name: field.name,
      title: field.label,
      validationOn: 'submit-blur-change' as const,
      validationComponent: ValidationComponent,
      register: useRegister,
    };

    switch (field.type) {
      case 'text':
        return <Input {...baseProps} type="text" />;
      case 'integer':
        return <Input {...baseProps} type="integer" />;
      case 'decimal':
        return <Input {...baseProps} type="decimal" />;
      case 'calendar':
        return <Input {...baseProps} type="calendar" locale="persian" />;
      case 'select':
        return <Input {...baseProps} type="select" />;
      case 'textarea':
        return <Input {...baseProps} type="textarea" />;
      case 'checkbox':
        return <Input {...baseProps} type="checkbox" />;
      case 'password':
        return <Input {...baseProps} type="password" />;
      default:
        return <Input {...baseProps} type="text" />;
    }
  };

  return (
    <div className="flex gap-2">
      {filterFields.map(field => (
        <div key={field.name}>{renderInput(field)}</div>
      ))}
      <Button variant={'secondary'} onClick={handleFilter}>
        اعمال فیلتر
      </Button>
    </div>
  );
}
