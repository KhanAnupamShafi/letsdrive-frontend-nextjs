import { contentColumns } from '@/app/(withLayout)/admin/manage-contents/columns.contents';
import { getAllContentsById } from '@/services/cms/fetchContents';
import MyTable from '../Table/AntTable';

const SingleCategoryContents = async ({ id }: { id: string }) => {
  const contents = await getAllContentsById(id);
  console.log(contents);
  // const [data, setData] = useState<any>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const contents = await getAllContentsById(id);
  //       console.log(contents);
  //       setData(contents);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, [id]);

  // const { contents } = await getData(id);
  return (
    <div>
      <MyTable columns={contentColumns} data={contents} />
    </div>
  );
};

export default SingleCategoryContents;
