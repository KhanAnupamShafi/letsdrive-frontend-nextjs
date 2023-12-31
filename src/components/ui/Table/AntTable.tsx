import { Table as AntTable } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface TableProps<T> {
  columns: ColumnsType<T>;
  data: T[];
}

const MyTable = <T,>({ columns, data }: TableProps<T[]>) => {
  return (
    <AntTable
      pagination={{ pageSize: 5 }}
      bordered
      columns={columns}
      dataSource={data}
    />
  );
};

export default MyTable;
