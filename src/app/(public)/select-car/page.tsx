import SingleCarCard from '@/components/ui/Card/SingleCarCard';
import FilterBar from '@/components/ui/ListCar/FilterBar';
import SortingBar from '@/components/ui/ListCar/SortingBar';
import { fetchAvailable } from '@/services/booking/fetchAvailable';

const CarSelectPage = async ({ searchParams }: any) => {
  const { data, ...meta } = await fetchAvailable(searchParams);
  return (
    <div className="py-[30px] lg:py-[60px] bg-[var(--bg-2)] px-3">
      <div className="container">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-4">
            <FilterBar />
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="grid grid-cols-12 gap-4 xl:gap-6">
              <SortingBar meta={meta} length={data?.length} />
              {data?.map((availableCar: any) => (
                <div
                  className="col-span-12 group"
                  key={availableCar?.id}>
                  {availableCar?.id && ( // Check if availableCar is defined
                    <SingleCarCard data={availableCar} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSelectPage;
