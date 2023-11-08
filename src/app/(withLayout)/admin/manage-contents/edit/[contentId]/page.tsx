import HomeEditor from '@/lib/editor/Editor';
type Props = { contentId: string };

const EditContent = async ({ params }: { params: Props }) => {
  return (
    <div>
      <h1>{params.contentId}</h1>
      <HomeEditor mode="update" />
    </div>
  );
};

export default EditContent;
